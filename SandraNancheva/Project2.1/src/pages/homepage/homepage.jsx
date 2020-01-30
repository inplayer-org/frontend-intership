import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import InputCity from '../../components/InputCity/inputcity';
import CurrentLocation from '../../components/CurrentLocation/currentlocation';
import './homepage.scss';

class HomePage extends Component {
	state = {
		city: '',
		lat: '',
		lon: '',
		errorMsg: false
	};
	handleChange = (e) => {
		this.setState({
			city: e.target.value
		});
	};

	handleSubmit = () => {
		this.props.history.push(`forecast?city=${this.state.city}`);
	};

	handleClick = () => {
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				const lat = pos.coords.latitude;
				const lon = pos.coords.longitude;
				this.props.history.push(`forecast?lat=${lat}&lon=${lon}`);
			},
			() => {
				this.setState({ errorMsg: true });
			}
		);
	};

	render() {
		return (
			<div className="homepage">
				{this.state.errorMsg ? <span>Error Location</span> : null}
				<InputCity handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
				<span className='text'>or</span>
				<CurrentLocation handleClick={this.handleClick} />
			</div>
		);
	}
}

const mapStateToProps=(state) => ({
	city: state.home.city
})


export default withRouter(HomePage);
