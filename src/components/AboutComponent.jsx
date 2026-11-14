import React, { useEffect } from 'react';
import BackImg from '../assets/images/real/hero_switchgear_corridor.jpg';

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
        minHeight: '470px',
        backgroundImage: `linear-gradient(to left, rgba(0, 23, 48, 0.78), rgba(0, 31, 63, 0.88)), url(${BackImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 0',
      }}
      className="responsive-about-section"
    >
      <div className="text-center px-4 w-full max-w-6xl">
        <h2 className="text-lg sm:text-xl font-semibold animate-text tracking-widest">WHO WE ARE</h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brandRed mt-2 animate-text leading-tight">
          About Pakistan Power Engineering <span style={{ color: "white" }}>Services</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-brandRed to-red-500 mx-auto mt-4 mb-4"></div>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base max-w-5xl mx-auto animate-text leading-relaxed">
          Established in 2010, Pakistan Power Engineering Services is a trusted industrial electrical engineering partner across Pakistan — specializing in Power Transformers across multiple kVA &amp; MVA ratings (Supply, Repairing, Coil Rewinding, Oil Filtration, Testing &amp; Commissioning), in-house LT/PCC/MCC/PFI panel manufacturing, HT/MV VCB switchgear &amp; breaker trolleys, infrared thermography, and all types of protection relays testing, settings &amp; configurations (Schneider Electric, Siemens, ABB &amp; more).
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[{ num: '50+', label: 'Skilled Professionals' }, { num: '15+', label: 'Years of Experience' }, { num: '500+', label: 'Projects Completed' }, { num: '100+', label: 'Satisfied Clients' }].map((stat, i) => (
            <div key={i} className="animate-text">
              <div className="text-3xl font-bold text-brandRed">{stat.num}</div>
              <div className="text-xs text-white mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
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
