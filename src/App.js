import React from 'react';
import './App.css';
import logo from './logo.svg';
import Search from './Search';
import AlbumArt from './AlbumArt';
import {_getToken, searchAlbum} from './Spotify';

// function App() {
//   return (
//     <div className="App">
//       <Search />
//       <AlbumArt />
//     </div>
//   );
// }

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            album_name: "",
            image: logo
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        _getToken().then( token => {
            searchAlbum(token, this.state.value).then( data => {
                this.setState({
                    image: data.albums.items[0].images[0].url
                })
            })
        })
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <Search
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
                <AlbumArt
                    image={this.state.image}
                />
            </div>
        )
    }
}
