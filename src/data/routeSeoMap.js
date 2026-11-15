// src/data/routeSeoMap.js
// Single Source of Truth for SEO metadata across client-side router and build-time SSG prerender

export const SITE_URL = 'https://www.pakistanpowerengservices.com';

export const DEFAULT_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

export const routeSeoMap = {
    '/': {
        title: 'Pakistan Power Engineering Services | Power Transformers Karachi',
        description: 'Pakistan Power Engineering Services (Est. 2010) in Karachi: Power Transformers, LT/PCC/MCC & 11kV VCB switchgear, relay testing & thermography across Pakistan.'
    },
    '/about': {
        title: 'About Us | Pakistan Power Engineering Services Karachi',
        description: 'Established in 2010 by CEO Ahmed Yaqoob in Karachi, Pakistan Power Engineering Services delivers Power Transformers, HT/LT switchgear & substation engineering.'
    },
    '/contact': {
        title: 'Contact Us | Pakistan Power Engineering Services Karachi',
        description: 'Contact Pakistan Power Engineering Services in Mehmoodabad, Karachi (+92 309 2302512) for Power Transformers, switchgear panels & 24/7 breakdown support.'
    },
    '/profile': {
        title: 'Company Profile | Pakistan Power Engineering Services',
        description: 'View the official company profile of Pakistan Power Engineering Services in Karachi: 16+ years of experience, 500+ industrial projects & utility approvals.'
    },
    '/clients': {
        title: 'Our Clients | Pakistan Power Engineering Services Pakistan',
        description: 'Trusted by 100+ textile, steel, cement, pharma & industrial plants in Karachi and across Pakistan, with K-Electric & DISCO compliance.'
    },
    '/gallery': {
        title: 'Project Gallery | Pakistan Power Engineering Services Karachi',
        description: 'Explore 95+ on-site project photos of Power Transformers, 11kV VCB switchgear panels, relay testing & substation work in Karachi and across Pakistan.'
    },
    '/services/power-transformers': {
        title: 'Power Transformers Karachi | Pakistan Power Engineering Services',
        description: 'Oil-immersed & dry-type Power Transformers in Karachi & Pakistan: supply, repairing, coil rewinding, vacuum oil filtration, BDV/TTR testing & commissioning.'
    },
    '/services/lt-panels': {
        title: 'LT, PCC & MCC Panels Karachi | Pakistan Power Engineering',
        description: 'In-house manufacturing of custom LT, PCC, MCC & ATS/AMF panels up to 6300A in Karachi by Pakistan Power Engineering Services with CNC fabrication.'
    },
    '/services/vcb-mv-panels': {
        title: '11kV HT VCB & RMU Switchgear | Pakistan Power Engineering',
        description: '11kV VCB switchgear panels, breaker trolley overhauling, retrofitting, RMU maintenance & interlock testing in Karachi by Pakistan Power Engineering Services.'
    },
    '/services/testing-commissioning': {
        title: 'Protection Relay Testing Karachi | Pakistan Power Engineering',
        description: 'Primary & secondary injection protection relay testing (Schneider, Siemens, ABB), Hi-Pot, transformer BDV/TTR/IR & breaker timing tests in Karachi & Pakistan.'
    },
    '/services/thermography': {
        title: 'Infrared Thermography Karachi | Pakistan Power Engineering',
        description: 'Live-load Infrared Thermography audits for Transformers, HT/LV, Control & MCC panels in Karachi & Pakistan per NFPA 70B / NETA MTS standards.'
    },
    '/services/turnkey-electrical': {
        title: 'Substation & Turnkey Electrical | Pakistan Power Engineering',
        description: 'Complete substation setup, transformer installation, HT/LT switchgear erection, XLPE cable jointing & utility energization in Karachi and across Pakistan.'
    },
    '/services/power-factor-improvement': {
        title: 'PFI & APFC Panels Karachi | Pakistan Power Engineering',
        description: 'Automatic PFI / APFC capacitor bank panels with detuned harmonic filter reactors in Karachi & Pakistan to maintain 0.99 PF and stop utility surcharges.'
    },
    '/services/mv-equipment-supply': {
        title: 'MV/LV Switchgear & Relay Supply | Pakistan Power Engineering',
        description: 'Supply of Power Transformers, 11kV VCB panels, RMUs, protection relays (Schneider, Siemens, ABB), CTs, PTs & cable termination kits in Karachi & Pakistan.'
    },
    '/services/instrumentation-automation': {
        title: 'PLC & SCADA Automation Karachi | Pakistan Power Engineering',
        description: 'Industrial PLC programming, substation SCADA integration, AMF/ATS automation & energy monitoring in Karachi by Pakistan Power Engineering Services.'
    }
};

export const CANONICAL_ALIASES = {
    '/services': '/services/power-transformers',
    '/services/11kv-transformers': '/services/power-transformers',
    '/services/power-transformer': '/services/power-transformers'
};

export const normalizeRoutePath = (rawPath = '/') => {
    if (!rawPath || rawPath === '/') return '/';
    return rawPath.replace(/\/+$/, '') || '/';
};

export const getCanonicalUrl = (rawPath = '/') => {
    const normalized = normalizeRoutePath(rawPath);
    const canonicalPath = CANONICAL_ALIASES[normalized] || normalized;
    const trailingPath = canonicalPath === '/' ? '/' : `${canonicalPath}/`;
    return `${SITE_URL}${trailingPath}`;
};

export const PRERENDER_ROUTES = Object.keys(routeSeoMap);

