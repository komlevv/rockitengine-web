import s from './BlockHeroText.css';
import HeaderXL from '../HeaderXL/HeaderXL';
import Paragraph from '../Paragraph/Paragraph';

const BlockHeroText = ({ headerText, paragraphText, innerRef }) => (
  <div ref={innerRef} className={s.blockHeroText}>
    <HeaderXL headerText={headerText} />
    <Paragraph paragraphText={paragraphText} />
  </div>
);

export default BlockHeroText;
