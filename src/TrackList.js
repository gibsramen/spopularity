import React from 'react';
import './TrackList.css';

export const TrackList = (props) => {
    const trackNames = props.trackNames;

    const listTracks2 = trackNames.map( (name) =>
        <li className="track-name">{name}</li>
    );
    return (
        <ol
            className="track-list2">{listTracks2}
        </ol>
    )
}

function convertPopularities(pops){
    const popsVisual = Array(pops.length);
    for (var i = 0; i < pops.length; i++) { // for each track
        const trackPop = pops[i];
        const trackPopVisual = Array(trackPop);
        for (var j = 0; j < trackPop; j++) {
            trackPopVisual[j] = "|";
        }
        popsVisual[i] = trackPopVisual.join("");
    }
    return popsVisual;
}

export const Popularities = (props) => {
    const popularities = props.popularities;
    const popsVisual = convertPopularities(popularities);
    const trackPops = popsVisual.map( (pop) =>
        <li>{pop}</li>
    );
    return (
        <ol
            className="track-popularities">{trackPops}
        </ol>
    )
}
