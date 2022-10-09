import { useNavigate } from 'react-router-dom';
import s from './BannerHero.css';
import Paragraph from '../Paragraph/Paragraph';
import HeaderL from '../HeaderL/HeaderL';
import Image from '../Image/Image';

const BannerHero = ({ headerText, paragraphText, imgSrc, logoSrc, linkTo = '#', innerRef }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(linkTo);
  };
  return (
    <div className={s.bannerHero} ref={innerRef} role="button" tabIndex={0} onClick={handleClick}>
      <Image src={imgSrc} cls={s} />
      <HeaderL headerText={headerText} />
      <img alt="" style={{ filter: 'invert(100%)' }} className={s.bannerLogo} src={logoSrc} />
      <Paragraph paragraphText={paragraphText} />
    </div>
  );
};

export default BannerHero;
