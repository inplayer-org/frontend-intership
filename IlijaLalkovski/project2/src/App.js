import React, { Component } from 'react';
import './App.css';
// import { Switch, Route } from 'react-router-dom';

import axios from 'axios';

import HomePage from './pages/home-page/home-page.component';

class App extends Component {
	state = {
		city: 'Skopje',
		forecast: []
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		
		axios({
			method: 'get',
			url:
				`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=5f33ab7658849061c4136c937a34f5e4`
		})
			.then((response) => response.data)
			.then((forecast) => console.log(forecast));
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="App">
				{/* <ForecastPage  /> */}
				<HomePage
					handleSubmit={(event) => {
						this.handleSubmit(event)
					}}
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
