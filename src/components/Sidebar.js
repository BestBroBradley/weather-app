import React from 'react'
import Searchbar from './Searchbar'
import History from './History'
import { SidebarWrapper } from '../styles'

const Sidebar = () => {
    
    return (
        <SidebarWrapper>
        <Searchbar />
        <hr/>
        <br/>
        <h2>Check out your favorites below:</h2>
        <History />
        </SidebarWrapper>
    )
}

export default Sidebar