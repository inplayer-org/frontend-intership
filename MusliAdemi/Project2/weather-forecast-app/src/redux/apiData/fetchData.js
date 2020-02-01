import axios from "axios";
import { fetchDataError, fetchDataPreload, fetchDataSuccess } from "./api-actions";

function fetchData(cityName, props) {
    let weatherAPIlinkC = `http://api.openweathermap.org/data/2.5//forecast/daily?units=metric&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=7&q=${cityName}`;
    return async dispatch => {
        dispatch(fetchDataPreload());
        try {
            let response = await axios(weatherAPIlinkC);
            const data = response.data;
            dispatch(fetchDataSuccess(data));
            props.history.push(`forecast/${cityName}`);
            return response;
        } catch (e) {
            dispatch(fetchDataError(cityName));
            props.history.push(`error/${cityName}`);
        }
    };
}
export default fetchData;
