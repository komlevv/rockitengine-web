import BlockHeroText from "../BlockHeroText/BlockHeroText";
import BlockContainer from "../BlockContainer/BlockContainer";
import HeaderM from "../HeaderM/HeaderM";
import ImageFullWide from "../ImageFullWide/ImageFullWide";
import ListItemBig from "../ListItemBig/ListItemBig";
import BlockTeaserProjects from "../BlockTeaserProjects/BlockTeaserProjects";
import BlockContact from "../BlockContact/BlockContact";
import {data} from "./data.js";
import {THEMES} from "../../contexts/themeContext";
import {useSetTheme} from "../../hooks/useSetTheme";
import {useAnimateRefs} from "../../hooks/useAnimateRefs";
import Divider from "../Divider/Divider";

const PageAbout = () => {
    useSetTheme(THEMES.DEFAULT);
    const animateRefs = useAnimateRefs(17);
    return (
        <>
            <BlockHeroText innerRef={animateRefs[0]} headerText={data.main.h}
                           paragraphText={data.main.p}/>
            <BlockContainer innerRef={animateRefs[1]}>
                <Divider/>
                <HeaderM headerText={data.ourValues.h}/>
                <ImageFullWide src={data.media.imgWide[0]}/>
            </BlockContainer>
            <BlockContainer innerRef={animateRefs[2]}>
                {Object.keys(data.ourValues.items).map((el, i) => (
                    <ListItemBig innerRef={animateRefs[i + 3]} key={i} data={data.ourValues.items[el]}/>
                ))}
            </BlockContainer>
            <BlockContainer innerRef={animateRefs[8]}>
                <Divider/>
                <HeaderM headerText={data.work.h}/>
                <ImageFullWide src={data.media.imgWide[1]}/>
            </BlockContainer>
            <BlockContainer>
                {Object.keys(data.work.items).map((el, i) => (
                    <ListItemBig innerRef={animateRefs[i + 9]} key={i} data={data.work.items[el]}/>
                ))}
            </BlockContainer>
            <BlockContainer innerRef={animateRefs[11]}>
                <Divider/>
                <HeaderM headerText={data.process.h}/>
                <ImageFullWide src={data.media.imgWide[2]}/>
            </BlockContainer>
            <BlockContainer>
                {Object.keys(data.process.items).map((el, i) => (
                    <ListItemBig innerRef={animateRefs[i + 12]} key={i} data={data.process.items[el]}/>
                ))}
            </BlockContainer>
            <BlockTeaserProjects innerRef={animateRefs[15]}/>
            <BlockContact innerRef={animateRefs[16]}/>
        </>
    )
};

export default PageAbout;
