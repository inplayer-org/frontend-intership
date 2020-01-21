import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios';

import HomePage from './pages/home-page/home-page.component';
import ForecastPage from './pages/forecast-page/forecast-page.component';
import ErrorPage from './pages/error-page/error-page.component';

class App extends Component {
	state = {
		city: '',
		forecast: [],
		isSuccess: false,
		isFail: false
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		this.setState({
			forecast: [],
			isSuccess: false,
			isFail: false
		});

		try {
			const response = await axios({
				method: 'get',
				url: `http://api.openweathermap.org/data/2.5/forecast?q=${this
					.state
					.city}&units=metric&APPID=5f33ab7658849061c4136c937a34f5e4&cnt=6`
			});

			this.setState({
				isSuccess: true,
				forecast: response.data
			});
		} catch (err) {
			this.setState({
				isFail: true
			});
		}
	};

	clearState = () => {
		this.setState({ isFail: false, city: '' });
	};

	render() {
		return (
			<div className="App">
				<Switch>
					<Route
						exact
						path="/"
						render={(props) => (
							<HomePage
								exact
								{...props}
								handleSubmit={this.handleSubmit}
								handleChange={this.handleChange}
								{...this.state}
							/>
						)}
					/>
					<Route
						path="/forecast"
						render={(props) => (
							<ForecastPage {...props} {...this.state} />
						)}
					/>
					<Route
						path="/404notfound"
						render={(props) => (
							<ErrorPage
								{...props}
								clearState={this.clearState}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
