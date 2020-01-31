import React from "react";

const WeatherDaily = ({
    imgIcon,
    day,
    celsius,
    farhenheit,
    showCelsius
}) => {
    return (
        <div>
            <img
                src={`http://openweathermap.org/img/wn/${imgIcon}@2x.png`}
                alt="weather-logo"
            />
            <p>{`${day}`}</p>
            <p>
                {showCelsius ? `${celsius} °C` : `${farhenheit} °F`}{" "}
            </p>
        </div>
    );
};

export default WeatherDaily;
