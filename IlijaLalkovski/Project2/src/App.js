import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home-page/home-page.component';
import ForecastPage from './pages/forecast-page/forecast-page.component';
import ErrorPage from './pages/error-page/error-page.component';

class App extends Component {
	clearSuccess = () => {
		this.setState({ isSuccess: false });
	};

	clearState = () => {
		this.setState({ isFail: false, city: '' });
	};

	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route
						path="/forecast"
						render={(props) => (
							<ForecastPage
								{...props}
								{...this.state}
								clearSuccess={this.clearSuccess}
							/>
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
