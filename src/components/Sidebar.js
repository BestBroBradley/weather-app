import React, { useContext } from 'react'
import Searchbar from './Searchbar'
import History from './History'
import { SidebarWrapper } from '../styles'
import { DayContext } from '../utils/DayContext'

const Sidebar = () => {
    
const { btnArray } = useContext(DayContext)
console.log(btnArray.length)

    return (
        <SidebarWrapper>
        <Searchbar />
        <hr/>
        <br/>
        {btnArray.length !== 0 ? (<h2>Check out your favorites below:</h2>) : (<h2>Use the "Add to Favorites" button to start your favorites list!</h2>)}
        <History />
        </SidebarWrapper>
    )
}

export default Sidebar