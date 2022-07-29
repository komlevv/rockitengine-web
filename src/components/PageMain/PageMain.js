import BlockHeroVideo from "../BlockHeroVideo/BlockHeroVideo.js";
import BlockServices from "../BlockServices/BlockServices.js";
import BlockProjects from "../BlockProjects/BlockProjects.js";
import BlockClients from "../BlockClients/BlockClients";
import BlockAbout from "../BlockAbout/BlockAbout";
import BlockContact from "../BlockContact/BlockContact";
import {THEMES} from "../../contexts/themeContext";
import {useSetTheme} from "../../hooks/useSetTheme";
import {useAnimateRefs} from "../../hooks/useAnimateRefs";


const PageMain = () => {
    useSetTheme(THEMES.DEFAULT);
    const animateRefs = useAnimateRefs(5);
    return (
        <>
            <BlockHeroVideo innerRef={animateRefs[0]}/>
            <BlockServices innerRef={animateRefs[1]}/>
            <BlockProjects />
            <BlockClients innerRef={animateRefs[2]}/>
            <BlockAbout innerRef={animateRefs[3]}/>
            <BlockContact innerRef={animateRefs[4]}/>
        </>
    )
}

export default PageMain;
