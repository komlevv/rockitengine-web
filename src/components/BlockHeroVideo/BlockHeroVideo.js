import s from './BlockHeroVideo.css';
import HeaderXL from '../HeaderXL/HeaderXL.js';
import Video from "../Video/Video.js";
import Span from "../Span/Span.js";
import heroVideo from './heroVideo.mp4';


const data = {
    h: <>
        We help innovative companies develop
        <Span> digital solutions </Span> to their business needs.
    </>
}

const BlockHeroVideo = ({innerRef}) => (
    <div ref={innerRef} className={s.blockHeroVideo}>
        <div className={s.heroText}>
            <HeaderXL headerText={data.h}/>
        </div>
        <Video loop autoplay muted src={heroVideo}/>
    </div>
)

export default BlockHeroVideo;