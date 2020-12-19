import React from 'react';
import './App.css';
import logo from './logo.svg';
import Search from './Search';
import AlbumArt from './AlbumArt';
import {TrackList, Popularities} from './TrackList';
import {_getToken, searchAlbum, getTracks, getPopularity} from './Spotify';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            album_name: "",
            image: logo,
            trackNames: [
                "Placeholder Track 1",
                "Placeholder Track 2"
            ],
            popularities: [10, 15]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        _getToken().then( token => { // with the access token...
            searchAlbum(token, this.state.value).then( data => { // search
                this.setState({
                    image: data.albums.items[0].images[0].url,
                    id: data.albums.items[0].id,
                })
                getTracks(token, this.state.id).then( data => {
                    const trackNames = data.items.map( (item) => item.name);
                    const trackIDs = data.items.map( (item) => item.id);

                    this.setState({trackNames: trackNames})
                    getPopularity(token, trackIDs).then( popularities => {
                        this.setState({
                            popularities: popularities
                        })
                    })
                })
            })
        })
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <div className="search-bar">
                    <Search
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                    />
                </div>
                <AlbumArt image={this.state.image} />
                <div
                    className="track-list-frame"
                >
                    <TrackList
                        trackNames={this.state.trackNames}
                    />
                    <Popularities
                        popularities={this.state.popularities}
                    />
                </div>
            </div>
        )
    }
}
