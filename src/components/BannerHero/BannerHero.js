import { useNavigate } from 'react-router-dom';
import s from './BannerHero.scss';
import Paragraph from '../Paragraph/Paragraph';
import HeaderL from '../HeaderL/HeaderL';
import Image from '../Image/Image';
import Button from '../Button/Button';

const BannerHero = ({
  headerText,
  paragraphText,
  imgData,
  logoSrc,
  linkTo = '#',
  animationRef,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(linkTo);
  };
  return (
    <div
      className={s.bannerHero}
      ref={animationRef}
      role="button"
      tabIndex={0}
      onClick={handleClick}
    >
      <HeaderL headerText={headerText} />
      <img alt="" style={{ filter: 'invert(100%)' }} className={s.bannerLogo} src={logoSrc} />
      <Paragraph paragraphText={paragraphText} />
      <Button buttonText="View Case Study" href={linkTo} />
      <Image metaData={imgData} cls={s} />
    </div>
  );
};

export default BannerHero;
