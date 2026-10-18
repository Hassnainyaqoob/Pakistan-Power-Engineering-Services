import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import heroImage from '../../assets/images/lt_panels_hero.jpg';

const services = [
    {
        icon: '⚡',
        title: 'Custom LT & PCC Panel Manufacturing',
        description: 'Complete in-house design, fabrication, and assembly of Power Control Centers (PCC) up to 6300A with high-grade copper busbars and IEC compliance.'
    },
    {
        icon: '⚙️',
        title: 'Motor Control Centers (MCC)',
        description: 'Fabrication of intelligent MCC panels featuring Direct-On-Line (DOL), Star-Delta, Soft Starters, and Variable Frequency Drives (VFD) for industrial machinery.'
    },
    {
        icon: '📊',
        title: 'Automatic Power Factor Correction (APFC)',
        description: 'Design and manufacturing of heavy-duty PFI / APFC panels with microprocessor power factor controllers, detuned harmonic reactors, and capacitor protection.'
    },
    {
        icon: '🛡️',
        title: 'Distribution Boards & Sub-Distribution',
        description: 'Custom main distribution frames, sub-distribution boards (SDB), lighting panels, and feeder pillars engineered for industrial plants and commercial complexes.'
    },
    {
        icon: '🔍',
        title: 'Breaker Testing & Maintenance',
        description: 'On-site maintenance, primary/secondary injection testing, contact resistance measurement, and refurbishment of Air Circuit Breakers (ACB) and MCCBs.'
    },
    {
        icon: '📐',
        title: 'Auto Transfer Switch (ATS / AMF)',
        description: 'Automated mains failure (AMF) and generator synchronizing panels engineered for seamless emergency power switchover in critical facilities.'
    },
    {
        icon: '🔬',
        title: 'Factory Acceptance Testing (FAT) & Quality',
        description: 'Comprehensive insulation resistance (megger), high-voltage withstand, continuity, and functional trip testing before site dispatch.'
    },
    {
        icon: '🚚',
        title: 'Nationwide Delivery, Erection & Commissioning',
        description: 'Complete on-site positioning, busbar trunking connection, cable termination, and site commissioning across all provinces of Pakistan.'
    }
];

const benefits = [
    {
        icon: '🏆',
        title: 'In-House Sheet Metal & Powder Coating',
        description: 'Built with CNC-punched high-gauge CRCA sheet steel with electrostatic powder coating for corrosion resistance in harsh environments.'
    },
    {
        icon: '⭐',
        title: 'Tier-1 Switchgear Components',
        description: 'Equipped with world-class components from Schneider Electric, Siemens, ABB, Mitsubishi, LS Electric, and Terasaki.'
    },
    {
        icon: '⚡',
        title: '99.9% Electrolytic Copper Busbars',
        description: 'Precision calculated busbars sized for continuous full load, fault-level withstand, heat dissipation, and tin/silver plated joints.'
    },
    {
        icon: '⏱️',
        title: '24/7 After-Sales & Site Emergency Support',
        description: 'Rapid response engineering team available for troubleshooting, breaker repair, and spare parts across Pakistan.'
    }
];

const keyFeatures = [
    'Enclosures rated up to IP54 / IP55 for industrial dust & moisture protection',
    'Short circuit fault withstand capacity up to 50kA / 65kA / 85kA for 1 sec',
    'High purity (99.9%) electrolytic grade copper busbars with heat shrink insulation',
    'Drawout & Fixed type Air Circuit Breakers (ACB) up to 6300A',
    'Microprocessor-based multi-function energy meters with RS485 / Modbus',
    'Phase failure, under/over voltage, and earth leakage protection',
    'Interlocking schemes (electrical & mechanical Castle interlocks)',
    'Comprehensive FAT (Factory Acceptance Testing) and test certification',
];

const applications = [
    'Textile Spinning & Weaving Mills',
    'Steel Re-Rolling & Furnaces',
    'Cement, Chemical & Fertilizer Plants',
    'Food, Beverage & FMCG Facilities',
    'Commercial Plazas, Towers & Malls',
    'Hospitals & Healthcare Facilities',
    'Data Centers & IT Infrastructure',
    'Water Treatment & Pumping Stations',
];

const stats = [
    { number: '1000+', label: 'Panels Manufactured' },
    { number: '6300A', label: 'Max Busbar Rating' },
    { number: '100%', label: 'Factory Tested' },
    { number: '24/7', label: 'Technical Support' },
];

export default function LTPanelsPage() {
    return (
        <ServicePageTemplate
            heroImage={heroImage}
            heroTitle="LT & PCC/MCC Panels"
            heroTitleAccent="Manufacturing & Assembly"
            heroSubtitle="Pakistan Power Engineering Services"
            heroDescription="Complete in-house manufacturing, assembly, and rigorous testing of Low Tension (LT) Switchgear, Power Control Centers (PCC), Motor Control Centers (MCC), and Distribution Boards up to 6300A. Built to international standards for industries across Pakistan."
            overviewText="Pakistan Power Engineering Services is a premier manufacturer and technical engineering solution provider for Low Voltage (LV/LT) power distribution systems. From heavy industrial PCC switchboards with drawout ACBs to complex automation MCC panels with variable speed drives and APFC capacitor banks, we deliver robust, durable, and highly reliable electrical panels. Every panel is engineered using high-gauge steel, certified electrolytic copper busbars, and globally trusted switchgear components (Schneider, Siemens, ABB, Terasaki), verified through strict quality and factory acceptance testing."
            services={services}
            benefits={benefits}
            keyFeatures={keyFeatures}
            applications={applications}
            stats={stats}
            ctaTitle="Need Custom LT / PCC / MCC Panels Built?"
            ctaDescription="Share your single line diagram (SLD) or load requirements. Our expert design and assembly team will provide an optimized quotation and rapid delivery schedule."
        />
    );
}
