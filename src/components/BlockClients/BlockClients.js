import s from './BlockClients.css';
import HeaderM from '../HeaderM/HeaderM';
import clientLogosImg from './images/client-logos.png';
import Divider from '../Divider/Divider';
import Image from '../Image/Image';

const data = {
  h: 'Our Clients',
};

const BlockClients = ({ innerRef }) => (
  <div ref={innerRef} className={s.blockClients}>
    <Divider />
    <HeaderM accent headerText={data.h} />
    <Image src={clientLogosImg} />
  </div>
);

export default BlockClients;
