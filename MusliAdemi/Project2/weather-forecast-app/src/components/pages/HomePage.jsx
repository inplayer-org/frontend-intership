import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CityWeather from './CityWeather';


const HomePage = (props) => {

    const [cityName, setCityName] = useState("");
    const [celsiusData, setCelsiusData] = useState(null);
    const [makeAPIcall, setMakeAPIcall] = useState(false);

    useEffect(() => {
        let celsiusAPILink = `http://api.openweathermap.org/data/2.5//forecast/daily?units=metric&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=7&q=${cityName}`;

        const fetchData = async () => {
            if (cityName) {
                let response;
                try {
                    response = await axios(celsiusAPILink);
                    setCelsiusData(response.data);
                    console.log(response.data);
                    props.history.push({
                        pathname: `/forecast/${cityName}`,
                        search: `${cityName}`,
                        state: { cityData: response.data }
                    })
                } catch (e) {
                    console.log("ERROR");
                    props.history.push(`${cityName}`)
                }
            }
        };
        fetchData();
    }, [makeAPIcall]);
    // console.log(props);

    const handleSubmitAPIcall = e => {
        e.preventDefault();
        setMakeAPIcall(!makeAPIcall)
    }

    return (
        <div>
            HomePage component - search city
            <form onSubmit={handleSubmitAPIcall}>
                <input
                    onChange={(e) => setCityName(e.target.value)}
                    type="search"
                    placeholder="city"
                    value={cityName}
                />
                <button onClick={handleSubmitAPIcall}>Search City</button>
            </form>
        </div>
    );
}

export default HomePage;