import React from 'react';

export const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <form onSubmit={props.handleSubmit}>
                <label>
                    <input
                        type="text"
                        onChange={props.handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export const SearchOptions = (props) => {
    const displayOptions = props.albums.map( (album, index) =>
        <img
            src={album.images[0].url}
            onClick={props.onClick}
            id={index}
            alt={album.name}
            width="100px"
            key={index}
        />
    )
    return (
        <div id="search-options">{displayOptions}</div>
    )
}
