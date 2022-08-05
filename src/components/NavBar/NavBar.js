import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './NavBar.css';
import LogoRE from '../LogoRE/LogoRE';
import hamIconImg from './images/hamburger-icon.svg';
import hamIconImgClose from './images/hamburger-icon-close.svg';
import { useTheme } from '../../contexts/themeContext';
import { ROUTES, NAVLINKS } from '../App/ROUTES';
import { useNavScroll } from '../../hooks/useScrollListener';
import LinkNav from '../LinkNav/LinkNav';

const NavBar = () => {
  const { theme } = useTheme();
  const navHideClass = useNavScroll();
  // handle behavior on small displays
  const [hamIcon, setHamIcon] = useState(hamIconImg);
  const [overlayHide, setOverlayHide] = useState(s.overlayHide);
  const handleHamIconClick = () => {
    if (hamIcon !== hamIconImgClose) {
      // eslint-disable-next-line no-undef
      document.body.classList.add(s.stopScroll);
      setHamIcon(hamIconImgClose);
      setOverlayHide('');
    } else {
      // eslint-disable-next-line no-undef
      document.body.classList.remove(s.stopScroll);
      setHamIcon(hamIconImg);
      setOverlayHide(s.overlayHide);
    }
  };
  const handleNavLinkClick = () => {
    // eslint-disable-next-line no-undef
    document.body.classList.remove(s.stopScroll);
    setOverlayHide(s.overlayHide);
    setHamIcon(hamIconImg);
  };
  return (
    <>
      <div className={s.navBarContainer}>
        <div className={`${s.navBar}${navHideClass}`}>
          <div className={s.logo}>
            <Link to={ROUTES.ROOT} onClick={handleNavLinkClick}>
              <LogoRE colorA={theme.accent} colorB="white" />
            </Link>
          </div>
          <img
            role="presentation"
            className={s.navIcon}
            alt=""
            src={hamIcon}
            onClick={handleHamIconClick}
          />
          {NAVLINKS.map((link, i) => (
            <LinkNav
              key={i}
              onClick={handleNavLinkClick}
              to={link.to}
              className={theme.hoverStyleMenu}
            >
              {link.text}
            </LinkNav>
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
          >
            {link.text}
          </LinkNav>
        ))}
      </div>
    </>
  );
};

export default NavBar;
