export const SHOW_CELSIUS = "SHOW_CELSIUS";
export const SHOW_FAHRENHEIT = "SHOW_FAHRENHEIT";

export function tempCelsius() {
    return {
        type: SHOW_CELSIUS
    };
}
export function tempFahrenheit() {
    return { type: SHOW_FAHRENHEIT };
}
