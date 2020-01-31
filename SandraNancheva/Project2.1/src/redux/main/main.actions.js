import MainPageActionTypes from './main.types'

export const storeData = (data) => ({
    type: MainPageActionTypes.STORE_DATA,
    payload: data
})

export const changeUnits = (units) => ({
    type: MainPageActionTypes.WEATHER_UNITS,
    payload: units
})