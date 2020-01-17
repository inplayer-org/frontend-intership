import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { days } from '../../data/daysOfWeek'

const getDayOfWeekAsString = (oneDayWeather) => {
    const unix_timestamp = oneDayWeather.dt;
    const date = new Date(unix_timestamp * 1000);
    const dayOfWeek = days[date.getDay()];

    return dayOfWeek;
}


const CityWeather = (props) => {

    const { cityName } = props.match.params;
    const { cityData } = props.history.location.state;

    const [showFarhenheit, setShowFarhenheit] = useState(false);



    return (
        <div style={{ textAlign: "center" }}>
            <h1>City Weather component for {cityName}</h1>
            <button onClick={setShowFarhenheit(!showFarhenheit)}>F</button>
            {/* iterate through 1 week list of data */}
            {cityData.list.map(oneDayWeather => {
                const dayInStringFormat = getDayOfWeekAsString(oneDayWeather);
                const icon = oneDayWeather.weather[0].icon;
                return (
                    <div key={oneDayWeather.dt}>
                        <img src={`http://openweathermap.org/img/wn/${icon}.png`} />
                        <p>{`${dayInStringFormat} ${Math.ceil(oneDayWeather.temp.day)} `}</p>
                    </div>
                );
            })}
            <Link to={'/'}>Go back</Link>
        </div>
    );
}

export default CityWeather;