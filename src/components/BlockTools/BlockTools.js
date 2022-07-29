import s from './BlockTools.css';
import HeaderM from "../HeaderM/HeaderM.js";
import Paragraph from "../Paragraph/Paragraph.js";
import ListItem from "../ListItem/ListItem.js";
import Divider from "../Divider/Divider";

const BlockTools = ({data, innerRef}) => (
    <div ref={innerRef} className={s.blockTools}>
        <Divider/>
        <HeaderM headerText={data.h}/>
        <Paragraph paragraphText={data.p}/>
        <div className={s.toolsContainer}>
            {Object.entries(data.items).map(([k, v], i) => (
                <div key={i}>
                    <div className={s.toolsHeader}>{v.h}</div>
                    {v.subItems.map((subItem, i) => (
                        <ListItem key={i} text={subItem}/>
                    ))}
                </div>
            ))}
        </div>
    </div>
)

export default BlockTools;