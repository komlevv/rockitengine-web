import s from './BlockAbout.scss';
import HeaderM from '../HeaderM/HeaderM';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';
import { ROUTES } from '../App/ROUTES';
import Divider from '../Divider/Divider';

const data = {
  h: 'About Us',
  p:
    'RockitEngine is an international distributed collective of like-minded ' +
    'creative professionals. We have talent and experience that will make your ' +
    'project shine. Whatever the question, we’ve got the answer.',
};

const BlockAbout = ({ innerRef }) => (
  <div ref={innerRef} className={s.blockAbout}>
    <Divider />
    <HeaderM accent headerText={data.h} />
    <Paragraph paragraphText={data.p} />
    <Button href={ROUTES.ABOUT} buttonText="See more" />
  </div>
);

export default BlockAbout;
