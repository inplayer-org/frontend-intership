import React, { Component } from 'react';

import './forecast-page.styles.scss';

import CardList from '../../components/card-list/card-list.component';
import ToggleSwitch from '../../components/toggle-switch/toggle-switch.component';

class ForecastPage extends Component {
	state = {
		name: "temp-unit",
		forecast: {
			city: {
				id: 785842,
				name: 'Skopje',
				coord: {
					lon: 21.4333,
					lat: 42
				},
				country: 'MK',
				population: 474889,
				timezone: 3600
			},
			cod: '200',
			message: 1.5051796,
			cnt: 7,
			list: [
				{
					dt: 1579600800,
					sunrise: 1579586210,
					sunset: 1579620813,
					temp: {
						day: 1.65,
						min: -0.25,
						max: 4.16,
						night: -0.25,
						eve: 2.73,
						morn: 1.65
					},
					feels_like: {
						day: -1.28,
						night: -3.47,
						eve: -0.49,
						morn: -1.28
					},
					pressure: 1043,
					humidity: 56,
					weather: [
						{
							id: 800,
							main: 'Clear',
							description: 'sky is clear',
							icon: '01d'
						}
					],
					speed: 0.28,
					deg: 97,
					clouds: 0
				},
				{
					dt: 1579687200,
					sunrise: 1579672571,
					sunset: 1579707287,
					temp: {
						day: 3.66,
						min: -1.05,
						max: 7.08,
						night: 2.15,
						eve: 4.56,
						morn: -1.05
					},
					feels_like: {
						day: 0.55,
						night: -1.49,
						eve: 1.9,
						morn: -3.88
					},
					pressure: 1032,
					humidity: 46,
					weather: [
						{
							id: 800,
							main: 'Clear',
							description: 'sky is clear',
							icon: '01d'
						}
					],
					speed: 0.45,
					deg: 149,
					clouds: 0
				},
				{
					dt: 1579773600,
					sunrise: 1579758929,
					sunset: 1579793761,
					temp: {
						day: 5.46,
						min: 0.52,
						max: 7.89,
						night: 0.52,
						eve: 5.91,
						morn: 1.08
					},
					feels_like: {
						day: 2.12,
						night: -2.36,
						eve: 2.84,
						morn: -2.39
					},
					pressure: 1031,
					humidity: 42,
					weather: [
						{
							id: 800,
							main: 'Clear',
							description: 'sky is clear',
							icon: '01d'
						}
					],
					speed: 0.84,
					deg: 71,
					clouds: 0
				},
				{
					dt: 1579860000,
					sunrise: 1579845286,
					sunset: 1579880237,
					temp: {
						day: 2.68,
						min: -1.12,
						max: 6.4,
						night: 0.87,
						eve: 4.68,
						morn: -0.71
					},
					feels_like: {
						day: -1.07,
						night: -1.84,
						eve: 1.69,
						morn: -3.84
					},
					pressure: 1033,
					humidity: 59,
					weather: [
						{
							id: 800,
							main: 'Clear',
							description: 'sky is clear',
							icon: '01d'
						}
					],
					speed: 1.7,
					deg: 88,
					clouds: 0
				},
				{
					dt: 1579946400,
					sunrise: 1579931641,
					sunset: 1579966712,
					temp: {
						day: 3.44,
						min: -0.25,
						max: 5.7,
						night: 2.24,
						eve: 4.41,
						morn: -0.13
					},
					feels_like: {
						day: 0.8,
						night: -0.28,
						eve: 2.09,
						morn: -2.91
					},
					pressure: 1028,
					humidity: 75,
					weather: [
						{
							id: 804,
							main: 'Clouds',
							description: 'overcast clouds',
							icon: '04d'
						}
					],
					speed: 0.82,
					deg: 65,
					clouds: 100
				},
				{
					dt: 1580032800,
					sunrise: 1580017994,
					sunset: 1580053189,
					temp: {
						day: 3.73,
						min: 1.08,
						max: 6.37,
						night: 3.88,
						eve: 5.34,
						morn: 1.22
					},
					feels_like: {
						day: 1.4,
						night: 2.11,
						eve: 3.02,
						morn: -1.23
					},
					pressure: 1027,
					humidity: 77,
					weather: [
						{
							id: 500,
							main: 'Rain',
							description: 'light rain',
							icon: '10d'
						}
					],
					speed: 0.51,
					deg: 82,
					clouds: 100,
					rain: 1.19
				},
				{
					dt: 1580119200,
					sunrise: 1580104345,
					sunset: 1580139665,
					temp: {
						day: 6.59,
						min: 3.1,
						max: 9.31,
						night: 5.21,
						eve: 9.11,
						morn: 3.69
					},
					feels_like: {
						day: 4.4,
						night: 3.04,
						eve: 7.14,
						morn: 1.89
					},
					pressure: 1025,
					humidity: 75,
					weather: [
						{
							id: 804,
							main: 'Clouds',
							description: 'overcast clouds',
							icon: '04d'
						}
					],
					speed: 0.85,
					deg: 76,
					clouds: 100
				}
			]
		}
	};

	componentDidMount() {}

	getFormattedDate(date) {
		const newDate = new Date(date);
		const options = {
			weekday: 'short',
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		};
		return new Intl.DateTimeFormat('en-US', options).format(newDate);
	}

	render() {
		const { city, list } = this.state.forecast;
		const temp = list[0].temp;
		const weather = list[0].weather[0];
		const iconUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

		return (
			<div className="forecast-page">
				<div className="forecast-container">
					<div className="toggle">
						<ToggleSwitch id={this.state.name} Text={["°F", "°C"]}/>
					</div>
					<h1 className="city-name">{city.name}</h1>
					<h2 className="date">
						{this.getFormattedDate(list[0].dt * 1000)}
					</h2>
					<div className="temp">
						<div className="main-temp">
							<img src={iconUrl} alt={weather.description} />
							{Number(temp.day.toFixed(0))}°C
						</div>
						<div className="temp-details">
							<p>Day: {Number(temp.day.toFixed(0))}°C</p>
							<p>Night: {Number(temp.night.toFixed(0))}°C</p>
							<p>Evening: {Number(temp.eve.toFixed(0))}°C</p>
							<p>Morning: {Number(temp.morn.toFixed(0))}°C</p>
						</div>
					</div>
					<CardList {...this.state} />
				</div>
			</div>
		);
	}
}

export default ForecastPage;
