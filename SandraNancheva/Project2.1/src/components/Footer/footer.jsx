import React from 'react';

import WeekWeather from '../WeekWeather/weekweather';
import './footer.scss';
const Footer = ({ data, units }) => (
	<div className="footer">
		{data.list && data.list.map((day) => <WeekWeather key={day.dt} day={day} units={units} />)}
	</div>
);


export default Footer;
