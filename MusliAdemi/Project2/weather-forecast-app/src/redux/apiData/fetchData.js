import {
    fetchDataPreload,
    fetchDataSuccess,
    fetchDataError
} from "./api-actions";

function fetchData(cityName) {
    let weatherAPIlinkC = `http://api.openweathermap.org/data/2.5//forecast/daily?units=metric&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=7&q=${cityName}`;
    return dispatch => {
        dispatch(fetchDataPreload());
        fetch(weatherAPIlinkC)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw res.error;
                }
                dispatch(fetchDataSuccess(res));
                // console.log(res);
                return res;
            })
            .catch(() => {
                console.log(cityName);
                dispatch(fetchDataError(cityName));
            });
    };
}
export default fetchData;
