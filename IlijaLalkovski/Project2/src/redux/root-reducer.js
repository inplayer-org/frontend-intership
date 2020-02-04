import { combineReducers } from 'redux';

import forecastReducer from './forecast/forecast.reducer';

export default combineReducers({
	forecast: forecastReducer
});
