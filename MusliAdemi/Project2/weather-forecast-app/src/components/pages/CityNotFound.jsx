import React from 'react'
import { Link } from 'react-router-dom'

const CityNotFound = ({ location: { search: city } }) => {
    return (
        <div>
            City <span style={{ fontSize: 20 }}>{city.slice(1)}</span> not found.
            <br />
            <Link to={'/'}>Try again</Link>
        </div>
    );
}

export default CityNotFound;