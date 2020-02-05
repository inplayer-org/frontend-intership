import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetData as resetDataAction } from '../../redux/forecast/forecast.actions';



import './error-page.styles.scss';
import './404.jpg';

class ErrorPage extends PureComponent {
	state = {
		isClicked: false
	};

	componentDidMount() {
		const { resetData } = this.props;
		resetData();
	}

	handleOnClick = (e) => {
		e.preventDefault();
		this.setState({ isClicked: true });
	};

	render() {
		if (this.state.isClicked) {
			return <Redirect to={`/`} />;
		}

		return (
			<div className="error-page">
				<div className="error-container">
					<h1>Oooooops... Something went wrong.</h1>
					<img src={require('./404.jpg')} alt="Cute cat" />
					<button className="link" onClick={this.handleOnClick}>
						Return to Home Page
					</button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	resetData: resetDataAction
};

export default connect(null, mapDispatchToProps)(ErrorPage);


