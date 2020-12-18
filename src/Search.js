import React from 'react';
import AlbumArt from './AlbumArt';

export default class Search extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label>
                    <input
                        type="text"
                        onChange={this.props.handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
