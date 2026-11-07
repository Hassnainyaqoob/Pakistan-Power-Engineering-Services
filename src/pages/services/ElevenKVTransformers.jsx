import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import heroImage from '../../assets/images/eleven_kv_transformers_hero.jpg';

const services = [
    {
        icon: '⚡',
        title: 'Power Transformers Supply (Multiple kVA Ratings)',
        description: 'Supply of brand-new and certified refurbished Power & Distribution Transformers across multiple kVA and MVA capacities (50 kVA, 100 kVA, 200 kVA, 250 kVA, 400 kVA, 500 kVA, 630 kVA, 1000 kVA, 1500 kVA, 2000 kVA, 2500 kVA & custom multi-MVA ratings) complying with IEC 60076, WAPDA, and K-Electric standards.'
    },
    {
        icon: '🔧',
        title: 'Complete Transformer Repairing & Coil Rewinding',
        description: 'Full workshop repairing and HV/LV coil rewinding using 99.9% pure electrolytic copper, Nomex/Kraft Class-F & Class-H insulation, CRGO silicon steel core restacking, tank leak repair, and controlled oven baking.'
    },
    {
        icon: '🔬',
        title: 'Diagnostic Testing & Energized Commissioning',
        description: 'End-to-end pre-commissioning and diagnostic testing: Turns Ratio (TTR), Winding Resistance, Insulation Resistance (Megger IR & PI), Vector Group, Magnetic Balance, Short-Circuit Impedance, Oil BDV testing, and energized substation handover.'
    },
    {
        icon: '🛢️',
        title: 'Oil-Immersed Power & Distribution Transformers',
        description: 'Conservator-type and hermetically sealed oil-immersed transformers engineered with low no-load/load losses, Dyn11 vector group configuration, heavy-duty radiators, and enclosed cable boxes or outdoor bushings.'
    },
    {
        icon: '🛡️',
        title: 'Dry-Type Cast Resin & VPI Transformers',
        description: 'Flame-retardant, self-extinguishing Class-F and Class-H epoxy cast-resin and Vacuum Pressure Impregnated (VPI) dry-type power transformers ideal for indoor industrial substations, hospitals, high-rise towers, and malls.'
    },
    {
        icon: '💧',
        title: 'High-Vacuum Oil Filtration & Dehydration',
        description: 'On-site mobile two-stage high-vacuum oil purification plants for dissolved moisture extraction, degassing, sub-micron particulate filtration, and restoring oil dielectric breakdown voltage (BDV > 60kV–70kV).'
    },
    {
        icon: '🔩',
        title: 'Tap Changer (OLTC / OCTC), Gasket & Accessory Overhaul',
        description: 'Overhauling of On-Load (OLTC) and Off-Circuit (OCTC) tap changers, complete cork/nitrile gasket replacement, oil leakage arresting, silica gel breather renewal, and Buchholz / OTI / WTI / PRV protection calibration.'
    },
    {
        icon: '🚚',
        title: 'On-Site Rigging, Installation & Utility Handover',
        description: 'Civil foundation assessment, crane rigging, transformer bay positioning, enclosed HT/LT cable box terminations, neutral & body earthing grid bonding, K-Electric / DISCO compliance, and 24/7 emergency breakdown support.'
    }
];

const benefits = [
    {
        icon: '⚡',
        title: 'All Standard & Custom kVA / MVA Ratings',
        description: 'Complete capability across all industrial kVA and MVA transformer capacities — tailored to your exact plant load, voltage ratio, and impedance requirements.'
    },
    {
        icon: '🏆',
        title: 'Certified Test Reports & IEC 60076 Compliance',
        description: 'Every supplied, repaired, or commissioned power transformer is backed by formal diagnostic test certificates (TTR, IR, Winding Resistance & Oil BDV > 60kV).'
    },
    {
        icon: '🛠️',
        title: 'In-House Rewinding Bay & Mobile Field Crews',
        description: 'Dedicated workshop winding facilities paired with rapid-response field engineering teams for urgent on-site fault diagnostics and breakdown repairing.'
    },
    {
        icon: '🇵🇰',
        title: 'Nationwide Industrial Coverage Across Pakistan',
        description: 'Trusted by 100+ textile, steel, cement, pharmaceutical, food processing, and commercial facilities across Sindh, Punjab, KPK, Balochistan, and Islamabad.'
    }
];

const keyFeatures = [
    'Multiple capacities in kVA & MVA (50 kVA up to 5000+ kVA / Multi-MVA Power Transformers)',
    'Oil-Immersed (Conservator & Hermetically Sealed) and Cast-Resin Dry-Type technologies',
    'Standard Dyn11 vector group & custom primary/secondary voltage ratios (HV/LV)',
    'Complete HV & LV coil rewinding with 99.9% electrolytic grade copper conductor',
    'On-site two-stage high-vacuum oil dehydration & dielectric BDV testing (> 60kV)',
    'Precision TTR, Winding Resistance, Megger (IR/PI), Magnetic Balance & Tan Delta testing',
    'On-Load (OLTC) & Off-Circuit (OCTC) tap changer servicing & Buchholz/WTI/OTI calibration',
    'Full utility inspection & commissioning compliance for K-Electric and all DISCOs (LESCO, IESCO, FESCO, MEPCO, GEPCO, PESCO, HESCO)'
];

const applications = [
    'Heavy Industrial & Manufacturing Plants',
    'Textile Spinning, Weaving & Processing Mills',
    'Steel Re-Rolling & Induction Furnace Units',
    'Cement, Chemical & Pharmaceutical Complexes',
    'Commercial High-Rise Plazas & Shopping Malls',
    'Hospital & Healthcare Critical Power Grids',
    'Captive Power Plants & Co-Generation Units',
    'Utility & Housing Society Distribution Substations'
];

const stats = [
    { number: 'kVA / MVA', label: 'All Multiple Power Ratings' },
    { number: '500+', label: 'Transformers Serviced' },
    { number: '60kV+', label: 'Oil BDV Standard' },
    { number: '24/7', label: 'Breakdown Support' }
];

export default function ElevenKVTransformersPage() {
    return (
        <ServicePageTemplate
            heroImage={heroImage}
            heroTitle="Power Transformers"
            heroTitleAccent="Supply, Repairing, Testing & Commissioning"
            heroSubtitle="Pakistan Power Engineering Services"
            heroDescription="Complete lifecycle engineering solutions for Oil-Immersed & Dry-Type Power Transformers across multiple kVA and MVA ratings. From brand-new & refurbished transformer supply to complete HV/LV coil rewinding, on-site high-vacuum oil filtration, precision diagnostic testing, and energized commissioning across Pakistan."
            overviewText="Pakistan Power Engineering Services delivers end-to-end engineering excellence for industrial Power and Distribution Transformers across all kVA and MVA capacities. Whether your facility requires supplying a new energy-efficient oil-immersed or cast-resin dry-type transformer, urgent workshop repairing and copper coil rewinding of a damaged unit, on-site high-vacuum oil dehydration, or certified pre-commissioning diagnostic testing (TTR, Winding Resistance, Megger IR & Oil BDV), our experienced power engineers ensure maximum efficiency, safety, and compliance with IEC 60076 and local utility standards."
            services={services}
            benefits={benefits}
            keyFeatures={keyFeatures}
            applications={applications}
            stats={stats}
            ctaTitle="Need Power Transformer Supply, Repairing, Testing or Commissioning?"
            ctaDescription="Contact our power transformer engineering specialists today for kVA capacity sizing, supply quotation, on-site diagnostic testing, or emergency breakdown repair."
        />
    );
}
