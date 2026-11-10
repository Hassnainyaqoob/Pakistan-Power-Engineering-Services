import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { siteImages } from '../data/siteImages';

export default function SitePhotoShowcase() {
    const navigate = useNavigate();
    const [selectedImg, setSelectedImg] = useState(null);

    // Pick 20 high-impact photos for the homepage marquee
    const row1 = siteImages.slice(0, 15);
    const row2 = siteImages.slice(15, 30);

    return (
        <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#001730] via-[#051f3e] to-[#001730] text-white overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brandRed/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 bg-brandRed/20 border border-brandRed/40 backdrop-blur-md px-4 py-1.5 rounded-full mb-4">
                    <span className="w-2 h-2 rounded-full bg-brandRed animate-pulse" />
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-red-200">
                        100% Real Field Proof • Zero Stock Photos
                    </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
                    On-Site <span className="text-brandRed">Engineering Execution</span>
                </h2>

                <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    Real-world photographic proof of our engineering teams at work: heavy transformer overhauling, 11kV VCB switchgear installations, secondary relay calibration, and turnkey substations across Pakistan.
                </p>

                <button
                    onClick={() => navigate('/gallery')}
                    className="inline-flex items-center gap-2 bg-[#C00000] hover:bg-red-700 text-white font-bold px-7 py-3 rounded-xl shadow-lg shadow-[#C00000]/40 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                    <span>📸 View All 95+ Site Photos</span>
                    <span>→</span>
                </button>
            </div>

            {/* Infinite Horizontal Smooth Scroller - Row 1 (Gliding Left) */}
            <div className="relative w-full overflow-hidden mb-4 group py-2">
                <div className="flex gap-4 w-max animate-marquee [animation-duration:45s] group-hover:[animation-play-state:paused]">
                    {[...row1, ...row1].map((img, i) => (
                        <div
                            key={`r1-${i}`}
                            onClick={() => setSelectedImg(img)}
                            className="relative flex-shrink-0 w-64 sm:w-72 md:w-80 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 border border-white/10 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:border-brandRed/60"
                        >
                            <img
                                src={img.thumb}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                                <span className="text-xs font-semibold text-white bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/20">
                                    🔍 Click to Enlarge
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Infinite Horizontal Smooth Scroller - Row 2 (Gliding Right) */}
            <div className="relative w-full overflow-hidden group py-2">
                <div className="flex gap-4 w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
                    {[...row2, ...row2].map((img, i) => (
                        <div
                            key={`r2-${i}`}
                            onClick={() => setSelectedImg(img)}
                            className="relative flex-shrink-0 w-64 sm:w-72 md:w-80 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 border border-white/10 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:border-blue-400/60"
                        >
                            <img
                                src={img.thumb}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                                <span className="text-xs font-semibold text-white bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/20">
                                    🔍 Click to Enlarge
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Counter Bar */}
            <div className="max-w-7xl mx-auto px-4 mt-8 text-center">
                <span className="text-xs text-gray-400 font-mono tracking-wider">
                    Hover over any photo to pause • Click to enlarge • Total 98 verified site images
                </span>
            </div>

            {/* Modal for Quick Clicked Image */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setSelectedImg(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedImg(null)}
                            className="absolute -top-12 right-0 text-white text-2xl w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                        >
                            ✕
                        </button>
                        <img
                            src={selectedImg.src}
                            alt={selectedImg.alt}
                            className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-white/20"
                        />
                        <div className="mt-3 text-center">
                            <button
                                onClick={() => {
                                    setSelectedImg(null);
                                    navigate('/gallery');
                                }}
                                className="text-xs sm:text-sm font-semibold text-white bg-brandRed hover:bg-[#8b1418] px-5 py-2 rounded-lg transition-colors"
                            >
                                Open Full 95+ Photo Gallery ↗
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
