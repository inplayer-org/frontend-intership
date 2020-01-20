import React from 'react'
import WeekWeather from '../WeekWeather/weekweather'
const Footer = ({data, units}) => (
    
    <div>
        {data.list && data.list.map((day) => <WeekWeather key={day.dt} day={day} units={units}/>)}
    </div>
)


export default Footer