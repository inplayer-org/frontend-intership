//react
import React from "react";
import WeatherDaily from "../components/WeatherDaily/WeatherDaily";
//routing
import { Link } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { getsixDaysWeather, getCity } from "../redux/apiData/api-reducer";
import { tempCelsius, tempFahrenheit } from "../redux/tempActions/temp-actions";
import { getCelsius, getFahrenheit } from "../redux/tempActions/temp-reducer";
//style
import styled from "styled-components";
import { TryAgainButton as GoBackButton } from "./CityNotFound";
//data
import { days } from "../data/daysOfWeek";
import CurrentDay from "../components/CurrentDay/CurrentDay";

export const getDayOfWeekAsString = dt => {
    const date = new Date(dt * 1000);
    const dayOfWeek = days[date.getDay()];

    return dayOfWeek;
};

const celsiusToFarhenheit = celsiusFormat => {
    // Multiply by 9, then divide by 5, then add 32
    return (celsiusFormat * 9) / 5 + 32;
};

export const roundTemperature = temperature => {
    return Math.round(temperature);
};

//get data from props [redux]
const CityWeather = ({ cityName, cityData, tempFahrenheitToggler, tempCelsiusToggler, showCelsius, showFahrenheit }) => {
    const capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.substring(1).toLowerCase();

    return (
        <Background>
            <Wrapper>
                <CityDescription>City Weather for {capitalizedCityName}</CityDescription>
                <div>
                    <CelsiusButton onClick={tempFahrenheitToggler} disabled={showFahrenheit}>
                        F
                    </CelsiusButton>
                    <CelsiusButton onClick={tempCelsiusToggler} disabled={showCelsius}>
                        C
                    </CelsiusButton>
                </div>
                <CurrentDay />
                <OneWeekWeather>
                    {/* iterate through 1 week list of data */}
                    {cityData.map(oneDayWeather => {
                        const dayInStringFormat = getDayOfWeekAsString(oneDayWeather.dt);
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
                                showCelsius={showCelsius}
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
        cityData: getsixDaysWeather(state),
        cityName: getCity(state),
        showCelsius: getCelsius(state),
        showFahrenheit: getFahrenheit(state)
    };
};

const mapDispatchToProps = dispatch => ({
    tempCelsiusToggler: () => {
        dispatch(tempCelsius());
    },
    tempFahrenheitToggler: () => dispatch(tempFahrenheit())
});

export default connect(mapStateToProps, mapDispatchToProps)(CityWeather);
