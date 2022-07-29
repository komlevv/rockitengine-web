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

import {data} from "./data.js";
import {data as dataNext} from "../PageJohnHardyAA/data"
import {THEMES} from "../../../contexts/themeContext";
import BlockContainer from "../../BlockContainer/BlockContainer";
import {useSetTheme} from "../../../hooks/useSetTheme";
import {useAnimateRefs} from "../../../hooks/useAnimateRefs";

const PageSpotifyHulu = () => {
    useSetTheme(THEMES.SPOTIFY_HULU);
    const animateRefs = useAnimateRefs(16);
    return (
        <>
            <BlockProjectMain innerRef={animateRefs[0]} data={data.main}/>
            <BlockOverview innerRef={animateRefs[1]} data={data.overview}/>
            <BlockContainer>
                <ImageFullWide innerRef={animateRefs[2]} src={data.media.imgWide[0]}/>
                <ImageHalfWide innerRef={animateRefs[3]} src={data.media.imgVertical[0]}/>
                <GridContainerHalf innerRef={animateRefs[4]}>
                    <HeaderS headerText={data.other.c.h}/>
                    {data.other.c.items.map((itemText, i) => (
                        <ListItem text={itemText} key={i}/>
                    ))}
                </GridContainerHalf>
                <GridContainerHalf innerRef={animateRefs[5]}>
                    <Paragraph paragraphText={data.other.a.p}/></GridContainerHalf>
                <ImageHalfWide innerRef={animateRefs[6]} src={data.media.imgVertical[1]}/>
                <ImageFullWide innerRef={animateRefs[7]} src={data.media.imgWide[1]}/>
                <BlockHeroTextM innerRef={animateRefs[8]} headerText={data.other.b.h} paragraphText={data.other.b.p}/>
                {data.media.imgWide.slice(2, 6).map((img, i) => (
                    <ImageFullWide innerRef={animateRefs[i+9]} key={i} src={img}/>
                ))}
                <BlockHeroTextM innerRef={animateRefs[13]} headerText={data.other.d.h} paragraphText={data.other.d.p}/>
                {data.media.imgSquareS.slice(0, 6).map((img, i) => (
                    <ImageOneThird key={i} src={img}/>
                ))}
                <ImageTwoThird src={data.media.imgSquareSD[0]}/>
                <ImageOneThird src={data.media.imgSquareS[6]}/>
                <ImageOneThird src={data.media.imgSquareS[7]}/>
                <ImageTwoThird src={data.media.imgSquareSD[1]}/>
            </BlockContainer>
            <BlockProjectNext innerRef={animateRefs[14]} data={dataNext.next}/>
            <BlockContact innerRef={animateRefs[15]}/>
        </>
    )
};

export default PageSpotifyHulu;
