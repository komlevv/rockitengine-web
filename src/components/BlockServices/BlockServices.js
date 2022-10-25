import { useId } from 'react';
import s from './BlockServices.scss';
import HeaderM from '../HeaderM/HeaderM';
import ParagraphHalfWide from '../ParagraphHalfWide/ParagraphHalfWide';
import Button from '../Button/Button';
import { ROUTES } from '../App/ROUTES';
import Divider from '../Divider/Divider';

const data = {
  h: 'Our services',
  p:
    'Digital solutions provided ' +
    'by carefully selected and talented people who ' +
    'see the\u00A0bigger picture — your daily business ' +
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

const BlockServices = ({ animationRef }) => {
  const id = useId();
  return (
    <div ref={animationRef} className={s.services}>
      <Divider />
      <HeaderM accent headerText={data.h} />
      <ParagraphHalfWide paragraphText={data.p} />
      <div className={s.listL}>
        <ul>
          {data.items.slice(0, 3).map((item, i) => (
            <li key={`${id}-${i}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={s.listR}>
        <ul>
          {data.items.slice(3).map((item, i) => (
            <li key={`${id}-${i}`}>{item}</li>
          ))}
        </ul>
      </div>
      <Button href={ROUTES.SERVICES} buttonText={data.buttonText} />
    </div>
  );
};

export default BlockServices;
