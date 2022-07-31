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
import {useSetTheme} from "../../../hooks/useSetTheme";
import {useAnimateRefs} from "../../../hooks/useAnimateRefs";
import {mapContentWithRefs} from "../../../utils/utils";

const content = [
    <BlockProjectMain data={data.main}/>,
    <BlockOverview data={data.overview}/>,
    <ImageFullWide src={data.media.imgWide[0]}/>,
    <BlockHeroTextM headerText={data.other.a.h} paragraphText={data.other.a.p}/>,
    <ImageHalfWide src={data.media.imgSquare[0]}/>,
    <ImageHalfWide src={data.media.imgSquare[1]}/>,
    <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p}/>,
    <ImageFullWide src={data.media.imgWide[1]}/>,
    <ImageHalfWide src={data.media.imgSquare[2]}/>,
    <ImageHalfWide src={data.media.imgSquare[3]}/>,
    <ImageFullWide src={data.media.imgWide[2]}/>,
    <BlockHeroTextM headerText={data.other.c.h} paragraphText={data.other.c.p}/>,
    <ImageHalfWide src={data.media.imgVertical[0]}/>,
    <ImageHalfWide src={data.media.imgVertical[1]}/>,
    <ImageHalfWide src={data.media.imgSquare[4]}/>,
    <GridContainerHalf>
        <Paragraph paragraphText={data.other.d.p}/>
    </GridContainerHalf>,
    <GridContainerHalf>
        <Paragraph paragraphText={data.other.e.p}/>
    </GridContainerHalf>,
    <ImageHalfWide src={data.media.imgSquare[5]}/>,
    <ImageHalfWide src={data.media.imgSquare[6]}/>,
    <ImageHalfWide src={data.media.imgSquare[7]}/>,
    <BlockHeroTextM headerText={data.other.f.h} paragraphText={data.other.f.p}/>,
    <ImageFullWide src={data.media.imgWide[3]}/>,
    <BlockHeroTextM headerText={data.other.g.h} paragraphText={data.other.g.p}/>,
    <ImageFullWide src={data.media.imgWide[4]}/>,
    <BlockHeroTextM headerText={data.other.h.h} paragraphText={data.other.h.p}/>,
    data.media.imgSquareS.slice(0, 6).map((img, i) => (
        <ImageOneThird key={i} src={img}/>
    )),
    <ImageTwoThird src={data.media.imgSquareSD[0]}/>,
    <ImageOneThird src={data.media.imgSquareS[6]}/>,
    <ImageOneThird src={data.media.imgSquareS[7]}/>,
    <ImageTwoThird src={data.media.imgSquareSD[1]}/>,
    <BlockProjectNext data={dataNext.next}/>,
    <BlockContact/>
].flat()

const PageChopard = () => {
    useSetTheme(THEMES.CHOPARD);
    const animateRefs = useAnimateRefs(content.length);
    return (
        <>
            {mapContentWithRefs(content, animateRefs)}
        </>
    )
};

export default PageChopard;
