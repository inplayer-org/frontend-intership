import React from "react";
import { connect } from "react-redux";
import { getDayOfWeekAsString, celsiusToFarhenheit } from "../../pages/CityWeather";
import styled from "styled-components";
import { getCurrentDay } from "../../redux/apiData/api-reducer";

const getDayTime = timestamp => {
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};

const CurrentDay = ({
    currentDay: {
        dt,
        sunrise,
        sunset,
        pressure,
        humidity,
        speed,
        snow,
        temp: { day, min, max, night, eve, morn },
        weather
    },
    showCelsius
}) => {
    const imgIcon = weather[0].icon;

    return (
        <CurrentDayInfo>
            <div>
                <img src={`http://openweathermap.org/img/wn/${imgIcon}@2x.png`} alt="weather-logo" />
                <p>Sunrise: {getDayTime(sunrise)}</p>
                <p>Sunset : {getDayTime(sunset)}</p>
            </div>
            <DayAndWeather>
                <p>{getDayOfWeekAsString(dt)}</p>
                <div>{showCelsius ? `${Math.round(day)} °C` : `${Math.round(celsiusToFarhenheit(day))} °F`}</div>
            </DayAndWeather>
            <div>
                <p>Morning: {showCelsius ? `${Math.round(morn)} °C` : `${Math.round(celsiusToFarhenheit(morn))} °F`}</p>
                <p>Min: {showCelsius ? `${Math.round(min)} °C` : `${Math.round(celsiusToFarhenheit(min))} °F`}</p>
                <p>Max: {showCelsius ? `${Math.round(max)} °C` : `${Math.round(celsiusToFarhenheit(max))} °F`}</p>
                <p>Night: {showCelsius ? `${Math.round(night)} °C` : `${Math.round(celsiusToFarhenheit(night))} °F`}</p>
                <p>Evening: {showCelsius ? `${Math.round(eve)} °C` : `${Math.round(celsiusToFarhenheit(eve))} °F`}</p>
            </div>
        </CurrentDayInfo>
    );
};

const CurrentDayInfo = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    margin-bottom: 10px;
`;

const DayAndWeather = styled.h2`
    align-self: center;
    justify-self: center;
`;

const mapStateToProps = state => {
    return {
        currentDay: getCurrentDay(state)
    };
};

export default connect(mapStateToProps)(CurrentDay);
