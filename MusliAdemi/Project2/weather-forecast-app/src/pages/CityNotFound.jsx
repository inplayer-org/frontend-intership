import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Background, Wrapper } from "./CityWeather";

const CityNotFound = props => {
    const city = props.location.search;
    return (
        <Background>
            <Wrapper>
                <h1>
                    City <CityName>{city.slice(1)}</CityName> not found.
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

export default CityNotFound;
