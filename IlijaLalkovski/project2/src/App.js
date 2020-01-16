import React, { Component } from 'react';
import './App.css';
// import { Switch, Route } from 'react-router-dom';

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
		fetch('api.openweathermap.org/data/2.5/weather?q=Skopje', {
			"method": "GET",
			"headers": {
				"APPID": "5f33ab7658849061c4136c937a34f5e4"
			}
		})	
		.then(response => response.json())
		.then(forecast => console.log(forecast))
	}
	
	render() {
		return (
			<div className="App">
				{/* <ForecastPage  /> */}
				<HomePage
					handleChange={(event) => {
						this.handleChange(event);
					}} {...this.state}
				/>
			</div>
		);
	}
}

export default App;
