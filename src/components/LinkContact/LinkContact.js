import { useTheme } from '../../contexts/themeContext';
import s from './LinkContact.scss';

const data = {
  e: 'hello@rockitengine.com',
};

const LinkContact = () => {
  const { theme } = useTheme();
  return (
    <a href={`mailto:${data.e}`} className={`${theme.hoverStyle} ${s.linkContact}`}>
      {data.e}
    </a>
  );
};

export default LinkContact;
