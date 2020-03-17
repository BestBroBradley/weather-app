import React, { useContext } from 'react'
import { DayContext } from '../utils/DayContext'

const History = () => {

const { renderButtons } = useContext(DayContext)

    return (
        <>
        {renderButtons}
        </>
    )
}

export default History