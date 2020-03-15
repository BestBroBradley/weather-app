import React, { useContext } from 'react'
import { DayContext } from '../utils/DayContext'

const Searchbar = () => {

const { handleSubmit } = useContext(DayContext)


const submit = (event => {
    event.preventDefault()
    const query = document.getElementById("query").value
    if (query) {
        handleSubmit(query)
    } else {
        alert("Search cannot be blank.")
    }
})

const favorite = (event => {
    event.preventDefault()
    const query = document.getElementById("query").value
    if (query) {
        handleSubmit(query)
    } else {
        alert("Search cannot be blank.")
    }
})

    return (
        <div id="search-box">
        <form>
            <input id="query" placeholder="Search for a city..."/>
            <button onClick={submit} id="search-button">Search Once</button>
            <br/>
            <button onClick={favorite} id="favorites-button">Add to Favorites</button>
        </form>
        </div>
    )
}

export default Searchbar