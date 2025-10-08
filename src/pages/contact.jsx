import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                'service_aloqbfe',
                'template_61zryhr',
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                },
                '-pteeQFG33zhMPn_9'
            );
            setPopupMessage('Message sent successfully to motadram123@gmail.com!');
            setIsError(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Error sending email:', error);
            setPopupMessage('Failed to send message. Please try again later.');
            setIsError(true);
        }

        setIsSubmitting(false);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // 3 seconds ke baad popup band ho jaye
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blueColor/10 via-white to-brandRed/10 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-brandRed to-blueColor rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-r from-blueColor to-brandRed rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-brandRed to-blueColor rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-bounce"></div>
            </div>

            <div className="relative flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                {/* Animated Header */}
                <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                    <h2 className="text-5xl font-bold text-brandRed ">
                        Get In Touch
                    </h2>
                    <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blueColor to-brandRed mx-auto rounded-full animate-pulse"></div>
                    <p className="mt-4 text-gray-600 text-lg animate-fade-in-up animation-delay-500">
                        Humse connect kariye aur apne sapno ko reality banayiye!
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full mb-12">
                    {/* Contact Form - Left Side */}
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} animation-delay-300`}>
                        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                            <div className="flex items-center mb-6">
                                <div className="w-2 h-8 bg-gradient-to-b from-brandRed to-blueColor rounded-full mr-4 animate-pulse"></div>
                                <h3 className="text-2xl font-bold text-gray-800">Feel Free to Contact</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="relative group">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-brandRed/20 focus:border-brandRed transition-all duration-300 bg-white/50 backdrop-blur-sm hover:shadow-lg group-hover:border-gray-300"
                                        required
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-brandRed/10 to-blueColor/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>

                                <div className="relative group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your Email"
                                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-brandRed/20 focus:border-brandRed transition-all duration-300 bg-white/50 backdrop-blur-sm hover:shadow-lg group-hover:border-gray-300"
                                        required
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-brandRed/10 to-blueColor/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative group">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Phone Number"
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-brandRed/20 focus:border-brandRed transition-all duration-300 bg-white/50 backdrop-blur-sm hover:shadow-lg group-hover:border-gray-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-brandRed/10 to-blueColor/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="Subject"
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-brandRed/20 focus:border-brandRed transition-all duration-300 bg-white/50 backdrop-blur-sm hover:shadow-lg group-hover:border-gray-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-brandRed/10 to-blueColor/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    </div>
                                </div>

                                <div className="relative group">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Your Message"
                                        rows={5}
                                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-brandRed/20 focus:border-brandRed transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm hover:shadow-lg group-hover:border-gray-300"
                                        required
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-brandRed/10 to-blueColor/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-brandRed to-blueColor text-white p-4 rounded-xl hover:from-brandRed/90 hover:to-blueColor/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                                >
                                    <span className="relative z-10 font-semibold text-lg flex items-center justify-center">
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Message ✨'
                                        )}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Map Section - Right Side */}
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} animation-delay-500`}>
                        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] h-full">
                            <div className="text-center h-full flex flex-col justify-center">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Pakistan Power Engineering Services</h3>
                                    <div className="flex items-center justify-center mb-4">
                                        <span className="text-blueColor mr-2 text-xl font-bold">5.0</span>
                                        <div className="flex text-blueColor">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-6 h-6 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} viewBox="0 0 20 20">
                                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-gray-500 ml-2">1 review</span>
                                    </div>
                                    <p className="text-blueColor underline cursor-pointer hover:text-brandRed transition-colors duration-300 hover:scale-105 transform inline-block">
                                        View larger map
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 w-full rounded-2xl flex items-center justify-center text-gray-500 relative overflow-hidden group">
                                    <svg className="w-20 h-20 text-gray-400 group-hover:text-brandRed transition-colors duration-500 group-hover:scale-110 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div className="absolute inset-0 bg-gradient-to-r from-brandRed/10 to-blueColor/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Cards */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} animation-delay-700`}>
                    {/* Phone Card */}
                    <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-center hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 group">
                        <div className="w-16 h-16 bg-gradient-to-r from-brandRed to-blueColor rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12">
                            <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brandRed transition-colors duration-300">Phone</h4>
                        <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">021-12345678</p>
                        <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">0333-1234567</p>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-center hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 group animation-delay-200">
                        <div className="w-16 h-16 bg-gradient-to-r from-blueColor to-brandRed rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12">
                            <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blueColor transition-colors duration-300">Email</h3>
                        <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300 break-all">info@pakistanpowereng.com</p>
                    </div>

                    {/* Address Card */}
                    <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-center hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 group animation-delay-400">
                        <div className="w-16 h-16 bg-gradient-to-r from-brandRed to-blueColor rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12">
                            <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brandRed transition-colors duration-300">Address</h4>
                        <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Plot No. X-123, Sector 10, Karachi</p>
                    </div>
                </div>
            </div>

            {/* Popup for Success/Error */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
                        <h3 className={`text-lg font-bold ${isError ? 'text-red-600' : 'text-green-600'}`}>
                            {isError ? 'Error!' : 'Success!'}
                        </h3>
                        <p className="mt-2">{popupMessage}</p>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                .animation-delay-200 {
                    animation-delay: 0.2s;
                }
                .animation-delay-300 {
                    animation-delay: 0.3s;
                }
                .animation-delay-400 {
                    animation-delay: 0.4s;
                }
                .animation-delay-500 {
                    animation-delay: 0.5s;
                }
                .animation-delay-700 {
                    animation-delay: 0.7s;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default Contact;