import React, { Component } from 'react';
import './App.css';
// import { Switch, Route } from 'react-router-dom';

import axios from 'axios';

import HomePage from './pages/home-page/home-page.component';

class App extends Component {
	state = {
		city: '',
		forecast: []
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	componentDidMount() {
		axios({
			method: 'get',
			url:
				'api.openweathermap.org/data/2.5/weather?q=Skopje&APPID=5f33ab7658849061c4136c937a34f5e4'
		}).then(
			(response) => {
				console.log(response);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	render() {
		return (
			<div className="App">
				{/* <ForecastPage  /> */}
				<HomePage
					handleChange={(event) => {
						this.handleChange(event);
					}}
					{...this.state}
				/>
			</div>
		);
	}
}

export default App;
