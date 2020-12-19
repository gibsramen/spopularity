import React from 'react';
import './TrackList.css';

const TrackList = (props) => {
    const trackNames = props.trackNames;
    const listTracks = trackNames.map( (name) =>
        <li className="track-name" key={name.toString()}>{name}</li>
    );
    return (
        <ol className="track-list">{listTracks}</ol>
    )
}

export default TrackList;
