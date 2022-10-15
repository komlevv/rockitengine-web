import s from './BlockHeroTextM.scss';
import HeaderM from '../HeaderM/HeaderM';
import Paragraph from '../Paragraph/Paragraph';
import Divider from '../Divider/Divider';

const BlockHeroTextM = ({ headerText, paragraphText, animationRef }) => (
  <div ref={animationRef} className={s.blockHeroTextM}>
    <Divider />
    {headerText && <HeaderM headerText={headerText} />}
    <Paragraph paragraphText={paragraphText} />
  </div>
);

export default BlockHeroTextM;
