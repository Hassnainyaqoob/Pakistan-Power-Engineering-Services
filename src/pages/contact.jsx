import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

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

    // Spam Protection States
    const recaptchaRef = useRef(null);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [honeypot, setHoneypot] = useState('');

    // Environment variables (Fallback provided for safety)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_i4bqxg3';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_9ln648x';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'ESYNLyEMc72l5vNxx';
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6Lf5dxYuAAAAAMcinYyoAb_XK_-TKUzkhCj-FLfb';

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
        if (e && e.preventDefault) e.preventDefault();

        // 1. Honeypot check: bot detected if hidden field is filled
        if (honeypot) {
            console.warn('Bot submission blocked via honeypot.');
            return;
        }

        // 2. Google reCAPTCHA check: verify human
        if (siteKey && !captchaToken) {
            setPopupMessage('Please verify that you are not a robot.');
            setIsError(true);
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3500);
            return;
        }

        setIsSubmitting(true);

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    from_name: formData.name,
                    user_name: formData.name,
                    email: formData.email,
                    from_email: formData.email,
                    user_email: formData.email,
                    reply_to: formData.email,
                    phone: formData.phone,
                    contact_number: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                    'g-recaptcha-response': captchaToken || '',
                },
                publicKey
            );
            setPopupMessage('Thank you! Your message has been sent successfully. Our engineering team will contact you shortly.');
            setIsError(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
            recaptchaRef.current?.reset();
            setCaptchaToken(null);
        } catch (error) {
            console.error('Error sending email:', error);
            setPopupMessage('Failed to send message. Please try again later.');
            setIsError(true);
            recaptchaRef.current?.reset();
            setCaptchaToken(null);
        } finally {
            setIsSubmitting(false);
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 4000);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blueColor/10 via-white to-brandRed/10 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-brandRed to-blueColor rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-r from-blueColor to-brandRed rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-brandRed to-blueColor rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-bounce"></div>
            </div>

            <div className="relative flex flex-col items-center justify-center pt-36 sm:pt-40 pb-12 px-4 sm:px-6 lg:px-8">
                {/* Animated Header */}
                <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                    <h2 className="text-5xl font-bold text-brandRed ">
                        Get In Touch
                    </h2>
                    <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blueColor to-brandRed mx-auto rounded-full animate-pulse"></div>
                    <p className="mt-4 text-gray-600 text-lg animate-fade-in-up animation-delay-500">
                        Connect with our engineering specialists today for expert substation and panel solutions.
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

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Honeypot: invisible to human users, catches spam bots */}
                                <input
                                    type="text"
                                    name="website"
                                    value={honeypot}
                                    onChange={(e) => setHoneypot(e.target.value)}
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                    style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0, pointerEvents: 'none' }}
                                />

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

                                {/* Google reCAPTCHA v2 (Checkbox) */}
                                {siteKey ? (
                                    <div className="flex justify-center items-center overflow-hidden py-1">
                                        <div className="transform origin-center scale-[0.88] sm:scale-100">
                                            <ReCAPTCHA
                                                ref={recaptchaRef}
                                                sitekey={siteKey}
                                                onChange={(token) => setCaptchaToken(token)}
                                                onExpired={() => setCaptchaToken(null)}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-3 bg-amber-50/80 border border-amber-200 text-amber-800 text-xs rounded-xl text-center leading-relaxed">
                                        🛡️ <strong>Spam Protection:</strong> Set <code>VITE_RECAPTCHA_SITE_KEY</code> in <code>.env</code> to display Google reCAPTCHA.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-brandRed to-blueColor text-white p-4 rounded-xl hover:from-brandRed/90 hover:to-blueColor/90 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
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
                            </form>
                        </div>
                    </div>

                    {/* Map Section - Right Side */}
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} animation-delay-500`}>
                        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 h-full">
                            <div className="text-center h-full flex flex-col justify-between">
                                <div className="mb-5">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Pakistan Power Engineering Services</h3>
                                    <div className="flex items-center justify-center mb-3">
                                        <span className="text-blueColor mr-2 text-xl font-bold">5.0</span>
                                        <div className="flex text-amber-400">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-gray-500 ml-2 text-sm">100+ Industrial Clients</span>
                                    </div>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Phase+1+Defence+Housing+Authority+Karachi+Pakistan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blueColor underline cursor-pointer hover:text-brandRed transition-colors duration-300 inline-block font-semibold text-sm"
                                    >
                                        Open Location in Google Maps ↗
                                    </a>
                                </div>
                                <div className="w-full flex-grow min-h-[320px] sm:min-h-[370px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-inner relative bg-gray-100">
                                    <iframe
                                        title="Pakistan Power Engineering Services - Defence Phase 1 Karachi Location"
                                        src="https://maps.google.com/maps?q=Phase%201%20Defence%20Housing%20Authority,%20Karachi,%20Pakistan&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                                        className="w-full h-full min-h-[320px] sm:min-h-[370px] border-0"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
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
                        <a href="tel:+923092302512" className="text-gray-600 hover:text-brandRed transition-colors duration-300 block font-medium">+92 309 2302512</a>
                        <a href="tel:+923350259886" className="text-gray-600 hover:text-brandRed transition-colors duration-300 block">+92 335 0259886</a>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-center hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 group animation-delay-200">
                        <div className="w-16 h-16 bg-gradient-to-r from-blueColor to-brandRed rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12">
                            <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blueColor transition-colors duration-300">Email</h3>
                        <div className="space-y-1.5 text-sm">
                            <a href="mailto:info@pakistanpowerengservices.com" className="text-gray-600 hover:text-blueColor transition-colors duration-300 break-all block font-medium">
                                info@pakistanpowerengservices.com
                            </a>
                            <a href="mailto:ahmed.yaqoob@pakistanpowerengservices.com" className="text-brandRed hover:underline transition-colors duration-300 break-all block text-xs font-semibold">
                                ahmed.yaqoob@pakistanpowerengservices.com <span className="text-gray-500 font-normal">(CEO Direct)</span>
                            </a>
                            <a href="mailto:sales@pakistanpowerengservices.com" className="text-gray-500 hover:text-blueColor transition-colors duration-300 break-all block text-xs">
                                sales@pakistanpowerengservices.com
                            </a>
                        </div>
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
                        <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm leading-relaxed">Plot # 236, Street D-17, Azam Town, Mahmoodabad, Karachi, Pakistan</p>
                    </div>
                </div>
            </div>

            {/* Premium Corporate Popup for Success/Error */}
            {showPopup && (
                <div
                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300"
                    onClick={() => setShowPopup(false)}
                >
                    <div
                        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 border border-white/40 text-center transform transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Status Icon */}
                        <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-inner ${isError ? 'bg-amber-100 text-brandRed' : 'bg-emerald-100 text-emerald-600'
                            }`}>
                            {isError ? (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            ) : (
                                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </div>

                        {/* Title */}
                        <h3 className={`text-2xl font-bold mb-2 ${isError ? 'text-brandRed' : 'text-gray-900'}`}>
                            {isError ? 'Verification Required' : 'Inquiry Submitted!'}
                        </h3>

                        {/* Message Description */}
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                            {popupMessage}
                        </p>

                        {/* Dismiss Button */}
                        <button
                            type="button"
                            onClick={() => setShowPopup(false)}
                            className={`w-full py-3.5 px-6 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] ${isError
                                    ? 'bg-gradient-to-r from-brandRed to-red-600'
                                    : 'bg-gradient-to-r from-brandRed to-blueColor'
                                }`}
                        >
                            {isError ? 'Okay, Got It' : 'Thank You'}
                        </button>
                    </div>
                </div>
            )}

            <style>{`
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
