import BlockHeroText from "../BlockHeroText/BlockHeroText.js";
import BlockContainer from "../BlockContainer/BlockContainer.js";
import HeaderM from "../HeaderM/HeaderM.js";
import BannerHero from "../BannerHero/BannerHero.js";
import BannerSub from "../BannerSub/BannerSub.js";
import BlockClients from "../BlockClients/BlockClients.js";
import BlockContact from "../BlockContact/BlockContact.js";

import {data as dataEquinox} from '../ProjectPages/PageEquinox/data.js'
import {data as dataCartier} from '../ProjectPages/PageCartier/data.js'
import {data as dataAway} from '../ProjectPages/PageAway/data.js'
import {data as dataChopard} from '../ProjectPages/PageChopard/data.js'
import {data as dataJMUpgrade} from '../ProjectPages/PageJMUpgrade/data.js'
import {data as dataJohnHardyJM} from '../ProjectPages/PageJohnHardyJM/data.js'
import {data as dataJohnHardyAA} from '../ProjectPages/PageJohnHardyAA/data.js'
import {data as dataSpotifyHulu} from '../ProjectPages/PageSpotifyHulu/data.js'
import {data as dataGreyGoose} from '../ProjectPages/PageGreyGoose/data.js'
import Span from "../Span/Span";
import {THEMES, useTheme} from "../../contexts/themeContext";
import {useSetTheme} from "../../hooks/useSetTheme";
import {useAnimateRefs} from "../../hooks/useAnimateRefs";
import Divider from "../Divider/Divider";

const data = {
    main: {
        h: <>Our <Span>work</Span></>,
        p: "We build digital solutions for global brands, " +
            "enterprises, agencies, and startups that want to " +
            "grow and scale-up. Take a look at our selected projects " +
            "from various industries.",
    },
    cases: {
        h: "Case Studies",
        items: [
            dataEquinox,
            dataJMUpgrade,
            dataChopard,
            dataJohnHardyJM,
            dataGreyGoose,
            dataJohnHardyAA,
            dataSpotifyHulu,
            dataAway,
            dataCartier,
        ]
    }
}

const PageProjects = () => {
    useSetTheme(THEMES.DEFAULT);
    const animateRefs = useAnimateRefs(13);
    return (
        <>
            <BlockHeroText innerRef={animateRefs[0]}
                           headerText={data.main.h}
                           paragraphText={data.main.p}/>
            <BlockContainer innerRef={animateRefs[1]}>
                <Divider/>
                <HeaderM headerText={data.cases.h}/>
                {data.cases.items.map((dataPage, i) => (
                    <BannerHero
                        innerRef={animateRefs[i+2]}
                        linkTo={dataPage.next.banner.linkTo}
                        key={i}
                        headerText={dataPage.next.banner.h}
                        paragraphText={dataPage.next.banner.p}
                        imgSrc={dataPage.next.banner.imgShort}
                        logoSrc={dataPage.next.banner.logo}
                        fontColor={dataPage.next.banner.fontColor}
                    />))}
            </BlockContainer>
            <BlockClients innerRef={animateRefs[11]}/>
            <BlockContact innerRef={animateRefs[12]}/>
        </>
    )
};

export default PageProjects;
