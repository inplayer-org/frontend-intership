import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import styled from "styled-components";
import { getCity, getOneWeekWeather, getPreload } from "../redux/apiData/api-reducer";
import fetchData from "../redux/apiData/fetchData";
import { Background } from "./CityWeather";

const HomePage = props => {
    const [cityName, setCityName] = useState("");

    const makeAPIcall = e => {
        e.preventDefault();
        props.fetchDataAPI("q=" + cityName, props);
    };

    const getLocation = () => {
        if (!navigator.geolocation) {
            console.log("ERROR");
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    };
    const error = () => {
        console.log("========ERROR LOCATION========");
    };

    const success = position => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        const cityCoordinates = `lat=${lat}&lon=${long}`;
        props.fetchDataAPI(cityCoordinates, props);
    };

    let renderPage = (
        <Background>
            <Wrapper>
                <div>
                    <form onSubmit={makeAPIcall}>
                        <Input
                            onChange={e => setCityName(e.target.value)}
                            type="search"
                            placeholder="search a city"
                            value={cityName}
                            required
                            autoFocus
                        />
                    </form>
                    <button onClick={getLocation}>use my current location</button>
                </div>
            </Wrapper>
        </Background>
    );

    let loader = (
        <Loader
            type="TailSpin"
            color="#fff"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
    );

    return (
        <Background>
            <Wrapper>{props.preload ? loader : renderPage}</Wrapper>
        </Background>
    );
};

const Wrapper = styled.div`
    display: grid;
    place-items: center;
`;

const Input = styled.input`
    border: none;
    padding: 1.3em;
    margin-top: 5px;
    border-radius: 10px;

    &:focus {
        outline: none;
    }
`;

const mapStateToProps = state => ({
    city: getCity(state),
    oneWeekWeather: getOneWeekWeather(state),
    preload: getPreload(state)
});

const mapDispatchToProps = dispatch => {
    return {
        fetchDataAPI: (city, props) => {
            dispatch(fetchData(city, props));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
