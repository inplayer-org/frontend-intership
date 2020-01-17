import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const HomePage = props => {
    const [cityName, setCityName] = useState("");
    // eslint-disable-next-line
    const [celsiusData, setCelsiusData] = useState(null);

    const makeAPIcall = e => {
        e.preventDefault();

        let weatherAPIlinkC = `http://api.openweathermap.org/data/2.5//forecast/daily?units=metric&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=7&q=${cityName}`;

        const fetchData = async () => {
            let response;
            try {
                response = await axios(weatherAPIlinkC);
                setCelsiusData(response.data);
                props.history.push({
                    pathname: `/forecast/${cityName}`,
                    state: { cityData: response.data }
                });
            } catch (e) {
                props.history.push({
                    pathname: `error/${cityName}`,
                    search: `${cityName}`
                });
            }
        };
        fetchData();
    };

    return (
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
                </div>
            </Wrapper>
        </Background>
    );
};

const Background = styled.div`
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

export default HomePage;
