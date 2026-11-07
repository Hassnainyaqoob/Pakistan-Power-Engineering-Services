// src/hooks/useDocumentTitle.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeSeoMap = {
    '/': {
        title: 'Pakistan Power Engineering Services | 11kV Substation, Transformer & Switchgear Specialists',
        description: 'Leading 11kV substation engineering across Pakistan. 11kV (11,000V) transformers, in-house LT/PCC/MCC panel manufacturing, VCB switchgear & MiCOM relay testing.'
    },
    '/about': {
        title: 'About Us | Pakistan Power Engineering Services',
        description: 'Established in 2010, Pakistan Power Engineering Services delivers end-to-end electrical distribution, panel manufacturing, and high-voltage substation solutions across Pakistan.'
    },
    '/contact': {
        title: 'Contact Us | Pakistan Power Engineering Services',
        description: 'Get in touch with our certified power engineers for 11kV substation setup, transformer testing, LT panels, and 24/7 emergency breakdown support.'
    },
    '/profile': {
        title: 'Company Profile & Credentials | Pakistan Power Engineering Services',
        description: 'Download our official company profile. Over 14 years of certified power engineering excellence, 500+ substation projects, and utility approvals across Pakistan.'
    },
    '/clients': {
        title: 'Our Clients & Approvals | Pakistan Power Engineering Services',
        description: 'Trusted by leading textile, steel, cement, pharmaceutical, and industrial manufacturing plants across Pakistan, with DISCO and K-Electric approvals.'
    },
    '/services/11kv-transformers': {
        title: '11kV (11,000V) Distribution Transformers | Pakistan Power Engineering Services',
        description: 'Comprehensive 11kV transformer supply, rewinding, vacuum oil filtration, ratio testing, and on-site maintenance across 11kV (11,000V) power networks.'
    },
    '/services/power-transformer': {
        title: 'Power Transformer Services & Maintenance | Pakistan Power Engineering Services',
        description: 'Heavy power transformer rewinding, turnkey installation, high-vacuum oil dehydration, Tan-Delta, and diagnostic testing across Pakistan.'
    },
    '/services/lt-panels': {
        title: 'Custom LT Switchgear, PCC & MCC Panel Manufacturing | Pakistan Power Engineering Services',
        description: 'In-house manufacturing of custom Low Tension (LT) panels, Power Control Centers (PCC), Motor Control Centers (MCC) up to 6300A with CNC fabrication.'
    },
    '/services/vcb-mv-panels': {
        title: '11kV VCB & MV Switchgear Panels | Pakistan Power Engineering Services',
        description: '11kV Vacuum Circuit Breaker (VCB) maintenance, retrofitting, Ring Main Units (RMU), busbar flashover repair, and interlock inspection.'
    },
    '/services/testing-commissioning': {
        title: 'Substation Testing, Relay Calibration & Commissioning | Pakistan Power Engineering Services',
        description: 'Secondary injection testing for MiCOM and numerical relays, CT/PT ratio verification, 10kV insulation resistance, and DISCO utility handover.'
    },
    '/services/turnkey-electrical': {
        title: 'Complete 11kV Substation Setup & Solutions | Pakistan Power Engineering Services',
        description: 'End-to-end 11kV substation design, civil foundation, equipment supply, cable laying, HT/LT termination, and energization across Pakistan.'
    },
    '/services/power-factor-improvement': {
        title: 'Power Factor Improvement (PFI) Panels & Capacitor Banks | Pakistan Power Engineering Services',
        description: 'Automatic PFI plants, detuned harmonic filter reactors, heavy-duty capacitor banks, and power factor correction to eliminate utility penalties.'
    },
    '/services/mv-equipment-supply': {
        title: '11kV Medium Voltage Equipment Supply | Pakistan Power Engineering Services',
        description: 'Genuine supply of 11kV vacuum interrupters, lightning arresters, drop-out cutouts, HT XLPE cable terminations, and instrument transformers.'
    },
    '/services/instrumentation-automation': {
        title: 'Industrial Automation, PLC & SCADA Systems | Pakistan Power Engineering Services',
        description: 'Custom PLC programming, SCADA integration, automated energy monitoring, and remote substation telemetry for modern industrial facilities.'
    }
};

const useDocumentTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        const seoData = routeSeoMap[path] || {
            title: 'Pakistan Power Engineering Services | 11kV Substation & Panel Specialists',
            description: 'Leading electrical engineering solutions for industrial and commercial sectors across Pakistan.'
        };

        // Update document title
        document.title = seoData.title;

        // Update meta description tag dynamically
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', seoData.description);
        }

        // Update og:title and og:description if present
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', seoData.title);
        }
        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.setAttribute('content', seoData.description);
        }
    }, [location.pathname]);
};

export default useDocumentTitle;