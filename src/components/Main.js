import React, { useContext } from 'react'
import CurrentDay from './CurrentDay'
import WeatherCard from './WeatherCard'
import { WeekWrapper } from '../styles'
import { DayContext } from '../utils/DayContext'

const Main = () => {

const { fiveDay } = useContext(DayContext)

const renderFiveDay = fiveDay.map(day => (<WeatherCard key={day.dt} data={day}/>))

    return (
        <>
        <CurrentDay />
        <WeekWrapper>
            {renderFiveDay}
        </WeekWrapper>
        </>
    )
}

export default Main