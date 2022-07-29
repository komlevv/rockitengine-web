import s from './BlockClients.css';
import HeaderM from "../HeaderM/HeaderM";
import clientLogosImg from './images/client-logos.png'
import Divider from "../Divider/Divider";

const data = {
    h: "Our Clients"
}

const BlockClients = ({innerRef}) => (
    <div ref={innerRef} className={s.blockClients}>
        <Divider/>
        <HeaderM accent headerText={data.h}/>
        <img src={clientLogosImg} alt=""/>
    </div>
)

export default BlockClients;