import React from 'react';

const WeekWeather = ({ day, units}) => {
    const date = new Date(day.dt * 1000);
    const options = { weekday: 'short'}
    console.log("OPTIONS: " + options);
    console.log();
    console.log("DAY " + day);
    const icon = `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`

    console.log(day.weather[0].icon)
    const dayAsString = date.toLocaleDateString(undefined,options);
	return (
		<div>
		    <h1>{dayAsString}</h1>
            <img src={icon} alt="icon"/>
            <h1>{day.temp.day} {units==='metric'? 'C': 'F'}</h1>
        </div>
       
	);
};

export default WeekWeather;
