import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import '../../fonts/bnl/Fontface.css';
import './App.css';

import NavBar from '../NavBar/NavBar';
import GridContainer from '../GridContainer/GridContainer';
import BlockFooter from '../BlockFooter/BlockFooter';

import { ROUTES } from './ROUTES';
import PageMain from '../PageMain/PageMain';
import PageServices from '../PageServices/PageServices';
import PageProjects from '../PageProjects/PageProjects';
import PageAbout from '../PageAbout/PageAbout';
import PageContact from '../PageContact/PageContact';
import PageEquinox from '../ProjectPages/PageEquinox/PageEquinox';
import PageGreyGoose from '../ProjectPages/PageGreyGoose/PageGreyGoose';
import PageSpotifyHulu from '../ProjectPages/PageSpotifyHulu/PageSpotifyHulu';
import PageChopard from '../ProjectPages/PageChopard/PageChopard';
import PageJMUpgrade from '../ProjectPages/PageJMUpgrade/PageJMUpgrade';
import PageJohnHardyJM from '../ProjectPages/PageJohnHardyJM/PageJohnHardyJM';
import PageJohnHardyAA from '../ProjectPages/PageJohnHardyAA/PageJohnHardyAA';
import PageAway from '../ProjectPages/PageAway/PageAway';
import PageCartier from '../ProjectPages/PageCartier/PageCartier';
import { ThemeProvider } from '../../contexts/themeContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default App;
