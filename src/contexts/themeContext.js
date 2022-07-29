import {createContext, useContext, useState} from "react";
import s from './themeContext.css';

export const THEMES = {
    DEFAULT: {
        accent: s.defaultAccent,
        hoverStyle: s.defaultHover,
        hoverStyleMenu: s.defaultMenuHover,
    },
    EQUINOX: {
        accent: s.equinoxAccent,
        hoverStyle: s.equinoxHover,
        hoverStyleMenu: s.equinoxMenuHover,
    },
    CHOPARD: {
        accent: s.chopardAccent,
        hoverStyle: s.chopardHover,
        hoverStyleMenu: s.chopardMenuHover,
    },
    SPOTIFY_HULU: {
        accent: s.spotifyHuluAccent,
        hoverStyle: s.spotifyHuluHover,
        hoverStyleMenu: s.spotifyHuluMenuHover,
    },
    GREYGOOSE: {
        accent: s.greyGooseAccent,
        hoverStyle: s.greyGooseHover,
        hoverStyleMenu: s.greyGooseMenuHover,
    },
    JM_UPGRADE: {
        accent: s.jMUpgradeAccent,
        hoverStyle: s.jMUpgradeHover,
        hoverStyleMenu: s.jMUpgradeMenuHover,
    },
    AWAY: {
        accent: s.awayAccent,
        hoverStyle: s.awayHover,
        hoverStyleMenu: s.awayMenuHover,
    },
    CARTIER: {
        accent: s.cartierAccent,
        hoverStyle: s.cartierHover,
        hoverStyleMenu: s.cartierMenuHover,
    },
    JOHNHARDY_AA: {
        accent: s.johnHardyAAAccent,
        hoverStyle: s.johnHardyAAHover,
        hoverStyleMenu: s.johnHardyAAMenuHover,
    },
    JOHNHARDY_JM: {
        accent: s.johnHardyJMAccent,
        hoverStyle: s.johnHardyJMHover,
        hoverStyleMenu: s.johnHardyJMMenuHover,
    }
}

const ThemeContext = createContext(null);

export const useTheme = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    return {theme, setTheme};
}

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(THEMES.DEFAULT);
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}
