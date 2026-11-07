import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import heroImage from '../../assets/images/power_transformer_hero.jpg';

const services = [
    { icon: '⚡', title: 'Complete Coil Rewinding (HV & LV)', description: 'Full rewinding of high-voltage and low-voltage coils using 99.9% electrolytic copper, high-grade Nomex/Kraft paper insulation, core unstacking, and controlled oven baking.' },
    { icon: '🛢️', title: 'High-Vacuum Oil Dehydration & Filtration', description: 'On-site two-stage high-vacuum oil purification plants to extract dissolved moisture and gases, restoring dielectric breakdown voltage (BDV > 60kV).' },
    { icon: '🔧', title: '11kV (11,000V) Transformer Repair & Overhaul', description: 'Complete mechanical overhaul, tank leak repair, gasket renewal (nitrile/cork), radiator replacement, and silica gel breather servicing.' },
    { icon: '⚙️', title: 'Installation, Erection & Commissioning', description: 'Safe rigging, foundation positioning, bushing installation, conservator assembly, HT cable termination, and energized commissioning across Pakistan.' },
    { icon: '🔬', title: 'Comprehensive Diagnostic Testing', description: 'Turns Ratio (TTR), Winding Resistance, Insulation Resistance (Megger), Magnetic Balance, Vector Group, and Tan Delta condition assessment.' },
    { icon: '🔩', title: 'OLTC & OCTC Tap Changer Servicing', description: 'Inspection, contact cleaning, mechanism timing, transition resistance checks, and oil filtration for On-Load and Off-Circuit Tap Changers.' },
    { icon: '🛡️', title: 'Protection Interlocks & Accessories', description: 'Testing and calibration of Buchholz relay, Pressure Relief Valve (PRV), Oil Temperature Indicator (OTI), and Winding Temperature Indicator (WTI).' },
    { icon: '🏭', title: 'Dry-Type Cast Resin / VPI Servicing', description: 'Cleaning, hot-air drying, thermal inspection, temperature sensor testing, and winding repair for cast resin and VPI indoor transformers.' },
    { icon: '🚚', title: '24/7 Emergency Breakdown Response', description: 'Rapid emergency mobile engineering teams ready for on-site fault isolation, oil replenishment, and temporary transformer replacement.' },
];

const benefits = [
    { icon: '⚡', title: '11kV (11,000V) Voltage Level Handling', description: 'Heavy industrial capacity with specialized crane rigging, workshop winding bays, and high-voltage test fields.' },
    { icon: '⏳', title: 'Extended Asset Operational Life', description: 'Professional rewinding and precision oil dehydration restores older units to near-factory efficiency at a fraction of replacement cost.' },
    { icon: '🏆', title: 'Guaranteed Dielectric Strength', description: 'Certified test reports guaranteeing oil BDV > 60kV and insulation resistance meeting IEC 60076 standards.' },
    { icon: '🇵🇰', title: 'Nationwide Service in Pakistan', description: 'Serving industrial zones across Karachi, Hub, Nooriabad, Lahore, Faisalabad, Gujranwala, Rawalpindi, and Peshawar.' },
    { icon: '⏱️', title: 'Fast Emergency Turnaround', description: 'Round-the-clock shift work for urgent transformer repairs to minimize expensive plant production outages.' },
    { icon: '💰', title: 'Transparent Engineering Quotations', description: 'Itemized component pricing, coil copper weight guarantees, and detailed diagnostic reports before initiating work.' },
];

const keyFeatures = [
    'Multiple ratings across 11kV (11,000V) power & distribution networks',
    'HV & LV Coil Rewinding with 99.9% Electrolytic Copper Conductor',
    'Oil-Immersed (Conservator & Hermetically Sealed) & Dry Type (Cast Resin)',
    'High-Vacuum Mobile Oil Purification Plant (BDV > 60kV)',
    'Diagnostic Testing: TTR, Winding Resistance, Megger, Magnetic Balance',
    'On-Load (OLTC) and Off-Circuit (OCTC) Tap Changer Servicing',
    'Complete Tank Gasket Replacement & Leakage Arresting',
    'Emergency 24/7 Breakdown Assistance Across Pakistan',
];

const applications = [
    'Textile & Yarn Spinning Mills', 'Steel Re-Rolling & Furnaces', 'Cement & Chemical Plants',
    'Food & Beverage Processing', 'Commercial High-Rise Towers', 'Hospital Emergency Power',
    'Captive Power Generation', 'DISCO / K-Electric Substations',
];

const stats = [
    { number: '11kV', label: 'Medium Voltage (11,000V)' },
    { number: '500+', label: 'Transformers Serviced' },
    { number: '60kV+', label: 'Dielectric BDV Standard' },
    { number: '24/7', label: 'Emergency Support' },
];

export default function PowerTransformerPage() {
    return (
        <ServicePageTemplate
            heroImage={heroImage}
            heroTitle="Power Transformer Services"
            heroTitleAccent="Repair, Rewinding & Oil Filtration"
            heroSubtitle="Pakistan Power Engineering Services"
            heroDescription="Comprehensive engineering solutions for 11kV (11,000V) Power and Distribution Transformers in multiple ratings. Expert coil rewinding, high-vacuum oil dehydration, diagnostic testing, and emergency breakdown repairs across Pakistan."
            overviewText="Pakistan Power Engineering Services delivers premier lifecycle care for high and medium-voltage power transformers. With over 14 years of hands-on expertise, our specialized transformer division handles both oil-immersed (conservator and sealed) and dry-type cast resin units at 11kV (11,000V). From complete workshop coil rewinding with certified electrolytic copper to mobile high-vacuum oil filtration restoring dielectric breakdown voltage, we guarantee uncompromised reliability and safety."
            services={services}
            benefits={benefits}
            keyFeatures={keyFeatures}
            applications={applications}
            stats={stats}
            ctaTitle="Need 11kV Transformer Rewinding, Testing or Oil Filtration?"
            ctaDescription="Our transformer engineering team is equipped for immediate site mobilization or workshop overhauling. Contact us for a technical assessment today."
        />
    );
}
