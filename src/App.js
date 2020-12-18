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
        console.log("You entered: " + this.state.value + "!");
        _getToken().then( token => {
            searchAlbum(token, this.state.value).then( data => {
                console.log(data.albums.items[0].artists[0].name);
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
