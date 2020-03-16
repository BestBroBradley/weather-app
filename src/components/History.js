import React, { useContext } from 'react'
import { Button } from '../styles'
import { DayContext } from '../utils/DayContext'

const History = () => {

const { btnArray, renderButtons } = useContext(DayContext)

    return (
        <>
        {renderButtons}
        </>
    )
}

export default History