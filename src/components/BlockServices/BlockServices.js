import s from './BlockServices.scss';
import HeaderM from '../HeaderM/HeaderM';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';
import { ROUTES } from '../App/ROUTES';
import Divider from '../Divider/Divider';
import { uuid } from '../../utils/utils';

const data = {
  h: 'Our services',
  p:
    'Digital solutions provided ' +
    'by carefully selected and talented people who ' +
    'see the bigger picture - your daily business ' +
    'challenges and your customers’ needs.',
  buttonText: 'See our services',
  items: [
    '3D Visualization',
    'Visual Effects',
    'Post Production',
    'Retouching',
    'Pitch Deck Design',
    'Web Development',
  ],
};

const BlockServices = ({ animationRef }) => (
  <div ref={animationRef} className={s.services}>
    <Divider />
    <HeaderM accent headerText={data.h} />
    <Paragraph paragraphText={data.p} />
    <div className={s.listL}>
      <ul>
        {data.items.slice(0, 3).map((item) => (
          <li key={uuid()}>{item}</li>
        ))}
      </ul>
    </div>
    <div className={s.listR}>
      <ul>
        {data.items.slice(3).map((item) => (
          <li key={uuid()}>{item}</li>
        ))}
      </ul>
    </div>
    <Button href={ROUTES.SERVICES} buttonText={data.buttonText} />
  </div>
);

export default BlockServices;
