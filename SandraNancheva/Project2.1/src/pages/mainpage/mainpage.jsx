import React, { Component } from 'react';
import { connect } from 'react-redux'
import { storeData, changeUnits } from '../../redux/main/main.actions'
import ErrorPage from '../errorpage/errorpage';
import Header from '../../components/Header/header';
import TodayWeather from '../../components/TodayWeather/todayweather';
import Footer from '../../components/Footer/footer';
import queryString from 'query-string';
import './mainpage.scss';

class MainPage extends Component {
	state = {
		location: '',
		data: []
		
	};

	async fetchWeather(location, units) {
		let response;
		if (Object.keys(location).length < 2) {
			try {
				response = await fetch(
					`http://api.openweathermap.org/data/2.5//forecast/daily?units=${units}&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=7&q=${location.city}`
				);
				// const data = await response.json();
				// console.log(data);
				// this.props.storeData(data);
			} catch (err) {
				console.log(err);
			}
		} else {
			try {
				response = await fetch(
					`http://api.openweathermap.org/data/2.5//forecast/daily?units=${units}&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=7&lat=${location.lat}&lon=${location.lon}`
				);
			} catch (err) {
				console.log(err);
			}
		}
		const data = await response.json();
		this.props.storeData(data);
	}

	componentDidMount() {
		this.setState({ location: queryString.parse(this.props.location.search) });
		this.fetchWeather(queryString.parse(this.props.location.search), this.props.units);
	}

	handleTemp = () => {
		const location = queryString.parse(this.props.location.search);
		if (this.props.units === 'imperial') {
			this.fetchWeather(location, 'metric');
			this.props.changeUnits('metric')
		} else {
			this.fetchWeather(location, 'imperial');
			this.props.changeUnits('imperial')
		}
	};

	render() {
		return this.state.data.cod === '404' ? (
			<ErrorPage />
		) : (
			<div className="mainpage">
				{/* <Header data={this.state.data} units={this.state.units} handleTemp={this.handleTemp} />
				<TodayWeather data={this.state.data} units={this.state.units} />
				<Footer data={this.state.data} units={this.state.units} /> */}
				<Header   data={this.props.data} units={this.props.units} handleTemp={this.handleTemp} />
				<TodayWeather data={this.props.data} units={this.props.units}  />
				<Footer data={this.props.data} units={this.props.units} />
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	units: state.main.units,
	data: state.main.data
})

const mapDispatchToProps = {
	storeData: storeData,
	changeUnits: changeUnits
	
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
