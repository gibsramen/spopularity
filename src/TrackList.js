import React from 'react';
import './TrackList.css';

const TrackList = (props) => {
    const trackNames = props.trackNames;
    const listTracks = trackNames.map( (name) =>
        <p className="track-name" key={name.toString()}>{name}</p>
    );
    return (
        <div className="track-list">{listTracks}</div>
    )
}

export default TrackList;
