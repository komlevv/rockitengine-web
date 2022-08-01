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
import {data as dataNext} from "../PageCartier/data"
import {THEMES} from "../../../contexts/themeContext";
import {useSetTheme} from "../../../hooks/useSetTheme";
import {useAnimateRefs} from "../../../hooks/useAnimateRefs";
import {mapContentWithRefs} from "../../../utils/utils";
import Gap from "../../Gap/Gap";

const content = [
    <BlockProjectMain data={data.main}/>,
    <BlockOverview data={data.overview}/>,
    <Video controls src={data.media.video[0]} poster={data.media.imgWide[0]}/>,
    <GridContainerHalf>
        <HeaderS headerText={data.other.a.h}/></GridContainerHalf>,
    <GridContainerHalf>
        <Video controls loop src={data.media.videoVertical[0]} poster={data.media.imgVertical[0]}/>
    </GridContainerHalf>,
    <GridContainerHalf>
        <Video controls loop src={data.media.videoVertical[1]} poster={data.media.imgVertical[1]}/>
    </GridContainerHalf>,
    <GridContainerHalf><Paragraph paragraphText={data.other.a.p}/></GridContainerHalf>,
    <Video controls loop src={data.media.video[1]} poster={data.media.imgWide[1]}/>,
    <Gap/>,
    <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p}/>,
    data.media.imgVertical.slice(2).map((img, i) => (
        <ImageHalfWide key={i} src={img}/>
    )),
    <ImageFullWide src={data.media.imgWide[2]}/>,
    <Gap/>,
    <BlockHeroTextM headerText={data.other.c.h} paragraphText={data.other.c.p}/>,
    data.media.imgSquareS.map((img, i) => (<ImageOneThird key={i + 1000} src={img}/>)),
    <ImageTwoThird src={data.media.imgSquareSD[0]}/>,
    <Gap/>,
    <BlockProjectNext data={dataNext.next}/>,
    <BlockContact/>,
].flat()

const PageAway = () => {
    useSetTheme(THEMES.AWAY);
    const animateRefs = useAnimateRefs(content.length);
    return (
        <>
            {mapContentWithRefs(content, animateRefs)}
        </>
    )
};

export default PageAway;
