import MainPageActionTypes from './main.types';

const INITIAL_STATE = {
	data: [],
	units: 'imperial'
};

const mainReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MainPageActionTypes.STORE_DATA:
			return {
				...state,
				data: action.payload
			};
		case MainPageActionTypes.WEATHER_UNITS:
			return {
				...state,
				units: action.payload

			}	
		default:
			return state;
	}
};

export default mainReducer;
