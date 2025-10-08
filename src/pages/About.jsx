import React from 'react'
import backgroundImage from '../assets/images/about.png';
import Typewriter from 'typewriter-effect';
import ConstructionOverview from '../components/ConstructionOverview';
import CompanyObjectives from '../components/CompanyObjective';
import OurAccomplishments from '../components/OurAucomplisment';

export default function AboutPage() {
    return (
        <>
            <div
                style={{
                    position: 'relative',
                    height: '490px',
                    maxHeight: '490px',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                }}
            >
                {/* Overlay for better text readability */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                />

                {/* Text Content (Responsive positioning) */}
                <div
                    className="hero-text-container"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        padding: '20px',
                        zIndex: 1,
                        width: '100%',
                    }}
                >
                    <div
                        className="hero-text-content"
                        style={{
                            maxWidth: '500px',
                            marginLeft: '20px',
                        }}
                    >
                        <p
                            className="hero-subtitle"
                            style={{
                                fontSize: '1.5rem',
                                lineHeight: '1.6',
                                opacity: 0,
                                animation: 'fadeIn .7s ease-in-out forwards .6s',
                            }}
                        >
                            Experience To Be Trusted
                        </p>
                        <h1
                            className="hero-title"
                            style={{
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                marginBottom: '20px',
                                textTransform: 'uppercase',
                                lineHeight: '1.2',
                            }}
                        >
                            <Typewriter
                                options={{
                                    strings: ['About'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    cursor: '<span style="color: white;">|</span>',
                                }}
                            />
                        </h1>
                        <div class="divider-line"></div>

                    </div>
                </div>
            </div>
            <div>
                <ConstructionOverview />
            </div>
            <div className='my-20'>
                <CompanyObjectives />
            </div>
            <div>
                <OurAccomplishments />
            </div>
        </>

    )
}
