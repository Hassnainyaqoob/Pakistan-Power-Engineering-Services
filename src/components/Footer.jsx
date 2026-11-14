import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Companylogo from '../assets/logo/CompannyLogo.png';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about/' },
        { name: 'Company Profile', href: '/profile/' },
        { name: 'Site Project Gallery', href: '/gallery/' },
        { name: 'Our Clients & Partners', href: '/clients/' },
        { name: 'Contact & Support', href: '/contact/' },
    ];

    const serviceLinks = [
        { name: 'Power Transformers (Supply, Repair & Testing)', href: '/services/power-transformers/' },
        { name: 'LT & PCC/MCC Panels Manufacturing', href: '/services/lt-panels/' },
        { name: 'HT / MV VCB & RMU Switchgear Panels', href: '/services/vcb-mv-panels/' },
        { name: 'Transformer Oil Filtration & Rewinding', href: '/services/power-transformers/' },
        { name: 'Testing, Relays & Commissioning', href: '/services/testing-commissioning/' },
        { name: 'Infrared Thermography Inspection', href: '/services/thermography/' },
        { name: 'Power Factor Improvement (PFI/APFC)', href: '/services/power-factor-improvement/' },
        { name: 'Supply of MV / LV Equipment', href: '/services/mv-equipment-supply/' },
        { name: 'Complete Substation Setup', href: '/services/turnkey-electrical/' },
        { name: 'Instrumentation & Automation', href: '/services/instrumentation-automation/' },
    ];

    return (
        <footer className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {/* 1. Company Info */}
                    <div className="space-y-4">
                        <Link to="/" className="inline-block">
                            <img
                                src={Companylogo}
                                alt="Pakistan Power Engineering Services"
                                className="h-14"
                                loading="lazy"
                            />
                        </Link>
                        <p className="text-sm text-gray-300">
                            Powering Progress, Delivering Excellence Since 2010.
                        </p>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            Mehmoodabad, Karachi - Pakistan
                        </p>
                        <div className="text-xs space-y-1 text-gray-300 pt-1">
                            <p>
                                <span className="text-gray-400">Phone: </span>
                                <a href="tel:+923092302512" className="hover:text-red-400 transition-colors">
                                    +92 309 2302512
                                </a>
                                {' / '}
                                <a href="tel:+923350259886" className="hover:text-red-400 transition-colors">
                                    +92 335 0259886
                                </a>
                            </p>
                            <p className="break-all">
                                <span className="text-gray-400">Email: </span>
                                <a
                                    href="mailto:info@pakistanpowerengservices.com?subject=Inquiry"
                                    className="hover:text-red-400 transition-colors"
                                >
                                    info@pakistanpowerengservices.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* 2. Quick Links (Main Pages) */}
                    <div className="space-y-3">
                        <h3 className="text-base font-bold text-red-500 uppercase tracking-wider">Quick Links</h3>
                        <ul className="text-sm space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-300 hover:text-red-400 transition-colors inline-flex items-center gap-1.5"
                                    >
                                        <span className="text-red-500 text-xs">›</span>
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Engineering Services (Matches Navbar) */}
                    <div className="space-y-3">
                        <h3 className="text-base font-bold text-red-500 uppercase tracking-wider">Our Services</h3>
                        <ul className="text-xs space-y-2">
                            {serviceLinks.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        to={service.href}
                                        className="text-gray-300 hover:text-red-400 transition-colors inline-flex items-center gap-1.5"
                                    >
                                        <span className="text-red-500 text-xs">›</span>
                                        <span>{service.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. Working Hours & Social */}
                    <div className="space-y-4">
                        <h3 className="text-base font-bold text-red-500 uppercase tracking-wider">Working Hours</h3>
                        <div className="text-xs space-y-1.5 text-gray-300">
                            <p><span className="font-semibold text-white">Mon – Sat:</span> 9:00 AM – 6:00 PM</p>
                            <p><span className="font-semibold text-white">Sunday:</span> Closed</p>
                            <div className="bg-red-500/10 border border-red-500/30 rounded p-2.5 mt-2">
                                <p className="text-red-400 font-semibold text-xs flex items-center gap-1">
                                    <span>⚡</span>
                                    <span>24/7 Breakdown & Site Emergency Support Available</span>
                                </p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <h4 className="text-xs font-semibold uppercase text-gray-400 mb-2.5 tracking-wider">
                                Connect With Us
                            </h4>
                            <div className="flex space-x-3">
                                <a
                                    href="https://www.facebook.com/p/Pakistan-Power-Engineering-Services-100063939617412/"
                                    className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#1877F2] flex items-center justify-center text-white transition-colors"
                                    aria-label="Pakistan Power Engineering Services on Facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.326V1.326C24 .597 23.403 0 22.675 0z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://linkedin.com/company/pakistan-power-engineering-services"
                                    className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#0A66C2] flex items-center justify-center text-white transition-colors"
                                    aria-label="Pakistan Power Engineering Services on LinkedIn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.026-3.057-1.852-3.057-1.853 0-2.136 1.445-2.136 2.939v5.722h-3v-11h2.883v1.452h.041c.401-.762 1.379-1.852 3.583-1.852 3.842 0 4.536 2.503 4.536 5.753v6.645z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://wa.me/923092302512"
                                    className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#25D366] flex items-center justify-center text-white transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Chat on WhatsApp"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                    </svg>
                                </a>
                                <a
                                    href="mailto:info@pakistanpowerengservices.com"
                                    className="w-9 h-9 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center text-white transition-colors"
                                    aria-label="Email Pakistan Power Engineering Services"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p>© 2026 Pakistan Power Engineering Services. All Rights Reserved.</p>
                    <div className="space-x-4">
                        <Link to="/about/" className="hover:text-red-400 transition-colors">About PPES</Link>
                        <span>•</span>
                        <Link to="/profile/" className="hover:text-red-400 transition-colors">Profile PDF</Link>
                        <span>•</span>
                        <Link to="/contact/" className="hover:text-red-400 transition-colors">Contact Support</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;