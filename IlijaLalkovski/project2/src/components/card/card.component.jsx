import React from 'react';

const Card = (props) => {
    const main = props.forecast.list[day].main;
    const weather = props.forecast.list.weather[0];
	const iconUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

	return (
		<div className="card-container">
            <h2>{new Intl.DateTimeFormat('en-US', {weekday: 'short'}).format(props.list.dt_txt)}</h2>
			<img src={iconUrl} alt={weather.description} />
			<h2>{Number(main.temp.toFixed(0))}°C</h2>
		</div>
	);
};

export default Card;
