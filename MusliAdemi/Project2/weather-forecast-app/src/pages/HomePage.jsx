import React, { useState } from "react";
import { connect } from "react-redux";
// import axios from "axios";
import styled from "styled-components";
import { Background } from "./CityWeather";
import fetchData from "../redux/apiData/fetchData";
import { bindActionCreators } from "redux";
import {
    getPreload,
    getOneWeekWeather,
    getCity
} from "../redux/apiData/api-reducer";

const HomePage = props => {
    const [cityName, setCityName] = useState("");

    // console.log(props);
    const makeAPIcall = e => {
        e.preventDefault();
        props.fetchDataAPI(cityName);
        console.log("PROPS");
        console.log(props);
    };

    return (
        <Background>
            <Wrapper>
                <div>
                    <form onSubmit={makeAPIcall}>
                        <Input
                            onChange={e =>
                                setCityName(e.target.value)
                            }
                            type="search"
                            placeholder="search a city"
                            value={cityName}
                            required
                            autoFocus
                        />
                    </form>
                </div>
            </Wrapper>
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
        fetchDataAPI: city => {
            dispatch(fetchData(city));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
