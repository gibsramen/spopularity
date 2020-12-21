import React, { useState } from 'react';
import './css/App.css';
import logo from './logo.svg';
import Search from './components/Search';
import AlbumArt from './components/AlbumArt';
import {TrackList, Popularities} from './components/TrackList';
import {_getToken, searchAlbum, getTracks, getPopularity} from './Spotify';


const App = () => {
    const [albumImage, setAlbumImage] = useState(logo);
    const [trackNames, setTrackNames] = useState(["Track 1", "Track 2"]);
    const [trackPopularities, setTrackPopularities] = useState([10, 15]);
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (searchEvent) => {
        setSearchValue(searchEvent.target.value);
    }

    const handleSubmit = (submitEvent) => {
        _getToken().then( token => { // with the access token...
            searchAlbum(token, searchValue).then( searchData => { // search
                const firstAlbum = searchData.albums.items[0];

                getTracks(token, firstAlbum.id).then( data => {
                    const trackNames = data.items.map( (item) => item.name);
                    const trackIDs = data.items.map( (item) => item.id);

                    getPopularity(token, trackIDs).then( trackPopularities => {
                        setAlbumImage(firstAlbum.images[0].url);
                        setTrackNames(trackNames);
                        setTrackPopularities(trackPopularities);
                    })
                })
            })
        })
        submitEvent.preventDefault();
    }

    return (
        <div className="App">
            <Search
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
            <AlbumArt image={albumImage} />
            <div className="track-list-frame">
                <TrackList trackNames={trackNames} />
                <Popularities popularities={trackPopularities} />
            </div>
        </div>
    )
}

export default App;
