import React, { Component } from 'react';

import './home-container.styles.scss';

import InputField from '../input-field/input-field.component';

class HomeContainer extends Component {
	state = {
		city: ''
	};

	handleChange = (event) => {
		const value = event.target.value;

		this.setState({ city: value } ,() => console.log(this.state.city) );
	};

	render() {
		return (
			<div className="home-container">
				<InputField
					name="city"
					handleChange={this.handleChange}
					value={this.state.city}
					label="City"
				/>
			</div>
		);
	}
}

export default HomeContainer;
