import { Link } from 'react-router-dom';
import { useId } from 'react';
import s from './BlockFooter.scss';
import HeaderL from '../HeaderL/HeaderL';
import Divider from '../Divider/Divider';
import { NAVLINKS, ROUTES } from '../App/ROUTES';
import LogoRE from '../LogoRE/LogoRE';
import { useTheme } from '../../contexts/themeContext';

const BlockFooter = () => {
  const { theme } = useTheme();
  const id = useId();
  return (
    <div className={s.blockFooter}>
      <div className={s.footerContainer}>
        <Link to={ROUTES.ROOT}>
          <LogoRE colorA={theme.accent} colorB="#fff" />
        </Link>
        <Divider />
        {NAVLINKS.map((link, i) => (
          <Link key={`${id}-${i}`} to={link.to} className={theme.hoverStyle}>
            <HeaderL headerText={link.text} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlockFooter;
