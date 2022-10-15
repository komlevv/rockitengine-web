import s from './BlockClients.scss';
import HeaderM from '../HeaderM/HeaderM';
import clientLogosImgL from './images/client-logos.png';
import clientLogosImgS from './images/client-logos-2.png';
import Divider from '../Divider/Divider';

const data = {
  h: 'Our Clients',
};

const BlockClients = ({ animationRef }) => (
  <div ref={animationRef} className={s.blockClients}>
    <Divider />
    <HeaderM accent headerText={data.h} />
    <img className={s.imgClientsL} src={clientLogosImgL} alt="" />
    <img className={s.imgClientsS} src={clientLogosImgS} alt="" />
  </div>
);

export default BlockClients;
