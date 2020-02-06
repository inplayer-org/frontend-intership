import React from "react";
import styled from "styled-components";

const WeatherDaily = ({ selected, changeCurrDay, imgIcon, day, celsius, farhenheit, showCelsius }) => {
    return (
        <OneDayWeather onClick={changeCurrDay} selectedDay={selected}>
            <img src={`http://openweathermap.org/img/wn/${imgIcon}@2x.png`} alt="weather-logo" />
            <p>{`${day}`}</p>
            <p>{showCelsius ? `${celsius} °C` : `${farhenheit} °F`} </p>
            {/* <p>{selected ? "TRUE" : "FALSE"}</p> */}
        </OneDayWeather>
    );
};

const OneDayWeather = styled.div`
    cursor: pointer;
    &:hover {
        opacity: ${({ selectedDay }) => (!selectedDay ? "0.75" : "")};
    }
    cursor: ${({ selectedDay }) => (selectedDay ? "not-allowed" : "")};
    ${({ selectedDay }) => selectedDay && `opacity: 0.3;`}
`;
export default WeatherDaily;
