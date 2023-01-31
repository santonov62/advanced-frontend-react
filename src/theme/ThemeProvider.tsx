import {LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext} from "./ThemeContext";
import {FC, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.LIGHT;
const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<THEME>(defaultTheme);

    const defaultProps = useMemo(() => ({
        setTheme: setTheme,
        theme: theme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;