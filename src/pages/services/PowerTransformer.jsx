import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import heroImage from '../../assets/images/power_transformer_hero.jpg';

const services = [
    { icon: '⚡', title: 'Complete HV & LV Coil Rewinding', description: 'Precision workshop rewinding of high-voltage and low-voltage transformer windings across all kVA/MVA ratings using 99.9% electrolytic copper, Nomex/Kraft insulation, core restacking, and oven curing.' },
    { icon: '🛢️', title: 'High-Vacuum Oil Dehydration & Filtration', description: 'Mobile two-stage high-vacuum oil purification plants to remove dissolved moisture, gases, and sludge on-site, restoring oil dielectric breakdown voltage (BDV > 60kV).' },
    { icon: '🔧', title: 'Power Transformer Repairing & Overhauling', description: 'Complete mechanical and electrical overhauling across multiple kVA capacities: tank leak welding, nitrile/cork gasket replacement, radiator flushing, and conservator refurbishment.' },
    { icon: '⚙️', title: 'Installation, Rigging & Commissioning', description: 'Safe crane rigging, foundation alignment, enclosed HT/LT cable box termination, earthing grid bonding, pre-commissioning tests, and energized handover across Pakistan.' },
    { icon: '🔬', title: 'Diagnostic & Condition Assessment Testing', description: 'Turns Ratio (TTR), Winding DC Resistance, Insulation Resistance (Megger IR & PI), Magnetic Balance, Vector Group verification, Oil Acidity/Moisture, and Tan Delta testing.' },
    { icon: '🔩', title: 'OLTC & OCTC Tap Changer Servicing', description: 'Contact inspection, carbon removal, diverter switch timing, transition resistor checks, and dedicated compartment oil filtration for On-Load and Off-Circuit Tap Changers.' },
    { icon: '🛡️', title: 'Transformer Protection & Relay Calibration', description: 'Functional testing, trip verification, and calibration of Buchholz relays, Pressure Relief Valves (PRV), Oil Temperature Indicators (OTI), and Winding Temperature Indicators (WTI).' },
    { icon: '🏭', title: 'Dry-Type Cast Resin & VPI Maintenance', description: 'De-dusting, insulation inspection, hot-air moisture drying, RTD/PT100 thermal controller calibration, and coil encapsulation repair for indoor dry-type power transformers.' },
    { icon: '🚚', title: '24/7 Emergency Breakdown & Preventive AMC', description: 'Rapid-deployment field teams for tripped transformer fault isolation, emergency repair, annual preventive maintenance contracts (AMC), and oil health monitoring.' },
];

const benefits = [
    { icon: '⚡', title: 'All kVA & MVA Capacities Handled', description: 'Equipped with heavy crane rigging, coil winding machines, baking ovens, and diagnostic instruments for distribution and power transformers of all kVA ratings.' },
    { icon: '⏳', title: 'Extended Transformer Lifespan', description: 'Timely oil dehydration, gasket renewal, and precision rewinding restore aging transformers to optimal thermal and electrical performance.' },
    { icon: '🏆', title: 'Certified Dielectric & Test Reports', description: 'Formal test documentation verifying oil BDV > 60kV, winding balance, and insulation resistance in accordance with IEC 60076 and IEC 60296.' },
    { icon: '🇵🇰', title: 'Nationwide On-Site Mobilization', description: 'Mobile filtration plants and testing crews serving Karachi, Hub, Nooriabad, Lahore, Faisalabad, Sheikhupura, Gujranwala, Multan, Islamabad, and Peshawar.' },
    { icon: '⏱️', title: 'Rapid Breakdown Turnaround', description: 'Round-the-clock workshop shifts for urgent transformer repairing and rewinding to minimize costly industrial production downtime.' },
    { icon: '💰', title: 'Transparent Engineering Scope', description: 'Detailed pre-repair diagnostic inspection, guaranteed electrolytic copper weight, and clear itemized engineering quotations.' },
];

const keyFeatures = [
    'Service coverage across all kVA & MVA Power Transformer ratings',
    'HV & LV Coil Rewinding with 99.9% pure Electrolytic Copper Conductor',
    'Both Oil-Immersed (Conservator / Sealed) & Cast-Resin Dry-Type Units',
    'Mobile Two-Stage High-Vacuum Oil Filtration & Dehydration (BDV > 60kV)',
    'Complete Diagnostic Suite: TTR, Winding Resistance, Megger IR/PI & Vector Group',
    'On-Load (OLTC) & Off-Circuit (OCTC) Tap Changer Overhauling',
    'Full Nitrile/Cork Gasket Replacement, Oil Top-Up & Leak Arresting',
    '24/7 Emergency Breakdown Repairing & Preventive Maintenance Across Pakistan',
];

const applications = [
    'Textile & Yarn Spinning Mills', 'Steel Re-Rolling & Induction Furnaces', 'Cement & Chemical Plants',
    'Pharmaceutical & Food Plants', 'Commercial High-Rise Towers', 'Hospital Critical Power Systems',
    'Captive Power Generation Plants', 'Industrial Estate Substations',
];

const stats = [
    { number: 'kVA / MVA', label: 'All Transformer Ratings' },
    { number: '500+', label: 'Units Repaired & Tested' },
    { number: '60kV+', label: 'Dielectric BDV Standard' },
    { number: '24/7', label: 'Emergency Support' },
];

export default function PowerTransformerPage() {
    return (
        <ServicePageTemplate
            heroImage={heroImage}
            heroTitle="Power Transformer Maintenance"
            heroTitleAccent="Rewinding, Repairing, Oil Filtration & Testing"
            heroSubtitle="Pakistan Power Engineering Services"
            heroDescription="Specialized repairing, HV/LV coil rewinding, mobile high-vacuum oil filtration, preventive maintenance, and diagnostic testing for Oil-Immersed and Dry-Type Power Transformers across all kVA and MVA ratings."
            overviewText="Pakistan Power Engineering Services provides specialized workshop repairing and on-site lifecycle maintenance for industrial Power Transformers across multiple kVA and MVA ratings. Over 15+ years of field operations, our transformer engineering division has overhauled, rewound, filtered, and commissioned hundreds of oil-immersed and cast-resin dry-type transformers across Pakistan — delivering certified reliability, low losses, and rapid turnaround."
            services={services}
            benefits={benefits}
            keyFeatures={keyFeatures}
            applications={applications}
            stats={stats}
            ctaTitle="Need Power Transformer Repairing, Rewinding or Oil Filtration?"
            ctaDescription="Our transformer engineering team is ready for immediate on-site oil purification, diagnostic testing, or workshop overhauling. Contact us today."
        />
    );
}
