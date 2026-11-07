import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFoundPage from '../pages/notFound';
import Contact from '../pages/contact';
import Profile from '../pages/Profile';
import Clients from '../pages/Clients';
import { AnimatePresence, motion } from 'framer-motion';
import useDocumentTitle from '../hooks/useDocumentTitle';

// Service Pages
import PowerTransformerPage from '../pages/services/PowerTransformer';
import VCBMVPanelsPage from '../pages/services/VCBMVPanels';
import InstrumentationAutomationPage from '../pages/services/InstrumentationAutomation';
import MVEquipmentSupplyPage from '../pages/services/MVEquipmentSupply';
import PowerFactorImprovementPage from '../pages/services/PowerFactorImprovement';
import TestingCommissioningPage from '../pages/services/TestingCommissioning';
import TurnkeyElectricalPage from '../pages/services/TurnkeyElectrical';
import LTPanelsPage from '../pages/services/LTPanels';
import ElevenKVTransformersPage from '../pages/services/ElevenKVTransformers';
import ScrollToTop from '../components/ScrollToTop';

const RouterConfig = () => {
    const location = useLocation();
    useDocumentTitle();

    return (
        <>
            <ScrollToTop />
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                key={location.pathname}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                }}
            >
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/clients" element={<Clients />} />

                    {/* Service Pages */}
                    <Route path="/services" element={<Navigate to="/services/power-transformers" replace />} />
                    <Route path="/services/lt-panels" element={<LTPanelsPage />} />
                    <Route path="/services/power-transformers" element={<ElevenKVTransformersPage />} />
                    <Route path="/services/11kv-transformers" element={<Navigate to="/services/power-transformers" replace />} />
                    <Route path="/services/power-transformer" element={<PowerTransformerPage />} />
                    <Route path="/services/vcb-mv-panels" element={<VCBMVPanelsPage />} />
                    <Route path="/services/instrumentation-automation" element={<InstrumentationAutomationPage />} />
                    <Route path="/services/mv-equipment-supply" element={<MVEquipmentSupplyPage />} />
                    <Route path="/services/power-factor-improvement" element={<PowerFactorImprovementPage />} />
                    <Route path="/services/testing-commissioning" element={<TestingCommissioningPage />} />
                    <Route path="/services/turnkey-electrical" element={<TurnkeyElectricalPage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
        </>
    );
};

export default RouterConfig;
