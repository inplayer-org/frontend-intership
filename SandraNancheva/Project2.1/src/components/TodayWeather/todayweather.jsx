import React from 'react';
import './todayweather.scss';

const timeOfDay = [ 'day', 'night', 'eve', 'morn' ];
const stringDay = [ 'Day:', 'Night:', 'Evening:', 'Morning:' ];

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
				{data.list &&
					stringDay.map((day, index) => (
						<p key={index}>
							{day} {data.list[0].temp[timeOfDay[index]]} {units === 'metric' ? 'C' : 'F'}{' '}
						</p>
					))}
			</div>
		</div>
	);
};

export default TodayWeather;
