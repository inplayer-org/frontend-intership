import React, { Component } from 'react';

import './home-page.styles.scss';
import HomeContainer from '../../components/home-container/home-container.component'

class HomePage extends Component {
	state = {
		city: ''
	};

	handleChange = (event) => {
		const city = event.target;

		this.setState({ city: city });
	};

	render() {
		return (
			<div className="home-page">
				<HomeContainer/>
			</div>
		);
	}
}

export default HomePage;
