import s from './BlockHeroTextM.css'
import HeaderM from "../HeaderM/HeaderM.js";
import Paragraph from "../Paragraph/Paragraph.js";
import Divider from "../Divider/Divider";


const BlockHeroTextM = ({headerText, paragraphText, innerRef}) => (
    <div ref={innerRef} className={s.blockHeroTextM}>
        <Divider/>
        {headerText && <HeaderM headerText={headerText}/>}
        <Paragraph paragraphText={paragraphText}/>
    </div>
)

export default BlockHeroTextM;