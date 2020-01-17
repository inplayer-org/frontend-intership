import React from 'react'

const CityWeather = (props) => {
    console.log(props);
    const { cityName } = props.match.params;
    return (
        <div>
            City Weather component for {cityName}
        </div>
    );
}

export default CityWeather;