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
import {useSetTheme} from "../../../hooks/useSetTheme";
import {useAnimateRefs} from "../../../hooks/useAnimateRefs";
import {mapContentWithRefs} from "../../../utils/utils";
import Gap from "../../Gap/Gap";

const content = [
    <BlockProjectMain data={data.main}/>,
    <BlockOverview data={data.overview}/>,
    <ImageFullWide src={data.media.imgWide[0]}/>,
    <Gap/>,
    <BlockHeroTextM headerText={data.other.a.h} paragraphText={data.other.a.p}/>,
    <ImageFullWide src={data.media.imgWide[1]}/>,
    <GridContainerHalf>
        <HeaderS headerText={data.other.d.h}/>
        {data.other.d.items.map((itemText, i) => (
            <ListItem text={itemText} key={i}/>
        ))}
    </GridContainerHalf>,
    <ImageHalfWide src={data.media.imgWide[2]}/>,
    <ImageHalfWide src={data.media.imgSquare[0]}/>,
    <ImageHalfWide src={data.media.imgSquare[1]}/>,
    <Gap/>,
    <BlockHeroTextM headerText={data.other.b.h} paragraphText={data.other.b.p}/>,
    <ImageFullWide src={data.media.imgWide[3]}/>,
    <ImageHalfWide src={data.media.imgVertical[0]}/>,
    <ImageHalfWide src={data.media.imgVertical[1]}/>,
    <ImageFullWide src={data.media.imgWide[4]}/>,
    <ImageHalfWide src={data.media.imgVertical[2]}/>,
    <ImageHalfWide src={data.media.imgVertical[3]}/>,
    <ImageFullWide src={data.media.imgWide[5]}/>,
    <Gap/>,
    <BlockHeroTextM headerText={data.other.c.h} paragraphText={data.other.c.p}/>,
    data.media.imgSquareS.map((img, i) => (
        <ImageOneThird key={i} src={img}/>
    )),
    <Gap/>,
    <BlockProjectNext data={dataNext.next}/>,
    <BlockContact/>
].flat()

const PageGreyGoose = () => {
    useSetTheme(THEMES.GREYGOOSE);
    const animateRefs = useAnimateRefs(20);
    return (
        <>
            {mapContentWithRefs(content, animateRefs)}
        </>
    )
};

export default PageGreyGoose;
