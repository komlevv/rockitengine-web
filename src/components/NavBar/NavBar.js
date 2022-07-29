import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import s from './NavBar.css';
import LogoRE from '../LogoRE/LogoRE.js';
import hamIconImg from './images/hamburger-icon.svg';
import hamIconImgClose from './images/hamburger-icon-close.svg';
import {useTheme} from "../../contexts/themeContext";
import {ROUTES, NAVLINKS} from "../App/ROUTES";
import {useNavScroll, useScrollListener} from "../../hooks/useScrollListener";
import LinkNav from "../LinkNav/LinkNav";


const NavBar = () => {
    const {theme} = useTheme();

    const navHideClass = useNavScroll()
    // handle scroll
    // const scroll = useScrollListener();
    // const [navHideClass, setNavHideClass] = useState("");
    // useEffect(() => {
    //     let _hideClass = ""
    //     if (scroll.y > 100 && (scroll.y - scroll.prevY) > 0)
    //         _hideClass = " " + s.navBarHide;
    //     setNavHideClass(_hideClass);
    // }, [scroll.y, scroll.prevY]);

    // handle behavior on small displays
    const [hamIcon, setHamIcon] = useState(hamIconImg);
    const [overlayHide, setOverlayHide] = useState(s.overlayHide);
    const handleHamIconClick = () => {
        if (hamIcon !== hamIconImgClose) {
            document.body.classList.add(s.stopScroll)
            setHamIcon(hamIconImgClose);
            setOverlayHide("")
        } else {
            document.body.classList.remove(s.stopScroll)
            setHamIcon(hamIconImg)
            setOverlayHide(s.overlayHide)
        }
    }
    const handleNavLinkClick = () => {
        document.body.classList.remove(s.stopScroll)
        setOverlayHide(s.overlayHide)
        setHamIcon(hamIconImg)
    }
    return (
        <>
            <div className={s.navBarContainer}>
                <div className={`${s.navBar}${navHideClass}`}>
                    <div className={s.logo}>
                        <Link to={ROUTES.ROOT} onClick={handleNavLinkClick}>
                            <LogoRE colorA={theme.accent} colorB="white"/>
                        </Link>
                    </div>
                    <img className={s.navIcon} alt=""
                         src={hamIcon} onClick={handleHamIconClick}/>
                    {NAVLINKS.map((link, i) => (
                        <LinkNav
                            key={i}
                            onClick={handleNavLinkClick}
                            to={link.to}
                            className={theme.hoverStyleMenu}
                        >{link.text}</LinkNav>
                    ))}
                </div>
            </div>
            <div className={`${s.overlay} ${overlayHide}`}>
                {NAVLINKS.map((link, i) => (
                    <LinkNav
                        key={i}
                        onClick={handleNavLinkClick}
                        to={link.to}
                        className={theme.hoverStyleMenu}
                    >{link.text}</LinkNav>
                ))}
            </div>
        </>
    );
}


export default NavBar;