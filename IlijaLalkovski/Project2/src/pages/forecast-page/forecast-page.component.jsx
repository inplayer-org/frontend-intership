import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './forecast-page.styles.scss';
import './home-icon.png';
import CardList from '../../components/card-list/card-list.component';
import ToggleSwitch from '../../components/toggle-switch/toggle-switch.component';
import TempDetails from '../../components/temp-details/temp-details.component'

class ForecastPage extends Component {
	state = {
		name: 'temp-unit',
		metrics: '°C',
	}

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
		const { days, city } = this.props;
		const temp = days[0].temp;
		const weather = days[0].weather[0];
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
								{this.getFormattedDate(days[0].dt * 1000)}
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
						<TempDetails days={days} metrics={this.state.metrics}/>
					</div>
					<CardList days={days} {...this.state} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	days: state.forecast.list,
	city: state.forecast.city
});

export default connect(mapStateToProps)(ForecastPage);
