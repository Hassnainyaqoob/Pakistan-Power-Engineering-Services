import React from 'react';

/**
 * Reusable inner-page hero banner (same look & feel as the About page).
 * Props: image, eyebrow, title, children (optional extra content e.g. buttons)
 */
export default function PageHero({ image, eyebrow, title, children }) {
    return (
        <div
            className="relative w-full min-h-[400px] sm:min-h-[440px] md:min-h-[480px] text-white overflow-hidden flex flex-col justify-center pt-28 sm:pt-32 pb-12"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 20, 45, 0.9) 0%, rgba(0, 20, 45, 0.7) 50%, rgba(0, 20, 45, 0.35) 100%), url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6">
                <p
                    className="text-base sm:text-lg md:text-xl font-medium tracking-wide mb-2 opacity-0"
                    style={{ animation: 'fadeIn .7s ease-in-out forwards .3s' }}
                >
                    {eyebrow}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight tracking-tight mb-4">
                    {title}
                </h1>
                <div className="divider-line mb-6"></div>
                {children}
            </div>
        </div>
    );
}
