//react
import React from "react";
import WeatherDaily from "../components/WeatherDaily/WeatherDaily";
import CurrentDay from "../components/CurrentDay/CurrentDay";
//routing
import { Link } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { getsixDaysWeather, getCity, getCurrentDay } from "../redux/apiData/api-reducer";
import { tempCelsius, tempFahrenheit } from "../redux/tempActions/temp-actions";
import { changeCurrentDay } from "../redux/apiData/api-actions";
import { getCelsius, getFahrenheit } from "../redux/tempActions/temp-reducer";
//style
import styled from "styled-components";
import { TryAgainButton as GoBackButton } from "./CityNotFound";
//data
import { days } from "../data/daysOfWeek";

export const getDayOfWeekAsString = dt => {
    const date = new Date(dt * 1000);
    const dayOfWeek = days[date.getDay()];

    return dayOfWeek;
};

export const celsiusToFarhenheit = celsiusFormat => {
    // Multiply by 9, then divide by 5, then add 32
    return (celsiusFormat * 9) / 5 + 32;
};

export const roundTemperature = temperature => {
    return Math.round(temperature);
};

//get data from props [redux]
const CityWeather = ({
    currentDay,
    cityName,
    cityData,
    tempFahrenheitToggler,
    changeCurrentDayToggler,
    tempCelsiusToggler,
    showCelsius,
    showFahrenheit
}) => {
    const capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.substring(1).toLowerCase();

    return (
        <Background>
            <Wrapper>
                <CityDescription>City Weather for {capitalizedCityName}</CityDescription>
                <Buttons>
                    <div>
                        <WeatherButtons onClick={tempFahrenheitToggler} disabled={showFahrenheit}>
                            F
                        </WeatherButtons>
                        <WeatherButtons onClick={tempCelsiusToggler} disabled={showCelsius}>
                            C
                        </WeatherButtons>
                    </div>
                </Buttons>
                <CurrentDay showCelsius={showCelsius} />
                <OneWeekWeather>
                    {/* iterate through 1 week list of data */}
                    {cityData.map(oneDayWeather => {
                        const dayInStringFormat = getDayOfWeekAsString(oneDayWeather.dt);
                        const icon = oneDayWeather.weather[0].icon;
                        const dayTempInCelsius = roundTemperature(oneDayWeather.temp.day);
                        const dayTempInFarhenheit = roundTemperature(celsiusToFarhenheit(dayTempInCelsius));
                        return (
                            <WeatherDaily
                                selected={oneDayWeather.dt === currentDay.dt}
                                changeCurrDay={() => changeCurrentDayToggler(oneDayWeather)}
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

const Buttons = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-items: end;
`;

const WeatherButtons = styled.button`
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
        showFahrenheit: getFahrenheit(state),
        currentDay: getCurrentDay(state)
    };
};

const mapDispatchToProps = dispatch => ({
    tempCelsiusToggler: () => {
        dispatch(tempCelsius());
    },
    tempFahrenheitToggler: () => dispatch(tempFahrenheit()),
    changeCurrentDayToggler: cityData => dispatch(changeCurrentDay(cityData))
});

export default connect(mapStateToProps, mapDispatchToProps)(CityWeather);
