import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import heroImage from '../../assets/images/turnkey_electrical_hero.jpg';

const services = [
    { icon: '⚡', title: 'Complete 11kV (11,000V) Substation Setup', description: 'Complete design, civil pad assessment, equipment rigging, positioning, and energized commissioning of 11kV (11,000V) substations across multiple ratings.' },
    { icon: '🏭', title: 'In-House Panel Manufacturing & PCC/MCC', description: 'Full custom fabrication of Power Control Centers (PCC up to 6300A), Motor Control Centers (MCC), and APFC capacitor banks to IEC standards.' },
    { icon: '🔌', title: '11kV VCB Switchgear & RMU Installation', description: 'Assembly, busbar trunking coupling, interlock calibration, and wiring of Vacuum Circuit Breaker panels and Ring Main Units.' },
    { icon: '🔗', title: '11kV HT & LT Cable Laying & Termination', description: 'Trenching, cable tray installation, 11kV XLPE HT cable laying, heat-shrink terminations, and straight-through jointing with certified test reports.' },
    { icon: '🛡️', title: 'MiCOM Relay & Secondary Protection Testing', description: 'Calibration of MiCOM, ABB, and Schneider relays, primary/secondary injection, trip test validation, and fault-clearance coordination.' },
    { icon: '🌐', title: 'Earthing Grid & Lightning Protection', description: 'Substation copper earthing mesh installation, deep chemical earth pits, earth resistance measurement (< 1 Ohm), and lightning arresters.' },
    { icon: '📋', title: 'Utility Approval & Sanctioning (K-Electric / DISCOs)', description: 'Complete liaison, single-line diagram (SLD) approval, load sanctioning documentation, and utility inspection assistance across Pakistan.' },
    { icon: '✅', title: 'Energized Commissioning & Client Handover', description: 'Joint pre-commissioning checks, step-by-step energization protocols, load balancing, operator safety training, and complete as-built documentation.' },
    { icon: '📞', title: '24/7 Operations & Maintenance Support', description: 'Comprehensive after-sales service, scheduled thermography, transformer oil filtration, breaker overhauling, and rapid emergency troubleshooting.' },
];

const benefits = [
    { icon: '🏆', title: 'Single-Point Accountability', description: 'From initial single-line diagram to final utility switch-on, one trusted team handles design, panels, equipment, and testing.' },
    { icon: '⚡', title: '11kV (11,000V) Turnkey Substation Setup', description: 'Extensive track record delivering massive substations for textile mills, steel furnaces, cement complexes, and commercial towers.' },
    { icon: '📏', title: 'Strict International Standards', description: 'Adherence to IEC 60076, IEC 62271, ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018.' },
    { icon: '👷', title: 'PEC Registered Engineering Team', description: 'Professional Engineers (PE) registered with Pakistan Engineering Council ensuring technical integrity and safety.' },
    { icon: '🇵🇰', title: 'Nationwide Footprint', description: 'Proven project delivery across Sindh, Punjab, Khyber Pakhtunkhwa, Balochistan, and Islamabad Capital Territory.' },
    { icon: '💰', title: 'Optimized Capital Investment', description: 'In-house panel fabrication and direct equipment supply eliminate expensive middleman markups.' },
];

const keyFeatures = [
    'Complete 11kV (11,000V) Substations across multiple ratings',
    'In-House LT, PCC (up to 6300A), MCC, and APFC Panel Manufacturing',
    '11kV Vacuum Circuit Breakers (VCB) & Ring Main Units (RMU)',
    'MiCOM & Numerical Relay Protection Calibration',
    '11kV XLPE High-Tension Cable Laying & Heat-Shrink Termination',
    'Deep Earthing Grid Design & Low-Resistance Pit Construction',
    'Utility Approval Assistance with K-Electric and DISCOs (LESCO, IESCO, FESCO)',
    '24/7 Technical Breakdown & Preventative Maintenance Support',
];

const applications = [
    'Textile Spinning & Weaving Mills', 'Steel Melting & Re-Rolling Furnaces',
    'Cement & Fertilizer Plants', 'Commercial Towers, Plazas & Malls',
    'Hospital & Medical Complex Substations', 'Data Centers & Critical Power',
    'Food, Beverage & FMCG Factories', 'Captive Power & Industrial Grids',
];

const stats = [
    { number: '11kV', label: 'Turnkey Voltage (11,000V)' },
    { number: '500+', label: 'Projects Handed Over' },
    { number: '14+', label: 'Years Experience' },
    { number: 'Nationwide', label: 'Service Across Pakistan' },
];

const CertificationsSection = () => (
    <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
                <p className="text-brandRed font-semibold tracking-widest uppercase text-sm mb-2">Our Credentials</p>
                <h2 className="text-3xl font-extrabold text-blueColor">Our Certifications</h2>
                <div className="w-20 h-1 bg-brandRed mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                    { code: 'ISO 9001:2015', label: 'Quality Management' },
                    { code: 'ISO 14001:2015', label: 'Environmental Management' },
                    { code: 'ISO 45001:2018', label: 'Occupational Health & Safety' },
                    { code: 'PEC', label: 'Pakistan Engineering Council' },
                    { code: 'PSQCA', label: 'Standards & Quality Control Authority' },
                ].map((cert, i) => (
                    <div
                        key={i}
                        data-aos="zoom-in"
                        data-aos-delay={i * 100}
                        className="bg-gradient-to-br from-blueColor to-blue-900 text-white rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                        <div className="text-3xl mb-3">🏅</div>
                        <div className="font-extrabold text-brandRed text-lg mb-1">{cert.code}</div>
                        <div className="text-xs text-blue-200">{cert.label}</div>
                    </div>
                ))}
            </div>

            {/* Execution Process */}
            <div className="mt-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-blueColor">Our Complete Execution Process</h2>
                    <div className="w-20 h-1 bg-brandRed mx-auto mt-4" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                        { num: '01', title: 'Consultation & Planning' },
                        { num: '02', title: 'Design & Engineering' },
                        { num: '03', title: 'Procurement' },
                        { num: '04', title: 'Installation & Testing' },
                        { num: '05', title: 'Commissioning' },
                        { num: '06', title: 'After Sales Support' },
                    ].map((step, i) => (
                        <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="text-center group">
                            <div className="w-14 h-14 bg-brandRed rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                                <span className="text-white font-extrabold">{step.num}</span>
                            </div>
                            <p className="text-sm font-semibold text-blueColor text-center">{step.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Commitment box */}
            <div className="mt-12 bg-gradient-to-r from-blueColor to-blue-800 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">Our Commitment</h3>
                <p className="text-blue-200 max-w-3xl mx-auto">
                    We are committed to delivering <span className="text-brandRed font-semibold">safe, reliable and innovative</span> electrical engineering solutions that exceed client expectations and contribute to a sustainable future.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                    {[{ n: '100+', l: 'Satisfied Clients' }, { n: '500+', l: 'Successful Projects' }, { n: '14+', l: 'Years of Experience' }, { n: '24/7', l: 'Support & Service' }].map((s, i) => (
                        <div key={i}>
                            <div className="text-3xl font-extrabold text-brandRed">{s.n}</div>
                            <div className="text-sm text-blue-300 mt-1">{s.l}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default function TurnkeyElectricalPage() {
    return (
        <ServicePageTemplate
            heroImage={heroImage}
            heroTitle="Complete Substation & Electrical"
            heroTitleAccent="End-to-End A-to-Z Solutions"
            heroSubtitle="Pakistan Power Engineering Services"
            heroDescription="From initial concept to final commissioning, we deliver complete A-to-Z electrical solutions tailored to meet your project requirements with precision, efficiency and reliability. ISO Certified. PEC Registered. Since 2010."
            overviewText="Pakistan Power Engineering Services delivers comprehensive, complete electrical engineering solutions for the power, oil & gas, manufacturing, water & wastewater and commercial sectors. Our end-to-end service covers consultation and planning, detailed electrical system design, equipment procurement from top international brands, professional installation, rigorous testing and commissioning, followed by ongoing after-sales support — all under one roof."
            services={services}
            benefits={benefits}
            keyFeatures={keyFeatures}
            applications={applications}
            stats={stats}
            extraSection={<CertificationsSection />}
            ctaTitle="Start Your Electrical Project Today"
            ctaDescription="Our expert team will handle your electrical project from concept to final commissioning. Contact us for a comprehensive proposal."
        />
    );
}
