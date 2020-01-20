import React, { PureComponent } from 'react';

import { Redirect, NavLink } from 'react-router-dom';

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
		console.log('Is Clicked');
		this.setState({ isClicked: true });
	};

	render() {
		if (this.state.isClicked) {
			console.log('vvv asdbdagad');
			return <Redirect to={`/home`} />;
		} else console.log(this.state.isClicked);

		return (
			<div className="error-page">
				<div className="error-container">
					<h1>Oooooops... Something went wrong.</h1>
					<img src={require('./404.jpg')} alt="Cute cat" />
					<button className="link" onClick={this.handleOnClick}>
						Return to Home Page
					</button>
					{/* <NavLink className="link" to={`/home`}>
						Return to Home Page Link
					</NavLink> */}
				</div>
			</div>
		);
	}
}

export default ErrorPage;
