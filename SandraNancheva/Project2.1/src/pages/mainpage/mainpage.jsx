import React, { Component } from 'react';
import Header from '../../components/Header/header';
import TodayWeather from '../../components/TodayWeather/todayweather';
import Footer from '../../components/Footer/footer'
import queryString from 'query-string';

class MainPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			location: '',
			data: [],
			units: 'imperial'
		};
	}

	fetchWeather(location, units) {
		if (Object.keys(location).length < 2) {
			fetch(
				`http://api.openweathermap.org/data/2.5//forecast/daily?units=${units}&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=7&q=${location.city}`
			)
				.then((response) => response.json())
				.then((data) => this.setState({ data: data }));
		} else {
			fetch(
				`http://api.openweathermap.org/data/2.5//forecast/daily?units=${units}&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=7&lat=${location.lat}&lon=${location.lon}`
			)
				.then((response) => response.json())
				.then((data) => this.setState({ data: data }));
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
		// const icon = `http://openweathermap.org/img/wn/${faiudfa}.png`
		return (
			<div>
				<Header data={this.state.data} units={this.state.units} handleTemp={this.handleTemp} />
				<TodayWeather data={this.state.data} units={this.state.units} />
                <Footer data={this.state.data} units={this.state.units}/>
			</div>
		);
	}
}

export default MainPage;
