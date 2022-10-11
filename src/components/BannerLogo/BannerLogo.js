import s from './BannerLogo.scss';

const BannerLogo = ({ img, invert }) => (
  <img alt="" style={invert ? { filter: 'invert(100%)' } : {}} className={s.bannerLogo} src={img} />
);

export default BannerLogo;
