import React from 'react';
import '../css/AlbumArt.css';

const AlbumArt = (props) => {
    return (
        <div>
            <img
                src={props.image}
                id="album-art-img"
                alt="Album art"
            />
        </div>
    )
}

export default AlbumArt;
