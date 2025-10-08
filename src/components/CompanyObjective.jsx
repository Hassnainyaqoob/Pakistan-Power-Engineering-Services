import React, { useState, useEffect, useRef } from 'react';

export default function CompanyObjectives() {
    const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const objectives = [
        { label: 'Sales Growth', percentage: 70 },
        { label: 'Manufacturing & Development', percentage: 50 },
        { label: 'Project Efficiency', percentage: 60 },
        { label: 'Sustainability Percentage', percentage: 90 }
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
        <div ref={ref} className="max-w-6xl mx-auto">
            {/* Main Card with Shadow */}
            <div className="bg-white rounded-lg p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div>
                        <h2 className="text-3xl text-gray-600 mb-2">The company</h2>
                        <h1 className="text-5xl font-bold text-blue-900 mb-8">Objective</h1>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We're looking for long-term goals. People with the courage to take chances.
                            Who understand that making a difference takes passion, patience, and
                            persistence.
                        </p>
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
            </div>
        </div>
    );
}