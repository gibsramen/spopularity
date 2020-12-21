import React from 'react';

const Search = (props) => {
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

export default Search;
