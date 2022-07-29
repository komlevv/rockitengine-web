import s from './BlockFooter.css';
import HeaderL from "../HeaderL/HeaderL.js";
import Divider from "../Divider/Divider.js";
import {Link} from "react-router-dom";
import {NAVLINKS, ROUTES} from "../App/ROUTES";
import LogoRE from "../LogoRE/LogoRE";
import {useTheme} from "../../contexts/themeContext";

const BlockFooter = () => {
    const {theme} = useTheme();
    return (
        <div className={s.blockFooter}>
            <div className={s.footerContainer}>
                <Link to={ROUTES.ROOT}>
                    <LogoRE colorA={theme.accent} colorB={"#fff"}/>
                </Link>
                <Divider/>
                {NAVLINKS.map((link, i) => (
                    <Link key={i} to={link.to} className={theme.hoverStyle}>
                        <HeaderL headerText={link.text}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BlockFooter;