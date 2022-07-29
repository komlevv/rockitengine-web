import {useTheme} from "../contexts/themeContext.js";
import {useEffect} from "react";

export const useSetTheme = (theme) => {
    const {setTheme} = useTheme();
    useEffect(() => {
        setTheme(theme)
    }, [])
}

