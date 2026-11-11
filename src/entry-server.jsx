import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

// Import individual pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/contact.jsx';
import Profile from './pages/Profile.jsx';
import Clients from './pages/Clients.jsx';
import Gallery from './pages/Gallery.jsx';

import ElevenKVTransformersPage from './pages/services/ElevenKVTransformers.jsx';
import LTPanelsPage from './pages/services/LTPanels.jsx';
import VCBPanelsPage from './pages/services/VCBMVPanels.jsx';
import TestingCommissioningPage from './pages/services/TestingCommissioning.jsx';
import TurnkeyElectricalPage from './pages/services/TurnkeyElectrical.jsx';
import PowerFactorImprovementPage from './pages/services/PowerFactorImprovement.jsx';
import MVEquipmentSupplyPage from './pages/services/MVEquipmentSupply.jsx';
import InstrumentationAutomationPage from './pages/services/InstrumentationAutomation.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const pages = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
  '/profile': Profile,
  '/clients': Clients,
  '/gallery': Gallery,
  '/services/power-transformers': ElevenKVTransformersPage,
  '/services/lt-panels': LTPanelsPage,
  '/services/vcb-mv-panels': VCBPanelsPage,
  '/services/testing-commissioning': TestingCommissioningPage,
  '/services/turnkey-electrical': TurnkeyElectricalPage,
  '/services/power-factor-improvement': PowerFactorImprovementPage,
  '/services/mv-equipment-supply': MVEquipmentSupplyPage,
  '/services/instrumentation-automation': InstrumentationAutomationPage,
};

export function render(url) {
  const Component = pages[url] || Home;
  return renderToString(
    <StaticRouter location={url}>
      <div className="pt-20 md:pt-32">
        <Navbar />
        <Component />
        <Footer />
      </div>
    </StaticRouter>
  );
}
