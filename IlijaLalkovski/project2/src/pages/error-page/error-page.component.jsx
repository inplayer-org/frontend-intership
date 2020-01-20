import React, { PureComponent } from 'react';

import { Redirect } from 'react-router-dom';

import './error-page.styles.scss';
import './404.jpg';

class ErrorPage extends PureComponent {
	state = {
		isClicked: false
	};

	componentDidMount() {
		this.props.clearState();
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

export default ErrorPage;
