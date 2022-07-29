import BlockProjectMain from "../../BlockProjectMain/BlockProjectMain";
import BlockOverview from "../../BlockOverview/BlockOverview";
import BlockProjectNext from "../../BlockProjectNext/BlockProjectNext";
import BlockContact from "../../BlockContact/BlockContact";
import BlockHeroTextM from "../../BlockHeroTextM/BlockHeroTextM";
import GridContainerHalf from '../../GridContainerHalf/GridContainerHalf.js';
import ImageFullWide from "../../ImageFullWide/ImageFullWide.js";
import ImageHalfWide from "../../ImageHalfWide/ImageHalfWide.js";
import ImageOneThird from "../../ImageOneThird/ImageOneThird.js";
import HeaderS from "../../HeaderS/HeaderS.js";
import ListItem from "../../ListItem/ListItem.js";
import Video from "../../Video/Video.js";

import {data} from "./data.js";
import {data as dataNext} from "../PageJohnHardyJM/data";
import {THEMES} from "../../../contexts/themeContext";
import BlockContainer from "../../BlockContainer/BlockContainer";
import {useSetTheme} from "../../../hooks/useSetTheme";
import {useAnimateRefs} from "../../../hooks/useAnimateRefs";

const PageJMUpgrade = () => {
    useSetTheme(THEMES.JM_UPGRADE);
    const animateRefs = useAnimateRefs(29);
    return (
        <>
            <BlockProjectMain innerRef={animateRefs[0]} data={data.main}/>
            <BlockOverview innerRef={animateRefs[1]} data={data.overview}/>
            <BlockContainer>
                <Video autoplay muted loop
                    innerRef={animateRefs[2]} src={data.media.video[0]} poster={data.media.imgWide[0]}/>
                <BlockHeroTextM innerRef={animateRefs[3]} headerText={data.other.a.h} paragraphText={data.other.a.p}/>
                <Video controls muted loop
                    innerRef={animateRefs[4]} src={data.media.video[1]} poster={data.media.imgWide[1]}/>
                <ImageHalfWide innerRef={animateRefs[5]} src={data.media.imgSquare[0]}/>
                <ImageHalfWide innerRef={animateRefs[6]} src={data.media.imgSquare[1]}/>
                <BlockHeroTextM innerRef={animateRefs[7]} headerText={data.other.b.h} paragraphText={data.other.b.p}/>
                <Video controls muted loop
                    innerRef={animateRefs[8]} src={data.media.video[2]} poster={data.media.imgWide[2]}/>
                <GridContainerHalf innerRef={animateRefs[9]}>
                    <HeaderS headerText={data.other.c.h}/>
                    {data.other.c.items.map((itemText, i) => (<ListItem text={itemText} key={i}/>))}
                </GridContainerHalf>
                <ImageHalfWide innerRef={animateRefs[10]} src={data.media.imgVertical[0]}/>
                <BlockHeroTextM innerRef={animateRefs[11]} headerText={data.other.d.h} paragraphText={data.other.d.p}/>
                <Video controls muted loop
                    innerRef={animateRefs[12]} src={data.media.video[3]} poster={data.media.imgWide[3]}/>
                {data.media.imgSquare.slice(2).map((imgSrc, i) => (
                    <ImageHalfWide innerRef={animateRefs[i+13]} src={imgSrc} key={i}/>
                ))}
                <BlockHeroTextM innerRef={animateRefs[17]} headerText={data.other.e.h} paragraphText={data.other.e.p}/>
                <Video controls muted loop
                    innerRef={animateRefs[18]} src={data.media.video[4]} poster={data.media.imgWide[4]}/>
                {data.media.imgSquareS.map((imgSrc, i) => (
                    <ImageOneThird innerRef={animateRefs[i+19]} src={imgSrc} key={i}/>
                ))}
                <BlockHeroTextM innerRef={animateRefs[25]} headerText={data.other.f.h} paragraphText={data.other.f.p}/>
                <ImageFullWide innerRef={animateRefs[26]} src={data.media.imgWide[5]}/>
            </BlockContainer>
            <BlockProjectNext innerRef={animateRefs[27]} data={dataNext.next}/>
            <BlockContact innerRef={animateRefs[28]}/>
        </>
    )
};

export default PageJMUpgrade;
