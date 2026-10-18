import React, { useState, useEffect, useRef } from 'react';

export default function CompanyObjectives() {
    const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const objectives = [
        { label: 'Quality Engineering', percentage: 95 },
        { label: 'Safety Compliance', percentage: 98 },
        { label: 'Project Efficiency', percentage: 90 },
        { label: 'Customer Satisfaction', percentage: 97 }
    ];

    const certifications = [
        { code: 'ISO 9001:2015', label: 'Quality Management' },
        { code: 'ISO 14001:2015', label: 'Environmental Management' },
        { code: 'ISO 45001:2018', label: 'Occupational Health & Safety' },
        { code: 'PEC', label: 'Pakistan Engineering Council' },
        { code: 'PSQCA', label: 'Standards & Quality Control' },
    ];

    const whyChooseUs = [
        { icon: '👷', title: 'Quality Assurance', desc: 'We ensure the highest standards in every project.' },
        { icon: '🔬', title: 'Expert Team', desc: 'Highly skilled engineers with extensive field experience.' },
        { icon: '⏱️', title: 'Timely Delivery', desc: 'Committed to delivering projects on time and within budget.' },
        { icon: '🛡️', title: 'Safety Focused', desc: 'Strict adherence to safety protocols and industry standards.' },
        { icon: '📞', title: '24/7 Technical Support', desc: 'Dedicated support whenever you need us.' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
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
            objectives.forEach((_, index) => {
                const targetValue = objectives[index].percentage;
                let currentValue = 0;
                const increment = targetValue / 100;

                const interval = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= targetValue) {
                        currentValue = targetValue;
                        clearInterval(interval);
                    }

                    setAnimatedValues(prev => {
                        const newValues = [...prev];
                        newValues[index] = Math.round(currentValue);
                        return newValues;
                    });
                }, 20);
            });
        }, 500);

        return () => clearTimeout(timer);
    }, [isVisible]);

    return (
        <div ref={ref} className="max-w-6xl mx-auto px-4">
            {/* Main Card with Shadow */}
            <div className="bg-white rounded-lg p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div>
                        <h2 className="text-3xl text-gray-600 mb-2">The Company</h2>
                        <h1 className="text-5xl font-bold text-blue-900 mb-8">Objective</h1>
                        <p className="text-gray-600 leading-relaxed text-lg mb-6">
                            We deliver reliable, efficient and cost-effective engineering solutions through innovation, quality and commitment. Our goal is to be the most trusted electrical engineering partner in Pakistan.
                        </p>
                        {/* Certifications */}
                        <div className="mt-6">
                            <h3 className="text-lg font-bold text-blueColor mb-3">Our Certifications</h3>
                            <div className="flex flex-wrap gap-2">
                                {certifications.map((cert, i) => (
                                    <div key={i} className="flex flex-col items-center bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-center min-w-[90px]">
                                        <span className="text-xs font-bold text-blueColor">{cert.code}</span>
                                        <span className="text-[10px] text-gray-500 mt-1">{cert.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Right Side - Progress Bars */}
                    <div className="space-y-8">
                        {objectives.map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-blue-900 font-semibold text-lg">{item.label}</span>
                                    <span className="text-white bg-brandRed px-3 py-1 rounded text-sm font-bold">
                                        {animatedValues[index]}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
                                    <div
                                        className="bg-brandRed h-full rounded-full transition-all duration-300 ease-out"
                                        style={{ width: `${animatedValues[index]}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-2xl font-bold text-blueColor text-center mb-8">Why Choose Us?</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {whyChooseUs.map((item, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 hover:bg-blue-50 hover:shadow-md transition-all duration-300">
                                <span className="text-4xl mb-3">{item.icon}</span>
                                <h4 className="text-sm font-bold text-blueColor mb-1">{item.title}</h4>
                                <p className="text-xs text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
