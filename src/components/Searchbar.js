import React from 'react'

const Searchbar = () => {

    return (
        <div id="search-box">
        <form>
            <input placeholder="Search for a city..."/>
            <button id="search-button">Search Once</button>
            <br/>
            <button id="favorites-button">Add to Favorites</button>
        </form>
        </div>
    )
}

export default Searchbar