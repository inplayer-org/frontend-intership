import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import forecastReducer from './forecast/forecast.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [ 'forecast' ]
};

const rootReducer = combineReducers({
	forecast: forecastReducer
});

export default persistReducer(persistConfig, rootReducer);
