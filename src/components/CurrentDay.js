import React, { useContext } from 'react'
import moment from 'moment'
import { DayContext } from '../utils/DayContext'
import { CurrentWrapper, CurrentDetails } from '../styles'

const CurrentDay = () => {

    const { currentDay } = useContext(DayContext)

    const icon = `http://openweathermap.org/img/w/${currentDay.icon}.png`

    const date = moment.unix(currentDay.dt).format("dddd, LL");
    return (
        <>
        <div>
            <div>
                <CurrentWrapper>
                    <img alt={currentDay.description} src={icon} />
                    <div>
                        <h1>Today is {date}.</h1>
                        <h1>It's currently {currentDay.temp}° F in {currentDay.city}.</h1>
                    </div>
                </CurrentWrapper>
            </div>
            <hr />
            <CurrentDetails>
            <h3>High: {currentDay.high}° F</h3>
            <h3>Low: {currentDay.low}° F</h3>
            <h3>Humidity: {currentDay.humidity}%</h3>
            </CurrentDetails>
        </div>
        <br />
        </>
    )
}

export default CurrentDay