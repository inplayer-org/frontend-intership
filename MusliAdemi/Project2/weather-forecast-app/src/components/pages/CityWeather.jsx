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

    const capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.substring(1).toLowerCase();

    const [showFarhenheit, setShowFarhenheit] = useState(false);
    const [showCelsius, setShowCelsius] = useState(true);
    const [toggleFC, setToggleFC] = useState(false);

    const handleToggleF = () => {
        setShowFarhenheit(true);
        setShowCelsius(false);
    }

    const handleToggleC = () => {
        setShowCelsius(true);
        setShowFarhenheit(false)
    }

    const celsiusToFarhenheit = (celsiusFormat) => {
        // Multiply by 9, then divide by 5, then add 32
        return (celsiusFormat * 9) / 5 + 32;
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>City Weather for {capitalizedCityName}</h1>
            <button onClick={handleToggleF} disabled={showFarhenheit}>F</button>
            <button onClick={handleToggleC} disabled={showCelsius}>C</button>
            {/* iterate through 1 week list of data */}
            {cityData.list.map(oneDayWeather => {
                const dayInStringFormat = getDayOfWeekAsString(oneDayWeather);
                const icon = oneDayWeather.weather[0].icon;
                const dayTempInCelsius = Math.round(oneDayWeather.temp.day);
                const dayTempInFarhenheit = Math.round(celsiusToFarhenheit(dayTempInCelsius))
                return (
                    <div key={oneDayWeather.dt}>
                        <img src={`http://openweathermap.org/img/wn/${icon}.png`} />
                        <p>{`${dayInStringFormat}`}</p>
                        <p>{showCelsius ? `${dayTempInCelsius} °C` : `${dayTempInFarhenheit} °F`} </p>
                    </div>
                );
            })}
            <Link to={'/'}>Go back</Link>
        </div>
    );
}

export default CityWeather;