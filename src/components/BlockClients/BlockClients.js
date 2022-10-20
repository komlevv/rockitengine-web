import s from './BlockClients.scss';
import HeaderM from '../HeaderM/HeaderM';
import Divider from '../Divider/Divider';
import { URL_MEDIA } from '../App/ROUTES';

const clientLogosImgL = `${URL_MEDIA}/client-logos.png`;
const clientLogosImgS = `${URL_MEDIA}/client-logos-2.png`;

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
