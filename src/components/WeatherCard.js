import React from 'react'
import moment from 'moment'
import { CardWrapper } from '../styles'

const WeatherCard = (props) => {
    const date = moment.unix(props.data.dt).format("LL")
    const day = moment.unix(props.data.dt).format("dddd")
    const icon = `http://openweathermap.org/img/w/${props.data.icon}.png`
    const description = props.data.description

    return (
        <CardWrapper>
            <h2>{date}</h2>
            <h2>{day}</h2>
            <h3>{parseInt(props.data.temp)}° F</h3>
            <hr />
            <img alt={props.data.description} src={icon} />
            <h4>{description}</h4>
            <h3>Humidity: {props.data.humidity}%</h3>
        </CardWrapper>
    )
}

export default WeatherCard