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
import Paragraph from "../../Paragraph/Paragraph";

import {data} from "./data.js";
import {data as dataNext} from "../PageJMUpgrade/data.js"
import {THEMES} from "../../../contexts/themeContext";
import BlockContainer from "../../BlockContainer/BlockContainer";
import {useSetTheme} from "../../../hooks/useSetTheme";
import {useAnimateRefs} from "../../../hooks/useAnimateRefs";

const PageChopard = () => {
    useSetTheme(THEMES.CHOPARD);
    const animateRefs = useAnimateRefs(27);
    return (
    <>
        <BlockProjectMain innerRef={animateRefs[0]} data={data.main}/>
        <BlockOverview innerRef={animateRefs[1]} data={data.overview}/>
        <BlockContainer>
            <ImageFullWide innerRef={animateRefs[2]} src={data.media.imgWide[0]}/>
            <BlockHeroTextM innerRef={animateRefs[3]} headerText={data.other.a.h} paragraphText={data.other.a.p}/>
            <ImageHalfWide innerRef={animateRefs[4]} src={data.media.imgSquare[0]}/>
            <ImageHalfWide innerRef={animateRefs[5]} src={data.media.imgSquare[1]}/>
            <BlockHeroTextM innerRef={animateRefs[6]} headerText={data.other.b.h} paragraphText={data.other.b.p}/>
            <ImageFullWide innerRef={animateRefs[7]} src={data.media.imgWide[1]}/>
            <ImageHalfWide innerRef={animateRefs[8]} src={data.media.imgSquare[2]}/>
            <ImageHalfWide innerRef={animateRefs[9]} src={data.media.imgSquare[3]}/>
            <ImageFullWide innerRef={animateRefs[10]} src={data.media.imgWide[2]}/>
            <BlockHeroTextM innerRef={animateRefs[11]} headerText={data.other.c.h} paragraphText={data.other.c.p}/>
            <ImageHalfWide innerRef={animateRefs[12]} src={data.media.imgVertical[0]}/>
            <ImageHalfWide innerRef={animateRefs[13]} src={data.media.imgVertical[1]}/>
            <ImageHalfWide innerRef={animateRefs[14]} src={data.media.imgSquare[4]}/>
            <GridContainerHalf innerRef={animateRefs[15]}>
                <Paragraph paragraphText={data.other.d.p}/>
            </GridContainerHalf>
            <GridContainerHalf innerRef={animateRefs[16]}>
                <Paragraph paragraphText={data.other.e.p}/>
            </GridContainerHalf>
            <ImageHalfWide innerRef={animateRefs[17]} src={data.media.imgSquare[5]}/>
            <ImageHalfWide innerRef={animateRefs[18]} src={data.media.imgSquare[6]}/>
            <ImageHalfWide innerRef={animateRefs[19]} src={data.media.imgSquare[7]}/>
            <BlockHeroTextM innerRef={animateRefs[20]} headerText={data.other.f.h} paragraphText={data.other.f.p}/>
            <ImageFullWide innerRef={animateRefs[21]} src={data.media.imgWide[3]}/>
            <BlockHeroTextM innerRef={animateRefs[22]} headerText={data.other.g.h} paragraphText={data.other.g.p}/>
            <ImageFullWide innerRef={animateRefs[23]} src={data.media.imgWide[4]}/>
            <BlockHeroTextM innerRef={animateRefs[24]} headerText={data.other.h.h} paragraphText={data.other.h.p}/>
            {data.media.imgSquareS.slice(0, 6).map((img, i) => (
                <ImageOneThird key={i} src={img}/>
            ))}
            <ImageTwoThird src={data.media.imgSquareSD[0]}/>
            <ImageOneThird src={data.media.imgSquareS[6]}/>
            <ImageOneThird src={data.media.imgSquareS[7]}/>
            <ImageTwoThird src={data.media.imgSquareSD[1]}/>
        </BlockContainer>
        <BlockProjectNext innerRef={animateRefs[25]} data={dataNext.next}/>
        <BlockContact innerRef={animateRefs[26]}/>
    </>
)};

export default PageChopard;
