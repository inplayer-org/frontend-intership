import React, { Component } from 'react';

import './forecast-page.styles.scss';

class ForecastPage extends Component {
	state = {
		forecast: {
			cod: '200',
			message: 0,
			cnt: 7,
			list: [
				{
					dt: 1579532400,
					main: {
						temp: 0.34,
						feels_like: -4.04,
						temp_min: 0.34,
						temp_max: 2.39,
						pressure: 1041,
						sea_level: 1041,
						grnd_level: 992,
						humidity: 55,
						temp_kf: -2.05
					},
					weather: [
						{
							id: 800,
							main: 'Clear',
							description: 'clear sky',
							icon: '01d'
						}
					],
					clouds: {
						all: 0
					},
					wind: {
						speed: 2.16,
						deg: 334
					},
					sys: {
						pod: 'd'
					},
					dt_txt: '2020-01-20 15:00:00'
				},
				{
					dt: 1579543200,
					main: {
						temp: -2.63,
						feels_like: -6.24,
						temp_min: -2.63,
						temp_max: -1.09,
						pressure: 1043,
						sea_level: 1043,
						grnd_level: 993,
						humidity: 71,
						temp_kf: -1.54
					},
					weather: [
						{
							id: 800,
							main: 'Clear',
							description: 'clear sky',
							icon: '01n'
						}
					],
					clouds: {
						all: 0
					},
					wind: {
						speed: 1.13,
						deg: 322
					},
					sys: {
						pod: 'n'
					},
					dt_txt: '2020-01-20 18:00:00'
				},
				{
					dt: 1579554000,
					main: {
						temp: -2.49,
						feels_like: -6.07,
						temp_min: -2.49,
						temp_max: -1.47,
						pressure: 1045,
						sea_level: 1045,
						grnd_level: 996,
						humidity: 72,
						temp_kf: -1.02
					},
					weather: [
						{
							id: 800,
							main: 'Clear',
							description: 'clear sky',
							icon: '01n'
						}
					],
					clouds: {
						all: 0
					},
					wind: {
						speed: 1.13,
						deg: 302
					},
					sys: {
						pod: 'n'
					},
					dt_txt: '2020-01-20 21:00:00'
				},
				{
					dt: 1579564800,
					main: {
						temp: -2.25,
						feels_like: -5.97,
						temp_min: -2.25,
						temp_max: -1.74,
						pressure: 1044,
						sea_level: 1044,
						grnd_level: 995,
						humidity: 72,
						temp_kf: -0.51
					},
					weather: [
						{
							id: 800,
							main: 'Clear',
							description: 'clear sky',
							icon: '01n'
						}
					],
					clouds: {
						all: 0
					},
					wind: {
						speed: 1.35,
						deg: 296
					},
					sys: {
						pod: 'n'
					},
					dt_txt: '2020-01-21 00:00:00'
				},
				{
					dt: 1579575600,
					main: {
						temp: -2.17,
						feels_like: -5.45,
						temp_min: -2.17,
						temp_max: -2.17,
						pressure: 1044,
						sea_level: 1044,
						grnd_level: 994,
						humidity: 72,
						temp_kf: 0
					},
					weather: [
						{
							id: 800,
							main: 'Clear',
							description: 'clear sky',
							icon: '01n'
						}
					],
					clouds: {
						all: 0
					},
					wind: {
						speed: 0.74,
						deg: 325
					},
					sys: {
						pod: 'n'
					},
					dt_txt: '2020-01-21 03:00:00'
				},
				{
					dt: 1579586400,
					main: {
						temp: -2.65,
						feels_like: -6,
						temp_min: -2.65,
						temp_max: -2.65,
						pressure: 1043,
						sea_level: 1043,
						grnd_level: 994,
						humidity: 73,
						temp_kf: 0
					},
					weather: [
						{
							id: 800,
							main: 'Clear',
							description: 'clear sky',
							icon: '01d'
						}
					],
					clouds: {
						all: 0
					},
					wind: {
						speed: 0.8,
						deg: 346
					},
					sys: {
						pod: 'd'
					},
					dt_txt: '2020-01-21 06:00:00'
				},
				{
					dt: 1579597200,
					main: {
						temp: 0.9,
						feels_like: -1.99,
						temp_min: 0.9,
						temp_max: 0.9,
						pressure: 1042,
						sea_level: 1042,
						grnd_level: 994,
						humidity: 55,
						temp_kf: 0
					},
					weather: [
						{
							id: 800,
							main: 'Clear',
							description: 'clear sky',
							icon: '01d'
						}
					],
					clouds: {
						all: 0
					},
					wind: {
						speed: 0.11,
						deg: 130
					},
					sys: {
						pod: 'd'
					},
					dt_txt: '2020-01-21 09:00:00'
				}
			],
			city: {
				id: 785842,
				name: 'Skopje',
				coord: {
					lat: 42,
					lon: 21.4333
				},
				country: 'MK',
				population: 474889,
				timezone: 3600,
				sunrise: 1579499847,
				sunset: 1579534339
			}
		}
	};
	componentDidMount() {
		console.log(this.state.forecast.list[0].weather[0].description);
	}

	render() {
		const { city, list } = this.state.forecast;
		const iconUrl = `http://openweathermap.org/img/wn/${list[0].weather[0].icon}@2x.png`

		return (
			<div className="forecast-page">
				<div className="forecast-container">
					<h1 className="city-name">{city.name}</h1>
					<h2 className="date">{list[0].dt_txt}</h2>
					<div className="temp">
						<div className="main-temp">
							<img src={iconUrl} alt={list[0].weather[0].description}/>
							{list[0].main.temp}°C{list[0].weather.icon}
						</div>
						<div className="temp-details">
							<p className="feels-like">
								Feels like: {list[0].main.feels_like}°C
							</p>
							<p className="temp-min">
								Min temp: {list[0].main.temp_min}°C
							</p>
							<p className="temp-max">
								Max temp: {list[0].main.temp_max}°C
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ForecastPage;
