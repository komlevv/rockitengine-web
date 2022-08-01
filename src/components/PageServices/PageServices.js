import BlockHeroText from "../BlockHeroText/BlockHeroText.js";
import ListItemBig from "../ListItemBig/ListItemBig.js";
import BlockTools from "../BlockTools/BlockTools.js";
import BlockTeaserProjects from "../BlockTeaserProjects/BlockTeaserProjects.js";
import ImageFullWide from "../ImageFullWide/ImageFullWide.js";
import BlockContainer from "../BlockContainer/BlockContainer.js";
import HeaderM from "../HeaderM/HeaderM.js";
import BlockContact from "../BlockContact/BlockContact.js";
import {data} from './data.js';
import {THEMES} from "../../contexts/themeContext";
import {useAnimateRefs} from "../../hooks/useAnimateRefs.js";
import {useSetTheme} from "../../hooks/useSetTheme";
import Video from "../Video/Video";
import Divider from "../Divider/Divider";
import {mapContentWithRefs} from "../../utils/utils";
import Gap from "../Gap/Gap";

const content = [
    <BlockHeroText headerText={data.main.h}
                   paragraphText={data.main.p}/>,
    <BlockContainer>
        <Divider/>
        <HeaderM headerText={data.services.h}/>
        <ImageFullWide src={data.media.imgWide[0]}/>
    </BlockContainer>,
    Object.keys(data.services.items).map((el, i) => (
        <ListItemBig key={i}
                     data={data.services.items[el]}/>
    )),
    <Gap/>,
    <BlockContainer>
        <Divider/>
        <HeaderM headerText={data.reel.h}/>
        <Video controls poster={data.media.imgWide[1]}
               src={data.media.video[0]}/>
    </BlockContainer>,
    <BlockTools data={data.tools}/>,
    <BlockTeaserProjects/>,
    <BlockContact/>
].flat()

const PageServices = () => {
    useSetTheme(THEMES.DEFAULT);
    const animateRefs = useAnimateRefs(content.length);
    return (
        <>
            {mapContentWithRefs(content, animateRefs)}
        </>
    )
}

export default PageServices;