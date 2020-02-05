import React from "react";
import { connect } from "react-redux";
import { getDayOfWeekAsString } from "../../pages/CityWeather";

const getDayTime = timestamp => {
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${hours}:${minutes}`;
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
    }
}) => {
    const imgIcon = weather[0].icon;

    return (
        <div>
            <p>{getDayOfWeekAsString(dt)}</p>
            <p>SUNRISE:{getDayTime(sunrise)}</p>
            <p>SUNSET: {getDayTime(sunset)}</p>
            <img src={`http://openweathermap.org/img/wn/${imgIcon}@2x.png`} alt="weather-logo" />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        currentDay: state.data.currentDay
    };
};

export default connect(mapStateToProps)(CurrentDay);
