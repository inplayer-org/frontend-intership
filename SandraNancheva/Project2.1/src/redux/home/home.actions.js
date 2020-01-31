import HomePageActionTypes from './home.types.js';

export const addCity = (city) => ({
	type: HomePageActionTypes.STORE_CITY,
    payload: city
});

export const addLocation = (lat, lon) =>({
    type: HomePageActionTypes.STORE_CURRENT_LOCATION,
    payload: {lat: lat, lon: lon}
})

export const toggleErrorMessage = () => ({
    type:HomePageActionTypes.TOGGLE_ERROR_MESSAGE
})
