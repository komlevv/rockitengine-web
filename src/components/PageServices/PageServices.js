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

const PageServices = () => {
    useSetTheme(THEMES.DEFAULT);
    const animateRefs = useAnimateRefs(13);
    return (
        <>
            <BlockHeroText innerRef={animateRefs[0]} headerText={data.main.h}
                           paragraphText={data.main.p}/>
            <BlockContainer innerRef={animateRefs[1]}>
                <Divider/>
                <HeaderM headerText={data.services.h}/>
                <ImageFullWide src={data.media.imgWide[0]}/>
            </BlockContainer>
            <BlockContainer innerRef={animateRefs[2]}>
                {Object.keys(data.services.items).map((el, i) => (
                    <ListItemBig innerRef={animateRefs[i + 3]}
                                 key={i}
                                 data={data.services.items[el]}/>
                ))}
            </BlockContainer>
            <BlockContainer innerRef={animateRefs[9]}>
                <Divider/>
                <HeaderM headerText={data.reel.h}/>
                <Video controls poster={data.media.imgWide[1]}
                       src={data.media.video[0]}/>
            </BlockContainer>
            <BlockTools innerRef={animateRefs[10]} data={data.tools}/>
            <BlockTeaserProjects innerRef={animateRefs[11]}/>
            <BlockContact innerRef={animateRefs[12]}/>
        </>
    )
}

export default PageServices;