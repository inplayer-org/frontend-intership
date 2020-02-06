import { DARK_MODE_TOGGLER } from "./dark-mode-actions";

const darkModeTogglerReducer = (state = { darkMode: false }, action) => {
    switch (action.type) {
        case DARK_MODE_TOGGLER:
            return {
                darkMode: !state.darkMode
            };
        default:
            return state;
    }
};

export const getDarkModeToggler = state => {
    console.log("TOGGLER ===");
    console.log(state.daynight.darkMode);
    return state.daynight.darkMode;
};
export default darkModeTogglerReducer;
