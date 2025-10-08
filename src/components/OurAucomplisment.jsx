import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

export default function OurAccomplishments() {
    const [counters, setCounters] = useState([0, 0, 0, 0]);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const accomplishments = [
        { number: 50, label: 'Projects Finished', suffix: '+' },
        { number: 150, label: 'Project Managers', suffix: '+' },
        { number: 15, label: 'Development Tools', suffix: '+' },
        { number: 567, label: 'Innovative Products', suffix: '+' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once visible
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const timer = setTimeout(() => {
            accomplishments.forEach((item, index) => {
                const targetValue = item.number;
                let currentValue = 0;
                const increment = targetValue / 50;

                const interval = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= targetValue) {
                        currentValue = targetValue;
                        clearInterval(interval);
                    }

                    setCounters(prev => {
                        const newCounters = [...prev];
                        newCounters[index] = Math.round(currentValue);
                        return newCounters;
                    });
                }, 30);
            });
        }, 500);

        return () => clearTimeout(timer);
    }, [isVisible]);

    return (
        <div ref={ref} className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl text-pureBlack mb-4">Experience To Be Trusted</h2>
                    <h1 className="text-5xl font-bold mb-6 break-words text-center w-full max-w-[90%] mx-auto">
                        <span className="text-brandRed">Our </span>
                        <span className='text-blueColor'>Accomplishments</span>
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-blue-900 mx-auto"></div>
                </div>
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {accomplishments.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="text-6xl font-bold text-brandRed mb-4">
                                {counters[index]}{item.suffix}
                            </div>
                            <h3 className="text-lg font-semibold text-blue-900 mb-6">
                                {item.label}
                            </h3>
                            <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-blue-900 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}