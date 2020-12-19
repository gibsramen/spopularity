import React from 'react';
import './App.css';
import logo from './logo.svg';
import Search from './Search';
import AlbumArt from './AlbumArt';
import TrackList from './TrackList';
import {_getToken, searchAlbum, getTracks} from './Spotify';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            album_name: "",
            image: logo,
            trackNames: [
                "Placeholder Track 1",
                "Placeholder Track 2"
            ]
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
                    const tracks = data.items.map( (item) => item.name);
                    this.setState({trackNames: tracks})
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
                <div className="album-art">
                    <AlbumArt image={this.state.image} />
                </div>
                <TrackList trackNames={this.state.trackNames} />
            </div>
        )
    }
}
