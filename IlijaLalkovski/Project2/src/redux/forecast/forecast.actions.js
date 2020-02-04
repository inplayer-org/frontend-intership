import axios from 'axios';

export const SET_FORECAST_REQUEST = 'SET_FORECAST_REQUEST';
export const SET_FORECAST_SUCCESS = 'SET_FORECAST_SUCCESS';
export const SET_FORECAST_FAIL = 'SET_FORECAST_FAIL';

export const getForecast = (city) => async (dispatch) => {
	dispatch({ type: SET_FORECAST_REQUEST });

	try {
		const response = await axios({
			method: 'get',
			url: `http://api.openweathermap.org/data/2.5//forecast/daily?units=metric&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=7&q=${city}`
		});

		dispatch({
			type: SET_FORECAST_SUCCESS,
			payload: response
		});
	} catch (error) {
		dispatch({ type: SET_FORECAST_FAIL });
	}
};
