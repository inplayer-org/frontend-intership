import {
	SET_FORECAST_REQUEST,
	SET_FORECAST_SUCCESS,
	SET_FORECAST_FAIL,
	RESET_DATA
} from '../../redux/forecast/forecast.actions';

const INITIAL_STATE = {
	city: '',
	isSuccess: false,
	isFail: false,
	list: []
};

const forecastReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_FORECAST_REQUEST:
			return INITIAL_STATE;
		case SET_FORECAST_SUCCESS:
			return {
				...state,
				isSuccess: true,
				...action.payload.data
			};
		case SET_FORECAST_FAIL:
			return {
				...state,
				isFail: true
			};

		case RESET_DATA:
			return {
				...state,
				isFail: false,
				isSuccess: false
			};
		default:
			return state;
	}
};

export default forecastReducer;
