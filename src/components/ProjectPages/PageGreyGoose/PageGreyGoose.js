import BlockProjectMain from "../../BlockProjectMain/BlockProjectMain.js";
import BlockOverview from "../../BlockOverview/BlockOverview.js";
import BlockProjectNext from "../../BlockProjectNext/BlockProjectNext.js";
import BlockContact from "../../BlockContact/BlockContact.js";
import BlockHeroTextM from "../../BlockHeroTextM/BlockHeroTextM.js";
import GridContainerHalf from '../../GridContainerHalf/GridContainerHalf.js';
import ImageFullWide from "../../ImageFullWide/ImageFullWide.js";
import ImageHalfWide from "../../ImageHalfWide/ImageHalfWide.js";
import ImageOneThird from "../../ImageOneThird/ImageOneThird.js";
import HeaderS from "../../HeaderS/HeaderS.js";
import ListItem from "../../ListItem/ListItem.js";

import {data} from "./data.js";
import {data as dataNext} from "../PageEquinox/data"
import {THEMES} from "../../../contexts/themeContext";
import BlockContainer from "../../BlockContainer/BlockContainer";
import {useSetTheme} from "../../../hooks/useSetTheme";
import {useAnimateRefs} from "../../../hooks/useAnimateRefs";

const PageGreyGoose = () => {
    useSetTheme(THEMES.GREYGOOSE);
    const animateRefs = useAnimateRefs(20);
    return (
        <>
            <BlockProjectMain innerRef={animateRefs[0]} data={data.main}/>
            <BlockOverview innerRef={animateRefs[1]} data={data.overview}/>
            <BlockContainer>
                <ImageFullWide innerRef={animateRefs[2]} src={data.media.imgWide[0]}/>
                <BlockHeroTextM innerRef={animateRefs[3]} headerText={data.other.a.h} paragraphText={data.other.a.p}/>
                <ImageFullWide innerRef={animateRefs[4]} src={data.media.imgWide[1]}/>
                <GridContainerHalf innerRef={animateRefs[5]}>
                    <HeaderS headerText={data.other.d.h}/>
                    {data.other.d.items.map((itemText, i) => (
                        <ListItem text={itemText} key={i}/>
                    ))}
                </GridContainerHalf>
                <ImageHalfWide innerRef={animateRefs[6]} src={data.media.imgWide[2]}/>
                <ImageHalfWide innerRef={animateRefs[7]} src={data.media.imgSquare[0]}/>
                <ImageHalfWide innerRef={animateRefs[8]} src={data.media.imgSquare[1]}/>
                <BlockHeroTextM innerRef={animateRefs[9]} headerText={data.other.b.h} paragraphText={data.other.b.p}/>
                <ImageFullWide innerRef={animateRefs[10]} src={data.media.imgWide[3]}/>
                <ImageHalfWide innerRef={animateRefs[11]} src={data.media.imgVertical[0]}/>
                <ImageHalfWide innerRef={animateRefs[12]} src={data.media.imgVertical[1]}/>
                <ImageFullWide innerRef={animateRefs[13]} src={data.media.imgWide[4]}/>
                <ImageHalfWide innerRef={animateRefs[14]} src={data.media.imgVertical[2]}/>
                <ImageHalfWide innerRef={animateRefs[15]} src={data.media.imgVertical[3]}/>
                <ImageFullWide innerRef={animateRefs[16]} src={data.media.imgWide[5]}/>
                <BlockHeroTextM innerRef={animateRefs[17]} headerText={data.other.c.h} paragraphText={data.other.c.p}/>
                {data.media.imgSquareS.map((img, i) => (
                    <ImageOneThird key={i} src={img}/>
                ))}
            </BlockContainer>
            <BlockProjectNext innerRef={animateRefs[18]} data={dataNext.next}/>
            <BlockContact innerRef={animateRefs[19]}/>
        </>
    )
};

export default PageGreyGoose;
