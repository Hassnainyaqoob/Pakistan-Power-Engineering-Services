import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    thermographyAssets,
    thermographySeverityLevels,
} from '../data/testingAndThermographyData';

/**
 * Reusable Live-Load Infrared Thermography showcase displaying thermal inspection
 * pictures across all 5 plant asset categories: Transformers, HT Panels, LV Panels,
 * Control Panels, and Motor Control Panels.
 */
export default function ThermographyShowcase({ compact = false }) {
    const [zoomAsset, setZoomAsset] = useState(null);

    return (
        <section
            id="thermography"
            className="relative py-16 sm:py-20 bg-gradient-to-b from-[#070f1d] via-[#0b182e] to-[#070f1d] text-white overflow-hidden"
        >
            {/* Thermal palette subtle radial glows */}
            <div className="absolute -top-24 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C00000]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gradient-to-r from-orange-500/20 to-[#C00000]/25 border border-orange-400/40 text-orange-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">
                        <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                        <span>Live-Load Predictive Diagnostics • Zero Shutdown Needed</span>
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                        Infrared <span className="text-orange-400">Thermography</span>{' '}
                        <span className="text-white">Inspection</span>
                    </h2>
                    <p className="mt-4 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                        Precision FLIR thermal imaging audits across energized industrial substations and distribution panels — detecting loose busbar joints, imbalanced phases, high-resistance cable lugs, and incipient insulation failures before costly downtime or arc-flash incidents occur.
                    </p>
                </div>

                {/* 5 Equipment Cards with Pictures (3 on top row, 2 centered on bottom row on desktop) */}
                <div className="flex flex-wrap justify-center gap-6">
                    {thermographyAssets.map((asset) => (
                        <article
                            key={asset.id}
                            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group bg-[#0e1f3a]/90 border border-white/10 hover:border-orange-400/60 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col"
                        >
                            {/* Picture Frame */}
                            <div
                                onClick={() => setZoomAsset(asset)}
                                className="relative aspect-[4/3] overflow-hidden bg-slate-900 cursor-zoom-in"
                            >
                                <img
                                    src={asset.image}
                                    alt={asset.alt}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1f3a] via-[#0e1f3a]/60 to-black/35 pointer-events-none" />

                                {/* Top Badges */}
                                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                                    <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-orange-400/40 text-orange-300 text-[11px] font-mono font-bold tracking-wider uppercase">
                                        Point {asset.num} • Live IR Audit
                                    </span>
                                    <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold opacity-95 group-hover:bg-[#C00000] group-hover:border-red-400 transition-colors">
                                        🔍 Inspect
                                    </span>
                                </div>

                                {/* Title overlay near image bottom */}
                                <div className="absolute bottom-3 left-4 right-4">
                                    <p className="text-[11px] uppercase tracking-widest text-orange-300 font-semibold">
                                        {asset.subtitle}
                                    </p>
                                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                                        {asset.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Body Details */}
                            <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5">
                                        Critical Thermal Checkpoints
                                    </p>
                                    <ul className="space-y-1.5 text-xs sm:text-sm text-gray-200">
                                        {asset.inspectPoints.map((pt) => (
                                            <li key={pt} className="flex items-start gap-2">
                                                <span className="text-orange-400 mt-0.5 flex-shrink-0">•</span>
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-3 border-t border-white/10">
                                    <p className="text-xs text-gray-300 leading-relaxed">
                                        <span className="text-orange-300 font-semibold">Detects: </span>
                                        {asset.faultsDetected}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* ΔT Severity Reference Strip (NFPA 70B / NETA MTS) */}
                {!compact && (
                    <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                            <h3 className="text-lg sm:text-xl font-bold text-white">
                                Quantitative ΔT Thermal Severity Criteria (NFPA 70B / NETA MTS)
                            </h3>
                            <span className="text-xs text-orange-300 font-mono uppercase tracking-wider">
                                Full PDF Thermal & Visual Report Provided
                            </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {thermographySeverityLevels.map((tier) => (
                                <div
                                    key={tier.level}
                                    className={`rounded-xl border p-4 ${tier.colorClass}`}
                                >
                                    <div className="flex items-center justify-between font-bold text-sm mb-1">
                                        <span>{tier.level}</span>
                                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-black/30">
                                            ΔT {tier.deltaT}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-200 leading-relaxed">
                                        {tier.action}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Bottom Action Links (using <Link> so global mobile button padding CSS never shrinks them) */}
                <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
                    <Link
                        to="/contact/"
                        className="bg-gradient-to-r from-[#C00000] to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-red-900/40 transition-all duration-300 hover:scale-105 text-sm sm:text-base text-center"
                    >
                        Schedule On-Site Thermography Audit
                    </Link>
                    {compact && (
                        <Link
                            to="/services/thermography/"
                            className="border border-orange-400/50 hover:bg-orange-500/20 text-orange-200 hover:text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 text-sm sm:text-base text-center"
                        >
                            View Full Thermography Scope →
                        </Link>
                    )}
                </div>
            </div>

            {/* Fullscreen Zoom Modal for Any Asset Picture */}
            {zoomAsset && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setZoomAsset(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${zoomAsset.title} Infrared Thermography Scan`}
                >
                    <div
                        className="relative max-w-4xl w-full bg-[#0b182e] border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-black/40">
                            <div>
                                <span className="text-[11px] font-mono uppercase tracking-wider text-orange-300">
                                    Thermography Point {zoomAsset.num}
                                </span>
                                <h4 className="text-lg font-bold text-white">
                                    {zoomAsset.title} — {zoomAsset.subtitle}
                                </h4>
                            </div>
                            <span
                                role="button"
                                tabIndex={0}
                                onClick={() => setZoomAsset(null)}
                                onKeyDown={(e) => e.key === 'Escape' && setZoomAsset(null)}
                                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer text-lg font-bold"
                                aria-label="Close modal"
                            >
                                ✕
                            </span>
                        </div>
                        <div className="bg-black flex items-center justify-center max-h-[70vh] overflow-hidden">
                            <img
                                src={zoomAsset.image}
                                alt={zoomAsset.alt}
                                className="max-h-[70vh] w-auto object-contain"
                            />
                        </div>
                        <div className="px-5 py-4 bg-[#0e1f3a] border-t border-white/10 text-xs sm:text-sm text-gray-200">
                            <span className="text-orange-300 font-semibold">Inspection Scope: </span>
                            {zoomAsset.faultsDetected}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

