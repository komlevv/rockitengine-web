import BlockHeroText from "../BlockHeroText/BlockHeroText";
import videoMain from './videos/contactVideo.mp4';
import imgMain from "./images/contact-main.jpg";
import BlockContainer from "../BlockContainer/BlockContainer";
import Video from "../Video/Video.js";
import Span from "../Span/Span.js";
import {THEMES, useTheme} from "../../contexts/themeContext";
import {useSetTheme} from "../../hooks/useSetTheme";
import {useAnimateRefs} from "../../hooks/useAnimateRefs";
import Divider from "../Divider/Divider";

const data = {
    main: {
        h: <>Reach <Span>out</Span></>,
        p: "Weather you are a global brand, an enterprise, " +
            "an agency, or a startup looking to grow and scale-up," +
            "send us a message and spark a change, today. "
    },
    e: "hello@rockitengine.com"
}

const PageContact = () => {
    useSetTheme(THEMES.DEFAULT);
    const {theme} = useTheme();
    const animateRefs = useAnimateRefs(3);
    return (
        <>
            <BlockHeroText innerRef={animateRefs[0]}
                           headerText={data.main.h}
                           paragraphText={data.main.p}/>
            <BlockContainer innerRef={animateRefs[1]}>
                <Divider/>
                <a
                    style={{fontSize: "28px",}}
                    href={`mailto:${data.e}`}
                    className={theme.hoverStyle}>
                    {data.e}
                </a>
            </BlockContainer>
            <BlockContainer innerRef={animateRefs[2]}>
                <Video autoplay loop muted src={videoMain} poster={imgMain}/>
            </BlockContainer>
        </>
    )
};

export default PageContact;