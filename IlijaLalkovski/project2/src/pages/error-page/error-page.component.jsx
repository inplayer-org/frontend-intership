import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import './error-page.styles.scss';
import './404.jpg';

class ErrorPage extends Component {
	handleOnClick = () => {
		return <Redirect push to={`/`} />;
	};

	render() {
		return (
			<div className="error-page">
				<div className="error-container">
					<h1>Oooooops... Something went wrong.</h1>
					<img src={require('./404.jpg')} alt="Cute cat" />
					<button onClick={this.handleOnClick}>Return to Home Page</button>
				</div>
			</div>
		);
	}
}

export default ErrorPage;
