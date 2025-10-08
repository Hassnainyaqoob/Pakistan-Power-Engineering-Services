import React, { useEffect } from 'react';
import BackImg from '../assets/images/towerImg01.jpg';

const AboutSection = () => {
  useEffect(() => {
    // Ensure the animation triggers on mount
    const elements = document.querySelectorAll('.animate-text');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`; // Stagger the animation
    });
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '470px', // minHeight use kiya hai height ke bajaye
        backgroundImage: `linear-gradient(to left, #00000026, #6664c7ff), url(${BackImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 0', // Top aur bottom padding add kiya
      }}
      className="responsive-about-section" // Class add kiya responsive styling ke liye
    >
      <div className="text-center px-4 w-full max-w-6xl">
        <h2 className="text-lg sm:text-xl font-semibold animate-text">WHO WE ARE</h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brandRed mt-2 animate-text leading-tight">
          About Pakistan Power Engineering <span style={{ color: "white" }}>Services</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base max-w-5xl mx-auto animate-text leading-relaxed">
          Pakistan Power Engineering Services is rolling the wheel in Power Industry since 1998 as an EPC contractor with an extraordinary team of experienced and young result-oriented professionals. In this short span of time, Pakistan Power Engineering Services has progressed gigantically and is now included in the fleet of successful contracting companies working in Pakistan. We are under committed and over delivered. We are Pakistan Power Engineering Services!
        </p>
      </div>
      <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-text {
                    animation: fadeInUp 1s ease-out forwards;
                }
                
                /* Mobile responsive styles */
                @media (max-width: 640px) {
                    .responsive-about-section {
                        min-height: 400px !important;
                        padding: 30px 0 !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .responsive-about-section {
                        min-height: 350px !important;
                        padding: 25px 0 !important;
                    }
                }
                
                @media (max-width: 380px) {
                    .responsive-about-section {
                        min-height: 320px !important;
                        padding: 20px 0 !important;
                    }
                }
            `}</style>
    </div>
  );
};

export default AboutSection;