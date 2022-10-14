import { Route, Routes } from 'react-router-dom';

import '../../fonts/bnl/Fontface.scss';
import './App.scss';

import NavBar from '../NavBar/NavBar';
import GridContainer from '../GridContainer/GridContainer';
import BlockFooter from '../BlockFooter/BlockFooter';

import { ROUTES } from './ROUTES';
import PageMain from '../Pages/PageMain/PageMain';
import PageServices from '../Pages/PageServices/PageServices';
import PageProjects from '../Pages/PageProjects/PageProjects';
import PageAbout from '../Pages/PageAbout/PageAbout';
import PageContact from '../Pages/PageContact/PageContact';
import PageEquinox from '../Pages/PageEquinox/PageEquinox';
import PageGreyGoose from '../Pages/PageGreyGoose/PageGreyGoose';
import PageSpotifyHulu from '../Pages/PageSpotifyHulu/PageSpotifyHulu';
import PageChopard from '../Pages/PageChopard/PageChopard';
import PageJMUpgrade from '../Pages/PageJMUpgrade/PageJMUpgrade';
import PageJohnHardyJM from '../Pages/PageJohnHardyJM/PageJohnHardyJM';
import PageJohnHardyAA from '../Pages/PageJohnHardyAA/PageJohnHardyAA';
import PageAway from '../Pages/PageAway/PageAway';
import PageCartier from '../Pages/PageCartier/PageCartier';
import { ThemeProvider } from '../../contexts/themeContext';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const App = () => (
  <ThemeProvider>
    <NavBar />
    <GridContainer>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.ROOT} element={<PageMain />} />
        <Route path={ROUTES.SERVICES} element={<PageServices />} />
        <Route path={ROUTES.PROJECTS} element={<PageProjects />} />
        <Route path={ROUTES.PROJECTS_EQUINOX_F} element={<PageEquinox />} />
        <Route path={ROUTES.PROJECTS_GOOSE_F} element={<PageGreyGoose />} />
        <Route path={ROUTES.PROJECTS_SPOTIFY_HULU_C} element={<PageSpotifyHulu />} />
        <Route path={ROUTES.PROJECTS_CHOPARD_B} element={<PageChopard />} />
        <Route path={ROUTES.PROJECTS_JM_UPGRADE} element={<PageJMUpgrade />} />
        <Route path={ROUTES.PROJECTS_JOHNHARDY_JM} element={<PageJohnHardyJM />} />
        <Route path={ROUTES.PROJECTS_JOHNHARDY_AA} element={<PageJohnHardyAA />} />
        <Route path={ROUTES.PROJECTS_AWAY_PS} element={<PageAway />} />
        <Route path={ROUTES.PROJECTS_CARTIER_CLASH} element={<PageCartier />} />
        <Route path={ROUTES.ABOUT} element={<PageAbout />} />
        <Route path={ROUTES.CONTACT} element={<PageContact />} />
      </Routes>
    </GridContainer>
    <BlockFooter />
  </ThemeProvider>
);

export default App;
