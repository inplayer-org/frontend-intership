import React from 'react'
import { Link } from 'react-router-dom'
import { Background } from './CityWeather'

const CityNotFound = ({ location: { search: city } }) => {
    return (
        <Background>
            <div>
                <h1>
                    City {city.slice(1)} not found.
                </h1>
                <br />
                <Link to={'/'}>Try again</Link>
            </div>
        </Background>
    );
}

export default CityNotFound;