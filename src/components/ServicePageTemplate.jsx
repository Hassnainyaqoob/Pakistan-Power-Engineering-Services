import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Reusable Service Page Template
 * Props:
 *  heroImage, heroTitle, heroSubtitle, heroDescription
 *  overviewText
 *  services: [{ icon, title, description }]
 *  benefits: [{ icon, title, description }]
 *  keyFeatures (optional): [string]
 *  applications (optional): [string]
 *  stats: [{ number, label }]
 *  ctaTitle, ctaDescription
 */
const ServicePageTemplate = ({
    heroImage,
    heroTitle,
    heroTitleAccent,
    heroSubtitle,
    heroDescription,
    overviewText,
    services = [],
    benefits = [],
    keyFeatures = [],
    applications = [],
    stats = [],
    ctaTitle = 'Ready to Get Started?',
    ctaDescription = 'Contact us today for a free consultation and quote.',
    extraSection = null,
}) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white">
            {/* ── HERO SECTION ── */}
            <div
                className="relative min-h-[560px] flex flex-col justify-center overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,31,63,0.88) 0%, rgba(0,31,63,0.5) 50%, rgba(0,31,63,0.2) 100%), url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%'
                }}
            >
                <div className="relative z-10 max-w-[1480px] mx-auto px-6 lg:px-12 pt-36 md:pt-40 pb-32 text-left w-full flex-grow flex flex-col justify-center">
                    <p className="text-red-500 font-bold tracking-widest uppercase text-sm mb-3 animate-fade-in">
                        {heroSubtitle}
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl">
                        {heroTitle}
                        {heroTitleAccent && (
                            <>
                                <br />
                                <span className="text-red-500">{heroTitleAccent}</span>
                            </>
                        )}
                    </h1>
                    <div className="w-20 h-1 bg-brandRed mb-6" />
                    <p className="text-gray-200 text-lg max-w-3xl leading-relaxed mb-10">
                        {heroDescription}
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-brandRed hover:bg-red-600 text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brandRed/40 text-center"
                        >
                            Get Free Quote
                        </button>
                        <a
                            href="tel:+923092302512"
                            className="border-2 border-white text-white hover:bg-white hover:text-blueColor font-bold px-8 py-3.5 rounded-lg transition-all duration-300 text-center"
                        >
                            📞 +92 309 2302512
                        </a>
                    </div>
                </div>

                {/* Stats bar */}
                {stats.length > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-brandRed/95 backdrop-blur-md z-20 shadow-inner border-t border-red-500">
                        <div className="max-w-[1480px] mx-auto px-6 lg:px-12 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((s, i) => (
                                <div key={i} className="text-center text-white flex flex-col justify-center border-r border-white/20 last:border-r-0">
                                    <div className="text-3xl font-extrabold mb-1">{s.number}</div>
                                    <div className="text-sm font-semibold tracking-wide opacity-90 uppercase">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* ── OVERVIEW ── */}
            <div className="bg-gray-50 py-16 border-b border-gray-200">
                <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
                    <p className="text-gray-700 text-xl font-medium leading-relaxed max-w-5xl">{overviewText}</p>
                </div>
            </div>

            {/* ── OUR SERVICES ── */}
            {services.length > 0 && (
                <div className="py-20 bg-white">
                    <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
                        <div className="text-left mb-14">
                            <p className="text-brandRed font-bold tracking-widest uppercase text-sm mb-2">What We Do</p>
                            <h2 className="text-4xl font-extrabold text-blueColor">Our Services</h2>
                            <div className="w-24 h-1.5 bg-brandRed mt-4 rounded-full" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((s, i) => (
                                <div
                                    key={i}
                                    data-aos="fade-up"
                                    data-aos-delay={i * 80}
                                    className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:border-red-200 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-blueColor to-blue-800 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl">{s.icon}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-blueColor mb-3">{s.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                                    <div className="w-10 h-0.5 bg-brandRed mt-4 group-hover:w-full transition-all duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ── KEY BENEFITS ── */}
            {benefits.length > 0 && (
                <div className="py-20 bg-blueColor">
                    <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
                        <div className="text-left mb-14">
                            <p className="text-red-500 font-bold tracking-widest uppercase text-sm mb-2">Why Choose Us</p>
                            <h2 className="text-4xl font-extrabold text-white">Key Benefits</h2>
                            <div className="w-24 h-1.5 bg-brandRed mt-4 rounded-full" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((b, i) => (
                                <div
                                    key={i}
                                    data-aos="zoom-in"
                                    data-aos-delay={i * 100}
                                    className="flex items-start gap-5 bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
                                >
                                    <div className="w-12 h-12 bg-brandRed rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">{b.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg mb-1">{b.title}</h4>
                                        <p className="text-gray-300 text-sm leading-relaxed">{b.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ── FEATURES + APPLICATIONS (optional) ── */}
            {(keyFeatures.length > 0 || applications.length > 0) && (
                <div className="py-20 bg-gray-50 border-t border-gray-200">
                    <div className="max-w-[1480px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                        {keyFeatures.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-bold text-blueColor mb-6 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-brandRed inline-block" /> Key Features
                                </h3>
                                <ul className="space-y-3">
                                    {keyFeatures.map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-brandRed flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {applications.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-bold text-blueColor mb-6 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-brandRed inline-block" /> Application Areas
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {applications.map((a, i) => (
                                        <div key={i} className="bg-white border border-red-100 rounded-lg px-4 py-3 flex items-center gap-2 text-gray-700 text-sm font-medium hover:border-red-500 transition-colors duration-200">
                                            <span className="text-brandRed">⚡</span> {a}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* ── EXTRA SECTION (if provided) ── */}
            {extraSection && extraSection}

            {/* ── CTA SECTION ── */}
            <div className="py-20 bg-gradient-to-r from-brandRed to-red-700">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <h2 className="text-4xl font-extrabold text-white mb-4">{ctaTitle}</h2>
                    <p className="text-white/90 text-lg mb-10">{ctaDescription}</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-white text-red-700 hover:bg-gray-100 font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg"
                        >
                            Contact Us Now
                        </button>
                        <a
                            href="mailto:info@pakistanpowerengservices.com"
                            className="border-2 border-white text-white hover:bg-white/20 font-bold px-10 py-4 rounded-xl transition-all duration-300 text-lg"
                        >
                            Send Email
                        </a>
                    </div>
                    <div className="mt-8 flex justify-center gap-8 text-white/80 text-sm">
                        <span>📞 +92 309 2302512</span>
                        <span>📞 +92 335 0259886</span>
                        <span>🌐 www.pakistanpowerengservices.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePageTemplate;
