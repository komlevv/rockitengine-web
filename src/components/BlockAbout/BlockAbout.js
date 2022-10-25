import s from './BlockAbout.scss';
import HeaderM from '../HeaderM/HeaderM';
import ParagraphHalfWide from '../ParagraphHalfWide/ParagraphHalfWide';
import Button from '../Button/Button';
import { ROUTES } from '../App/ROUTES';
import Divider from '../Divider/Divider';

const data = {
  h: 'About Us',
  p:
    'RockitEngine is an international distributed collective of\u00A0like-minded ' +
    'creative professionals. We have talent and experience that will make your ' +
    'project shine. Whatever the\u00A0question, we’ve got the\u00A0answer.',
};

const BlockAbout = ({ animationRef }) => (
  <div ref={animationRef} className={s.blockAbout}>
    <Divider />
    <HeaderM accent headerText={data.h} />
    <ParagraphHalfWide paragraphText={data.p} />
    <Button href={ROUTES.ABOUT} buttonText="See more" />
  </div>
);

export default BlockAbout;
