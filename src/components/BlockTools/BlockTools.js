import s from './BlockTools.scss';
import HeaderM from '../HeaderM/HeaderM';
import Paragraph from '../Paragraph/Paragraph';
import ListItem from '../ListItem/ListItem';
import Divider from '../Divider/Divider';
import { uuid } from '../../utils/utils';

const BlockTools = ({ data, animationRef }) => (
  <div ref={animationRef} className={s.blockTools}>
    <Divider />
    <HeaderM headerText={data.h} />
    <Paragraph paragraphText={data.p} />
    <div className={s.toolsContainer}>
      {Object.values(data.items).map((v) => (
        <div key={uuid()}>
          <div className={s.toolsHeader}>{v.h}</div>
          {v.subItems.map((subItem) => (
            <ListItem key={uuid()} text={subItem} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default BlockTools;
