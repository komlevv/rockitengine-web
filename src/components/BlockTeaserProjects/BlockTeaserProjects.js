import s from './BlockTeaserProjects.css';
import HeaderM from "../HeaderM/HeaderM";
import Paragraph from "../Paragraph/Paragraph.js";
import Button from "../Button/Button";
import {ROUTES} from "../App/ROUTES.js";
import Divider from "../Divider/Divider";

const data = {
    h: "Talent that Delivers",
    p: "Accumulated diverse experience. Challenging projects. Continuous learning. " +
        "This is why you'll always get results from our team, on time. Start a project " +
        "with us to see your business grow.",
    buttonText: "See our projects"
}

const BlockTeaserProjects = ({innerRef}) => (
    <div ref={innerRef} className={s.blockTeaserProjects}>
        <Divider/>
        <HeaderM headerText={data.h}/>
        <Paragraph paragraphText={data.p}/>
        <Button buttonText={data.buttonText} href={ROUTES.PROJECTS}/>
    </div>
)

export default BlockTeaserProjects;