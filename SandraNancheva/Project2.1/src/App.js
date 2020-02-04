import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import MainPage from './pages/mainpage/mainpage';
import './App.css';
import ErrorPage from './pages/errorpage/errorpage';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/errorcity" component={ErrorPage} />
				<Route path="/forecast" component={MainPage} />
				<Route exact path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
