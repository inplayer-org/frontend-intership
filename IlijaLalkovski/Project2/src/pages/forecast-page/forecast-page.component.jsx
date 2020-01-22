import React, { Component } from 'react';

import './forecast-page.styles.scss';

import './home-icon.png';

import CardList from '../../components/card-list/card-list.component';
import ToggleSwitch from '../../components/toggle-switch/toggle-switch.component';
import { NavLink } from 'react-router-dom';

class ForecastPage extends Component {
	state = {
		name: 'temp-unit',
		metrics: '°C'
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
		const { city, list } = this.props.forecast;
		const temp = list[0].temp;
		const weather = list[0].weather[0];
		const iconUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

		return (
			<div className="forecast-page">
				<div className="forecast-container">
					<div className="home-link">
						<NavLink to={`/`}>
							<img src={require('./home-icon.png')} alt="home" />
						</NavLink>
					</div>
					<div className="toggle">
						<ToggleSwitch
							id="this.state.name"
							onChange={this.onChange}
						/>
					</div>
					<div className="city-info">
						<h1 className="city-name">{city.name}</h1>
						<h2 className="date">
							{this.getFormattedDate(list[0].dt * 1000)}
						</h2>
						<h3 className="current-forecast">{weather.main}</h3>
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
					<CardList {...this.props} {...this.state}/>
				</div>
			</div>
		);
	}
}

export default ForecastPage;
