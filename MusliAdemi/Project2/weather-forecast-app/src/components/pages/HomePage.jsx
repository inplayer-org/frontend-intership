import React, { useState } from 'react'
import axios from 'axios';

const HomePage = (props) => {

    const [cityName, setCityName] = useState("");
    const [celsiusData, setCelsiusData] = useState(null);

    const makeAPIcall = (e) => {
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
                })
            } catch (e) {
                props.history.push({
                    pathname: `error/${cityName}`,
                    search: `${cityName}`
                })
            }
        };
        fetchData();
    }

    return (
        <div>
            HomePage component - search city
            <form onSubmit={makeAPIcall}>
                <input
                    onChange={(e) => setCityName(e.target.value)}
                    type="search"
                    placeholder="city"
                    value={cityName}
                />
                <button onClick={makeAPIcall}>Search City</button>
            </form>
        </div>
    );
}

export default HomePage;