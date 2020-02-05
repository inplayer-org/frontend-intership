import { FETCH_DATA_ERROR, FETCH_DATA_PRELOAD, FETCH_DATA_SUCCESS } from "./api-actions";

const initialState = {
    preload: false,
    sixDaysWeather: [],
    currentDay: [],
    city: {}
};

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_PRELOAD:
            return {
                ...state,
                preload: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                sixDaysWeather: action.payload.list.slice(1),
                currentDay: action.payload.list[0],
                city: action.payload.city,
                preload: false
            };
        case FETCH_DATA_ERROR:
            return {
                ...state,
                city: action.payload,
                preload: false
            };
        default:
            return state;
    }
};

export const getsixDaysWeather = state => {
    console.log("STATE AFTER");
    console.log(state);
    return state.data.sixDaysWeather;
};

export const getCity = state => state.data.city.name;
export const getPreload = state => state.data.preload;
export const currentDay = state => state.data.currentDay;

export default apiReducer;
