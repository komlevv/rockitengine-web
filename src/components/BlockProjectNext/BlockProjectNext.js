import s from './BlockProjectNext.css';
import HeaderM from "../HeaderM/HeaderM.js";
import BannerHero from "../BannerHero/BannerHero.js";
import Divider from "../Divider/Divider";


const BlockProjectNext = ({data, innerRef}) => (
    <div ref={innerRef} className={s.blockProjectNext}>
        <Divider/>
        <HeaderM headerText={data.h}/>
        <BannerHero headerText={data.banner.h}
                    paragraphText={data.banner.p}
                    imgSrc={data.banner.img}
                    logoSrc={data.banner.logo}
                    fontColor={data.banner.fontColor}
                    linkTo={data.banner.linkTo}
        />
    </div>
)

export default BlockProjectNext;