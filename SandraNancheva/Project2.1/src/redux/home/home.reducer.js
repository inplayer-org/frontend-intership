import HomePageActionTypes from './home.types';

const INITIAL_STATE = {
	city: '',
	location: {},
	errorMsg: false
};

const homeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case HomePageActionTypes.STORE_CITY:
			return {
				...state,
				city: action.payload
			};
		case HomePageActionTypes.STORE_CURRENT_LOCATION:
			return {
				...state,
				location: action.payload
			};
		case HomePageActionTypes.TOGGLE_ERROR_MESSAGE:
			return {
				...state,
				errorMsg: !state.errorMsg
			}
		default:
			return state;
	}
};

export default homeReducer;
