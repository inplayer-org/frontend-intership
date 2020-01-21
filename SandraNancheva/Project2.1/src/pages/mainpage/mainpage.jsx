import React, { Component } from 'react';
import ErrorPage from '../errorpage/errorpage';
import Header from '../../components/Header/header';
import TodayWeather from '../../components/TodayWeather/todayweather';
import Footer from '../../components/Footer/footer';
import queryString from 'query-string';
import './mainpage.scss';

class MainPage extends Component {
	state = {
		location: '',
		data: [],
		units: 'imperial',
		errorMsg: ''
	};

	async fetchWeather(location, units) {
		if (Object.keys(location).length < 2) {
			try {
				const response = await fetch(
					`http://api.openweathermap.org/data/2.5//forecast/daily?units=${units}&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=7&q=${location.city}`
				);
				const data = await response.json();
				console.log(data);
				this.setState({ data });
			} catch (err) {
				console.log(err);
			}
		} else {
			try {
				const response = await fetch(
					`http://api.openweathermap.org/data/2.5//forecast/daily?units=${units}&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=7&lat=${location.lat}&lon=${location.lon}`
				);
				const data = await response.json();
				this.state({ data });
			} catch (err) {
				console.log(err);
			}
		}
	}

	componentDidMount() {
		this.setState({ location: queryString.parse(this.props.location.search) });
		this.fetchWeather(queryString.parse(this.props.location.search), this.state.units);
	}

	handleTemp = () => {
		const location = queryString.parse(this.props.location.search);
		if (this.state.units === 'imperial') {
			this.fetchWeather(location, 'metric');
			this.setState({ units: 'metric' });
		} else {
			this.fetchWeather(location, 'imperial');
			this.setState({ units: 'imperial' });
		}
	};

	render() {
		return this.state.data.cod === '404' ? (
			<ErrorPage />
		) : (
			<div className="mainpage">
				<Header data={this.state.data} units={this.state.units} handleTemp={this.handleTemp} />
				<TodayWeather data={this.state.data} units={this.state.units} />
				<Footer data={this.state.data} units={this.state.units} />
			</div>
		);
	}
}

export default MainPage;
