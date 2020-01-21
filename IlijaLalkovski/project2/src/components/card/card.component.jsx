import React from 'react';

import './card.styles.scss'

const Card = (props) => {
    const temp = props.day.temp;
    const weather = props.day.weather[0];
	const iconUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
	const date = new Date(props.day.dt*1000);

	console.log(date);
	return (
		<div className="card-container">
            <h2>{new Intl.DateTimeFormat('en-US', {weekday: 'short'}).format(date)}</h2>
			<img src={iconUrl} alt={weather.description} />
			<h2>{Number(temp.day.toFixed(0))}°C</h2>
		</div>
	);
};

export default Card;
