import { useId } from 'react';
import s from './BlockProjects.scss';

import HeaderM from '../HeaderM/HeaderM';
import BannerHero from '../BannerHero/BannerHero';
import Button from '../Button/Button';

import { data as dataEquinox } from '../Pages/PageEquinox/data';
import { data as dataCartier } from '../Pages/PageCartier/data';
import { data as dataAway } from '../Pages/PageAway/data';
import { data as dataChopard } from '../Pages/PageChopard/data';
import { data as dataJMUpgrade } from '../Pages/PageJMUpgrade/data';
import { data as dataJohnHardyJM } from '../Pages/PageJohnHardyJM/data';
import { data as dataJohnHardyAA } from '../Pages/PageJohnHardyAA/data';
import { data as dataSpotifyHulu } from '../Pages/PageSpotifyHulu/data';
import { data as dataGreyGoose } from '../Pages/PageGreyGoose/data';
import { ROUTES } from '../App/ROUTES';
import Divider from '../Divider/Divider';
import Animate from '../Animate/Animate';

const dataPages = [
  dataEquinox,
  dataJMUpgrade,
  dataChopard,
  dataJohnHardyAA,
  dataGreyGoose,
  dataJohnHardyJM,
  dataCartier,
  dataAway,
  dataSpotifyHulu,
];

const data = {
  h: 'Our projects',
  p:
    'Software design and development provided ' +
    'by carefully selected and talented people who ' +
    'see the bigger picture - your daily business ' +
    'challenges and your customers’ needs.',
  buttonText: 'See all projects',
};

const BlockProjects = ({ animationRef }) => {
  const id = useId();
  return (
    <div ref={animationRef} className={s.blockProjects}>
      <Animate>
        <Divider />
        <HeaderM headerText={data.h} />
        {dataPages.slice(0, 5).map((dataPage, i) => (
          <BannerHero
            key={`${id}-${i}`}
            linkTo={dataPage.next.banner.linkTo}
            headerText={dataPage.next.banner.h}
            paragraphText={dataPage.next.banner.p}
            imgSrc={dataPage.next.banner.imgShort}
            logoSrc={dataPage.next.banner.logo}
            fontColor={dataPage.next.banner.fontColor}
          />
        ))}
        <Button href={ROUTES.PROJECTS} buttonText={data.buttonText} />
      </Animate>
    </div>
  );
};

export default BlockProjects;
