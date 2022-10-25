import s from './BlockTeaserProjects.scss';
import HeaderM from '../HeaderM/HeaderM';
import ParagraphHalfWide from '../ParagraphHalfWide/ParagraphHalfWide';
import Button from '../Button/Button';
import { ROUTES } from '../App/ROUTES';
import Divider from '../Divider/Divider';

const data = {
  h: 'Talent that Delivers',
  p:
    'Accumulated diverse experience. Challenging projects. Continuous learning. ' +
    "This is why you'll always get results from our team, on time. Start a project " +
    'with us to\u00A0see your business grow.',
  buttonText: 'See our projects',
};

const BlockTeaserProjects = ({ animationRef }) => (
  <div ref={animationRef} className={s.blockTeaserProjects}>
    <Divider />
    <HeaderM headerText={data.h} />
    <ParagraphHalfWide paragraphText={data.p} />
    <Button buttonText={data.buttonText} href={ROUTES.PROJECTS} />
  </div>
);

export default BlockTeaserProjects;
