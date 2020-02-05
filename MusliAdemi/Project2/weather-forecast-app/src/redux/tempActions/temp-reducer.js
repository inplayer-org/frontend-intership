import { SHOW_CELSIUS, SHOW_FAHRENHEIT } from "./temp-actions";

const initialState = {
    showCelsius: true,
    showFahrenheit: false
};

const tempReducer = (state = initialState, action) => {
    console.log("ENTER HERE")

    switch (action.type) {
        case SHOW_CELSIUS:
            console.log(state)
            return {
                showCelsius: !state.showCelsius,
                showFahrenheit: !state.showFahrenheit
            };
        case SHOW_FAHRENHEIT:
            console.log(state)
            return {
                showFahrenheit: !state.showFahrenheit,
                showCelsius: !state.showCelsius
            };
        default:
            return state;
    }
};

export const getCelsius = state => 
{
    console.log("TEMP CELSIUS STATE")
    console.log(state)
    return state.toggleTemp.showCelsius;
} 
export const getFahrenheit = state => 
{
    {
        console.log("TEMP FAHRENHEIT STATE")
        console.log(state)
        return state.toggleTemp.showFahrenheit;
    } 
}

export default tempReducer;
