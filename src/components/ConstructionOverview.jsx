import React from 'react';

export default function ConstructionOverview() {

    const sections = [
        {
            number: 1,
            title: 'MISSION',
            description: `We believe in simplifying the engineering by using modern techniques without compromising on the quality. We take the safety as our first priority. We make every project cost effective to the customer needs while providing them result oriented quality deliveries in minimum possible time. We work with the pool of young professionals to bring the enthusing speed to our work, while supervising every task with specialized engineers to achieve the desired output.`,
            marginTop: ''
        },
        {
            number: 2,
            title: 'VISION',
            description: `To become the first company that came in to the mind for Power Projects. While becoming the supersonic EPC contractor of Pakistan and to achieve excellence in every formation of personal and professional life. We want to become an affordable contracting firm which can establish a reputation of customer satisfaction and reliability. To live the dream of a pure tech world company and to encourage young entrepreneurs to live for their own self's.`,
            marginTop: 'mt-12'
        },
        {
            number: 3,
            title: 'QUALITY POLICY',
            description: `Transfo Tech. Engineering is dedicated to providing an extensive range of services and products in accordance with customers' specified requirements, regulatory standards and to meet timescales that will contribute significantly to the success of each and every client organization, and customer.`,
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
                            <h2 className="text-lg text-gray-600 mb-2">Core Services</h2>
                            <h1 className="text-4xl font-bold mb-6">
                                <span className="text-brandRed">Construction</span>{' '}
                                <span className="text-blueColor italic">Overview</span>
                            </h1>

                            {/* Decorative Line */}
                            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-8"></div>
                        </div>

                        {/* Description */}
                        <p data-aos="fade-left" className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                            dolor sit amet consectetur adipiscing. Urna id volutpat lacus laoreet. Auctor elit sed vulputate mi sit amet. Leo in vitae turpis massa. Lobortis
                            mattis aliquam faucibus purus. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.
                        </p>
                    </div>

                    {/* Three Columns Section */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {sections.map((section, index) => (
                            <div key={index} data-aos="fade-right" data-aos-delay={index * 1060} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-brandRed rounded-full mb-6">
                                    <span className="text-2xl font-bold text-brandRed">{section.number}</span>
                                </div>
                                <h3 className="text-xl font-bold text-blueColor mb-4">{section.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {section.description}
                                </p>
                                <div className={`w-full h-1 bg-gradient-to-r from-orange-500 to-blue-900 ${section.marginTop}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}