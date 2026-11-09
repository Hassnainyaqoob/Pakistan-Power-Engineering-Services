import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import heroImage from '../assets/images/home_hero_bg.jpg';


const pages = [
    { title: 'Cover', route: null },
    { title: 'About Company', route: null },
    { title: 'Power Transformers (Supply, Repair & Testing)', route: '/services/power-transformers' },
    { title: 'HT / MV VCB & RMU Panels', route: '/services/vcb-mv-panels' },
    { title: 'Instrumentation & Automation', route: '/services/instrumentation-automation' },
    { title: 'Power Transformers & MV Equipment Supply', route: '/services/mv-equipment-supply' },
    { title: 'Power Factor Improvement', route: '/services/power-factor-improvement' },
    { title: 'Testing & Commissioning', route: '/services/testing-commissioning' },
    { title: 'Complete Substation Setup', route: '/services/turnkey-electrical' },
    { title: 'Values & Projects', route: null },
    { title: 'Contact', route: null },
];

const highlights = [
    { icon: '📅', title: 'Since 2010', text: 'Powering progress, delivering excellence' },
    { icon: '⚙️', title: 'Complete Services', text: 'From transformers to complete substation setups' },
    { icon: '⚡', title: 'Proven Reliability', text: '500+ successful industrial installations' },
    { icon: '🛡️', title: 'Safety First', text: 'Strict adherence to safety protocols' },
];

export default function Profile() {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);
    const [lightbox, setLightbox] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const thumbRefs = useRef([]);
    const thumbContainerRef = useRef(null);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const total = pages.length;
    const goTo = useCallback((i) => {
        setLoaded(false);
        setCurrent((i + total) % total);
    }, [total]);
    const next = useCallback(() => goTo(current + 1), [goTo, current]);
    const prev = useCallback(() => goTo(current - 1), [goTo, current]);

    // Touch swipe gestures for mobile
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
        const threshold = 40; // min swipe distance in px
        if (diff > threshold) {
            next(); // swiped left -> next page
        } else if (diff < -threshold) {
            prev(); // swiped right -> prev page
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'ArrowRight') next();
            else if (e.key === 'ArrowLeft') prev();
            else if (e.key === 'Escape') setLightbox(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [next, prev]);

    // Lock page scroll while lightbox is open
    useEffect(() => {
        document.body.style.overflow = lightbox ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [lightbox]);

    // Keep the active thumbnail visible without scrolling the whole page/window
    useEffect(() => {
        const thumb = thumbRefs.current[current];
        const container = thumbContainerRef.current;
        if (thumb && container) {
            const left = thumb.offsetLeft - (container.clientWidth - thumb.clientWidth) / 2;
            container.scrollTo({ left, behavior: 'smooth' });
        }
    }, [current]);

    const active = pages[current];

    return (
        <>
            <PageHero image={heroImage} eyebrow="Know Who We Are" title="Company Profile">
                <p className="max-w-xl text-gray-200 text-sm sm:text-base leading-relaxed mb-6">
                    Explore our complete company profile online to review our engineering capabilities, heavy switchgear manufacturing, transformer services, and turnkey industrial projects.
                </p>
                <div className="flex flex-wrap gap-3">
                    <a
                        href="#profile-viewer"
                        className="inline-flex items-center gap-2 bg-brandRed hover:bg-[#4A1D1A] text-white font-bold px-7 py-3 rounded transition-colors duration-300"
                    >
                        <span>📖</span>
                        <span>View Profile Online</span>
                    </a>
                    <button
                        onClick={() => navigate('/contact')}
                        className="inline-flex items-center gap-2 border border-white/60 hover:bg-white hover:text-blueColor text-white font-semibold px-6 py-3 rounded transition-colors duration-300"
                    >
                        Request a Quote
                    </button>
                </div>
            </PageHero>

            {/* Highlights */}
            <section className="bg-gray-100 py-12 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {highlights.map((h, i) => (
                        <div
                            key={h.title}
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center border-t-4 border-brandRed"
                        >
                            <div className="text-4xl mb-3">{h.icon}</div>
                            <h3 className="text-lg font-bold text-blueColor mb-1">{h.title}</h3>
                            <p className="text-sm text-gray-600">{h.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Viewer */}
            <section id="profile-viewer" className="py-10 sm:py-14 px-3 sm:px-6 bg-white scroll-mt-28 sm:scroll-mt-32 w-full overflow-hidden">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="text-center mb-8 sm:mb-10">
                        <h2 className="text-sm sm:text-base uppercase tracking-wider text-gray-500 font-semibold mb-1">Page by Page</h2>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                            <span className="text-brandRed">Profile </span>
                            <span className="text-blueColor italic">Viewer</span>
                        </h2>
                        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-brandRed to-blue-900 mx-auto mt-4"></div>
                    </div>

                    <div className="grid lg:grid-cols-[1fr_320px] gap-6 lg:gap-8 items-start w-full min-w-0">
                        {/* Main page */}
                        <div className="w-full min-w-0">
                            <div
                                className="relative bg-gray-100 rounded-xl shadow-lg p-2.5 sm:p-5 flex items-center justify-center select-none overflow-hidden"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <button
                                    id="profile-prev"
                                    onClick={prev}
                                    aria-label="Previous page"
                                    className="absolute left-2 sm:left-4 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 shadow-md border border-gray-200 flex items-center justify-center hover:bg-blueColor group transition-all duration-200 active:scale-95"
                                >
                                    <svg className="w-5 h-5 text-blueColor group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                                </button>

                                <div
                                    className="relative w-full max-w-[560px] cursor-zoom-in flex items-center justify-center bg-gray-50 rounded overflow-hidden"
                                    style={{ aspectRatio: '790 / 1119' }}
                                    onClick={() => setLightbox(true)}
                                >
                                    <img
                                        key={current}
                                        src={`/profile/page-${current + 1}.webp`}
                                        alt={`Pakistan Power Engineering Services profile – ${active.title}`}
                                        ref={(el) => {
                                            if (el && el.complete && !loaded) {
                                                setLoaded(true);
                                            }
                                        }}
                                        onLoad={() => setLoaded(true)}
                                        className="w-full h-full object-contain rounded shadow-sm max-w-full block"
                                    />
                                    <span className="absolute bottom-2.5 right-2.5 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded flex items-center gap-1.5 shadow">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 8v6M8 11h6M19 11a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
                                        Zoom
                                    </span>
                                </div>

                                <button
                                    id="profile-next"
                                    onClick={next}
                                    aria-label="Next page"
                                    className="absolute right-2 sm:right-4 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 shadow-md border border-gray-200 flex items-center justify-center hover:bg-blueColor group transition-all duration-200 active:scale-95"
                                >
                                    <svg className="w-5 h-5 text-blueColor group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>

                            <div className="mt-4 text-center px-2">
                                <p className="text-xs sm:text-sm text-gray-500 font-medium">Page {current + 1} of {total}</p>
                                <h3 className="text-lg sm:text-xl font-bold text-blueColor mt-0.5">{active.title}</h3>
                                {active.route && (
                                    <button
                                        onClick={() => navigate(active.route)}
                                        className="mt-2 text-brandRed font-semibold text-xs sm:text-sm hover:underline hover:bg-transparent inline-flex items-center gap-1"
                                    >
                                        View full service page →
                                    </button>
                                )}
                                <p className="text-[11px] text-gray-400 mt-1 block sm:hidden">👈 Swipe left or right to flip pages 👉</p>
                            </div>

                            {/* Thumbnails */}
                            <div
                                ref={thumbContainerRef}
                                className="mt-6 flex gap-2 sm:gap-3 overflow-x-auto pb-3 snap-x w-full max-w-full"
                                style={{ WebkitOverflowScrolling: 'touch' }}
                            >
                                {pages.map((p, i) => (
                                    <button
                                        key={p.title}
                                        ref={(el) => (thumbRefs.current[i] = el)}
                                        onClick={() => goTo(i)}
                                        aria-label={`Go to ${p.title}`}
                                        className={`shrink-0 snap-center w-16 sm:w-20 md:w-24 rounded overflow-hidden border-2 bg-white hover:bg-white transition-all duration-200 ${i === current ? 'border-brandRed scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                                    >
                                        <img src={`/profile/thumb-${i + 1}.webp`} alt="" loading="lazy" className="w-full h-auto block" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Side panel */}
                        <aside className="bg-blueColor text-white rounded-xl p-5 sm:p-6 shadow-xl w-full min-w-0">
                            <h3 className="text-lg sm:text-xl font-bold mb-1">Contents</h3>
                            <div className="w-12 h-1 bg-brandRed mb-4"></div>
                            <ul className="space-y-1 mb-6 max-h-[340px] sm:max-h-[360px] overflow-y-auto pr-1">
                                {pages.map((p, i) => (
                                    <li key={p.title}>
                                        <button
                                            onClick={() => goTo(i)}
                                            className={`w-full text-left text-xs sm:text-sm px-3 py-2 rounded transition-colors flex items-center gap-3 ${i === current ? 'bg-white hover:bg-white text-blueColor font-bold shadow-sm' : 'hover:bg-white/10'}`}
                                        >
                                            <span className="opacity-60 w-5 shrink-0 font-mono">{String(i + 1).padStart(2, '0')}</span>
                                            <span className="truncate">{p.title}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => navigate('/contact')}
                                className="block w-full text-center bg-brandRed hover:bg-[#4A1D1A] text-white font-bold py-3 rounded transition-colors text-sm sm:text-base shadow"
                            >
                                Request a Quote
                            </button>
                        </aside>
                    </div>
                </div>
            </section>


            {/* Services inside profile */}
            <section className="py-14 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-blueColor mb-10">Services Covered in the Profile</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {pages.filter((p) => p.route).map((p) => (
                            <Link
                                key={p.route}
                                to={p.route}
                                className="group flex items-center justify-between bg-gray-50 hover:bg-blueColor hover:text-white rounded-lg px-5 py-4 border border-gray-100 shadow-sm transition-all duration-300"
                            >
                                <span className="font-semibold text-blueColor group-hover:text-white">{p.title}</span>
                                <span className="text-brandRed group-hover:text-white text-xl transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blueColor text-white py-14 px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Need a Quote or Technical Discussion?</h2>
                <p className="text-gray-300 mb-6 max-w-xl mx-auto">Our engineers are ready to help with your next power project.</p>
                <button
                    onClick={() => navigate('/contact')}
                    className="bg-brandRed hover:bg-[#4A1D1A] text-white font-bold px-8 py-3 rounded transition-colors duration-300"
                >
                    CONTACT US
                </button>
            </section>

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-3"
                    onClick={() => setLightbox(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Profile page preview"
                >
                    <button
                        onClick={() => setLightbox(false)}
                        aria-label="Close preview"
                        className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white text-2xl flex items-center justify-center"
                    >
                        ✕
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                        aria-label="Previous page"
                        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white text-2xl flex items-center justify-center"
                    >
                        ‹
                    </button>
                    <img
                        src={`/profile/page-${current + 1}.webp`}
                        alt={active.title}
                        onClick={(e) => e.stopPropagation()}
                        className="max-h-[92vh] max-w-full object-contain rounded shadow-2xl"
                    />
                    <button
                        onClick={(e) => { e.stopPropagation(); next(); }}
                        aria-label="Next page"
                        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white text-2xl flex items-center justify-center"
                    >
                        ›
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 px-3 py-1 rounded-full">
                        {current + 1} / {total} · {active.title}
                    </div>
                </div>
            )}
        </>
    );
}
