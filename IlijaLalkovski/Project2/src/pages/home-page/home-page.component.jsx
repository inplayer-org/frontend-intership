import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import './home-page.styles.scss';

import InputField from '../../components/input-field/input-field.component';

class HomePage extends Component {
	render() {
		const { city, isSuccess, isFail } = this.props;

		if (isFail) {
			return <Redirect to={`/404notfound`} />;
		}

		if (isSuccess) {
			return <Redirect to={`/forecast?city=${city}`} />;
		}

		return (
			<div className="home-page">
				<div className="home-container">
					<form onSubmit={this.props.handleSubmit}>
						<InputField
							name="city"
							handleChange={this.props.handleChange}
							value={city}
							label="City"
						/>
					</form>
				</div>
			</div>
		);
	}
}

export default HomePage;
