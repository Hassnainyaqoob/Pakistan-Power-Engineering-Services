import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import ProtectionAndTestsMatrix from '../../components/ProtectionAndTestsMatrix';
import ThermographyShowcase from '../../components/ThermographyShowcase';
import heroImage from '../../assets/images/real/hero_sverker_relay_test.jpg';

const services = [
    {
        icon: '🛡️',
        title: 'All Type Protection Relays — Testing, Settings & Configurations',
        description: 'Complete testing, settings, coordination & configurations for all types of protection relays across Schneider Electric, Siemens, ABB, GE, SEL & other manufacturers (50/51, 50N/51N, 87, 21, 67, 27/59).',
    },
    {
        icon: '⚡',
        title: 'Primary Injection Testing',
        description: 'High-current AC primary injection directly through CTs, busbars, switchgear loops, and circuit breaker trip paths to prove complete end-to-end fault clearance.',
    },
    {
        icon: '🎚️',
        title: 'Secondary Injection Testing',
        description: 'Precision automated 3-phase secondary current and voltage injection testing for relay pickup calibration, IDMT/definite-time curves, and instantaneous trip verification.',
    },
    {
        icon: '🔬',
        title: 'IR Testing (Megger) & Hi-Pot Withstand',
        description: '5kV / 10kV Megger Insulation Resistance (IR) & Polarization Index (PI) testing, plus High Voltage AC/DC Hi-Pot dielectric testing on switchgear, cables, and panels.',
    },
    {
        icon: '🌡️',
        title: 'Infrared Thermography Inspection',
        description: 'Non-contact FLIR thermal imaging under live operating load across Transformers, HT Panels, LV Panels, Control Panels, and Motor Control Panels (MCCs).',
    },
    {
        icon: '🛢️',
        title: 'Transformer Diagnostic Tests (BDV, Winding, TTR & IR)',
        description: 'Complete Transformer Oil BDV Dielectric Strength Test, Transformer Winding Resistance Test, Transformers Turn Ratio (TTR) Test, Transformer Insulation Resistance Test & Vector Group checks.',
    },
    {
        icon: '⚙️',
        title: 'HT Breaker IR & Contact Time Interval Testing',
        description: 'HT Breaker Insulation Resistance (phase, earth & across open vacuum bottles), Breaker Contact Time Interval Testing (close/open ms sync), and micro-ohm Contact Resistance (CRM).',
    },
    {
        icon: '📊',
        title: 'CT & PT IR Test, Turn Ratio Test & Busbar IR Test',
        description: 'Current & Potential Transformer Insulation Resistance Test, Turns Ratio Test, polarity & knee-point curves — plus complete HT & LT Copper Busbar IR testing.',
    },
    {
        icon: '📋',
        title: 'Substation Energization & Handover Certification',
        description: 'Complete pre-commissioning interlock verification, utility compliance testing (K-Electric / DISCOs), formal calibrated test certificates, and 24/7 emergency breakdown diagnostics.',
    },
];

const benefits = [
    {
        icon: '👷',
        title: 'Multi-OEM Relay & Substation Engineers',
        description: 'Experienced protection engineers proficient across Schneider Electric, Siemens, ABB, GE & all numerical/electromechanical relay platforms.',
    },
    {
        icon: '🔬',
        title: 'Calibrated Precision Test Instruments',
        description: 'Equipped with automated 3-phase relay test kits, high-current primary injection sets, TTR meters, winding ohmmeters, timing analyzers, Hi-Pot, Megger, BDV & FLIR thermal cameras.',
    },
    {
        icon: '🛡️',
        title: 'Strict IEC, IEEE & Utility Safety Compliance',
        description: 'Full adherence to IEC 60076, IEC 60255, IEC 62271, IEEE C37.90, NFPA 70B & NEPRA/LOTO safety protocols.',
    },
    {
        icon: '🇵🇰',
        title: 'Nationwide Mobilization Across Pakistan',
        description: 'Rapid field testing & commissioning deployment across Sindh, Punjab, Khyber Pakhtunkhwa, Balochistan, and federal capital regions.',
    },
    {
        icon: '⏱️',
        title: 'Minimal Plant Shutdown Downtime',
        description: 'Systematic multi-engineer execution and live-load thermography minimize production interruption during planned maintenance shutdowns.',
    },
    {
        icon: '🏆',
        title: '100% Utility Inspector Approval Record',
        description: 'Trusted testing partner delivering utility-ready calibrated test reports approved by K-Electric and DISCO inspectors nationwide.',
    },
];

const keyFeatures = [
    'All Type Protection Relays — Testing, Settings & Configurations (Schneider Electric, Siemens, ABB & More)',
    'Primary Injection & 3-Phase Secondary Injection Testing',
    'IR Testing (Megger up to 10kV) & High-Voltage Hi-Pot Dielectric Testing',
    'Infrared Thermography (Transformers, HT Panels, LV Panels, Control Panels & MCCs)',
    'Transformer Diagnostics: Oil BDV, Winding Resistance, Turns Ratio (TTR) & Transformer IR',
    'HT Breaker Insulation Resistance & Breaker Contact Time Interval Test (Open/Close ms & CRM)',
    'CT & PT Insulation Resistance Test & Turns Ratio Test',
    'HT & LT Copper Busbar Insulation Resistance (IR) Test',
];

const applications = [
    '11kV Substation Switchgear',
    'Power Transformers (All kVA & MVA Ratings)',
    'HT Panels (VCB / RMU)',
    'LV / PCC / APFC Panels',
    'Protection & Control Panels',
    'Motor Control Centers (MCC / VFD)',
    '11kV HT XLPE Feeders & Busbars',
    'Industrial & Utility Substations',
];

const stats = [
    { number: '1000+', label: 'Substations Tested' },
    { number: 'All OEMs', label: 'Protection Relays' },
    { number: '14+', label: 'Core Diagnostic Tests' },
    { number: '24/7', label: 'Emergency Support' },
];

const ClientsSection = () => (
    <div className="py-16 bg-white">
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
                        className="bg-gray-50 border-2 border-gray-100 hover:border-brandRed rounded-xl p-5 flex items-center justify-center text-center hover:shadow-lg transition-all duration-300"
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
            heroTitleAccent="& All Type Protection Relays"
            heroSubtitle="Pakistan Power Engineering Services"
            heroDescription="Complete testing, settings & configurations for all types of protection relays (Schneider Electric, Siemens, ABB & more) — plus Primary & Secondary Injection, IR & Hi-Pot, Thermography, Transformer BDV / Winding Resistance / TTR / IR, HT Breaker IR & Contact Timing, CT/PT & Busbar IR testing across Pakistan."
            overviewText="Pakistan Power Engineering Services is Pakistan's comprehensive substation testing and commissioning specialist. Unlike providers limited to a single relay family, our engineers support All Types of Protection Relays (Schneider Electric, Siemens, ABB, GE & more) covering testing, settings, and coordination configurations — alongside Primary & Secondary Injection, Megger IR & Hi-Pot testing, Power Transformer diagnostics (Oil BDV Dielectric Strength, Winding Resistance, Turns Ratio TTR, Insulation Resistance), HT Breaker IR & Contact Time Interval testing, CT & PT IR/Turns Ratio tests, Busbar IR tests, and live-load Infrared Thermography across Transformers, HT Panels, LV Panels, Control Panels, and Motor Control Panels."
            services={services}
            showcaseSection={
                <>
                    <ProtectionAndTestsMatrix />
                    <ThermographyShowcase />
                </>
            }
            benefits={benefits}
            keyFeatures={keyFeatures}
            applications={applications}
            stats={stats}
            extraSection={<ClientsSection />}
            ctaTitle="Need All-Brand Relay Testing, Substation Diagnostics or Thermography?"
            ctaDescription="Our specialized testing engineers are equipped with calibrated relay test sets, transformer analyzers, breaker timing kits, and thermal cameras ready for deployment anywhere in Pakistan."
        />
    );
}
