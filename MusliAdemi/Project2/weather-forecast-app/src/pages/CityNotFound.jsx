//react
import React from "react";
//routing
import { Link } from "react-router-dom";
//redux
import { connect } from "react-redux";
//style
import styled from "styled-components";
import { Background, Wrapper } from "./CityWeather";

const CityNotFound = ({ cityName }) => {
    return (
        <Background>
            <Wrapper>
                <h1>
                    City <CityName>{cityName}</CityName> not found.
                </h1>
                <br />
                <Link to={"/"}>
                    <TryAgainButton>Try again</TryAgainButton>
                </Link>
            </Wrapper>
        </Background>
    );
};

export const TryAgainButton = styled.button`
    padding: 12px;
    border: none;
    border-radius: 5px;
    background-color: lightblue;
    cursor: pointer;

    &:hover {
        background-color: #c2e8ff;
    }
`;

const CityName = styled.span`
    color: white;
`;

const mapStateToProps = state => {
    return {
        cityName: state.data.city
    };
};

export default connect(mapStateToProps)(CityNotFound);
