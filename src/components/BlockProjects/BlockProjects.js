import s from './BlockProjects.css';

import HeaderM from "../HeaderM/HeaderM";
import BannerHero from "../BannerHero/BannerHero.js";
import BannerSub from "../BannerSub/BannerSub.js";
import Button from "../Button/Button.js";

import {data as dataEquinox} from '../ProjectPages/PageEquinox/data.js'
import {data as dataCartier} from '../ProjectPages/PageCartier/data.js'
import {data as dataAway} from '../ProjectPages/PageAway/data.js'
import {data as dataChopard} from '../ProjectPages/PageChopard/data.js'
import {data as dataJMUpgrade} from '../ProjectPages/PageJMUpgrade/data.js'
import {data as dataJohnHardyJM} from '../ProjectPages/PageJohnHardyJM/data.js'
import {data as dataJohnHardyAA} from '../ProjectPages/PageJohnHardyAA/data.js'
import {data as dataSpotifyHulu} from '../ProjectPages/PageSpotifyHulu/data.js'
import {data as dataGreyGoose} from '../ProjectPages/PageGreyGoose/data.js'
import {ROUTES} from "../App/ROUTES";
import {useAnimateRefs} from "../../hooks/useAnimateRefs";
import Divider from "../Divider/Divider";
import {mapContentWithRefs} from "../../utils/utils";

const dataPages = [
    dataEquinox,
    dataJMUpgrade,
    dataChopard,
    dataJohnHardyAA,
    dataGreyGoose,
    dataJohnHardyJM,
    dataCartier,
    dataAway,
    dataSpotifyHulu,
]

const data = {
    h: "Our projects",
    p: "Software design and development provided " +
        "by carefully selected and talented people who " +
        "see the bigger picture - your daily business " +
        "challenges and your customers’ needs.",
    buttonText: "See all projects"
}

const content = [
    <Divider/>,
    <HeaderM headerText={data.h}/>,
    dataPages.slice(0, 5).map((dataPage, i) => (
        <BannerHero
            key={i}
            linkTo={dataPage.next.banner.linkTo}
            headerText={dataPage.next.banner.h}
            paragraphText={dataPage.next.banner.p}
            imgSrc={dataPage.next.banner.imgShort}
            logoSrc={dataPage.next.banner.logo}
            fontColor={dataPage.next.banner.fontColor}
        />)),
    <Button href={ROUTES.PROJECTS} buttonText={data.buttonText}/>
].flat()

const BlockProjects = ({innerRef}) => {
    const animateRefs = useAnimateRefs(content.length);
    return (
        <div ref={innerRef} className={s.blockProjects}>
            {mapContentWithRefs(content, animateRefs)}
        </div>
    )
}

export default BlockProjects;