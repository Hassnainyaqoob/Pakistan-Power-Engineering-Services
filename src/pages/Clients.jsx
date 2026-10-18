import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import heroImage from '../assets/images/home_hero_bg.jpg';

import Cl1 from '../assets/images/Cl1.png';
import Cl2 from '../assets/images/Cl2.png';
import Cl3 from '../assets/images/Cl3.png';
import Cl4 from '../assets/images/Cl4.png';
import Cl5 from '../assets/images/Cl5.png';
import Cl6 from '../assets/images/Cl6.png';
import Cl7 from '../assets/images/Cl7.png';
import Cl9 from '../assets/images/Cl9.png';
import Cl11 from '../assets/images/Cl11.png';
import Cl12 from '../assets/images/Cl12.png';
import Cl13 from '../assets/images/Cl13.png';
import Cl14 from '../assets/images/Cl14.png';
import Cl15 from '../assets/images/Cl15.png';
import Cl16 from '../assets/images/Cl16.png';
import Cl17 from '../assets/images/Cl17.png';
import Cl18 from '../assets/images/Cl18.png';
import Cl19 from '../assets/images/Cl19.png';
import Cl20 from '../assets/images/Cl20.png';

const clients = [Cl1, Cl2, Cl3, Cl4, Cl5, Cl6, Cl7, Cl9, Cl11, Cl12, Cl13, Cl14, Cl15, Cl16, Cl17, Cl18, Cl19, Cl20];

const industries = [
    { icon: '⚡', label: 'Power & Energy' },
    { icon: '🛢️', label: 'Oil & Gas' },
    { icon: '🏭', label: 'Manufacturing' },
    { icon: '💧', label: 'Water & Wastewater' },
    { icon: '🧱', label: 'Cement Industry' },
    { icon: '🏢', label: 'Commercial & Infrastructure' },
];

const brands = ['Siemens', 'Schneider Electric', 'ABB', 'EATON', 'Schrack Technik', 'Legrand', 'Crompton', 'LS Electric', 'Havells'];

export default function Clients() {
    const navigate = useNavigate();

    return (
        <>
            <PageHero image={heroImage} eyebrow="Experience To Be Trusted" title="Our Clients">
                <p className="max-w-xl text-gray-200 text-sm sm:text-base leading-relaxed">
                    Leading organizations across Pakistan trust us to keep their power systems safe, reliable and efficient.
                </p>
            </PageHero>

            {/* Client logos */}
            <section className="bg-gray-100 py-14 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-lg text-gray-600 mb-2">Who Trusts Us</h2>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="text-brandRed">Valued </span>
                            <span className="text-blueColor italic">Clients</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-brandRed to-blue-900 mx-auto mt-5"></div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
                        {clients.map((logo, i) => (
                            <div
                                key={i}
                                className="group bg-white h-28 sm:h-32 flex items-center justify-center border border-gray-200 rounded-xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:border-blueColor/30 transition-all duration-300 p-3"
                            >
                                <img
                                    src={logo}
                                    alt={`Client ${i + 1}`}
                                    className="max-h-16 sm:max-h-20 max-w-[85%] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="bg-white py-14 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-blueColor mb-10">Industries We Serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {industries.map((ind, i) => (
                            <div
                                key={ind.label}
                                data-aos="fade-up"
                                data-aos-delay={i * 80}
                                className="flex flex-col items-center text-center p-5 rounded-xl bg-gray-50 hover:bg-blue-50 hover:shadow-md transition-all duration-300 border-b-4 border-brandRed"
                            >
                                <span className="text-4xl mb-3">{ind.icon}</span>
                                <span className="text-sm font-semibold text-blueColor">{ind.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands */}
            <section className="bg-gray-100 py-14 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-blueColor mb-3">Trusted Brands We Work With</h2>
                    <p className="text-gray-600 mb-8 text-sm">Genuine equipment from leading global manufacturers</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {brands.map((b) => (
                            <span
                                key={b}
                                className="bg-white border border-blue-200 text-blueColor font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md hover:bg-blueColor hover:text-white transition-all duration-300"
                            >
                                {b}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blueColor text-white py-14 px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Join Our Growing List of Clients</h2>
                <p className="text-gray-300 mb-6 max-w-xl mx-auto">Let's discuss how we can power your next project.</p>
                <button
                    onClick={() => navigate('/contact')}
                    className="bg-brandRed hover:bg-[#4A1D1A] text-white font-bold px-8 py-3 rounded transition-colors duration-300"
                >
                    CONTACT US
                </button>
            </section>
        </>
    );
}
