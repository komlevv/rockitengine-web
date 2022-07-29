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
import BlockContainer from "../../BlockContainer/BlockContainer";
import {useSetTheme} from "../../../hooks/useSetTheme";
import {useAnimateRefs} from "../../../hooks/useAnimateRefs";

const PageAway = () => {
    useSetTheme(THEMES.AWAY);
    const animateRefs = useAnimateRefs(19);
    return (
        <>
            <BlockProjectMain innerRef={animateRefs[0]} data={data.main}/>
            <BlockOverview innerRef={animateRefs[1]} data={data.overview}/>
            <BlockContainer>
                <Video controls innerRef={animateRefs[2]} src={data.media.video[0]}
                       poster={data.media.imgWide[0]}/>
                <GridContainerHalf innerRef={animateRefs[3]}>
                    <HeaderS headerText={data.other.a.h}/></GridContainerHalf>
                <GridContainerHalf innerRef={animateRefs[4]}>
                    <Video controls loop src={data.media.videoVertical[0]} poster={data.media.imgVertical[0]}/>
                </GridContainerHalf>
                <GridContainerHalf innerRef={animateRefs[5]}>
                    <Video controls loop src={data.media.videoVertical[1]} poster={data.media.imgVertical[1]}/>
                </GridContainerHalf>
                <GridContainerHalf innerRef={animateRefs[6]}>
                    <Paragraph paragraphText={data.other.a.p}/></GridContainerHalf>
                <Video controls innerRef={animateRefs[7]} loop src={data.media.video[1]} poster={data.media.imgWide[1]}/>
                <BlockHeroTextM innerRef={animateRefs[8]} headerText={data.other.b.h} paragraphText={data.other.b.p}/>
                {data.media.imgVertical.slice(2).map((img, i) => (
                    <ImageHalfWide innerRef={animateRefs[i+9]} key={i} src={img}/>
                ))}
                <ImageFullWide innerRef={animateRefs[15]} src={data.media.imgWide[2]}/>
                <BlockHeroTextM innerRef={animateRefs[16]} headerText={data.other.c.h} paragraphText={data.other.c.p}/>
                {data.media.imgSquareS.map((img, i) => (<ImageOneThird key={i} src={img}/>))}
                <ImageTwoThird src={data.media.imgSquareSD[0]}/>
            </BlockContainer>
            <BlockProjectNext innerRef={animateRefs[17]} data={dataNext.next}/>
            <BlockContact innerRef={animateRefs[18]}/>
        </>)
};

export default PageAway;
