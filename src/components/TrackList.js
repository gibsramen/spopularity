import React from 'react';
import '../css/TrackList.css';

export const TrackList = (props) => {
    const trackNames = props.trackNames;

    const listTracks = trackNames.map( (trackName, index) =>
        <li className="track-name" key={index}>{trackName}</li>
    );
    return (
        <ol
            className="track-list">{listTracks}
        </ol>
    )
}

export const Popularities = (props) => {
    const popularities = props.popularities;
    const popsVisual = convertPopularities(popularities);
    const trackPops = popsVisual.map( (pop, index) =>
        <li key={index}>{pop}</li>
    );
    return (
        <ol
            className="track-popularities">{trackPops}
        </ol>
    )
}

function convertPopularities(pops){
    const popsVisual = Array(pops.length);
    for (var i = 0; i < pops.length; i++) { // for each track
        const trackPop = pops[i];
        var trackPopVisual;
        if ( trackPop === 0 ) {
            trackPopVisual = ["."];
        } else {
            trackPopVisual = Array(trackPop);
        }
        for (var j = -1; j < trackPop; j++) {
            trackPopVisual[j] = "|";
        }
        popsVisual[i] = trackPopVisual.join("");
    }
    return popsVisual;
}
