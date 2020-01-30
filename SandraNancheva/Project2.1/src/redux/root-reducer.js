import { combineReducers } from 'redux'

import homeReducer from './home/home.reducer'

export default combineReducers({
    home: homeReducer
})