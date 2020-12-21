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
    const displayOptions = props.albums.map( (album) =>
        <SearchOption img={album.images[0].url} />
    )
    return (
        <div id="search-options">{displayOptions}</div>
    )
}

const SearchOption = (props) => {
    return (
        <img className="search-option" src={props.img} alt="Search option"/>
    )
}
