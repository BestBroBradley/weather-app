import React from 'react'
import { CardWrapper } from '../styles'

const WeatherCard = () => {
    return (
        <CardWrapper>
            <h2>Jan 2, 2020</h2>
            <h2>Monday</h2>
            <hr />
            <img alt="placeholder" href='#' />
            <h3>Temp: 33 F</h3>
            <h3>Humidity: 33%</h3>
        </CardWrapper>
    )
}

export default WeatherCard