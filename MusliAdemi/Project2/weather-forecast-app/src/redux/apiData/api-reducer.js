import { FETCH_DATA_ERROR, FETCH_DATA_PRELOAD, FETCH_DATA_SUCCESS } from "./api-actions";

const initialState = {
    preload: false,
    oneWeekWeather: [],
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
                oneWeekWeather: action.payload.list,
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

export const getOneWeekWeather = state => {
    console.log("STATE AFTER");
    console.log(state);
    return state.data.oneWeekWeather;
};
export const getCity = state => state.data.city;
export const getPreload = state => state.data.preload;

export default apiReducer;
