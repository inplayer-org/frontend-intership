import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './home-page.styles.scss';
import InputField from '../../components/input-field/input-field.component';
import { getForecast as getForecastAction } from '../../redux/forecast/forecast.actions';

class HomePage extends Component {
	state = { city: '' };

	handleChange = (event) => {
		const { value } = event.target;

		this.setState({ city: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const { getForecast } = this.props;
		const { city } = this.state;

		getForecast(city);
	};

	render() {
		const { forecast } = this.props;
		const { city } = this.state;

		if (forecast.isFail) {
			return <Redirect to={`/404notfound`} />;
		}

		if (forecast.isSuccess) {
			console.log('testsfasdasd============');
			return <Redirect to={`/forecast?city=${city}`} />;
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
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	forecast: state.forecast
});

const mapDispatchToProps = {
	getForecast: getForecastAction
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
