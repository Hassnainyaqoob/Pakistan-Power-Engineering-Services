import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = Slider?.default || Slider;

const ClientLogoMarquee = ({ logos }) => {
    const CustomArrow = ({ direction, onClick }) => (
        <button
            onClick={onClick}
            className={`absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100 hover:bg-blueColor hover:text-white transition-all duration-300 group focus:outline-none ${direction === 'left' ? '-left-4 lg:-left-6' : '-right-4 lg:-right-6'}`}
            aria-label={`${direction} arrow`}
        >
            <svg
                className={`w-6 h-6 text-blueColor group-hover:text-white transition-colors duration-300`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                {direction === 'left' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                )}
            </svg>
        </button>
    );

    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: <CustomArrow direction="left" />,
        nextArrow: <CustomArrow direction="right" />,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="w-full max-w-7xl mx-auto py-8 relative px-4 lg:px-10">
            <SliderComponent {...settings} className="client-slider">
                {logos.map((logo, index) => (
                    <div key={index} className="px-3 py-3">
                        <div className="bg-white h-32 flex items-center justify-center border border-gray-200 rounded-xl hover:border-brandRed hover:shadow-[0_12px_28px_rgba(192,0,0,0.15)] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
                            <img
                                src={logo.src}
                                alt={logo.alt || `Client Logo ${index + 1}`}
                                className="max-h-20 max-w-[80%] object-contain transition-all duration-300 group-hover:scale-110"
                                onError={(e) => { e.target.style.display = 'none'; }}
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </SliderComponent>
        </div>
    );
};

export default ClientLogoMarquee;