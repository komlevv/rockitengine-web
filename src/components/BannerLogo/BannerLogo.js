import s from "./BannerLogo.css";

const BannerLogo = ({img, invert}) => (
    <img style={
        invert ? {filter: "invert(100%)"} : {}
    } className={s.bannerLogo} src={img}/>
)

export default BannerLogo;