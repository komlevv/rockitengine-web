import s from './BlockProjectNext.scss';
import HeaderM from '../HeaderM/HeaderM';
import BannerHero from '../BannerHero/BannerHero';
import Divider from '../Divider/Divider';

const BlockProjectNext = ({ data, animationRef }) => (
  <div ref={animationRef} className={s.blockProjectNext}>
    <Divider />
    <HeaderM headerText={data.h} />
    <BannerHero
      headerText={data.banner.h}
      paragraphText={data.banner.p}
      imgData={data.banner.img}
      logoSrc={data.banner.logo}
      fontColor={data.banner.fontColor}
      linkTo={data.banner.linkTo}
    />
  </div>
);

export default BlockProjectNext;
