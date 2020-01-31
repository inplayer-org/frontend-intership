import React, { Component } from 'react';
import { connect } from 'react-redux'
import InputCity from '../../components/InputCity/inputcity';
import CurrentLocation from '../../components/CurrentLocation/currentlocation';
import './homepage.scss';


class HomePage extends Component {
	state = {
		city: ''

	};
	handleChange = (e) => {
		this.setState({
			city: e.target.value
		});
	};

	// handleSubmit = () => {
	// 	this.props.history.push(`forecast?city=${this.state.city}`);
	// };

	// handleClick = () => {
	// 	navigator.geolocation.getCurrentPosition(
	// 		(pos) => {
	// 			const lat = pos.coords.latitude;
	// 			const lon = pos.coords.longitude;
	// 			this.props.history.push(`forecast?lat=${lat}&lon=${lon}`);
	// 		},
	// 		() => {
	// 			this.setState({ errorMsg: true });
	// 		}
	// 	);
	// };

	render() {
		return (
			<div className="homepage">
				{this.props.errorMsg ? <span>Error Location</span> : null}
				<InputCity handleChange={this.handleChange} city={this.state.city} history={this.props.history} />
				<span className='text'>or</span>
				<CurrentLocation history={this.props.history}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	errorMsg: state.home.errorMsg
})



export default connect(mapStateToProps)(HomePage);
