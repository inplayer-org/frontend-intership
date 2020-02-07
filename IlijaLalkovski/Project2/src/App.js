import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home-page/home-page.component';
import ForecastPage from './pages/forecast-page/forecast-page.component';
import ErrorPage from './pages/error-page/error-page.component';

const App = () => (
	<div className="App">
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/forecast" component={ForecastPage} />
			<Route path="/404notfound" component={ErrorPage} />
		</Switch>
	</div>
);

export default App;
