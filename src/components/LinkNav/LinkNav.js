import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const LinkNav = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      style={
        match && {
          textDecoration: 'underline',
          textUnderlineOffset: '8px',
        }
      }
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkNav;
