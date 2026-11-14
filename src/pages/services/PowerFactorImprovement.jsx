import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import heroImage from '../../assets/images/real/hero_pfi_panels.jpg';

const services = [
    { icon: '🤖', title: 'Custom Automatic PFI / APFC Panels', description: 'In-house design and manufacturing of multi-stage APFC panels with intelligent microprocessor power factor controllers, automatic cyclic step switching, and digital telemetry.' },
    { icon: '🔊', title: 'Detuned Harmonic Filter Banks (7% / 14%)', description: 'Heavy-duty iron-core detuned reactors engineered to prevent harmonic resonance, suppress 5th and 7th harmonics, and protect capacitors from overheating in VFD/furnace environments.' },
    { icon: '🔌', title: 'Heavy-Duty Industrial Capacitor Banks', description: 'Self-healing, gas-filled and dry-type polypropylene capacitors equipped with internal overpressure tear-off disconnector and discharge resistors.' },
    { icon: '📐', title: 'Power Quality Audit & Harmonic Analysis', description: 'On-site power quality logging with class-A analyzers to measure THD-V, THD-I, active/reactive kVAR profiles, and determine precise sizing requirements.' },
    { icon: '🏭', title: 'Capacitor Duty Switching & Protection', description: 'Specialized capacitor switching contactors with pre-charge damping resistors, high-breaking capacity MCCBs, and thermal overload protection across all kVAR ratings.' },
    { icon: '📞', title: 'Capacitor Testing, Revamping & Maintenance', description: 'Routine capacitance measurement, thermographic hotspot scanning, blown fuse replacement, contactor maintenance, and controller recalibration across Pakistan.' },
];

const benefits = [
    { icon: '💸', title: '100% Utility Penalty Elimination', description: 'Completely eliminate low power factor penalties imposed by K-Electric, LESCO, IESCO, FESCO, and other DISCOs.' },
    { icon: '📈', title: 'Target Power Factor 0.98 - 0.99', description: 'Consistently maintain near-unity power factor, optimizing your facility’s sanctioned load and transformer capacity.' },
    { icon: '📉', title: 'Reduced I²R Cable & Transformer Losses', description: 'Lower current flow reduces thermal stress, improves voltage stability at line ends, and frees up kVA capacity on main transformers.' },
    { icon: '⏳', title: 'Extended Plant Asset Lifespan', description: 'Clean reactive power compensation protects sensitive PLC drives, motors, and switchgear from premature failure.' },
    { icon: '🇵🇰', title: 'Complete Delivery Across Pakistan', description: 'Fabrication in our workshop with direct on-site delivery, busbar coupling, and live commissioning in all industrial zones.' },
    { icon: '💰', title: 'Fast ROI (Payback within 3-6 Months)', description: 'Significant reduction in utility surcharge bills delivers immediate return on capital investment.' },
];

const keyFeatures = [
    'Custom In-House Sheet Metal Fabrication & Powder Coating',
    'Microprocessor APFC Relays (6, 8, 12 & 14 Steps with Modbus)',
    'Heavy-Duty Detuned Harmonic Reactors (7% / 189Hz & 14% / 134Hz)',
    'Dry-Type Self-Healing Cylindrical / Box Capacitors (440V / 480V / 525V)',
    'Capacitor Duty Contactors with Inrush Current Limiting Resistors',
    'Target Power Factor Programmable up to 0.99',
    'Comprehensive Protection: Overvoltage, Harmonic Overload & Overheat',
    'On-Site Power Quality Logging & Harmonics Verification',
];

const applications = [
    'Textile Spinning & Weaving Mills', 'Steel Melting & Induction Furnaces',
    'Cement, Chemical & Fertilizer Plants', 'Commercial Towers & Shopping Malls',
    'Plastic Injection Molding Factories', 'Hospitals & Healthcare Facilities',
    'Water Pumping Stations', 'Heavy Engineering Workshops',
];

const stats = [
    { number: '0.99', label: 'Achievable Power Factor' },
    { number: '100%', label: 'Penalty Elimination' },
    { number: '1000+', label: 'PFI Panels Built' },
    { number: '24/7', label: 'Technical Support' },
];

const PFIProcessSection = () => (
    <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
                <p className="text-brandRed font-semibold tracking-widest uppercase text-sm mb-2">How We Work</p>
                <h2 className="text-3xl font-extrabold text-blueColor">Our PFI Solution Process</h2>
                <div className="w-20 h-1 bg-brandRed mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                    { step: '01', title: 'Site Survey & Engineering', desc: 'Analyze your load profile and power quality requirements.' },
                    { step: '02', title: 'Design & Engineering', desc: 'Customized PFI solution design for maximum efficiency and reliability.' },
                    { step: '03', title: 'Supply & Installation', desc: 'High quality equipment supply and professional installation.' },
                    { step: '04', title: 'Testing & Commissioning', desc: 'Rigorous testing and commissioning to ensure optimum performance.' },
                    { step: '05', title: 'Support & Maintenance', desc: 'Continuous support and maintenance for sustained savings.' },
                ].map((item, i) => (
                    <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="relative text-center group">
                        <div className="w-16 h-16 bg-brandRed rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <span className="text-white font-extrabold text-lg">{item.step}</span>
                        </div>
                        {i < 4 && <div className="hidden lg:block absolute top-8 left-[58%] w-full h-0.5 bg-red-200 -z-0" />}
                        <h4 className="font-bold text-blueColor text-sm mb-2">{item.title}</h4>
                        <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default function PowerFactorImprovementPage() {
    return (
        <ServicePageTemplate
            heroImage={heroImage}
            heroTitle="Power Factor Improvement"
            heroTitleAccent="& Automatic APFC Panels"
            heroSubtitle="Pakistan Power Engineering Services"
            heroDescription="In-house manufacturing of Automatic Power Factor Correction (APFC) panels and harmonic detuned filter banks. Maintain a target power factor up to 0.99 and eliminate 100% of utility low-power factor penalties across Pakistan."
            overviewText="A lagging power factor incurs severe financial penalties from utilities like K-Electric and regional DISCOs, while causing premature transformer heating and voltage drops. Pakistan Power Engineering Services manufactures heavy-duty, industrial-grade APFC panels and harmonic detuned filter banks that automatically regulate reactive power, stabilizing your power factor up to 0.98–0.99. Backed by our in-house sheet metal assembly, tier-1 capacitors, and microprocessor controllers, we guarantee measurable energy savings and total penalty elimination."
            services={services}
            benefits={benefits}
            keyFeatures={keyFeatures}
            applications={applications}
            stats={stats}
            extraSection={<PFIProcessSection />}
            ctaTitle="Eliminate Power Factor Penalties Today"
            ctaDescription="Our electrical engineering specialists will analyze your power factor and design the optimal APFC solution to maximize energy savings. Contact us today."
        />
    );
}
