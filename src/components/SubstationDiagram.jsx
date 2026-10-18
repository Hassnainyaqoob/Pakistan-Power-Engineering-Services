import React from 'react';
import { useNavigate } from 'react-router-dom';

const flowSteps = [
    {
        step: '01',
        title: '11kV Grid Incomer',
        voltage: '11,000V (11kV)',
        desc: 'Utility infeed from DISCOs / K-Electric, 11kV underground XLPE cables & overhead lines.',
        icon: '⚡',
        badge: 'Medium Voltage',
        link: '/services/turnkey-electrical',
    },
    {
        step: '02',
        title: '11kV Switchgear & RMU',
        voltage: '11kV VCB / SF6',
        desc: 'Vacuum Circuit Breakers, Ring Main Units, MiCOM & numerical protection relays, CT/PT metering.',
        icon: '🔌',
        badge: 'Protection & Isolation',
        link: '/services/vcb-mv-panels',
    },
    {
        step: '03',
        title: '11kV Transformers',
        voltage: '11kV → 400V / 230V',
        desc: 'Oil-immersed & dry cast resin transformers up to 11,000 kVA (11 MVA). Supply, rewinding & oil BDV filtration.',
        icon: '🛢️',
        badge: 'Up to 11,000 kVA',
        link: '/services/11kv-transformers',
    },
    {
        step: '04',
        title: 'Main LT / PCC Panel',
        voltage: '400V Low Tension',
        desc: 'Power Control Centers up to 6300A with drawout ACBs, copper busbars & digital monitoring.',
        icon: '🏭',
        badge: 'Custom Manufactured',
        link: '/services/lt-panels',
    },
    {
        step: '05',
        title: 'MCC & Motor Starters',
        voltage: '400V / 230V',
        desc: 'Motor Control Centers with VFDs, soft starters, Star-Delta controls for industrial machinery.',
        icon: '⚙️',
        badge: 'Motor Automation',
        link: '/services/lt-panels',
    },
    {
        step: '06',
        title: 'APFC / PFI Plant',
        voltage: 'Power Factor 0.99',
        desc: 'Automatic Power Factor Correction capacitor banks with detuned reactors to eliminate utility penalties.',
        icon: '📊',
        badge: 'Efficiency & Savings',
        link: '/services/power-factor-improvement',
    },
    {
        step: '07',
        title: 'Industrial Loads',
        voltage: 'End Distribution',
        desc: 'Textile looms, induction furnaces, pumps, chillers, commercial towers, and complete production plants.',
        icon: '🏢',
        badge: 'Complete Handover',
        link: '/services/turnkey-electrical',
    },
];

export const SubstationDiagram = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-gradient-to-b from-[#001730] via-[#001f3f] to-[#001730] py-16 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C00000]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1480px] mx-auto relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-block py-1 px-4 rounded-full bg-[#C00000]/20 border border-[#C00000]/40 text-[#ff6b6b] text-xs md:text-sm font-bold tracking-widest uppercase mb-3">
                        Substation Power Architecture
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        Complete <span className="text-white">11kV to Low-Voltage</span>{' '}
                        <span className="text-[#C00000]">Distribution Flow</span>
                    </h2>
                    <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
                        Pakistan Power Engineering Services engineers, manufactures, installs, tests, and maintains every single link in the electrical power chain across Pakistan.
                    </p>
                </div>

                {/* Substation Relay Testing & Commissioning Strip Banner */}
                <div className="mb-10 bg-gradient-to-r from-blue-900/40 via-red-950/40 to-blue-900/40 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C00000] text-xl shadow-lg">
                            🔬
                        </span>
                        <div>
                            <h4 className="font-bold text-white text-sm sm:text-base">
                                Advanced Protection Relay & Field Testing Across All Stages
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-300">
                                MiCOM, ABB, Schneider numerical relays • Primary & secondary injection • Megger (IR) • Oil BDV testing • Hi-Pot
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/services/testing-commissioning')}
                        className="bg-white/10 hover:bg-[#C00000] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-lg border border-white/20 transition-all duration-300 hover:scale-105"
                    >
                        Explore Testing Services →
                    </button>
                </div>

                {/* Flow Diagram Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
                    {flowSteps.map((step, index) => (
                        <div
                            key={step.step}
                            onClick={() => navigate(step.link)}
                            className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C00000]/60 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#C00000]/20 cursor-pointer flex flex-col justify-between"
                        >
                            {/* Step number and Icon */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-[#ff6b6b] transition-colors">
                                        STAGE {step.step}
                                    </span>
                                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                                        {step.icon}
                                    </span>
                                </div>

                                <span className="inline-block text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/20 mb-2">
                                    {step.badge}
                                </span>

                                <h3 className="text-base font-bold text-white group-hover:text-[#ff6b6b] transition-colors leading-snug mb-1">
                                    {step.title}
                                </h3>

                                <p className="text-xs font-semibold text-[#ff8080] mb-2">
                                    {step.voltage}
                                </p>

                                <p className="text-xs text-gray-300 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Arrow indicator */}
                            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 group-hover:text-white transition-colors">
                                <span className="font-medium">Learn More</span>
                                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Nationwide and Capacity Footer Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#ff6b6b]">11,000 kVA</div>
                        <div className="text-xs sm:text-sm text-gray-300 mt-1">Max Transformer Capacity</div>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#ff6b6b]">6300A</div>
                        <div className="text-xs sm:text-sm text-gray-300 mt-1">LT Panel Busbar Rating</div>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#ff6b6b]">All Types</div>
                        <div className="text-xs sm:text-sm text-gray-300 mt-1">MiCOM & Protection Relays</div>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#ff6b6b]">Nationwide</div>
                        <div className="text-xs sm:text-sm text-gray-300 mt-1">Complete A-to-Z Service</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubstationDiagram;
