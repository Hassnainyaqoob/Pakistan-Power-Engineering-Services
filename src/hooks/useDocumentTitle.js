// src/hooks/useDocumentTitle.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeSeoMap = {
    '/': {
        title: 'Pakistan Power Engineering Services | Power Transformers, Switchgear & Substation Specialists',
        description: 'Leading industrial electrical engineering across Pakistan. Power Transformers (Supply, Repairing, Testing & Commissioning in multiple kVA ratings), in-house LT/PCC/MCC panels, HT/MV VCB switchgear & MiCOM relay testing.'
    },
    '/about': {
        title: 'About Us | Pakistan Power Engineering Services',
        description: 'Established in 2010 and led by CEO Ahmed Yaqoob, Pakistan Power Engineering Services delivers Power Transformers (all kVA ratings), HT/MV VCB & LT switchgear panels, and substation commissioning across Pakistan.'
    },
    '/contact': {
        title: 'Contact Us | Pakistan Power Engineering Services',
        description: 'Get in touch with our power engineering specialists for Power Transformer supply & repairing, HT/LT switchgear panels, relay testing, and 24/7 emergency breakdown support.'
    },
    '/profile': {
        title: 'Company Profile & Brochure | Pakistan Power Engineering Services',
        description: 'Download our official company profile. Over 15+ years of power engineering excellence, 500+ industrial projects, and utility approvals across Pakistan.'
    },
    '/clients': {
        title: 'Our Clients & Approvals | Pakistan Power Engineering Services',
        description: 'Trusted by 100+ textile, steel, cement, pharmaceutical, and industrial manufacturing plants across Pakistan, with DISCO and K-Electric compliance.'
    },
    '/services/power-transformers': {
        title: 'Power Transformers — Supply, Repairing, Testing & Commissioning | Pakistan Power Engineering Services',
        description: 'Oil-immersed & dry-type Power Transformers across multiple kVA and MVA ratings: supply, HV/LV coil rewinding, repairing, high-vacuum oil filtration, diagnostic testing, and commissioning.'
    },
    '/services/11kv-transformers': {
        title: 'Power Transformers — Supply, Repairing, Testing & Commissioning | Pakistan Power Engineering Services',
        description: 'Oil-immersed & dry-type Power Transformers across multiple kVA and MVA ratings: supply, HV/LV coil rewinding, repairing, high-vacuum oil filtration, diagnostic testing, and commissioning.'
    },
    '/services/power-transformer': {
        title: 'Power Transformer Maintenance, Rewinding & Oil Filtration | Pakistan Power Engineering Services',
        description: 'Specialized Power Transformer repairing, HV/LV copper coil rewinding, mobile high-vacuum oil dehydration (BDV > 60kV), tap changer servicing, and diagnostic testing across all kVA ratings.'
    },
    '/services/lt-panels': {
        title: 'Custom LT Switchgear, PCC & MCC Panel Manufacturing | Pakistan Power Engineering Services',
        description: 'In-house manufacturing of custom Low Tension (LT) panels, Power Control Centers (PCC), and Motor Control Centers (MCC) up to 6300A with CNC fabrication.'
    },
    '/services/vcb-mv-panels': {
        title: 'HT / MV VCB & RMU Switchgear Panels | Pakistan Power Engineering Services',
        description: '11kV Vacuum Circuit Breaker (VCB) panels, trolley overhauling, retrofitting, Ring Main Units (RMU), busbar repair, and protection interlock testing.'
    },
    '/services/testing-commissioning': {
        title: 'Substation Testing, Relay Calibration & Commissioning | Pakistan Power Engineering Services',
        description: 'Primary & secondary injection testing for MiCOM, ABB, Schneider & Siemens numerical relays, Power Transformer diagnostic testing, Megger IR, Hi-Pot, and Oil BDV testing.'
    },
    '/services/turnkey-electrical': {
        title: 'Complete Substation Setup & Turnkey Electrical Solutions | Pakistan Power Engineering Services',
        description: 'End-to-end substation design, Power Transformer installation, HT/LT switchgear erection, XLPE cable jointing & terminations, and utility energization across Pakistan.'
    },
    '/services/power-factor-improvement': {
        title: 'Power Factor Improvement (PFI / APFC) Panels & Capacitor Banks | Pakistan Power Engineering Services',
        description: 'Automatic PFI / APFC capacitor panels across all kVAR ratings with detuned harmonic filter reactors to maintain 0.99 PF and eliminate utility surcharges.'
    },
    '/services/mv-equipment-supply': {
        title: 'Power Transformers, Switchgear & MV/LV Equipment Supply | Pakistan Power Engineering Services',
        description: 'Authorized supply of Power Transformers (multiple kVA ratings), VCB panels, RMUs, MiCOM protection relays, CTs, PTs, spouts, insulators, and cable termination kits.'
    },
    '/services/instrumentation-automation': {
        title: 'Industrial Automation, PLC & SCADA Systems | Pakistan Power Engineering Services',
        description: 'Custom PLC programming, substation SCADA integration, AMF/ATS automation, energy monitoring, and process instrumentation for industrial facilities.'
    }
};

const useDocumentTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        const seoData = routeSeoMap[path] || {
            title: 'Pakistan Power Engineering Services | Power Transformers, Switchgear & Substation Specialists',
            description: 'Leading industrial electrical engineering solutions across Pakistan.'
        };

        document.title = seoData.title;

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', seoData.description);
        }

        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', seoData.title);
        }
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.setAttribute('content', seoData.description);
        }
    }, [location.pathname]);
};

export default useDocumentTitle;
