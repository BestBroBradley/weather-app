import React from 'react'
import CurrentDay from './CurrentDay'
import WeatherCard from './WeatherCard'
import { WeekWrapper } from '../styles'

const Main = () => {
    return (
        <>
        <CurrentDay />
        <WeekWrapper>
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
        </WeekWrapper>
        </>
    )
}

export default Main