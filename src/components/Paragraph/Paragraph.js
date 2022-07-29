import s from './Paragraph.css';

const Paragraph = ({paragraphText}) => (
    <p className={s.paragraph}>{paragraphText}</p>
)

export default Paragraph;
