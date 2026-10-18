import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Companylogo from '../assets/logo/CompannyLogo.png';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000); // Close popup after 3 seconds
            setEmail('');
        }
    };

    return (
        <footer className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, staggerChildren: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <img
                            src={Companylogo}
                            alt="Pakistan Power Engineering Services"
                            className="h-14"
                            loading="lazy"
                        />
                        <p className="text-sm">Powering Progress, Delivering Excellence Since 2010</p>
                        <p className="text-sm">Plot # 236, Street D-17, Azam Town, Mahmoodabad,<br />Karachi - Pakistan</p>
                        <p className="text-sm">Phone: <a href="tel:+923092302512" className="hover:underline">
                            <span>+92 309 2302512</span>
                        </a> / <a href="tel:+923350259886" className="hover:underline">
                            <span>+92 335 0259886</span>
                        </a></p>
                        <p className="text-sm">Email: <a
                            href={`mailto:PakistanPowerEngineeringServices@outlook.com?subject=Support%20Inquiry&body=Hello,%20I%20need%20assistance%20with...`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='hover:underline'
                        >
                            <span>PakistanPowerEngineeringServices@outlook.com</span>
                        </a></p>
                        <p className="text-sm">Web: <a href="https://www.pakistanpower.com.pk" target="_blank" rel="noopener noreferrer" className="hover:underline">www.pakistanpower.com.pk</a></p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-2"
                    >
                        <h3 className="text-lg font-bold text-red-500">Quick Links</h3>
                        <ul className="text-sm space-y-1">
                            <li><a href="#home" className="hover:text-red-400 transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-red-400 transition-colors">About</a></li>
                            <li><a href="#services" className="hover:text-red-400 transition-colors">Services & Products</a></li>
                            <li><a href="#projects" className="hover:text-red-400 transition-colors">Projects</a></li>
                            <li><a href="#downloads" className="hover:text-red-400 transition-colors">Downloads</a></li>
                            <li><a href="#certificates" className="hover:text-red-400 transition-colors">Certificates</a></li>
                            <li><a href="#clients" className="hover:text-red-400 transition-colors">Clients</a></li>
                        </ul>
                    </motion.div>

                    {/* Newsletter & Social */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h3 className="text-lg font-bold text-red-500">Stay Connected</h3>
                        <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-red-500 hover:bg-red-600 text-white py-2 rounded transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com/yourpage" className="hover:text-red-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v4.8c4.56-.93 8-4.96 8-9.8z" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com/company/pakistan-power-engineering-services" className="hover:text-red-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.026-3.057-1.852-3.057-1.853 0-2.136 1.445-2.136 2.939v5.722h-3v-11h2.883v1.452h.041c.401-.762 1.379-1.852 3.583-1.852 3.842 0 4.536 2.503 4.536 5.753v6.645z" />
                                </svg>
                            </a>
                            <a href="https://wa.me/923092302512" className="hover:text-red-400 transition-colors" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 2h-16c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-16c0-1.103-.897-2-2-2zm-7 2c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm8 14h-14v-1.869c0-2.513 4.795-3.131 6.32-3.131.955 0 1.622.077 2.163.211.365.09.614.348.614.643v2.146h2.381v-2.146c0-.689-.305-1.313-1-1.729v-.055c.551-.163 1.431-.265 2.209-.265 4.795 0 6-2.833 6-5.685v-1.897h-2.381v1.897c0 1.465-1.185 2.146-2.381 2.146-.676 0-1.226-.238-1.604-.659-.378-.421-.586-.991-.586-1.598v-1.897h-2.381v1.897c0 .689.305 1.313 1 1.729v.055c-.551.163-1.431.265-2.209.265-1.895 0-3.235.298-4.119.994-.882.696-1.381 1.697-1.381 2.831v1.869h2.381v-1.869c0-.551.468-.994 1-1.094.531-.1 1.397-.162 2.619-.162 1.172 0 2.163.055 2.619.162.532.1 1 .543 1 1.094v1.869z" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-8 pt-4 border-t border-gray-700 text-center text-sm"
                >
                    <p>© 2026 Pakistan Power Engineering Services. All Rights Reserved.</p>
                    <p className="mt-2">
                        <a href="#privacy" className="hover:text-red-400 transition-colors">Privacy Policy</a> |
                        <a href="#terms" className="hover:text-red-400 transition-colors ml-2">Terms of Use</a>
                    </p>
                </motion.div>
            </div>

            {/* Animated Popup */}
            {showPopup && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                >
                    <motion.div
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        exit={{ y: 50 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm w-full mx-4"
                    >
                        <h3 className="text-lg font-bold text-green-600">Success!</h3>
                        <p className="mt-2">You have successfully subscribed with email: {email}</p>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </footer>
    );
};

export default Footer;