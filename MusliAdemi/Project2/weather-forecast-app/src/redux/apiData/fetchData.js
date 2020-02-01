import { fetchDataError, fetchDataPreload, fetchDataSuccess } from "./api-actions";

function fetchData(cityName, props) {
    let weatherAPIlinkC = `http://api.openweathermap.org/data/2.5//forecast/daily?units=metric&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=7&q=${cityName}`;
    return dispatch => {
        dispatch(fetchDataPreload());
        fetch(weatherAPIlinkC)
            .then(res => res.json())
            .then(res => {
                console.log("ERROOOOR");
                console.log(res);
                if (res.cod === "404") {
                    throw res.error;
                }
                dispatch(fetchDataSuccess(res));
                props.history.push(`/forecast/${cityName}`);
                console.log("RES");
                console.log(res);
                return res;
            })
            .catch(() => {
                console.log("RES ERROR");
                console.log(cityName);
                dispatch(fetchDataError(cityName));
                props.history.push({
                    pathname: `error/`,
                    search: `${cityName}`
                });
            });
    };
}
export default fetchData;
