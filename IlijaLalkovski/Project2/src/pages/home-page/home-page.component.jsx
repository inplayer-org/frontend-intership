import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './home-page.styles.scss';
import InputField from '../../components/input-field/input-field.component';
import {
	getForecastByCity as getForecastByCityAction,
	getForecastByCoordinates as getForecastByCoordinatesAction
} from '../../redux/forecast/forecast.actions';

class HomePage extends Component {
	state = { city: '' };

	handleChange = (event) => {
		const { value } = event.target;

		this.setState({ city: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const { getForecastByCity } = this.props;
		const { city } = this.state;

		getForecastByCity(city);
	};

	handleOnClick = (event) => {
		event.preventDefault();
		const { getForecastByCoordinates } = this.props;

		navigator.geolocation.getCurrentPosition(
			(pos) => {
				const lat = pos.coords.latitude;
				const lon = pos.coords.longitude;
				getForecastByCoordinates(lat, lon);
			},
			() => console.log('Error in loading')
		);
	};

	render() {
		const { forecast } = this.props;
		const { city } = this.state;

		if (forecast.isFail) {
			return <Redirect to={`/404notfound`} />;
		}

		if (forecast.isSuccess) {
			return <Redirect to={`/forecast?${city}`} />;
		}

		return (
			<div className="home-page">
				<div className="home-container">
					<form onSubmit={this.handleSubmit}>
						<InputField
							name="city"
							handleChange={this.handleChange}
							value={city}
							label="City"
						/>
					</form>
					<div className="coordinates">
						<button
							className="geo-button"
							onClick={this.handleOnClick}
						>
							Search by current location
						</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	forecast: state.forecast
});

const mapDispatchToProps = {
	getForecastByCity: getForecastByCityAction,
	getForecastByCoordinates: getForecastByCoordinatesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
