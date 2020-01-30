import HomePageActionTypes from './home.types';

const INITIAL_STATE = {
	city: ''
};

const homeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case HomePageActionTypes.UPDATE_INPUT:
			return {
				...state,
				city: action.payload
			};
		default:
			return state;
	}
};

export default homeReducer;
