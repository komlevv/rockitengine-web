import s from "./BannerSub.css";
import BannerLogo from "../BannerLogo/BannerLogo.js";
import Paragraph from "../Paragraph/Paragraph.js";
import HeaderM from "../HeaderM/HeaderM.js";
import {Link} from "react-router-dom";

// BannerSub is the same behavior as BannerHero, but halfwide
const BannerSub = ({
                       headerText, paragraphText, imgSrc,
                       logoSrc, fontColor, linkTo = "#", innerRef
                   }) => (
    <Link ref={innerRef} to={linkTo} className={s.bannerSub}
          style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              color: `${fontColor}`,
          }}>
        <HeaderM headerText={headerText}/>
        <BannerLogo invert img={logoSrc}/>
        <Paragraph paragraphText={paragraphText}/>
    </Link>
)

export default BannerSub;