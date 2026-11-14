import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import ThermographyShowcase from '../../components/ThermographyShowcase';
import heroImage from '../../assets/images/real/hero_thermography_substation.jpg';

const services = [
    {
        icon: '🛢️',
        title: 'Transformers Thermography',
        description: 'Live-load thermal imaging of HV/LV porcelain bushings, cable box terminations, OLTC tap-changer tanks, conservator piping, and radiator cooling fin circulation.',
    },
    {
        icon: '⚡',
        title: 'HT Panels Thermography (11kV VCB & RMU)',
        description: 'Infrared thermal inspection of 11kV switchgear cubicles, XLPE stress-cone terminations, breaker drawout tulip contacts, spouts, CTs/PTs, and copper busbar risers.',
    },
    {
        icon: '🔌',
        title: 'LV Panels Thermography (LT / PCC / ATS)',
        description: 'Non-contact thermal scanning of 415V main distribution switchboards, ACB terminals, MCCB incoming/outgoing lugs, bolted busbar joints, and APFC capacitor banks.',
    },
    {
        icon: '🎛️',
        title: 'Control Panels Thermography',
        description: 'Precision hotspot scanning across protection relay panels, marshalling kiosks, DIN-rail CT/PT terminal blocks, auxiliary relays, DC power supplies, and PLC racks.',
    },
    {
        icon: '⚙️',
        title: 'Motor Control Panels (MCC) Thermography',
        description: 'Diagnostic thermal audits for MCC buckets, Variable Frequency Drives (VFDs), Soft Starters, magnetic contactors, thermal overloads, and outgoing motor feeder cables.',
    },
    {
        icon: '📋',
        title: 'Quantitative ΔT Thermal Reporting & Remediation',
        description: 'Formal dual-image (infrared + visible) PDF engineering reports grading ΔT fault severity per NFPA 70B & NETA MTS standards, followed by torqueing & repair support.',
    },
];

const benefits = [
    {
        icon: '⏱️',
        title: 'Zero Plant Shutdown Required',
        description: 'Inspections are performed safely while your substation, transformers, and production panels remain energized under normal operating load.',
    },
    {
        icon: '🔥',
        title: 'Prevent Switchgear Fires & Arc-Flash',
        description: 'Pinpoints loose terminations, oxidized copper lugs, and imbalanced phases long before smoke, insulation breakdown, or catastrophic flashover.',
    },
    {
        icon: '🏭',
        title: 'High-Resolution Industrial Thermal Cameras',
        description: 'Calibrated FLIR-grade infrared sensors capture accurate spot temperatures, emissivity-compensated deltas, and clear thermal heat maps.',
    },
    {
        icon: '🔧',
        title: 'Complete Detect + Fix Engineering Team',
        description: 'Unlike third-party auditors who only hand you a list of faults, our field engineers immediately re-torque, clean, replace contacts, and commission repairs.',
    },
    {
        icon: '🇵🇰',
        title: 'Nationwide Preventive Audits Across Pakistan',
        description: 'Rapid thermal audit mobilization for textile mills, steel furnaces, cement plants, pharmaceuticals, data centers, and commercial towers.',
    },
    {
        icon: '📄',
        title: 'Insurance & Utility Audit Compliance',
        description: 'Standardized thermal inspection reports accepted by industrial safety auditors, ISO plant teams, and commercial insurance underwriters.',
    },
];

const keyFeatures = [
    'Thermography of Oil & Dry-Type Power Transformers',
    'Thermography of 11kV HT Panels, VCB Cubicles & RMUs',
    'Thermography of 415V LV / LT / PCC / PFI Switchboards',
    'Thermography of Protection Relay & PLC Control Panels',
    'Thermography of Motor Control Centers (MCC), VFDs & Contactors',
    'Quantitative ΔT Severity Grading (NFPA 70B & NETA MTS Standards)',
    'Side-by-Side Thermal + Visible Digital Inspection Reports',
    'Scheduled Quarterly, Bi-Annual & Annual Preventive AMC Packages',
];

const applications = [
    'Power Transformers & Substations',
    '11kV HT VCB Switchgear Rooms',
    '415V LT / PCC Main Switchboards',
    'Protection Relay & Control Cabinets',
    'Motor Control Centers (MCC / VFD)',
    'Captive Power & Generator Panels',
    'Textile, Steel & Cement Plants',
    'Hospitals, Malls & Data Centers',
];

const stats = [
    { number: '5 Core Assets', label: 'Transformers to MCCs' },
    { number: 'Zero', label: 'Production Downtime' },
    { number: 'NETA / NFPA', label: '70B Compliance' },
    { number: '24/7', label: 'Fault Remediation' },
];

export default function ThermographyPage() {
    return (
        <ServicePageTemplate
            heroImage={heroImage}
            heroTitle="Infrared Thermography"
            heroTitleAccent="Preventive Thermal Imaging Inspection"
            heroSubtitle="Pakistan Power Engineering Services"
            heroDescription="Live-load non-contact Infrared Thermography inspection with detailed thermal & visual diagnostics for Transformers, HT Panels, LV Panels, Control Panels, and Motor Control Panels across Pakistan."
            overviewText="Loose electrical connections, corroded busbar joints, imbalanced phase loads, and failing contacts generate abnormal resistance heat long before an electrical failure happens. Pakistan Power Engineering Services performs certified live-load Infrared Thermography surveys across industrial facilities and substations without interrupting your plant production — covering Power Transformers, 11kV HT Panels, LV/PCC Switchboards, Protection & Control Panels, and Motor Control Centers (MCC), backed by NFPA 70B / NETA MTS ΔT reports and immediate corrective maintenance."
            services={services}
            showcaseSection={<ThermographyShowcase />}
            benefits={benefits}
            keyFeatures={keyFeatures}
            applications={applications}
            stats={stats}
            ctaTitle="Book a Live-Load Infrared Thermography Survey"
            ctaDescription="Detect hidden electrical hotspots in your Transformers, HT/LV switchboards, Control Panels, and MCCs before costly unplanned shutdowns occur."
        />
    );
}

