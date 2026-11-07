import React from 'react';
import backgroundImage from '../assets/images/about_11kv_hero.jpg';
import Typewriter from 'typewriter-effect';
import ConstructionOverview from '../components/ConstructionOverview';
import CompanyObjectives from '../components/CompanyObjective';
import OurAccomplishments from '../components/OurAucomplisment';

export default function AboutPage() {
    return (
        <>
            <div
                className="relative w-full min-h-[480px] sm:min-h-[540px] md:min-h-[600px] lg:min-h-[640px] flex flex-col justify-center text-white overflow-hidden pt-28 sm:pt-32 pb-14 bg-[#060d1f]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(6, 14, 30, 0.9) 0%, rgba(6, 14, 30, 0.55) 42%, rgba(6, 14, 30, 0.12) 100%), url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }}
            >
                {/* Text Content */}
                <div className="hero-text-container relative z-10 w-full px-6 sm:px-10 md:px-16 max-w-7xl mx-auto">
                    <div className="hero-text-content max-w-[640px]">
                        {/* Eyebrow Badge */}
                        <div className="inline-flex items-center gap-2 bg-brandRed/20 border border-brandRed/50 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
                            <span className="w-2 h-2 rounded-full bg-brandRed animate-pulse" />
                            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-red-100">
                                Est. 2010 • Experience To Be Trusted
                            </span>
                        </div>

                        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-3 leading-tight tracking-tight drop-shadow-xl">
                            About <span className="text-brandRed">Pakistan Power</span>
                        </h1>

                        <div className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-200 mb-4 min-h-[34px] drop-shadow">
                            <Typewriter
                                options={{
                                    strings: [
                                        'Power Transformers: Supply, Repairing & Testing',
                                        '11kV HT VCB & MV Switchgear Panels',
                                        'In-House LT, PCC, MCC & PFI Panels',
                                        'Relay Calibration & Megger Testing',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 45,
                                    deleteSpeed: 25,
                                    cursor: '<span style="color: #ef4444;">|</span>',
                                }}
                            />
                        </div>

                        <div className="divider-line shadow-md mb-5"></div>

                        <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 max-w-[560px] drop-shadow">
                            Delivering end-to-end Power Transformer supply, repairing, coil rewinding &amp; oil filtration (all kVA ratings), HT &amp; LT switchgear panels, turnkey substation installations, and protection relay commissioning across Pakistan.
                        </p>

                        {/* Core Capability Pills */}
                        <div className="flex flex-wrap gap-2.5">
                            {[
                                '🔋 Power Transformers (All kVA Ratings)',
                                '⚡ 11kV HT VCB Panels',
                                '🔌 LT / PCC / MCC Panels',
                                '🔬 Relay & Megger Testing',
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs sm:text-sm font-medium bg-slate-900/75 border border-white/15 px-3.5 py-1.5 rounded-lg text-slate-100 backdrop-blur-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ConstructionOverview />
            </div>
            <div className="my-20">
                <CompanyObjectives />
            </div>
            <div>
                <OurAccomplishments />
            </div>
        </>
    );
}
