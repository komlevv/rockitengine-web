import s from './BlockProjectMain.css'
import HeaderXL from "../HeaderXL/HeaderXL.js";
import Paragraph from "../Paragraph/Paragraph.js";
import ImageFullWide from "../ImageFullWide/ImageFullWide.js";

const BlockProjectMain = ({data, innerRef}) => (
    <div ref={innerRef} className={s.blockProjectMain}>
        <div className={s.blockProjectMainLogo}>
            <img alt="" src={data.logo} style={{filter:"invert(100%)"}}/>
        </div>
        <HeaderXL headerText={data.h}/>
        <Paragraph paragraphText={data.p}/>

        <div className={s.projectMainItemL}>{data.items[0].h}
            <div className={s.projectMainItemText}>{data.items[0].p}</div>
        </div>

        <div className={s.projectMainItemR}>{data.items[1].h}
            <div className={s.projectMainItemText}>{data.items[1].p}</div>
        </div>

        <ImageFullWide src={data.img}/>
    </div>
)

export default BlockProjectMain;