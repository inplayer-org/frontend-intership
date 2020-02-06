export const FETCH_DATA_PRELOAD = "FETCH_DATA_PRELOAD";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
export const CHANGE_CURRENT_DAY = "CHANGE_CURRENT_DAY";

export function fetchDataPreload() {
    return {
        type: FETCH_DATA_PRELOAD
    };
}

export function fetchDataSuccess(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    };
}

export function fetchDataError(cityName) {
    return {
        type: FETCH_DATA_ERROR,
        payload: cityName
    };
}

export function changeCurrentDay(city) {
    console.log("FUNC PAYLOAD");
    console.log(city);
    return {
        type: CHANGE_CURRENT_DAY,
        payload: city
    };
}
