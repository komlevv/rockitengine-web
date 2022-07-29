import HeaderM from "../HeaderM/HeaderM";
import Paragraph from "../Paragraph/Paragraph";
import ListItemBig from "../ListItemBig/ListItemBig";
import BlockContainer from "../BlockContainer/BlockContainer.js";


const BlockOverview = ({data, innerRef, children}) => (
    <BlockContainer innerRef={innerRef}>
        <HeaderM headerText={data.h}/>
        <Paragraph paragraphText={data.p}/>
        <ListItemBig data={data.items.a}/>
        <ListItemBig data={data.items.b}/>
        {children}
    </BlockContainer>
)

export default BlockOverview;