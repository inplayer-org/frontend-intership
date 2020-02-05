//react
import React, { useState } from "react";
import WeatherDaily from "../components/WeatherDaily/WeatherDaily";
//routing
import { Link } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { getOneWeekWeather, getCity } from "../redux/apiData/api-reducer";
import { tempCelsius, tempFahrenheit } from "../redux/tempActions/temp-actions";
import { getCelsius, getFahrenheit } from "../redux/tempActions/temp-reducer";
//style
import styled from "styled-components";
import { TryAgainButton as GoBackButton } from "./CityNotFound";
//data
import { days } from "../data/daysOfWeek";

const getDayOfWeekAsString = oneDayWeather => {
    const unix_timestamp = oneDayWeather.dt;
    const date = new Date(unix_timestamp * 1000);
    const dayOfWeek = days[date.getDay()];

    return dayOfWeek;
};

const celsiusToFarhenheit = celsiusFormat => {
    // Multiply by 9, then divide by 5, then add 32
    return (celsiusFormat * 9) / 5 + 32;
};

const roundTemperature = temperature => {
    return Math.round(temperature);
};

const CityWeather = props => {
    //get cityName and cityData (API) from props [redux]
    const { cityName } = props;
    const { cityData } = props;

    const currentDay = cityData[0];
    const currentDayInStringFormat = getDayOfWeekAsString(currentDay);
    const sixDayWeather = cityData.slice(1);

    const capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.substring(1).toLowerCase();

    return (
        <Background>
            <Wrapper>
                <CityDescription>City Weather for {capitalizedCityName}</CityDescription>
                <div>
                    <CelsiusButton onClick={props.tempFahrenheitToggler} disabled={!props.showCelsius}>F</CelsiusButton>
                    <CelsiusButton onClick={props.tempCelsiusToggler} disabled={props.showCelsius}>C</CelsiusButton>
                </div>
                <div>Current day: {currentDayInStringFormat}</div>
                <OneWeekWeather>
                    {/* iterate through 1 week list of data */}
                    {sixDayWeather.map(oneDayWeather => {
                        const dayInStringFormat = getDayOfWeekAsString(oneDayWeather);
                        const icon = oneDayWeather.weather[0].icon;
                        const dayTempInCelsius = roundTemperature(oneDayWeather.temp.day);
                        const dayTempInFarhenheit = roundTemperature(celsiusToFarhenheit(dayTempInCelsius));
                        return (
                            <WeatherDaily
                                key={oneDayWeather.dt}
                                imgIcon={icon}
                                day={dayInStringFormat}
                                celsius={dayTempInCelsius}
                                farhenheit={dayTempInFarhenheit}
                                showCelsius={props.showCelsius}
                            />
                        );
                    })}
                </OneWeekWeather>
            </Wrapper>

            <ButtonWrapper>
                <Link to={"/"}>
                    <GoBackButton>Go back</GoBackButton>
                </Link>
            </ButtonWrapper>
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
    background: linear-gradient(90deg, rgba(50, 119, 163, 1) 8%, rgba(71, 220, 221, 1) 100%);
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

const CityDescription = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    /* color: white; */
`;

const CelsiusButton = styled.button`
    padding: 10px;
    margin: 2px;
    border-radius: 5px;
    border: none;
    background-color: #063b5c;
    color: white;
    cursor: pointer;

    ${({ disabled }) => disabled && `opacity: 0.65; cursor: not-allowed`}
`;

const ButtonWrapper = styled.div`
    justify-self: center;
`;

const mapStateToProps = state => {
    return {
        cityData: getOneWeekWeather(state),
        cityName: getCity(state),
        showCelsius: getCelsius(state),
        showFahrenheit: getFahrenheit(state)
    };
};

const mapDispatchToProps = dispatch => ({
    tempCelsiusToggler: () => {
        console.log("DISPATCH");
        dispatch(tempCelsius());
    },
    tempFahrenheitToggler: () => dispatch(tempFahrenheit())
});

export default connect(mapStateToProps, mapDispatchToProps)(CityWeather);
