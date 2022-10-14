import s from './BlockContact.scss';
import HeaderM from '../HeaderM/HeaderM';
import Paragraph from '../Paragraph/Paragraph';
import { useTheme } from '../../contexts/themeContext';
import Divider from '../Divider/Divider';

const data = {
  h: ['Get in touch'],
  p: [
    // 'Share your challenge with us and let’s get started. Send us an email at:',
    // 'You have a project? We have experts!',
    // 'If you have an idea, we have the solution! Let’s collaborate.',
    'Drop us a message below and spark a change, today.',
  ],
  e: 'hello@rockitengine.com',
};

// todo replace this with randomChoice from utils
const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

const BlockContact = ({ innerRef }) => {
  const { theme } = useTheme();
  return (
    <div ref={innerRef} className={s.blockContact}>
      <Divider />
      <HeaderM accent headerText={random(data.h)} />
      <Paragraph paragraphText={random(data.p)} />
      <a href={`mailto:${data.e}`} className={theme.hoverStyle}>
        <HeaderM headerText={data.e} />
      </a>
    </div>
  );
};

export default BlockContact;
