import HomePageActionTypes from './home.types.js';

export const updateInput = (input) => ({
	type: HomePageActionTypes.UPDATE_INPUT,
    // payload: { city: input }
    payload: input
});
