import BlockProjectMain from "../../BlockProjectMain/BlockProjectMain";
import BlockOverview from "../../BlockOverview/BlockOverview";
import BlockProjectNext from "../../BlockProjectNext/BlockProjectNext";
import BlockContact from "../../BlockContact/BlockContact";
import BlockHeroTextM from "../../BlockHeroTextM/BlockHeroTextM";
import GridContainerHalf from '../../GridContainerHalf/GridContainerHalf.js';
import ImageFullWide from "../../ImageFullWide/ImageFullWide.js";
import ImageHalfWide from "../../ImageHalfWide/ImageHalfWide.js";
import ImageOneThird from "../../ImageOneThird/ImageOneThird.js";
import ImageTwoThird from "../../ImageTwoThird/ImageTwoThird.js";
import HeaderS from "../../HeaderS/HeaderS.js";
import Paragraph from "../../Paragraph/Paragraph.js";
import Video from "../../Video/Video.js";

import {data} from "./data.js";
import {data as dataNext} from "../PageAway/data"
import {THEMES} from "../../../contexts/themeContext";
import BlockContainer from "../../BlockContainer/BlockContainer";
import {useSetTheme} from "../../../hooks/useSetTheme";
import {useAnimateRefs} from "../../../hooks/useAnimateRefs";

const PageJohnHardyAA = () => {
    useSetTheme(THEMES.JOHNHARDY_AA);
    const animateRefs = useAnimateRefs(17);
    return (
        <>
            <BlockProjectMain innerRef={animateRefs[0]} data={data.main}/>
            <BlockOverview innerRef={animateRefs[1]} data={data.overview}/>
            <BlockContainer>
                <Video controls
                    innerRef={animateRefs[2]} src={data.media.video[0]} poster={data.media.imgWide[0]}/>
                <GridContainerHalf innerRef={animateRefs[3]}>
                    <HeaderS headerText={data.other.a.h}/>
                </GridContainerHalf>
                <GridContainerHalf innerRef={animateRefs[4]}>
                    <Video controls loop
                           src={data.media.videoVertical[0]} poster={data.media.imgVertical[0]}/>
                </GridContainerHalf>
                <GridContainerHalf innerRef={animateRefs[5]}>
                    <Video controls loop
                           src={data.media.videoVertical[1]} poster={data.media.imgVertical[1]}/>
                </GridContainerHalf>
                <GridContainerHalf innerRef={animateRefs[6]}>
                    <Paragraph paragraphText={data.other.a.p}/>
                </GridContainerHalf>
                <GridContainerHalf innerRef={animateRefs[7]}>
                    <Paragraph paragraphText={data.other.b.p}/>
                </GridContainerHalf>
                <GridContainerHalf innerRef={animateRefs[8]}>
                    <Video controls loop
                           src={data.media.videoVertical[2]} poster={data.media.imgVertical[2]}/>
                </GridContainerHalf>
                <ImageFullWide innerRef={animateRefs[9]} src={data.media.imgWide[1]}/>
                <BlockHeroTextM innerRef={animateRefs[10]}
                                headerText={data.other.c.h} paragraphText={data.other.c.p}/>
                <Video controls
                       innerRef={animateRefs[11]} src={data.media.video[1]} poster={data.media.imgWide[2]}/>
                {data.media.imgSquare.map((img, i) => (
                    <ImageHalfWide innerRef={animateRefs[i + 12]} key={i} src={img}/>
                ))}
                <BlockHeroTextM innerRef={animateRefs[14]}
                                headerText={data.other.d.h} paragraphText={data.other.d.p}/>
                {data.media.imgSquareS.slice(0, 6).map((img, i) => (
                    <ImageOneThird key={1000 + i} src={img}/>
                ))}
                <ImageTwoThird src={data.media.imgSquareSD[0]}/>
                <ImageOneThird src={data.media.imgSquareS[6]}/>
                <ImageOneThird src={data.media.imgSquareS[7]}/>
                <ImageTwoThird src={data.media.imgSquareSD[1]}/>
            </BlockContainer>
            <BlockProjectNext innerRef={animateRefs[15]} data={dataNext.next}/>
            <BlockContact innerRef={animateRefs[16]}/>
        </>
    )
};

export default PageJohnHardyAA;
