import s from './BlockHeroText.scss';
import HeaderXL from '../HeaderXL/HeaderXL';
import Paragraph from '../Paragraph/Paragraph';

const BlockHeroText = ({ headerText, paragraphText, animationRef }) => (
  <div ref={animationRef} className={s.blockHeroText}>
    <HeaderXL headerText={headerText} />
    <Paragraph paragraphText={paragraphText} />
  </div>
);

export default BlockHeroText;
