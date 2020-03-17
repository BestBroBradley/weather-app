import React, { useEffect, useContext } from 'react'
import Searchbar from './Searchbar'
import History from './History'
import { SidebarWrapper, ClearButton } from '../styles'
import { DayContext } from '../utils/DayContext'

const Sidebar = () => {

const { btnArray, setCurrentDay, currentDay } = useContext(DayContext)

useEffect(() => {

  }, );

const handleClear = () => {
    localStorage.setItem("button array", JSON.stringify([]))
    setCurrentDay({
        ...currentDay
    })
}

    return (
        <SidebarWrapper>
        <Searchbar />
        <hr/>
        <br/>
        {btnArray.length !== 0 ? (<h2>Check out your favorites below:</h2>) : (<h2>Use the "Add to Favorites" button to start your favorites list!</h2>)}
        <History />
        {btnArray.length !== 0 ? (<div><ClearButton onClick={handleClear} id="clear-button">Clear your Favorites</ClearButton></div>) : null}
        </SidebarWrapper>
    )
}

export default Sidebar