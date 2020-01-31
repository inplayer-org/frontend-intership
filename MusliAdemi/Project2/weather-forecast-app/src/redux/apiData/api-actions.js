export const FETCH_DATA_PRELOAD = "FETCH_DATA_PRELOAD";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export function fetchDataPreload() {
    return {
        type: FETCH_DATA_PRELOAD
    };
}

export function fetchDataSuccess(data) {
    // console.log(data);
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
