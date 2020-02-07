import { FETCH_DATA_ERROR, FETCH_DATA_PRELOAD, FETCH_DATA_SUCCESS, CHANGE_CURRENT_DAY } from "./api-actions";

const initialState = {
    preload: false,
    oneWeekWeather: [],
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
                oneWeekWeather: action.payload.list,
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
        case CHANGE_CURRENT_DAY: {
            return {
                ...state,
                currentDay: action.payload
            };
        }
        default:
            return state;
    }
};

export const getOneWeekWeather = state => state.data.oneWeekWeather;
export const getCity = state => state.data.city.name;
export const getPreload = state => state.data.preload;
export const getCurrentDay = state => state.data.currentDay;

export default apiReducer;
