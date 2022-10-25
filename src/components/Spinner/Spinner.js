import s from './Spinner.scss';

const Spinner = ({ style }) => (
  <div className={s.container} style={style}>
    <svg className={s.spinner} viewBox="0 0 50 50">
      <circle className={s.path} cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
    </svg>
  </div>
);

export default Spinner;
