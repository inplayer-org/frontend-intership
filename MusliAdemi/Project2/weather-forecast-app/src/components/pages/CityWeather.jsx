import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { days } from "../../data/daysOfWeek";
import WeatherDaily from "../WeatherDaily/WeatherDaily";

const getDayOfWeekAsString = oneDayWeather => {
    const unix_timestamp = oneDayWeather.dt;
    const date = new Date(unix_timestamp * 1000);
    const dayOfWeek = days[date.getDay()];

    return dayOfWeek;
};

const CityWeather = props => {
    const { cityName } = props.match.params;
    const { cityData } = props.history.location.state;
    const currentDayData = cityData.list[0];

    const capitalizedCityName =
        cityName.charAt(0).toUpperCase() +
        cityName.substring(1).toLowerCase();

    const [showFarhenheit, setShowFarhenheit] = useState(false);
    const [showCelsius, setShowCelsius] = useState(true);

    const handleToggleF = () => {
        setShowFarhenheit(true);
        setShowCelsius(false);
    };

    const handleToggleC = () => {
        setShowCelsius(true);
        setShowFarhenheit(false);
    };

    const celsiusToFarhenheit = celsiusFormat => {
        // Multiply by 9, then divide by 5, then add 32
        return (celsiusFormat * 9) / 5 + 32;
    };

    return (
        <Background>
            <Wrapper>
                <CityDescription>
                    City Weather for {capitalizedCityName}
                </CityDescription>
                <div>
                    <button
                        onClick={handleToggleF}
                        disabled={showFarhenheit}
                    >
                        F
                    </button>
                    <button
                        onClick={handleToggleC}
                        disabled={showCelsius}
                    >
                        C
                    </button>
                </div>
                <CurrentDayWeather></CurrentDayWeather>
                <OneWeekWeather>
                    {/* iterate through 1 week list of data */}
                    {cityData.list.map(oneDayWeather => {
                        const dayInStringFormat = getDayOfWeekAsString(
                            oneDayWeather
                        );
                        const icon = oneDayWeather.weather[0].icon;
                        const dayTempInCelsius = Math.round(
                            oneDayWeather.temp.day
                        );
                        const dayTempInFarhenheit = Math.round(
                            celsiusToFarhenheit(dayTempInCelsius)
                        );
                        return (
                            <WeatherDaily
                                key={oneDayWeather.dt}
                                imgIcon={icon}
                                day={dayInStringFormat}
                                celsius={dayTempInCelsius}
                                farhenheit={dayTempInFarhenheit}
                                showCelsius={showCelsius}
                            />
                        );
                    })}
                </OneWeekWeather>
            </Wrapper>
            <Link to={"/"}>Go back</Link>
        </Background>
    );
};

export const Background = styled.div`
    display: grid;
    min-height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;

    background: rgb(50, 119, 163);
    background: linear-gradient(
        90deg,
        rgba(50, 119, 163, 1) 8%,
        rgba(71, 220, 221, 1) 100%
    );
`;

export const Wrapper = styled.div`
    align-self: center;
    justify-self: center;
`;

const OneWeekWeather = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;

    & > * {
        /* border: 1px solid black; */
        min-width: 100px;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const CityDescription = styled.div`
    font-size: 2em;
    margin: 0;
    padding: 0;
    text-align: center;
    color: white;
`;
const CurrentDayWeather = styled.div``;

export default CityWeather;
