import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import heroImage from '../../assets/images/testing_commissioning_hero.jpg';

const services = [
    { icon: '🛡️', title: 'MiCOM & Numerical Relay Testing', description: 'Comprehensive testing, secondary injection, parameter configuration, and curve calibration for all MiCOM (P12x, P14x, P63x), ABB, Schneider, and Siemens protection relays.' },
    { icon: '⚡', title: 'Primary & Secondary Current Injection', description: 'High-current primary injection testing of CTs, protection loops, and circuit breakers, combined with precision 3-phase secondary injection verification.' },
    { icon: '🛢️', title: 'Power Transformer Diagnostic Testing (All kVA Ratings)', description: 'Turns Ratio (TTR), Winding Resistance, Magnetic Balance, Vector Group verification, Insulation Resistance (Megger IR/PI), and on-site Oil Dielectric Breakdown Voltage (BDV) testing across all kVA & MVA capacities.' },
    { icon: '🔬', title: 'Insulation Resistance (Megger) & Hi-Pot', description: '5kV / 10kV Megger insulation testing, Polarization Index (PI), and High Voltage AC/DC Hi-Pot testing for 11kV switchgear, busbars, and power cables.' },
    { icon: '⚙️', title: 'Circuit Breaker Timing & Contact Resistance (CRM)', description: 'Micro-ohm contact resistance measurement (Ductor testing) and breaker open/close timing analysis on VCBs and ACBs to prevent thermal hotspots.' },
    { icon: '🔍', title: 'Pre-Commissioning & Substation Energization', description: 'Full cold and hot pre-commissioning protocols, phase sequence verification, trip test with interlocks, and utility compliance (K-Electric / DISCOs).' },
    { icon: '📡', title: 'Earth Pit & Earthing Grid Testing', description: 'Earth resistance testing using 3-point fall-of-potential method and earth loop impedance measurement for complete personnel and equipment safety.' },
    { icon: '📋', title: 'Detailed Engineering Reports & Handover', description: 'Formal, comprehensive test certificates with exact calibration values, trip times, insulation curves, and utility-ready compliance documents.' },
    { icon: '🚚', title: 'Emergency On-Site Breakdown Testing', description: 'Rapid deployment mobile testing engineers across Pakistan equipped with advanced test benches for tripped substations and fault diagnostics.' },
];

const benefits = [
    { icon: '👷', title: 'Certified Power Engineers', description: 'Highly qualified electrical testing engineers with extensive experience in utility and industrial 11kV substations.' },
    { icon: '🔬', title: 'Calibrated Advanced Test Sets', description: 'We operate calibrated Omicron, Megger, Programma, and automated 3-phase relay test kits for laboratory-grade precision.' },
    { icon: '🛡️', title: 'Zero-Tolerance Safety Protocols', description: 'Strict adherence to IEEE, IEC, and NEPRA safety guidelines, lockout-tagout (LOTO), and protective earthing.' },
    { icon: '🇵🇰', title: 'Nationwide Service Across Pakistan', description: 'Rapid field mobilization across Sindh, Punjab, Khyber Pakhtunkhwa, Balochistan, and federal capital regions.' },
    { icon: '⏱️', title: 'Minimal Plant Downtime', description: 'Fast, systematic fault isolation and turnaround to restore power to critical production lines without delay.' },
    { icon: '🏆', title: 'Utility Handover Approval', description: 'Trusted testing partner with 100% approval track record with K-Electric and DISCO inspectors.' },
];

const keyFeatures = [
    'MiCOM Relays (P122, P123, P141, P142, P632) & Numerical Protection',
    'Primary & Secondary Current Injection Test Sets',
    'Power Transformer Diagnostic Testing (TTR, Winding Resistance, Megger & Oil BDV)',
    '11kV Vacuum Circuit Breaker (VCB) Contact Resistance & Timing',
    'Insulation Resistance Testers (Megger up to 10kV)',
    'Transformer Oil Dielectric Strength (BDV) Lab',
    'Earth Pit Resistance & Grid Continuity Testing',
    '24/7 Rapid Emergency Response across Pakistan',
];

const applications = [
    '11kV Substation Switchgear', 'Power Transformers (All kVA Ratings)', 'Power Control Centers (PCC)',
    'Motor Control Centers (MCC)', 'Industrial Captive Power', '11kV HT XLPE Cables',
    'Ring Main Units (RMU)', 'Utility Incomer Feeders',
];

const stats = [
    { number: '1000+', label: 'Substations Tested' },
    { number: '11kV', label: 'Voltage System (11,000V)' },
    { number: '100%', label: 'Relay Types Supported' },
    { number: '24/7', label: 'Emergency Support' },
];

const ClientsSection = () => (
    <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-10">
                <p className="text-brandRed font-semibold tracking-widest uppercase text-sm mb-2">Our Track Record</p>
                <h2 className="text-3xl font-extrabold text-blueColor">Valued Clients We've Served</h2>
                <div className="w-20 h-1 bg-brandRed mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {['K-Electric', 'HUBCO', 'Engro Powergen', 'Pakistan Tobacco Company', 'Fuji Foundation', 'Descon', 'Lucky Cement', 'Nestle Pakistan', 'ICI Pakistan Ltd.', 'Various Industries'].map((client, i) => (
                    <div
                        key={i}
                        data-aos="zoom-in"
                        data-aos-delay={i * 60}
                        className="bg-white border-2 border-gray-100 hover:border-brandRed rounded-xl p-5 flex items-center justify-center text-center hover:shadow-lg transition-all duration-300"
                    >
                        <span className="text-sm font-semibold text-blueColor">{client}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default function TestingCommissioningPage() {
    return (
        <ServicePageTemplate
            heroImage={heroImage}
            heroTitle="Testing, Commissioning"
            heroTitleAccent="& Relay Protection Solutions"
            heroSubtitle="Pakistan Power Engineering Services"
            heroDescription="Comprehensive electrical testing and commissioning for Power Transformers (all kVA & MVA ratings), HT/MV VCB & LT switchgear panels, substations, and all types of MiCOM, ABB, Schneider & Siemens numerical protection relays across Pakistan."
            overviewText="Pakistan Power Engineering Services is Pakistan's trusted technical testing and commissioning specialist for industrial electrical systems and substations. From primary & secondary injection calibration of MiCOM, ABB, Schneider, and Siemens numerical protection relays (overcurrent, earth fault, differential) to full pre-commissioning and diagnostic testing of Power Transformers across multiple kVA ratings, VCB switchgear, cables, and earthing grids, our certified engineers ensure complete safety, reliability, and utility approval."
            services={services}
            benefits={benefits}
            keyFeatures={keyFeatures}
            applications={applications}
            stats={stats}
            extraSection={<ClientsSection />}
            ctaTitle="Need Precision Relay Testing or Substation Commissioning?"
            ctaDescription="Our specialized testing engineers are equipped with calibrated test benches ready for site deployment anywhere in Pakistan."
        />
    );
}
