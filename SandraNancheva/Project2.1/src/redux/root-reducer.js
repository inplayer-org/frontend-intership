import { combineReducers } from 'redux'

import homeReducer from './home/home.reducer'
import mainReducer from './main/main.reducer'

export default combineReducers({
    home: homeReducer,
    main: mainReducer
})