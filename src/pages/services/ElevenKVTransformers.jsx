import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import heroImage from '../../assets/images/eleven_kv_transformers_hero.jpg';

const services = [
    {
        icon: '⚡',
        title: '11kV Transformer Supply (Up to 11,000 kVA)',
        description: 'Supply of brand new and refurbished 11kV/0.4kV distribution and power transformers from 50 kVA up to 11,000 kVA (11 MVA) complying with IEC 60076, WAPDA, and K-Electric standards.'
    },
    {
        icon: '🛢️',
        title: 'Oil-Immersed Distribution Transformers',
        description: 'Conservator and hermetically sealed non-breathing distribution transformers with high-efficiency CRGO silicon steel cores, Dyn11 vector configuration, and low loss ratings.'
    },
    {
        icon: '🛡️',
        title: 'Dry-Type Cast Resin Transformers',
        description: 'Flame-retardant, self-extinguishing Class-F and Class-H cast resin & vacuum pressure impregnated (VPI) dry-type transformers engineered for indoor substations, malls, and hospitals.'
    },
    {
        icon: '💧',
        title: 'High-Vacuum Oil Filtration & Dehydration',
        description: 'Mobile two-stage high-vacuum oil purification plants for on-site moisture removal, degassing, particle filtration, and restoration of transformer oil dielectric breakdown voltage (BDV).'
    },
    {
        icon: '🔬',
        title: 'Comprehensive Diagnostic & Relay Testing',
        description: 'On-site Megger (Insulation Resistance), PI, Turns Ratio (TTR), Winding Resistance, Oil BDV testing, Buchholz relay functional checks, and temperature calibration.'
    },
    {
        icon: '🔧',
        title: 'Complete Rewinding & Workshop Repair',
        description: 'Full high-voltage (HV) and low-voltage (LV) coil rewinding using high-grade electrolytic copper, core unstacking/restacking, insulation replacement, and oven baking.'
    },
    {
        icon: '🔩',
        title: 'Gasket Replacement & Leakage Arresting',
        description: 'Complete overhaul of transformer tanks, replacement of aging cork/nitrile gaskets, radiator refurbishment, silica gel breather servicing, and pressure testing.'
    },
    {
        icon: '🚚',
        title: 'Complete Substation Erection & Handover',
        description: 'Site civil pad assessment, rigging, transformer positioning, HT cable termination, earthing grid connection, utility inspection assistance, and energized commissioning.'
    }
];

const benefits = [
    {
        icon: '⚡',
        title: 'Capacity Up To 11,000 kVA (11 MVA)',
        description: 'Deep technical capability and test equipment to handle heavy industrial substations, captive power plants, and utility distribution transformers.'
    },
    {
        icon: '🏆',
        title: 'Certified Oil Quality & Test Reports',
        description: 'Every serviced and supplied transformer is backed by comprehensive electrical test reports and oil dielectric strength (BDV > 60kV) certification.'
    },
    {
        icon: '🛠️',
        title: 'Emergency On-Site Repair Crews',
        description: 'Rapid-deployment technical teams equipped with diagnostic gear for emergency breakdown analysis and fast transformer turnaround.'
    },
    {
        icon: '🇵🇰',
        title: 'Serving All Provinces of Pakistan',
        description: 'Trusted by over 100+ industrial clients across Sindh, Punjab, KPK, Balochistan, and Islamabad Capital Territory.'
    }
];

const keyFeatures = [
    'Ratings from 50 kVA, 100 kVA, 250 kVA, 500 kVA, 1000 kVA up to 11,000 kVA (11 MVA)',
    'Dual technology coverage: Oil-Immersed (Conservator / Sealed) & Dry Type (Cast Resin)',
    'Dyn11 standard vector group (other configurations available on request)',
    'High dielectric strength insulation oil certified to IEC 60296 standards',
    'Off-circuit tap changers (OCTC) and On-Load tap changers (OLTC) overhauling',
    'Complete protection integration: Buchholz relay, PRV, OTI, WTI, and neutral CTs',
    'Rewinding with class-H insulation and 99.9% pure electrolytic copper conductor',
    'Full utility compliance assistance for DISCOs (LESCO, IESCO, FESCO, MEPCO, GEPCO, PESCO, HESCO, SEPCO, QESCO) and K-Electric'
];

const applications = [
    'Heavy Industrial & Manufacturing Plants',
    'Textile & Yarn Spinning Complexes',
    'Steel Mills & Induction Furnace Units',
    'Commercial High-Rise Plazas & Towers',
    'Hospital & Healthcare Emergency Grids',
    'Cement, Mining & Chemical Factories',
    'Captive Power Generation Facilities',
    'Housing Societies & Commercial Substations'
];

const stats = [
    { number: '11 MVA', label: 'Max Handling Capacity' },
    { number: '500+', label: 'Transformers Serviced' },
    { number: '60kV+', label: 'Oil BDV Standard' },
    { number: '24/7', label: 'Emergency Support' }
];

export default function ElevenKVTransformersPage() {
    return (
        <ServicePageTemplate
            heroImage={heroImage}
            heroTitle="11kV Transformers"
            heroTitleAccent="Supply, Repair & Testing"
            heroSubtitle="Pakistan Power Engineering Services"
            heroDescription="Complete technical lifecycle solutions for 11kV Power & Distribution Transformers up to 11,000 kVA (11 MVA). Supply of Oil-Immersed & Dry Type Cast Resin transformers, high-vacuum oil dehydration, precision diagnostic testing, full coil rewinding, and complete substation installation across Pakistan."
            overviewText="Pakistan Power Engineering Services provides end-to-end engineering excellence for medium-voltage 11kV distribution transformers. Whether you need a brand-new energy-efficient 11kV transformer for an expanding manufacturing facility, an urgent on-site high-vacuum oil filtration to restore dielectric strength, or complete workshop coil rewinding and overhauling of a tripped unit, our seasoned power engineers deliver guaranteed reliability. We service both indoor cast resin dry-type transformers and outdoor oil-immersed units up to 11,000 kVA, adhering strictly to IEC 60076 standards, NEPRA regulations, and local utility requirements."
            services={services}
            benefits={benefits}
            keyFeatures={keyFeatures}
            applications={applications}
            stats={stats}
            ctaTitle="Need 11kV Transformer Supply, Testing or Urgent Repair?"
            ctaDescription="Get in touch with our substation engineering team today for immediate site diagnostic assessment, oil filtration, or supply quotation."
        />
    );
}
