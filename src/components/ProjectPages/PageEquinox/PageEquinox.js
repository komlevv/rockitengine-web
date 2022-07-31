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
import ListItem from "../../ListItem/ListItem.js";
import Video from "../../Video/Video.js";

import {data} from "./data.js";
import {data as dataNext} from "../PageChopard/data.js"
import {THEMES} from "../../../contexts/themeContext";
import {useSetTheme} from "../../../hooks/useSetTheme";
import {useAnimateRefs} from "../../../hooks/useAnimateRefs";
import {mapContentWithRefs} from "../../../utils/utils";

const content = [
    <BlockProjectMain data={data.main}/>,
    <BlockOverview data={data.overview}/>,
    <ImageFullWide src={data.media.imgWide[0]}/>,
    <ImageHalfWide src={data.media.imgSquare[0]}/>,
    <GridContainerHalf><HeaderS headerText={data.other.a.h}/></GridContainerHalf>,
    <GridContainerHalf><Paragraph paragraphText={data.other.a.p}/></GridContainerHalf>,
    <ImageHalfWide src={data.media.imgSquare[1]}/>,
    <ImageFullWide src={data.media.imgWide[1]}/>,
    <ImageHalfWide src={data.media.imgVertical[0]}/>,
    <ImageHalfWide src={data.media.imgVertical[1]}/>,
    <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p}/>,
    <ImageFullWide src={data.media.imgWide[2]}/>,
    <ImageHalfWide src={data.media.imgVertical[2]}/>,
    <GridContainerHalf>
        <HeaderS headerText={data.other.c.h}/>
        {data.other.c.items.map((itemText, i) => (
            <ListItem text={itemText} key={i}/>
        ))}
    </GridContainerHalf>,
    <GridContainerHalf>
        <Paragraph paragraphText={data.other.d.p}/></GridContainerHalf>,
    <ImageHalfWide src={data.media.imgVertical[3]}/>,
    <ImageFullWide src={data.media.imgWide[3]}/>,
    <BlockHeroTextM headerText={data.other.e.h} paragraphText={data.other.e.p}/>,
    <Video controls
           src={data.media.video[0]} poster={data.media.imgWide[4]}/>,
    <BlockHeroTextM headerText={data.other.f.h} paragraphText={data.other.f.p}/>,
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

const PageEquinox = () => {
    useSetTheme(THEMES.EQUINOX);
    const animateRefs = useAnimateRefs(content.length);
    return (
        <>
            {mapContentWithRefs(content, animateRefs)}
        </>
    )
};

export default PageEquinox;
