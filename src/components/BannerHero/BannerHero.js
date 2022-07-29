import s from './BannerHero.css';
import Paragraph from "../Paragraph/Paragraph";
import HeaderL from "../HeaderL/HeaderL.js";
import BannerLogo from "../BannerLogo/BannerLogo.js";
import {Link} from "react-router-dom";


const BannerHero = ({
                        headerText, paragraphText, fontColor,
                        imgSrc, logoSrc, linkTo = "#", innerRef
                    }) => (
    <Link ref={innerRef} to={linkTo} className={s.bannerHero} style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: `${fontColor}`,
    }}>
        <HeaderL headerText={headerText}/>
        <BannerLogo invert img={logoSrc}/>
        <Paragraph paragraphText={paragraphText}/>
    </Link>
)

export default BannerHero;