import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import heroImage from '../../assets/images/vcb_mv_panels_hero.jpg';

const services = [
    { icon: '🔌', title: '11kV Vacuum Circuit Breaker (VCB) Overhaul', description: 'Complete mechanical and electrical overhaul of 11kV drawout and fixed VCBs: vacuum bottle integrity testing, contact wipe measurement, and operating mechanism lubrication.' },
    { icon: '🛡️', title: 'Ring Main Unit (RMU) Servicing & Testing', description: 'Inspection, SF6 gas pressure verification, vacuum switch testing, interlocking checks, and maintenance for compact RMUs in industrial and commercial distribution.' },
    { icon: '⚙️', title: 'MiCOM & Numerical Relay Calibration', description: 'Secondary injection testing, curve setting (IDMT / Definite Time), trip timing verification, and protection coordination for overcurrent, earth fault, and differential relays.' },
    { icon: '🔬', title: 'Contact Resistance & Breaker Timing Tests', description: 'Precision micro-ohm ductor testing across main breaker contacts to prevent dangerous thermal hotspots, combined with millisecond close/open timing checks.' },
    { icon: '📐', title: '11kV HT Cable Termination & Testing', description: 'Heat-shrink and cold-shrink 11kV XLPE cable terminations, stress cone inspection, bushing boot fitting, and Hi-Pot insulation resistance testing.' },
    { icon: '⚡', title: 'Busbar Trunking & Flashover Repair', description: 'Copper busbar re-alignment, torque tightening, replacement of carbonized insulators, post-flashover cleanup, and dielectric clearance restoration.' },
    { icon: '📊', title: 'Current & Potential Transformer (CT/PT) Testing', description: 'Ratio testing, polarity check, excitation curve analysis, and insulation resistance measurement for 11kV metering and protection instrument transformers.' },
    { icon: '🔧', title: 'Breaker Retrofit & Upgrade Solutions', description: 'Replacing obsolete oil circuit breakers (OCB) or aging air breakers with modern 11kV Vacuum Circuit Breakers inside existing cubicles.' },
    { icon: '🚚', title: '24/7 Emergency Substation Breakdown Support', description: 'Rapid dispatch of medium-voltage switchgear specialists across Pakistan to troubleshoot tripped breakers, interlock jams, and power restoration.' },
];

const benefits = [
    { icon: '⚡', title: '11kV Medium-Voltage Specialists', description: 'Dedicated engineers certified in handling high fault currents up to 25kA / 31.5kA in 11kV distribution networks.' },
    { icon: '🛡️', title: 'Enhanced Operator Safety & Interlocks', description: 'Rigorous inspection of mechanical padlocks, door interlocks, and earthing switch mechanisms to eliminate arc-flash risks.' },
    { icon: '⏱️', title: 'Minimal Downtime for Plants', description: 'Fast turn-around breaker servicing, spare parts stocking, and organized shutdown execution.' },
    { icon: '🇵🇰', title: 'Serving All Across Pakistan', description: 'Mobilized teams serving industrial zones in Sindh, Punjab, KPK, Balochistan, and federal capital areas.' },
    { icon: '🏆', title: 'Utility Standard Compliance', description: 'Aligned with K-Electric, LESCO, IESCO, FESCO, and NEPRA distribution safety codes.' },
    { icon: '💰', title: 'Cost-Effective Retrofitting', description: 'Avoid expensive cubicle replacements by retrofitting modern vacuum breakers into your existing switchboard.' },
];

const keyFeatures = [
    '11kV Vacuum Circuit Breaker (VCB) Maintenance & Overhauling',
    'Ring Main Unit (RMU) Testing & Gas Pressure Assessment',
    'MiCOM, Schneider, ABB & Siemens Relay Calibration',
    'Breaker Timing Analysis & Contact Resistance (CRM / Ductor)',
    '11kV XLPE Heat-Shrink Cable Termination & Jointing',
    'CT / PT Metering and Protection Class Ratio Verification',
    'High Voltage AC/DC Hi-Pot & Megger Insulation Testing',
    '24/7 Emergency Breakdown Response Across Pakistan',
];

const applications = [
    '11kV Industrial Substations', 'Power Distribution Rooms', 'Steel & Induction Furnaces',
    'Textile Mills', 'Commercial High-Rise Plazas', 'Hospital Substation Rooms',
    'Data Centers & Telecom Grids', 'DISCO / K-Electric Consumer Substations',
];

const stats = [
    { number: '11kV', label: 'Medium Voltage Rating' },
    { number: '500+', label: 'VCB Panels Serviced' },
    { number: '31.5kA', label: 'Fault Level Capability' },
    { number: '24/7', label: 'Emergency Support' },
];

export default function VCBMVPanelsPage() {
    return (
        <ServicePageTemplate
            heroImage={heroImage}
            heroTitle="11kV VCB & MV Switchgear"
            heroTitleAccent="Maintenance, Testing & Retrofitting"
            heroSubtitle="Pakistan Power Engineering Services"
            heroDescription="Complete technical maintenance, testing, and refurbishment of 11kV Vacuum Circuit Breakers (VCB), Ring Main Units (RMU), and Medium Voltage switchgear panels across Pakistan."
            overviewText="Pakistan Power Engineering Services provides specialized engineering and lifecycle support for 11kV medium-voltage switchgear. Operating on medium voltage requires absolute safety and precision: our seasoned engineers inspect, test, calibrate, and repair all types of 11kV VCB cubicles (Incomer, Outgoing, Bus Coupler, Metering) and compact RMUs. Utilizing advanced contact resistance meters, breaker timing sets, and secondary relay injection testers, we ensure your medium-voltage infrastructure remains safe, reliable, and compliant with all utility regulations."
            services={services}
            benefits={benefits}
            keyFeatures={keyFeatures}
            applications={applications}
            stats={stats}
            ctaTitle="Need 11kV VCB Switchgear or RMU Maintenance?"
            ctaDescription="Our medium-voltage switchgear engineers are ready to inspect, test, and service your panels. Contact us today for a site consultation."
        />
    );
}
