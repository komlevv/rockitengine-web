import { useId } from 'react';
import GridContainerHalf from '../GridContainerHalf/GridContainerHalf';
import HeaderS from '../HeaderS/HeaderS';
import Gap from '../Gap/Gap';
import ListItem from '../ListItem/ListItem';

const ListHalfWithHeader = ({ h, items, animationRef }) => {
  const id = useId();
  return (
    <GridContainerHalf animationRef={animationRef} style={{ gap: '0 20px' }}>
      <HeaderS headerText={h} />
      <Gap size={20} />
      {items.map((itemText, i) => (
        <ListItem text={itemText} key={`${id}-${i}`} />
      ))}
    </GridContainerHalf>
  );
};

export default ListHalfWithHeader;
