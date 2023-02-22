import { createContext, useReducer } from "react"

export const ThemeContext = createContext();

const INITIAL_STATE = { darkMode: true };

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    )
};


export const LangContext = createContext();
const INITIAL_LANG_STATE = { translateText: true };

const langReducer = (state, action) => {
    switch (action.type) {
        case "JAP":
            return { translateText: !state.translateText };
        default:
            return state;
    }
};

export const LangProvider = (props) => {
    const [state, dispatch] = useReducer(langReducer, INITIAL_LANG_STATE);
    return (
        <LangContext.Provider value={{ state, dispatch }}>
            {props.children}
        </LangContext.Provider>
    )
};


