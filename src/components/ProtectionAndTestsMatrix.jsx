import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    relayBrandsSupported,
    diagnosticTestsList,
} from '../data/testingAndThermographyData';

const categories = ['All Tests (14)', ...Array.from(new Set(diagnosticTestsList.map((t) => t.category)))];

/**
 * Dominant multi-OEM protection relay & 14-point electrical diagnostic test matrix.
 * Renders standalone on Home and inside Testing & Commissioning without code duplication.
 */
export default function ProtectionAndTestsMatrix({ isHome = false }) {
    const [activeCategory, setActiveCategory] = useState('All Tests (14)');

    const visibleTests =
        activeCategory === 'All Tests (14)'
            ? diagnosticTestsList
            : diagnosticTestsList.filter((t) => t.category === activeCategory);

    return (
        <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-gray-200">
            <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* ─── Part A: All Type Protection Relays (Multi-OEM Highlight) ─── */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <span className="inline-block py-1 px-4 rounded-full bg-brandRed/10 border border-brandRed/30 text-brandRed text-xs sm:text-sm font-bold tracking-widest uppercase mb-3">
                        Multi-Brand Protection Engineering
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blueColor leading-tight">
                        All Type <span className="text-brandRed">Protection Relays</span> &{' '}
                        Substation Diagnostics
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                        Not limited to any single relay model — our protection engineers test, program, set, and configure{' '}
                        <strong className="text-gray-900">
                            all types of numerical &amp; electromechanical protection relays
                        </strong>{' '}
                        from <strong className="text-blueColor">Schneider Electric, Siemens, ABB, GE &amp; more</strong> alongside complete transformer, breaker, CT/PT, and busbar testing.
                    </p>
                </div>

                {/* 4 Brand Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                    {relayBrandsSupported.map((item) => (
                        <div
                            key={item.brand}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-200 hover:border-brandRed/50 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-3">
                                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blueColor/10 text-blueColor">
                                        {item.badge}
                                    </span>
                                    <span className="text-lg">🛡️</span>
                                </div>
                                <h3 className="text-xl font-extrabold text-blueColor mb-1">
                                    {item.brand}
                                </h3>
                                <p className="text-xs font-semibold text-brandRed mb-3">
                                    {item.families}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    {item.scope}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ─── Part B: Interactive Filterable 14-Test Matrix ─── */}
                <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-200">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-gray-200">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-brandRed mb-1">
                                Complete Laboratory &amp; Field Testing Suite
                            </p>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-blueColor">
                                14 Specialized Electrical Testing &amp; Diagnostic Services
                            </h3>
                        </div>

                        {/* Filter Pills (using span role=button to bypass App.css mobile button 1px rule) */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => {
                                const active = activeCategory === cat;
                                return (
                                    <span
                                        key={cat}
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => setActiveCategory(cat)}
                                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveCategory(cat)}
                                        className={`cursor-pointer select-none px-3.5 py-2 rounded-lg text-xs font-bold transition-all duration-200 border ${
                                            active
                                                ? 'bg-brandRed text-white border-brandRed shadow-md'
                                                : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-blueColor hover:text-blueColor'
                                        }`}
                                    >
                                        {cat}
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {visibleTests.map((test, idx) => (
                            <div
                                key={test.id}
                                className="group bg-slate-50/70 hover:bg-white rounded-xl p-5 border border-gray-200 hover:border-brandRed/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-2.5">
                                        <span className="text-[11px] font-mono font-bold text-brandRed bg-red-50 border border-red-100 px-2 py-0.5 rounded">
                                            TEST {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                                            {test.standard}
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-blueColor text-base leading-snug mb-2 group-hover:text-brandRed transition-colors">
                                        {test.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        {test.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {isHome && (
                        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-center gap-4">
                            <Link
                                to="/services/testing-commissioning/"
                                className="bg-blueColor hover:bg-blue-950 text-white font-bold px-7 py-3.5 rounded-xl shadow-md transition-all duration-300 hover:scale-105 text-sm sm:text-base text-center"
                            >
                                Explore Full Testing &amp; Relay Services →
                            </Link>
                            <Link
                                to="/contact/"
                                className="border-2 border-brandRed text-brandRed hover:bg-brandRed hover:text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 text-sm sm:text-base text-center"
                            >
                                Request Testing Engineer Visit
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

