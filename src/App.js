import React, { useState } from 'react';
import { SearchBar, SearchOptions } from './components/Search';
import AlbumArt from './components/AlbumArt';
import {TrackList, Popularities} from './components/TrackList';
import {_getToken, searchAlbum, getTracks, getPopularity} from './Spotify';
import logo from './logo.svg';
import './css/App.css';


const App = () => {
    const [albumImage, setAlbumImage] = useState(logo);
    const [trackNames, setTrackNames] = useState(["Track 1", "Track 2"]);
    const [trackPopularities, setTrackPopularities] = useState([10, 15]);
    const [searchValue, setSearchValue] = useState("");
    const [searchOptions, setSearchOptions] = useState("");
    const [optionsHidden, setOptionsHidden] = useState(true);
    const [token, setToken] = useState("");

    const handleChange = (searchEvent) => {
        setSearchValue(searchEvent.target.value);
    }

    const imgClick = (selection) => {
        const currAlbum = searchOptions[selection.target.id];
        getTracks(token, currAlbum.id).then( data => {
            const trackNames = data.items.map( (item) => item.name);
            const trackIDs = data.items.map( (item) => item.id);

            getPopularity(token, trackIDs).then( trackPopularities => {
                setAlbumImage(currAlbum.images[0].url);
                setTrackNames(trackNames);
                setTrackPopularities(trackPopularities);
            })
        })
    }

    const handleSubmit = (submitEvent) => {
        _getToken().then( token => { // with the access token...
            setToken(token);
            searchAlbum(token, searchValue).then( searchData => { // search
                const topTenAlbums = searchData.albums.items.slice(0, 10);
                setSearchOptions(topTenAlbums);
                setOptionsHidden(false);
            })
        })
        submitEvent.preventDefault();
    }

    return (
        <div className="App">
            <SearchBar
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            {!optionsHidden === true &&
            <SearchOptions albums={searchOptions} onClick={imgClick} /> }
            <AlbumArt image={albumImage} />
            <div className="track-list-frame">
                <TrackList trackNames={trackNames} />
                <Popularities popularities={trackPopularities} />
            </div>
        </div>
    )
}

export default App;
