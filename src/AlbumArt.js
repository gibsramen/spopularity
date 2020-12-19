import React from 'react';

export default class AlbumArt extends React.Component {
    render() {
        return (
            <div class="album-art">
                <img
                    src={this.props.image}
                    className="album-art"
                    alt="hover text"
                />
            </div>
        )
    }
}

