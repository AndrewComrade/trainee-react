import {useState} from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState()


    return [theme, setTheme]
}