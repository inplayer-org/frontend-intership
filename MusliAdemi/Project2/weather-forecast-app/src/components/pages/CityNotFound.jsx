import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Background, Wrapper } from "./CityWeather";

const CityNotFound = ({ location: { search: city } }) => {
    return (
        <Background>
            <Wrapper>
                <h1>
                    City <CityName>{city.slice(1)}</CityName> not
                    found.
                </h1>
                <br />
                <Link to={"/"}>
                    <TryAgainButton>Try again</TryAgainButton>
                </Link>
            </Wrapper>
        </Background>
    );
};

const TryAgainButton = styled.button`
    padding: 7px;
    border: none;
    background-color: lightblue;
    cursor: pointer;

    &:hover {
        background-color: #c2e8ff;
    }
`;

const CityName = styled.span`
    color: white;
`

// const Wrapper = styled.div`
//     align-self: center;
//     justify-self: center;
// `;

export default CityNotFound;
