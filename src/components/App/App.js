import {useEffect} from "react";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";

import '../../fonts/Fontface.css'
import './App.css';

import NavBar from '../NavBar/NavBar.js';
import GridContainer from '../GridContainer/GridContainer.js';
import BlockFooter from '../BlockFooter/BlockFooter.js';

import {ROUTES} from "./ROUTES.js";
import PageMain from '../PageMain/PageMain.js';
import PageServices from '../PageServices/PageServices.js';
import PageProjects from '../PageProjects/PageProjects.js';
import PageAbout from '../PageAbout/PageAbout.js';
import PageContact from '../PageContact/PageContact.js';
import PageEquinox from '../ProjectPages/PageEquinox/PageEquinox.js';
import PageGreyGoose from "../ProjectPages/PageGreyGoose/PageGreyGoose.js";
import PageSpotifyHulu from "../ProjectPages/PageSpotifyHulu/PageSpotifyHulu.js";
import PageChopard from "../ProjectPages/PageChopard/PageChopard.js";
import PageJMUpgrade from "../ProjectPages/PageJMUpgrade/PageJMUpgrade.js";
import PageJohnHardyJM from "../ProjectPages/PageJohnHardyJM/PageJohnHardyJM";
import PageJohnHardyAA from "../ProjectPages/PageJohnHardyAA/PageJohnHardyAA";
import PageAway from "../ProjectPages/PageAway/PageAway";
import PageCartier from "../ProjectPages/PageCartier/PageCartier";
import {ThemeProvider} from "../../contexts/themeContext";


const ScrollToTop = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const App = () => (
    <BrowserRouter>
        <ThemeProvider>
            <NavBar/>
            <GridContainer>
                <ScrollToTop/>
                <Routes>
                    <Route path={ROUTES.ROOT} element={<PageMain/>}/>
                    <Route path={ROUTES.SERVICES} element={<PageServices/>}/>
                    <Route path={ROUTES.PROJECTS} element={<PageProjects/>}/>
                    <Route path={ROUTES.PROJECTS_EQUINOX_F} element={<PageEquinox/>}/>
                    <Route path={ROUTES.PROJECTS_GOOSE_F} element={<PageGreyGoose/>}/>
                    <Route path={ROUTES.PROJECTS_SPOTIFY_HULU_C} element={<PageSpotifyHulu/>}/>
                    <Route path={ROUTES.PROJECTS_CHOPARD_B} element={<PageChopard/>}/>
                    <Route path={ROUTES.PROJECTS_JM_UPGRADE} element={<PageJMUpgrade/>}/>
                    <Route path={ROUTES.PROJECTS_JOHNHARDY_JM} element={<PageJohnHardyJM/>}/>
                    <Route path={ROUTES.PROJECTS_JOHNHARDY_AA} element={<PageJohnHardyAA/>}/>
                    <Route path={ROUTES.PROJECTS_AWAY_PS} element={<PageAway/>}/>
                    <Route path={ROUTES.PROJECTS_CARTIER_CLASH} element={<PageCartier/>}/>
                    <Route path={ROUTES.ABOUT} element={<PageAbout/>}/>
                    <Route path={ROUTES.CONTACT} element={<PageContact/>}/>
                </Routes>
            </GridContainer>
            <BlockFooter/>
        </ThemeProvider>
    </BrowserRouter>
);


export default App;
