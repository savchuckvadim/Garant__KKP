import store from "../modules/redux/redux-store";


const getTheme = () => {
    let state = store.getState();
    let currentTheme = state.theme.style[state.theme.indexOfTheme]
    return currentTheme


}

export const theme = getTheme()