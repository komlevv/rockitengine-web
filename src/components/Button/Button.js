import s from './Button.css';
import {Link} from "react-router-dom";
import {useTheme} from "../../contexts/themeContext";


const Button = ({buttonText, href = "#"}) => {
    const {theme} = useTheme();
    return (
        <Link className={s.button}
              style={{border: `1px solid ${theme.accent}`}}
              to={href}
        >
            {buttonText}
        </Link>
    )
}

export default Button;