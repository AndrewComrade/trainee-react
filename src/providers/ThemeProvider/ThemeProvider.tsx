import {createContext, FC, ReactNode, useEffect, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY} from "@/const/localStorage";

export enum Theme {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({})

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

export const ThemeProvider = (props: ThemeProviderProps) => {
    const {children, initialTheme} = props

    const [theme, setTheme] = useState<Theme>(initialTheme || fallbackTheme || Theme.LIGHT)
    const [isThemeInited, setIsThemeIninted] = useState(false)


    useEffect(() => {
        if (!isThemeInited && initialTheme) {
            setTheme(initialTheme)
            setIsThemeIninted(true)
        }
    }, [isThemeInited, initialTheme])

    useEffect(() => {
        document.body.className = theme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    }, [theme])

    const defaultProps = {
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
