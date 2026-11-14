import React, { useEffect, useState } from 'react';
import Companylogo from '../assets/logo/CompannyLogo.png';
import WhatsAppButton from './WhatsappBtn';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('HOME');
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Update activeLink based on current URL
    useEffect(() => {
        const path = location.pathname;
        if (path === '/contact') {
            setActiveLink('CONTACT');
            return;
        }
        const currentLink = navItems.find(item =>
            item.href === path ||
            (item.hasDropdown && item.dropdownItems.some(dropdown => dropdown.href === path))
        )?.name || (path === '/' ? 'HOME' : '');
        setActiveLink(currentLink);
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileMenuOpen) {
            setMobileDropdownOpen(false);
        }
    };

    const handleLinkClick = (linkName, href) => {
        setActiveLink(linkName);
        if (linkName === 'SERVICES & PRODUCTS' && (!href || href === '/services')) {
            if (window.innerWidth < 1024) {
                setMobileDropdownOpen(!mobileDropdownOpen);
                return;
            } else {
                navigate('/services/power-transformers');
                return;
            }
        }
        setIsMobileMenuOpen(false);
        setMobileDropdownOpen(false);
        navigate(href);
    };

    const PhoneIcon = () => (
        <svg className="w-4 h-4 fill-[#C00000]" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1.45 1 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
    );

    const EmailIcon = () => (
        <svg className="w-4 h-4 fill-[#C00000]" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
    );

    const Logo = () => (
        <div className="flex items-center">
            <div className="mr-0">
                <img
                    src={Companylogo}
                    onClick={() => navigate("/")}
                    alt='Company Logo'
                    loading="lazy"
                    className="w-[160px] md:w-[175px] lg:w-[190px] cursor-pointer"
                    style={{ marginLeft: isMobileMenuOpen ? '0px' : '20px' }}
                />
            </div>
        </div>
    );

    const navItems = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT', href: '/about' },
        {
            name: 'SERVICES & PRODUCTS',
            href: '/services',
            hasDropdown: true,
            dropdownItems: [
                { name: 'Power Transformers (Supply, Repair & Testing)', href: '/services/power-transformers', icon: '⚡' },
                { name: 'LT & PCC/MCC Panels Manufacturing', href: '/services/lt-panels', icon: '🏭' },
                { name: 'HT / MV VCB & RMU Switchgear Panels', href: '/services/vcb-mv-panels', icon: '🔌' },
                { name: 'Transformer Oil Filtration & Rewinding', href: '/services/power-transformers', icon: '🛢️' },
                { name: 'Testing, Relays & Commissioning', href: '/services/testing-commissioning', icon: '🔧' },
                { name: 'Infrared Thermography Inspection', href: '/services/thermography', icon: '🌡️' },
                { name: 'Power Factor Improvement (PFI/APFC)', href: '/services/power-factor-improvement', icon: '📊' },
                { name: 'Supply of MV / LV Electrical Equipment', href: '/services/mv-equipment-supply', icon: '📦' },
                { name: 'Complete Substation Setup & Solutions', href: '/services/turnkey-electrical', icon: '🏗️' },
                { name: 'Instrumentation & Automation', href: '/services/instrumentation-automation', icon: '🤖' },
            ]
        },
        { name: 'PROFILE', href: '/profile' },
        { name: 'GALLERY', href: '/gallery' },
        { name: 'CLIENTS', href: '/clients' }
    ];

    // Animation variants for the mobile menu
    const mobileMenuVariants = {
        hidden: {
            y: -100,
            opacity: 0,
            transition: { duration: 0.3, ease: 'easeInOut' }
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: 'easeInOut' }
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="bg-blueColor py-2 text-white text-sm hidden md:block">
                <div className="max-w-7xl mx-auto px-4 flex justify-end items-center space-x-8">
                    <div className="flex items-center space-x-2">
                        <PhoneIcon />
                        <span className='text-white'><span className='font-bold'>CALL US NOW</span> <a href="tel:+923092302512" className="hover:underline">
                            <span>+92 309 2302512</span>
                        </a></span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <a
                            href={`mailto:info@pakistanpowerengservices.com?subject=Support%20Inquiry&body=Hello,%20I%20need%20assistance%20with...`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <EmailIcon className="hover:text-gray-300 transition-colors" />
                        </a>
                        <a
                            href={`mailto:info@pakistanpowerengservices.com?subject=Support%20Inquiry&body=Hello,%20I%20need%20assistance%20with...`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline"
                        >
                            <span className="font-bold">Need Support? </span>
                            info@pakistanpowerengservices.com
                        </a>
                    </div>
                    <button
                        onClick={() => {
                            navigate("/contact");
                            setIsMobileMenuOpen(false);
                            setMobileDropdownOpen(false);
                        }}
                        className="bg-[#C00000] hover:bg-[#4A1D1A] text-white px-4 py-2 rounded font-bold transition-colors duration-300 animate-shake"
                    >
                        CONTACT
                    </button>
                </div>
            </div>
            <nav className="bg-white bg-opacity-95 backdrop-blur-md shadow-lg relative z-50">
                <div className="max-w-7xl mx-auto px-1">
                    <div className="flex items-center justify-between h-20">
                        <Logo />
                        <div className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <div key={item.name} className="relative group">
                                    <button
                                        onClick={() => handleLinkClick(item.name, item.href)}
                                        className={`hover:bg-white relative py-1 px-1 text-sm font-medium transition-colors duration-300 hover:text-[#C00000] transform hover:-translate-y-0.5 transition-transform ${activeLink === item.name ? 'text-[#C00000] font-bold' : 'text-gray-700'}`}
                                    >
                                        {item.name}
                                        {item.hasDropdown && (
                                            <span className="ml-1 text-xs text-gray-400">▼</span>
                                        )}
                                        {activeLink === item.name && (
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C00000] -mb-5"></div>
                                        )}
                                    </button>
                                    {item.hasDropdown && (
                                        <div className="absolute top-full left-0 w-80 max-h-[75vh] overflow-y-auto bg-white shadow-xl border-t-2 border-[#C00000] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 rounded-b-lg">
                                            <div className="py-2">
                                                {item.dropdownItems.map((dropdownItem, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handleLinkClick(item.name, dropdownItem.href || '#')}
                                                        className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-[#C00000]/10 hover:text-[#C00000] transition-colors duration-200 border-b border-gray-100 last:border-b-0 w-full text-left"
                                                    >
                                                        <span className="mr-3 text-lg">{dropdownItem.icon}</span>
                                                        <span className="font-medium">{dropdownItem.name}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden text-gray-700 hover:text-[#C00000] focus:outline-none mr-2 p-2 rounded"
                            style={{ backgroundColor: 'transparent' }} // Ensure no default background
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                className="lg:hidden absolute top-full left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md shadow-lg border-t"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={mobileMenuVariants}
                            >
                                <div className="px-4 py-2 space-y-1">
                                    {navItems.map((item) => (
                                        <div key={item.name}>
                                            <button
                                                onClick={() => handleLinkClick(item.name, item.href)}
                                                className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-[#C00000] hover:bg-[#C00000]/10 rounded ${activeLink === item.name ? 'text-[#C00000] bg-[#C00000]/10' : 'text-gray-700'}`}
                                            >
                                                {item.name}
                                                {item.hasDropdown && (
                                                    <span className={`ml-1 text-xs text-gray-400 transition-transform duration-200 ${mobileDropdownOpen && activeLink === item.name ? 'rotate-180' : ''}`}>▼</span>
                                                )}
                                            </button>
                                            {item.hasDropdown && activeLink === item.name && mobileDropdownOpen && (
                                                <div className="ml-4 mt-1 space-y-1 bg-gray-50 rounded-lg p-2 animate-fadeIn">
                                                    {item.dropdownItems.map((dropdownItem, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => {
                                                                handleLinkClick(item.name, dropdownItem.href || '#');
                                                            }}
                                                            className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-[#C00000] rounded transition-colors duration-200 w-full text-left"
                                                        >
                                                            <span className="mr-2">{dropdownItem.icon}</span>
                                                            <span>{dropdownItem.name}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <div className="border-t mt-4 pt-4 space-y-2">
                                        <div className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-600">
                                            <PhoneIcon />
                                            <a href="tel:+923092302512" className="text-[#374151] hover:underline">
                                                <span>+92 309 2302512</span>
                                            </a>
                                        </div>
                                        <div className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-600">
                                            <a
                                                href={`mailto:info@pakistanpowerengservices.com?subject=Support%20Inquiry&body=Hello,%20I%20need%20assistance%20with...`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='flex items-center space-x-2'
                                            >
                                                <EmailIcon />
                                                <span>info@pakistanpowerengservices.com</span>
                                            </a>
                                        </div>
                                        <button
                                            onClick={() => {
                                                navigate("/contact");
                                                setIsMobileMenuOpen(false);
                                                setMobileDropdownOpen(false);
                                            }}
                                            className="w-full bg-[#C00000] hover:bg-[#4A1D1A] text-white px-4 py-2 rounded font-bold transition-colors duration-300 animate-shake"
                                        >
                                            CONTACT
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
            <WhatsAppButton />
        </div>
    );
};

export default Navbar;