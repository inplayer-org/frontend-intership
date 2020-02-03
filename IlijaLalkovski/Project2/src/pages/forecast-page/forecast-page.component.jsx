import React, { Component } from 'react';

import './forecast-page.styles.scss';

import './home-icon.png';

import CardList from '../../components/card-list/card-list.component';
import ToggleSwitch from '../../components/toggle-switch/toggle-switch.component';
import { NavLink } from 'react-router-dom';

class ForecastPage extends Component {
	state = {
		name: 'temp-unit',
		metrics: '°C',
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
			message: 0.1734054,
			cnt: 7,
			list: [
				{
					dt: 1580724000,
					sunrise: 1580708749,
					sunset: 1580745009,
					temp: {
						day: 16,
						min: 9.92,
						max: 16,
						night: 9.92,
						eve: 15.25,
						morn: 16
					},
					feels_like: {
						day: 13.68,
						night: 8.66,
						eve: 13.51,
						morn: 13.68
					},
					pressure: 1014,
					humidity: 55,
					weather: [
						{
							id: 803,
							main: 'Clouds',
							description: 'broken clouds',
							icon: '04d'
						}
					],
					speed: 2.3,
					deg: 76,
					clouds: 54
				},
				{
					dt: 1580810400,
					sunrise: 1580795085,
					sunset: 1580831487,
					temp: {
						day: 10.35,
						min: 4.68,
						max: 13.16,
						night: 4.68,
						eve: 13.06,
						morn: 6.88
					},
					feels_like: {
						day: 7.95,
						night: 2.33,
						eve: 11.05,
						morn: 4.72
					},
					pressure: 1010,
					humidity: 66,
					weather: [
						{
							id: 501,
							main: 'Rain',
							description: 'moderate rain',
							icon: '10d'
						}
					],
					speed: 1.62,
					deg: 103,
					clouds: 0,
					rain: 4.13
				},
				{
					dt: 1580896800,
					sunrise: 1580881420,
					sunset: 1580917965,
					temp: {
						day: 3.84,
						min: -0.71,
						max: 5.18,
						night: -0.71,
						eve: 3.73,
						morn: 2.59
					},
					feels_like: {
						day: -2.31,
						night: -6.99,
						eve: -2.76,
						morn: -0.6
					},
					pressure: 998,
					humidity: 59,
					weather: [
						{
							id: 601,
							main: 'Snow',
							description: 'snow',
							icon: '13d'
						}
					],
					speed: 5.31,
					deg: 316,
					clouds: 100,
					snow: 7.39
				},
				{
					dt: 1580983200,
					sunrise: 1580967753,
					sunset: 1581004443,
					temp: {
						day: -0.57,
						min: -3.11,
						max: 1.68,
						night: -1.72,
						eve: 1.21,
						morn: -2.71
					},
					feels_like: {
						day: -7,
						night: -5.63,
						eve: -4.34,
						morn: -9.2
					},
					pressure: 1021,
					humidity: 51,
					weather: [
						{
							id: 600,
							main: 'Snow',
							description: 'light snow',
							icon: '13d'
						}
					],
					speed: 4.88,
					deg: 340,
					clouds: 83,
					snow: 0.31
				},
				{
					dt: 1581069600,
					sunrise: 1581054085,
					sunset: 1581090922,
					temp: {
						day: 2.44,
						min: -1.61,
						max: 4.92,
						night: -0.68,
						eve: 3.71,
						morn: -1.61
					},
					feels_like: {
						day: -0.87,
						night: -3.94,
						eve: 0.56,
						morn: -5.33
					},
					pressure: 1026,
					humidity: 51,
					weather: [
						{
							id: 804,
							main: 'Clouds',
							description: 'overcast clouds',
							icon: '04d'
						}
					],
					speed: 0.77,
					deg: 248,
					clouds: 85
				},
				{
					dt: 1581156000,
					sunrise: 1581140415,
					sunset: 1581177400,
					temp: {
						day: 2.82,
						min: -1.32,
						max: 5.92,
						night: 1.07,
						eve: 5.65,
						morn: -1.22
					},
					feels_like: {
						day: -0.25,
						night: -1.64,
						eve: 2.66,
						morn: -4.34
					},
					pressure: 1029,
					humidity: 58,
					weather: [
						{
							id: 800,
							main: 'Clear',
							description: 'sky is clear',
							icon: '01d'
						}
					],
					speed: 0.72,
					deg: 104,
					clouds: 0
				},
				{
					dt: 1581242400,
					sunrise: 1581226743,
					sunset: 1581263878,
					temp: {
						day: 5.05,
						min: 0.22,
						max: 8.31,
						night: 2.55,
						eve: 8.1,
						morn: 0.31
					},
					feels_like: {
						day: 2.34,
						night: -0.21,
						eve: 5.9,
						morn: -2.41
					},
					pressure: 1033,
					humidity: 57,
					weather: [
						{
							id: 800,
							main: 'Clear',
							description: 'sky is clear',
							icon: '01d'
						}
					],
					speed: 0.5,
					deg: 237,
					clouds: 0
				}
			]
		}
	};

	componentDidMount() {
		this.props.clearSuccess();
	}

	onChange = (event) => {
		if (event.target.checked) {
			this.setState({ metrics: '°F' });
		} else {
			this.setState({ metrics: '°C' });
		}
	};

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
					<div className="header">
						<div className="home-link">
							<NavLink to={`/`}>
								<img
									src={require('./home-icon.png')}
									alt="home"
								/>
							</NavLink>
						</div>

						<div className="city-info">
							<h1 className="city-name">{city.name}</h1>
							<h2 className="date">
								{this.getFormattedDate(list[0].dt * 1000)}
							</h2>
							<h3 className="current-forecast">{weather.main}</h3>
						</div>

						<div className="toggle">
							<ToggleSwitch
								id="this.state.name"
								onChange={this.onChange}
							/>
						</div>
					</div>
					<div className="temp">
						<div className="main-temp">
							<img src={iconUrl} alt={weather.description} />
							{this.state.metrics === '°F' ? (
								Number((temp.day * 9 / 5 + 32).toFixed(0))
							) : (
								Number(temp.day.toFixed(0))
							)}
							{this.state.metrics}
						</div>
						<div className="temp-details">
							<p>
								Day:{' '}
								{this.state.metrics === '°F' ? (
									Number((temp.day * 9 / 5 + 32).toFixed(0))
								) : (
									Number(temp.day.toFixed(0))
								)}
								{this.state.metrics}
							</p>
							<p>
								Night:{' '}
								{this.state.metrics === '°F' ? (
									Number((temp.night * 9 / 5 + 32).toFixed(0))
								) : (
									Number(temp.night.toFixed(0))
								)}
								{this.state.metrics}
							</p>
							<p>
								Evening:{' '}
								{this.state.metrics === '°F' ? (
									Number((temp.eve * 9 / 5 + 32).toFixed(0))
								) : (
									Number(temp.eve.toFixed(0))
								)}
								{this.state.metrics}
							</p>
							<p>
								Morning:{' '}
								{this.state.metrics === '°F' ? (
									Number((temp.morn * 9 / 5 + 32).toFixed(0))
								) : (
									Number(temp.morn.toFixed(0))
								)}
								{this.state.metrics}
							</p>
						</div>
					</div>
					<CardList {...this.props} {...this.state} />
				</div>
			</div>
		);
	}
}

export default ForecastPage;
