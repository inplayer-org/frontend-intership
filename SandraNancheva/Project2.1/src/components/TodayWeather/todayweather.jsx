import React from 'react';
import './todayweather.scss';

const TodayWeather = ({ data, units }) => {
	return (
		<div className="todayweather">
			<div className="left-side">
				{data.list && (
					<h1>
						{data.list[0].temp.day} {units === 'metric' ? 'C' : 'F'}
					</h1>
				)}
				{data.list && (
					<img src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`} alt="icon" />
				)}
			</div>
			<div className="right-side">
				{data.list && (
					<p>
						Day: {data.list[0].temp.day} {units === 'metric' ? 'C' : 'F'}
					</p>
				)}
				{data.list && (
					<p>
						Night: {data.list[0].temp.night} {units === 'metric' ? 'C' : 'F'}
					</p>
				)}
				{data.list && (
					<p>
						Evening: {data.list[0].temp.eve} {units === 'metric' ? 'C' : 'F'}
					</p>
				)}
				{data.list && (
					<p>
						Morning: {data.list[0].temp.morn} {units === 'metric' ? 'C' : 'F'}
					</p>
				)}
			</div>
		</div>
	);
};

export default TodayWeather;
