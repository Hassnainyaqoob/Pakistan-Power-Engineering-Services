import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientLogoMarquee = ({ logos }) => {
    useEffect(() => {
        console.log('Logos data:', logos);
    }, [logos]);

    const PreviousArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow absolute left-2 top-1/2 transform -translate-y-1/2`}
                style={{ ...style, display: 'block', background: '#d1d5db', borderRadius: '50%', zIndex: 10 }}
                onClick={onClick}
            >
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                </svg>
            </div>
        );
    };

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow absolute right-2 top-1/2 transform -translate-y-1/2`}
                style={{ ...style, display: 'block', background: '#d1d5db', borderRadius: '50%', zIndex: 10 }}
                onClick={onClick}
            >
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg>
            </div>
        );
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PreviousArrow />,
        nextArrow: <NextArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5, // Adjusted to 3 for better fit
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true, // Enabled arrows on mobile
                },
            },
        ],
    };

    return (
        <div className="w-full max-w-full bg-gradient-to-r from-gray-100 to-white py-6 relative overflow-hidden">
            <div className="relative">
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <div key={index} className="px-1 sm:px-2">
                            <img
                                src={logo.src}
                                alt={logo.alt || `Client Logo ${index + 1}`}
                                className="bg-white h-28 mx-auto block transition-transform duration-300 hover:scale-110 border border-gray-200 rounded-lg p-2 shadow-sm sm:h-32 md:h-36 lg:h-40"
                                onError={(e) => { e.target.style.display = 'none'; console.error(`Image failed to load: ${logo.src}`); }}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ClientLogoMarquee;