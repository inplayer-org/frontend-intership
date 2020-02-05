import { SHOW_CELSIUS, SHOW_FAHRENHEIT } from "./temp-actions";

const initialState = {
    showCelsius: true,
    showFahrenheit: false
};

const tempReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CELSIUS:
            return {
                showCelsius: !state.showCelsius,
                showFahrenheit: !state.showFahrenheit
            };
        case SHOW_FAHRENHEIT:
            return {
                showFahrenheit: !state.showFahrenheit,
                showCelsius: !state.showCelsius
            };
        default:
            return state;
    }
};

export const getCelsius = state => state.toggleTemp.showCelsius;
export const getFahrenheit = state => state.toggleTemp.showFahrenheit;

export default tempReducer;
