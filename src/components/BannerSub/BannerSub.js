import { Link } from 'react-router-dom';
import s from './BannerSub.scss';
import BannerLogo from '../BannerLogo/BannerLogo';
import Paragraph from '../Paragraph/Paragraph';
import HeaderM from '../HeaderM/HeaderM';

// BannerSub is the same behavior as BannerHero, but halfwide
const BannerSub = ({
  headerText,
  paragraphText,
  imgSrc,
  logoSrc,
  fontColor,
  linkTo = '#',
  animationRef,
}) => (
  <Link
    ref={animationRef}
    to={linkTo}
    className={s.bannerSub}
    style={{
      backgroundImage: `url(${imgSrc})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      color: `${fontColor}`,
    }}
  >
    <HeaderM headerText={headerText} />
    <BannerLogo invert img={logoSrc} />
    <Paragraph paragraphText={paragraphText} />
  </Link>
);

export default BannerSub;
