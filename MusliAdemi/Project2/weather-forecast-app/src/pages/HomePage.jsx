//react
import React, { useState } from "react";
import Loader from "react-loader-spinner";
//redux
import { connect } from "react-redux";
import fetchData from "../redux/apiData/fetchData";
import { getPreload } from "../redux/apiData/api-reducer";
//style
import styled from "styled-components";
import { Background } from "./CityWeather";

const HomePage = props => {
    const [cityName, setCityName] = useState("");
    const makeAPIcall = e => {
        e.preventDefault();
        //pass props for further routing
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
        //pass props for further routing
        props.fetchDataAPI(cityCoordinates, props);
    };

    let HomePage = (
        <div>
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
                    <UseMyLocation onClick={getLocation}>use my current location</UseMyLocation>
                </div>
            </Wrapper>
        </div>
    );

    let loader = <Loader type="TailSpin" color="#fff" height={100} width={100} />;

    return (
        <Background>
            <Wrapper>{props.preload ? loader : HomePage}</Wrapper>
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

const UseMyLocation = styled.p`
    cursor: pointer;
    color: white;

    &:hover {
        opacity: 0.65;
    }
`;

//we only need preload from the state
const mapStateToProps = state => ({
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
