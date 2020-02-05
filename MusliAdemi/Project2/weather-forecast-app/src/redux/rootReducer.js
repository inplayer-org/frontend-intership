import { combineReducers } from "redux";
import apiReducer from "./apiData/api-reducer";
import tempReducer from './tempActions/temp-reducer'

export default combineReducers({
    data: apiReducer,
    toggleTemp: tempReducer
});
