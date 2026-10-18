import React from 'react';
import backgroundImage from '../assets/images/about.png';
import Typewriter from 'typewriter-effect';
import ConstructionOverview from '../components/ConstructionOverview';
import CompanyObjectives from '../components/CompanyObjective';
import OurAccomplishments from '../components/OurAucomplisment';

export default function AboutPage() {
    return (
        <>
            <div
                className="relative w-full min-h-[460px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[620px] flex flex-col justify-center text-white overflow-hidden pt-28 sm:pt-32 bg-[#001026]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 15, 35, 0.75) 0%, rgba(0, 15, 35, 0.5) 45%, rgba(0, 15, 35, 0.25) 100%), url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 40%',
                }}
            >
                {/* Text Content */}
                <div
                    className="hero-text-container relative z-10 w-full px-6 sm:px-10 md:px-16 max-w-7xl mx-auto"
                >
                    <div
                        className="hero-text-content max-w-[550px]"
                    >
                        <p
                            className="hero-subtitle text-lg sm:text-xl md:text-2xl font-medium tracking-wide mb-2 opacity-0 drop-shadow-lg"
                            style={{
                                animation: 'fadeIn .7s ease-in-out forwards .6s',
                            }}
                        >
                            Experience To Be Trusted
                        </p>
                        <h1
                            className="hero-title text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4 leading-tight tracking-tight drop-shadow-xl"
                        >
                            <Typewriter
                                options={{
                                    strings: ['About'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    cursor: '<span style="color: white;">|</span>',
                                }}
                            />
                        </h1>
                        <div className="divider-line shadow-md"></div>
                    </div>
                </div>
            </div>
            <div>
                <ConstructionOverview />
            </div>
            <div className='my-20'>
                <CompanyObjectives />
            </div>
            <div>
                <OurAccomplishments />
            </div>
        </>
    );
}
