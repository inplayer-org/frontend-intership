import axios from "axios";
import { fetchDataError, fetchDataPreload, fetchDataSuccess } from "./api-actions";

const fetchData = (cityName, props) => {
    let weatherAPIlinkC = `http://api.openweathermap.org/data/2.5//forecast/daily?units=metric&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=7&${cityName}`;
    return async dispatch => {
        dispatch(fetchDataPreload());
        try {
            let response = await axios(weatherAPIlinkC);
            const data = response.data;
            dispatch(fetchDataSuccess(data));
            props.history.push(`forecast/${cityName}`);
            return response;
        } catch (e) {
            const cityWithoutQequals = cityName.slice(2);
            dispatch(fetchDataError(cityWithoutQequals));
            props.history.push(`error/${cityWithoutQequals}`);
        }
    };
};
export default fetchData;
