import React from 'react';
import {_getToken, searchAlbum} from './Spotify.js';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'default'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // runs on every keystroke
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log("You entered: " + this.state.value + "!");
        _getToken().then( token => {
            searchAlbum(token, "Idealism").then( data => {
                console.log(data);
            })
        })
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
