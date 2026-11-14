import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import heroImage from '../assets/images/real/hero_switchgear_corridor.jpg';
import { siteImages } from '../data/siteImages';

export default function GalleryPage() {
    const navigate = useNavigate();
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [loadedImages, setLoadedImages] = useState({});
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const total = siteImages.length;

    const openLightbox = (index) => {
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const nextImage = useCallback(() => {
        setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % total));
    }, [total]);

    const prevImage = useCallback(() => {
        setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + total) % total));
    }, [total]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, nextImage, prevImage]);

    // Touch swipe for mobile
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        touchEndX.current = null;
    };
    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
        if (touchStartX.current === null || touchEndX.current === null) return;
        const diff = touchStartX.current - touchEndX.current;
        if (diff > 45) nextImage();
        else if (diff < -45) prevImage();
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div className="min-h-screen bg-slate-50 text-gray-800">
            {/* Page Hero */}
            <PageHero
                image={heroImage}
                eyebrow="Real Proof of Work • Since 2010"
                title="On-Site Project Gallery"
            >
                <p className="max-w-2xl text-gray-200 text-sm sm:text-base leading-relaxed mb-6">
                    Authentic, unfiltered on-site photographs from industrial projects across Pakistan. 
                    From power transformer overhauling and 11kV VCB switchgears to secondary injection relay calibration and turnkey substation erections.
                </p>
                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={() => navigate('/contact')}
                        className="bg-brandRed hover:bg-[#8b1418] text-white font-bold px-6 py-3 rounded-lg shadow-lg shadow-brandRed/30 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                    >
                        Request a Site Survey & Quote
                    </button>
                    <a
                        href="tel:+923092302512"
                        className="inline-flex items-center gap-2 border border-white/60 hover:bg-white hover:text-blueColor text-white font-semibold px-5 py-3 rounded-lg transition-colors text-sm sm:text-base backdrop-blur-sm"
                    >
                        <span>📞</span>
                        <span>Direct Engineer Call</span>
                    </a>
                </div>
            </PageHero>

            {/* Highlights Bar */}
            <div className="bg-[#001730] text-white py-4 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                        <div className="py-1">
                            <span className="text-xl sm:text-2xl font-extrabold text-brandRed block">95+</span>
                            <span className="text-xs text-gray-300 font-medium">Real Site Photos</span>
                        </div>
                        <div className="py-1">
                            <span className="text-xl sm:text-2xl font-extrabold text-blue-400 block">500+</span>
                            <span className="text-xs text-gray-300 font-medium">Completed Projects</span>
                        </div>
                        <div className="py-1">
                            <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 block">100%</span>
                            <span className="text-xs text-gray-300 font-medium">Authentic Field Work</span>
                        </div>
                        <div className="py-1">
                            <span className="text-xl sm:text-2xl font-extrabold text-amber-400 block">15+ Yrs</span>
                            <span className="text-xs text-gray-300 font-medium">Industrial Trust</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001730]">
                            Industrial Site Execution & Field Works
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Click any photo to view in high-resolution full screen.
                        </p>
                    </div>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold w-fit">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        {total} Verified Site Photos
                    </span>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                    {siteImages.map((img, idx) => (
                        <div
                            key={img.id}
                            onClick={() => openLightbox(idx)}
                            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
                        >
                            <img
                                src={img.thumb}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                                <span className="self-end bg-black/60 backdrop-blur-md text-white text-[11px] font-mono px-2 py-0.5 rounded-md border border-white/20">
                                    #{idx + 1}
                                </span>
                                <div className="text-white">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-brandRed/90 px-2.5 py-1 rounded-md">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 8v6M8 11h6M19 11a8 8 0 11-16 0 8 8 0 0116 0z" />
                                        </svg>
                                        View Full HD
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom High-Conversion CTA */}
            <div className="bg-gradient-to-r from-[#001730] via-[#00264d] to-[#001730] text-white py-14 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-brandRed/20 text-red-200 border border-brandRed/40 text-xs font-semibold uppercase tracking-wider mb-4">
                        Turnkey Electrical & Substation Contractor
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
                        Have an Upcoming Industrial Electrical Project?
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
                        Get in touch with our engineering team for on-site inspection, transformer testing, custom switchgear panel fabrication, or full substation commissioning.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-[#C00000] hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-[#C00000]/40 transition-all duration-300 hover:scale-105"
                        >
                            Request a Free Quote
                        </button>
                        <a
                            href="tel:+923092302512"
                            className="inline-flex items-center gap-2 border border-white/30 hover:bg-white hover:text-[#001730] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 backdrop-blur-md"
                        >
                            <span>📞</span>
                            <span>+92 309 2302512</span>
                        </a>
                        <a
                            href="https://wa.me/923092302512"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md"
                        >
                            <span>💬</span>
                            <span>WhatsApp Us</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Fullscreen Lightbox Modal */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Top Bar */}
                    <div className="flex items-center justify-between px-4 sm:px-8 py-4 bg-black/50 border-b border-white/10 z-20">
                        <div className="flex items-center gap-3 text-white">
                            <span className="font-bold text-sm sm:text-base tracking-wide">
                                Site Project {lightboxIndex + 1}
                            </span>
                            <span className="text-gray-400 text-xs sm:text-sm font-mono">
                                ({lightboxIndex + 1} of {total})
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={closeLightbox}
                                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center text-xl transition-colors"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>
                    </div>

                    {/* Middle: Image View with Prev/Next Controls */}
                    <div className="relative flex-grow flex items-center justify-center p-2 sm:p-6 overflow-hidden">
                        {/* Prev Button */}
                        <button
                            onClick={prevImage}
                            className="absolute left-2 sm:left-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-white hover:text-black text-white border border-white/20 flex items-center justify-center text-xl transition-all duration-200 active:scale-95 shadow-xl"
                            aria-label="Previous image"
                        >
                            ‹
                        </button>

                        {/* Active Image */}
                        <img
                            src={siteImages[lightboxIndex].src}
                            alt={siteImages[lightboxIndex].alt}
                            className="max-h-[75vh] sm:max-h-[82vh] max-w-[94vw] object-contain rounded-lg shadow-2xl transition-opacity duration-300"
                        />

                        {/* Next Button */}
                        <button
                            onClick={nextImage}
                            className="absolute right-2 sm:right-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-white hover:text-black text-white border border-white/20 flex items-center justify-center text-xl transition-all duration-200 active:scale-95 shadow-xl"
                            aria-label="Next image"
                        >
                            ›
                        </button>
                    </div>

                    {/* Bottom Thumbnail Strip for Fast Nav */}
                    <div className="bg-black/70 border-t border-white/10 py-3 px-4 z-20">
                        <div className="max-w-4xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-thin py-1">
                            {siteImages.map((thumbImg, tIdx) => (
                                <button
                                    key={thumbImg.id}
                                    onClick={() => setLightboxIndex(tIdx)}
                                    className={`relative flex-shrink-0 w-14 h-11 sm:w-16 sm:h-12 rounded-md overflow-hidden border-2 transition-all ${
                                        lightboxIndex === tIdx
                                            ? 'border-brandRed scale-105 shadow-md shadow-brandRed/40'
                                            : 'border-transparent opacity-50 hover:opacity-100'
                                    }`}
                                >
                                    <img
                                        src={thumbImg.thumb}
                                        alt={`Thumbnail ${tIdx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                        <p className="text-center text-gray-400 text-xs mt-2 hidden sm:block">
                            Use ← → arrow keys or swipe to navigate • Press Esc to close
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

