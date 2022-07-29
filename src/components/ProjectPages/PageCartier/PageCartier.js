import BlockProjectMain from "../../BlockProjectMain/BlockProjectMain.js";
import BlockOverview from "../../BlockOverview/BlockOverview.js";
import BlockProjectNext from "../../BlockProjectNext/BlockProjectNext.js";
import BlockContact from "../../BlockContact/BlockContact.js";
import BlockHeroTextM from "../../BlockHeroTextM/BlockHeroTextM.js";
import GridContainerHalf from '../../GridContainerHalf/GridContainerHalf.js';
import HeaderS from "../../HeaderS/HeaderS.js";
import Paragraph from "../../Paragraph/Paragraph.js";
import Video from "../../Video/Video.js";

import {data} from "./data.js";
import {data as dataNext} from "../PageGreyGoose/data"
import {THEMES} from "../../../contexts/themeContext";
import BlockContainer from "../../BlockContainer/BlockContainer";
import {useSetTheme} from "../../../hooks/useSetTheme";
import {useAnimateRefs} from "../../../hooks/useAnimateRefs";

const PageCartier = () => {
    useSetTheme(THEMES.CARTIER);
    const animateRefs = useAnimateRefs(13);
    return (
        <>
            <BlockProjectMain innerRef={animateRefs[0]} data={data.main}/>
            <BlockOverview innerRef={animateRefs[1]} data={data.overview}/>
            <BlockContainer>
                <Video controls innerRef={animateRefs[2]}
                       src={data.media.video[0]} poster={data.media.imgWide[0]}/>
                <GridContainerHalf innerRef={animateRefs[3]}>
                    <HeaderS headerText={data.other.a.h}/>
                </GridContainerHalf>
                <GridContainerHalf innerRef={animateRefs[4]}>
                    <Video controls loop src={data.media.videoSquare[0]} poster={data.media.imgSquare[0]}/>
                </GridContainerHalf>
                <GridContainerHalf innerRef={animateRefs[5]}>
                    <Video controls loop src={data.media.videoSquare[1]} poster={data.media.imgSquare[1]}/>
                </GridContainerHalf>
                <GridContainerHalf innerRef={animateRefs[6]}>
                    <Paragraph paragraphText={data.other.a.p}/>
                </GridContainerHalf>
                <GridContainerHalf innerRef={animateRefs[7]}>
                    <Video controls loop src={data.media.videoSquare[2]} poster={data.media.imgSquare[2]}/>
                </GridContainerHalf>
                <GridContainerHalf innerRef={animateRefs[8]}>
                    <Video controls loop src={data.media.videoSquare[3]} poster={data.media.imgSquare[3]}/>
                </GridContainerHalf>
                <BlockHeroTextM innerRef={animateRefs[9]}
                                headerText={data.other.b.h} paragraphText={data.other.b.p}/>
                <Video controls innerRef={animateRefs[10]} loop src={data.media.video[1]} poster={data.media.imgWide[1]}/>
            </BlockContainer>
            <BlockProjectNext innerRef={animateRefs[11]} data={dataNext.next}/>
            <BlockContact innerRef={animateRefs[12]}/>
        </>
    )
};

export default PageCartier;
