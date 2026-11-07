import React from 'react';

export default function ConstructionOverview() {

    const sections = [
        {
            number: 1,
            title: 'OUR MISSION',
            description: `To deliver reliable, efficient and cost-effective engineering solutions through innovation, quality and commitment. We take safety as our first priority and make every project cost-effective to the customer's needs while providing result-oriented quality deliveries in minimum possible time.`,
            icon: '🎯',
            marginTop: ''
        },
        {
            number: 2,
            title: 'OUR VISION',
            description: `To be the most trusted engineering solutions partner, recognized for excellence, integrity and sustainable growth. We want to become the leading electrical engineering firm in Pakistan with an established reputation for customer satisfaction and reliability.`,
            icon: '👁️',
            marginTop: 'mt-12'
        },
        {
            number: 3,
            title: 'QUALITY POLICY',
            description: `Pakistan Power Engineering Services is dedicated to providing an extensive range of electrical engineering services and products in accordance with customers' specified requirements, international standards (ISO 9001:2015, ISO 14001:2015, ISO 45001:2018), and to meet timescales that contribute significantly to the success of every client.`,
            icon: '🏆',
            marginTop: 'mt-[115px]'
        }
    ];


    return (
        <div className="min-h-screen bg-blueColor p-8">
            <div className="max-w-6xl mx-auto">
                {/* Main Card */}
                <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        {/* Icon */}
                        <div data-aos="fade-up">

                            <div className="inline-flex items-center justify-center w-16 h-16  mb-6">
                                <svg className="w-8 h-8 text-brandRed" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h2 className="text-lg text-gray-600 mb-2">Who We Are</h2>
                            <h1 className="text-4xl font-bold mb-6">
                                <span className="text-brandRed">Company</span>{' '}
                                <span className="text-blueColor italic">Overview</span>
                            </h1>

                            {/* Decorative Line */}
                            <div className="w-24 h-1 bg-gradient-to-r from-brandRed to-blue-900 mx-auto mb-8"></div>
                        </div>

                        {/* Description */}
                        <p data-aos="fade-left" className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Founded in 2010 and led by CEO <strong>Ahmed Yaqoob</strong>, <strong>Pakistan Power Engineering Services</strong> is a specialized industrial power engineering company delivering <strong>Power Transformers across multiple kVA &amp; MVA ratings</strong> (supply, repairing, coil rewinding, high-vacuum oil filtration &amp; BDV testing), <strong>HV / MV (HT VCB, RMU) &amp; LV (PCC, MCC, APFC) switchgear panels</strong>, <strong>turnkey substations</strong>, and <strong>numerical protection relay calibration (MiCOM, ABB, Schneider, Siemens)</strong> for industrial, commercial, and utility sectors across Pakistan.
                        </p>
                    </div>

                    {/* Three Columns Section */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {sections.map((section, index) => (
                            <div key={index} data-aos="fade-right" data-aos-delay={index * 200} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-brandRed rounded-full mb-6">
                                    <span className="text-2xl font-bold text-brandRed">{section.number}</span>
                                </div>
                                <h3 className="text-xl font-bold text-blueColor mb-4">{section.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {section.description}
                                </p>
                                <div className={`w-full h-1 bg-gradient-to-r from-brandRed to-blue-900 ${section.marginTop}`}></div>
                            </div>
                        ))}
                    </div>

                    {/* Core Values */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h3 className="text-2xl font-bold text-blueColor text-center mb-8">Core Values</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            {[
                                { icon: '🤝', label: 'Integrity & Transparency' },
                                { icon: '⭐', label: 'Quality & Excellence' },
                                { icon: '🛡️', label: 'Safety First' },
                                { icon: '💡', label: 'Innovation' },
                                { icon: '😊', label: 'Customer Satisfaction' },
                                { icon: '👥', label: 'Teamwork' },
                            ].map((val, i) => (
                                <div key={i} data-aos="zoom-in" data-aos-delay={i * 100} className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                                    <span className="text-3xl mb-2">{val.icon}</span>
                                    <span className="text-xs font-semibold text-blueColor">{val.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
