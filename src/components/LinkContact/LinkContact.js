import {useTheme} from "../../contexts/themeContext";

const data = {
    e: "hello@rockitengine.com"
}

const LinkContact = () => {
    const {theme} = useTheme();
    return (
        <a
            style={{fontSize: "28px",}}
            href={`mailto:${data.e}`}
            className={theme.hoverStyle}
        >
            {data.e}
        </a>
    )
}

export default LinkContact;