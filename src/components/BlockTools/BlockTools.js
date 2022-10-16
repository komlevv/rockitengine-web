import { useId } from 'react';
import s from './BlockTools.scss';
import HeaderM from '../HeaderM/HeaderM';
import Paragraph from '../Paragraph/Paragraph';
import ListItem from '../ListItem/ListItem';
import Divider from '../Divider/Divider';

const BlockTools = ({ data, animationRef }) => {
  const id = useId();
  return (
    <div ref={animationRef} className={s.blockTools}>
      <Divider />
      <HeaderM headerText={data.h} />
      <Paragraph paragraphText={data.p} />
      <div className={s.toolsContainer}>
        {Object.values(data.items).map((v, i) => (
          <div key={`${id}-${i}`}>
            <div className={s.toolsHeader}>{v.h}</div>
            {v.subItems.map((subItem, i2) => (
              <ListItem key={`${id}-${i2}`} text={subItem} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockTools;
