import React, { Component } from 'react';

import './home-page.styles.scss';

import InputField from '../../components/input-field/input-field.component';

class HomePage extends Component {
	render() {
		return (
			<div className="home-page">
				<div className="home-container">
					<InputField
						name="city"
						type="city"
						handleChange={this.props.handleChange}
						value={this.props.city}
						label="City"
					/>
				</div>
			</div>
		);
	}
}

export default HomePage;
