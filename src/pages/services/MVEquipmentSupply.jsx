import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import heroImage from '../../assets/images/mv_equipment_supply_hero.jpg';

const services = [
    { icon: '⚡', title: '11kV Transformers Supply (Up to 11,000 kVA)', description: 'Supply of brand-new and certified reconditioned 11kV/0.4kV oil-immersed (sealed & conservator) and dry-type cast resin distribution transformers.' },
    { icon: '🔌', title: '11kV Vacuum Circuit Breakers (VCB)', description: 'Indoor metal-clad drawout and fixed VCBs (630A to 3150A, 25kA/31.5kA) from Siemens, Schneider, ABB, and LS Electric.' },
    { icon: '🛡️', title: 'Ring Main Units (RMU)', description: 'Compact SF6 gas-insulated and eco-friendly vacuum RMUs (non-extensible & extensible) for robust underground network distribution.' },
    { icon: '🤖', title: 'MiCOM & Numerical Protection Relays', description: 'Supply and integration of MiCOM (P12x, P14x, P63x), ABB, and Schneider microprocessor protection relays for feeder, transformer, and busbar protection.' },
    { icon: '📊', title: 'Current & Potential Transformers (CT / PT)', description: 'High-accuracy cast resin 11kV CTs (metering & 5P10/5P20 protection class) and PTs for utility tariff metering and control.' },
    { icon: '🔗', title: '11kV XLPE Cable Kits & Heat Shrink Terminations', description: 'Indoor and outdoor heat shrink & cold shrink 11kV termination and straight-through joint kits with certified stress control.' },
    { icon: '🏗️', title: 'High Purity Copper Busbars & Insulators', description: '99.9% electrolytic grade copper busbars, epoxy post insulators, and busbar heat-shrinkable insulation tubing up to 6300A.' },
    { icon: '📦', title: 'LT Switchgear Breakers & Accessories', description: 'Air Circuit Breakers (ACB), MCCBs, contactors, magnetic overloads, and ATS changeover switches for industrial switchboards.' },
    { icon: '✅', title: 'Factory Acceptance Testing & Warranty', description: 'Comprehensive pre-delivery testing, type-test certificates, OEM warranty, and on-site commissioning across Pakistan.' },
];

const benefits = [
    { icon: '🏆', title: 'Authorized Genuine Sourcing', description: 'Direct supply chain access to genuine components from Schneider Electric, Siemens, ABB, Terasaki, and PEL.' },
    { icon: '⚡', title: 'Up to 11,000 kVA Capacity', description: 'Complete equipment package for heavy industrial substations, captive power plants, and utility connections.' },
    { icon: '👷', title: 'Complete Supply + Erection', description: 'We not only supply equipment but also install, terminate, test, and commission it at your site.' },
    { icon: '⏰', title: 'Ex-Stock & Fast Delivery', description: 'Ready stock of critical spare parts, CTs, PTs, relays, cable kits, and standard rating distribution transformers.' },
    { icon: '🇵🇰', title: 'Delivering Across Pakistan', description: 'Reliable logistics and technical handover teams serving all provinces and industrial estates.' },
    { icon: '🌍', title: 'Full IEC & Utility Compliance', description: 'All supplied equipment complies with IEC 60076, IEC 62271, and local DISCO / K-Electric requirements.' },
];

const keyFeatures = [
    '11kV Transformers: 50 kVA up to 11,000 kVA (11 MVA)',
    '11kV Vacuum Circuit Breakers (VCB) & Ring Main Units (RMU)',
    'MiCOM, Schneider, ABB & Siemens Numerical Relays',
    'Cast Resin 11kV CT / PT Metering & Protection Transformers',
    'Raychem / 3M Compatible 11kV Heat Shrink Termination Kits',
    'Low Voltage ACBs (up to 6300A) & Industrial MCCBs',
    '99.9% Electrolytic Copper Busbars & Epoxy Insulators',
    'Comprehensive Test Reports & OEM Warranty',
];

const applications = [
    'Industrial Substations', 'Power Distribution Networks', 'Textile & Steel Mills',
    'Manufacturing Plants', 'Commercial High-Rises', 'Utility Interconnections',
    'Infrastructure Projects', 'EPC Contractor Projects',
];

const stats = [
    { number: '11 MVA', label: 'Max Transformer Rating' },
    { number: '1000+', label: 'Equipment Supplied' },
    { number: '10+', label: 'Leading Brands' },
    { number: '24/7', label: 'Technical Assistance' },
];

const BrandsSection = () => (
    <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-10">
                <p className="text-brandRed font-semibold tracking-widest uppercase text-sm mb-2">Our Partners</p>
                <h2 className="text-3xl font-extrabold text-blueColor">We Work With Trusted Global Brands</h2>
                <div className="w-20 h-1 bg-brandRed mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {['Schneider Electric', 'Siemens', 'ABB', 'Terasaki', 'LS Electric', 'Mitsubishi', 'MiCOM Relays', 'PEL'].map((brand, i) => (
                    <div
                        key={i}
                        data-aos="zoom-in"
                        data-aos-delay={i * 80}
                        className="bg-gray-50 border-2 border-gray-100 hover:border-brandRed rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <span className="text-lg font-bold text-blueColor text-center">{brand}</span>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">Quality Equipment. Expert Installation. <span className="text-brandRed font-semibold">Safe Power for a Stronger Future.</span></p>
            </div>
        </div>
    </div>
);

export default function MVEquipmentSupplyPage() {
    return (
        <ServicePageTemplate
            heroImage={heroImage}
            heroTitle="11kV & MV Equipment Supply"
            heroTitleAccent="Transformers, Switchgear & Protection"
            heroSubtitle="Pakistan Power Engineering Services"
            heroDescription="Authorized supply of 11kV distribution transformers up to 11,000 kVA, Vacuum Circuit Breakers (VCB), Ring Main Units (RMU), MiCOM relays, cable kits, and low-tension switchgear across Pakistan."
            overviewText="Pakistan Power Engineering Services supplies and integrates high-reliability medium-voltage and low-voltage electrical equipment for heavy industrial, commercial, and utility projects. Whether sourcing 11,000 kVA power transformers, 11kV VCB switchgear cubicles, compact RMUs, or precision MiCOM numerical protection relays, we partner with leading manufacturers (Schneider, Siemens, ABB, Terasaki, PEL) to deliver guaranteed quality, technical warranty, and on-site commissioning."
            services={services}
            benefits={benefits}
            keyFeatures={keyFeatures}
            applications={applications}
            stats={stats}
            extraSection={<BrandsSection />}
            ctaTitle="Need 11kV Equipment or Transformers Sourced?"
            ctaDescription="Share your project specifications or bill of quantities (BOQ). Our engineering supply team will provide competitive quotations with rapid delivery."
        />
    );
}
