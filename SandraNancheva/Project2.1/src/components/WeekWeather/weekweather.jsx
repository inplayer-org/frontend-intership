import React from 'react';
import './weekweather.scss';

const WeekWeather = ({ day, units }) => {
	const date = new Date(day.dt * 1000);
	const options = { weekday: 'short' };
	const icon = `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
	const dayAsString = date.toLocaleDateString(undefined, options);
	return (
		<div className="day">
			<h3>{dayAsString}</h3>
			<img src={icon} alt="icon" />
			<h3>
				{day.temp.day} {units === 'metric' ? 'C' : 'F'}
			</h3>
		</div>
	);
};

export default WeekWeather;
