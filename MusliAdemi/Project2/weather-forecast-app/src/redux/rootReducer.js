import { combineReducers } from "redux";
import apiReducer from "./apiData/api-reducer";

export default combineReducers({
    data: apiReducer
});
