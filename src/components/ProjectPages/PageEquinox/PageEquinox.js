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
import BlockContainer from "../../BlockContainer/BlockContainer";
import {useSetTheme} from "../../../hooks/useSetTheme";
import {useAnimateRefs} from "../../../hooks/useAnimateRefs";

const PageEquinox = () => {
    useSetTheme(THEMES.EQUINOX);
    const animateRefs = useAnimateRefs(22);
    return (
        <>
            <BlockProjectMain innerRef={animateRefs[0]} data={data.main}/>
            <BlockOverview innerRef={animateRefs[1]} data={data.overview}/>
            <BlockContainer>
                <ImageFullWide innerRef={animateRefs[2]} src={data.media.imgWide[0]}/>
                <ImageHalfWide innerRef={animateRefs[3]} src={data.media.imgSquare[0]}/>
                <GridContainerHalf innerRef={animateRefs[4]}><HeaderS headerText={data.other.a.h}/></GridContainerHalf>
                <GridContainerHalf innerRef={animateRefs[5]}><Paragraph paragraphText={data.other.a.p}/></GridContainerHalf>
                <ImageHalfWide innerRef={animateRefs[6]} src={data.media.imgSquare[1]}/>
                <ImageFullWide innerRef={animateRefs[7]} src={data.media.imgWide[1]}/>
                <ImageHalfWide innerRef={animateRefs[8]} src={data.media.imgVertical[0]}/>
                <ImageHalfWide innerRef={animateRefs[9]} src={data.media.imgVertical[1]}/>
                <BlockHeroTextM innerRef={animateRefs[10]} headerText={data.other.b.h} paragraphText={data.other.b.p}/>
                <ImageFullWide innerRef={animateRefs[11]} src={data.media.imgWide[2]}/>
                <ImageHalfWide innerRef={animateRefs[12]} src={data.media.imgVertical[2]}/>
                <GridContainerHalf innerRef={animateRefs[13]}>
                    <HeaderS headerText={data.other.c.h}/>
                    {data.other.c.items.map((itemText, i) => (
                        <ListItem text={itemText} key={i}/>
                    ))}
                </GridContainerHalf>
                <GridContainerHalf innerRef={animateRefs[14]}>
                    <Paragraph paragraphText={data.other.d.p}/></GridContainerHalf>
                <ImageHalfWide innerRef={animateRefs[15]} src={data.media.imgVertical[3]}/>
                <ImageFullWide innerRef={animateRefs[16]} src={data.media.imgWide[3]}/>
                <BlockHeroTextM innerRef={animateRefs[17]} headerText={data.other.e.h} paragraphText={data.other.e.p}/>
                <Video controls innerRef={animateRefs[18]}
                       src={data.media.video[0]} poster={data.media.imgWide[4]}/>
                <BlockHeroTextM innerRef={animateRefs[19]} headerText={data.other.f.h} paragraphText={data.other.f.p}/>
                {data.media.imgSquareS.slice(0, 6).map((img, i) => (
                    <ImageOneThird key={i} src={img}/>
                ))}
                <ImageTwoThird src={data.media.imgSquareSD[0]}/>
                <ImageOneThird src={data.media.imgSquareS[6]}/>
                <ImageOneThird src={data.media.imgSquareS[7]}/>
                <ImageTwoThird src={data.media.imgSquareSD[1]}/>
            </BlockContainer>
            <BlockProjectNext innerRef={animateRefs[20]} data={dataNext.next}/>
            <BlockContact innerRef={animateRefs[21]}/>
        </>
    )
};

export default PageEquinox;
