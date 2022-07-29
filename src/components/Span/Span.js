import {useTheme} from "../../contexts/themeContext";

const Span = ({children}) => {
    const {theme} = useTheme();
    return (
        <span style={{color: theme.accent}}>{children}</span>
    )
}

export default Span;