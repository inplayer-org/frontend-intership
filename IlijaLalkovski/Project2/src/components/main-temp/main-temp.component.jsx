import React from 'react';

import './main-temp.styles.scss';

const MainTemp = (props) => {
	const temp = props.days[0].temp;
	const metrics = props.metrics;
	const weather = props.days[0].weather[0];
	const iconUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

	return (
		<div className="main-temp">
			<img src={iconUrl} alt={weather.description} />
			{metrics === '°F' ? (
				Number((temp.day * 9 / 5 + 32).toFixed(0))
			) : (
				Number(temp.day.toFixed(0))
			)}
			{metrics}
		</div>
	);
};

export default MainTemp;
