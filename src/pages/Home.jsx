import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

// Hero & Service Images
import backgroundImage from '../assets/images/home_hero_bg.jpg';
import realMeggerSwitchgear from '../assets/images/real_site_megger_switchgear.jpg';
import realSiemensPanel from '../assets/images/real_site_siemens_panel.png';
import realMeggerCtPt from '../assets/images/real_site_megger_ct_pt.jpg';
import ElevenKvTransImg from '../assets/images/eleven_kv_transformers_hero.jpg';
import LtPanelsImg from '../assets/images/lt_panels_hero.jpg';
import VcbMvImg from '../assets/images/vcb_mv_panels_hero.jpg';
import PowerTransImg from '../assets/images/power_transformer_hero.jpg';
import TestingImg from '../assets/images/testing_commissioning_hero.jpg';
import PfiImg from '../assets/images/pfi_solutions_hero.jpg';
import TurnkeyImg from '../assets/images/turnkey_electrical_hero.jpg';
import AutomationImg from '../assets/images/instrumentation_automation_hero.jpg';

// Process Images
import Step1 from '../assets/images/step1_new.jpg';
import Step2 from '../assets/images/step2_new.jpg';
import Step3 from '../assets/images/step3_new.jpg';
import Step4 from '../assets/images/step4_new.jpg';
import Step5 from '../assets/images/step5_new.jpg';
import Step6 from '../assets/images/vcb_mv_panels_hero.jpg';

// Client Logos
import Cl1 from '../assets/images/Cl1.png';
import Cl2 from '../assets/images/Cl2.png';
import Cl3 from '../assets/images/Cl3.png';
import Cl4 from '../assets/images/Cl4.png';
import Cl5 from '../assets/images/Cl5.png';
import Cl6 from '../assets/images/Cl6.png';
import Cl7 from '../assets/images/Cl7.png';
import Cl9 from '../assets/images/Cl9.png';
import Cl11 from '../assets/images/Cl11.png';
import Cl12 from '../assets/images/Cl12.png';
import Cl13 from '../assets/images/Cl13.png';
import Cl14 from '../assets/images/Cl14.png';
import Cl15 from '../assets/images/Cl15.png';
import Cl16 from '../assets/images/Cl16.png';
import Cl17 from '../assets/images/Cl17.png';
import Cl18 from '../assets/images/Cl18.png';
import Cl19 from '../assets/images/Cl19.png';
import Cl20 from '../assets/images/Cl20.png';

// Components
import { OfferingsCard } from '../components/OfferingCard';
import AboutSection from '../components/AboutComponent';
import ClientLogoMarquee from '../components/clientsimageslider';
import SubstationDiagram from '../components/SubstationDiagram';

const heroSlides = [
    { image: backgroundImage, title: 'Substation & Power Distribution Architecture' },
    { image: PowerTransImg, title: 'Power Transformers (Oil & Dry Type — All kVA Ratings)' },
    { image: VcbMvImg, title: 'HT & MV VCB Switchgear Panels' },
    { image: LtPanelsImg, title: 'LT & PCC/MCC Panels (Up to 6300A)' },
    { image: ElevenKvTransImg, title: 'Power Transformers: Supply, Repairing & Testing' },
    { image: realSiemensPanel, title: 'Siemens Breaker & Switchgear Suite' },
    { image: realMeggerSwitchgear, title: 'KYN28 HT VCB Panel & Relay Testing' },
    { image: realMeggerCtPt, title: 'Megger MVCT CT & VT Ratio Testing' },
];

// Standardized 6-step project execution process
const executionSteps = [
    {
        num: '01',
        icon: '📋',
        phase: 'Assessment',
        title: 'Site Survey & Electrical Load Assessment',
        desc: 'Comprehensive engineering evaluation of industrial power requirements, single-line diagrams (SLD), fault level calculations, and utility infeed compliance (K-Electric / DISCOs).',
        tags: ['Load Study', 'SLD Review', 'Fault Level Calculation', 'K-Electric / DISCO'],
        image: Step1,
    },
    {
        num: '02',
        icon: '📐',
        phase: 'Engineering',
        title: 'Custom Design & Switchgear Engineering',
        desc: 'Detailed AutoCAD design of HV, MV & LV switchgears and panels (PCC, MCC, VCB), busbar sizing, protection coordination studies, and bill of quantities (BOQ).',
        tags: ['AutoCAD Layouts', 'Busbar Sizing', 'Protection Coordination', 'BOQ'],
        image: Step2,
    },
    {
        num: '03',
        icon: '🏭',
        phase: 'Manufacturing',
        title: 'In-House Panel Fabrication & Assembly',
        desc: 'Precision CNC punching, bending, powder coating, copper busbar fabrication, and integration of tier-1 breakers (Schneider, Siemens, ABB, Terasaki) with factory acceptance testing.',
        tags: ['CNC Punching', 'Powder Coating', 'Copper Busbars', 'Factory Acceptance Test'],
        image: Step3,
    },
    {
        num: '04',
        icon: '🏗️',
        phase: 'Installation',
        title: 'On-Site Erection, Cable Jointing & Termination',
        desc: 'Transformer positioning, switchgear alignment, 11kV HT & LT cable laying, cable jointing & terminations, CT / PT and insulator installation, and earthing grid bonding.',
        tags: ['Transformer Positioning', 'HT / LT Cable Laying', 'Jointing & Terminations', 'Earthing Grid'],
        image: Step4,
    },
    {
        num: '05',
        icon: '🔬',
        phase: 'Testing & Commissioning',
        title: 'Testing, Relay Calibration & Commissioning',
        desc: 'Primary & secondary injection testing, MiCOM / ABB / Schneider numerical relay configuration, CT / PT ratio testing, Megger (IR), Hi-Pot, oil BDV testing, and energized commissioning.',
        tags: ['Primary / Secondary Injection', 'Megger (IR)', 'Hi-Pot', 'Oil BDV'],
        image: Step5,
    },
    {
        num: '06',
        icon: '🛡️',
        phase: 'Maintenance & Support',
        title: 'Preventive Maintenance & 24/7 Support',
        desc: 'Scheduled preventive maintenance with service & testing, switchgear trolley overhauling, transformer oil filtration & repairing, and 24/7 emergency breakdown support across Pakistan.',
        tags: ['Preventive Maintenance', 'Trolley Overhauling', 'Oil Filtration', '24/7 Breakdown'],
        image: Step6,
    },
];

export default function HomePage() {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [videoLoaded, setVideoLoaded] = React.useState(false);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 4500);
        return () => clearInterval(timer);
    }, []);

    // Scroll-driven timeline progress for the Execution Process section
    const timelineRef = React.useRef(null);
    const nodeRefs = React.useRef([]);
    const [timelineProgress, setTimelineProgress] = React.useState(0);
    const [activeSteps, setActiveSteps] = React.useState(0);

    React.useEffect(() => {
        let ticking = false;

        const update = () => {
            ticking = false;
            const el = timelineRef.current;
            if (!el) return;

            // Trigger line sits at 60% of the viewport height
            const trigger = window.innerHeight * 0.6;
            const rect = el.getBoundingClientRect();
            const progress = Math.min(Math.max((trigger - rect.top) / rect.height, 0), 1);
            setTimelineProgress(progress);

            const reached = nodeRefs.current.filter((node) => {
                if (!node) return false;
                const r = node.getBoundingClientRect();
                return r.top + r.height / 2 <= trigger;
            }).length;
            setActiveSteps(reached);
        };

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(update);
            }
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    // 8 Core Clickable Offerings
    const offerings = [
        {
            image: ElevenKvTransImg,
            title: 'Power Transformers',
            subtitle: 'Supply, Repairing, Testing & Commissioning',
            description: 'Oil-immersed & dry-type Power Transformers across multiple kVA and MVA ratings — supply, HV/LV coil rewinding, repairing, high-vacuum oil filtration, diagnostic testing, and commissioning.',
            link: '/services/power-transformers'
        },
        {
            image: LtPanelsImg,
            title: 'LT & PCC/MCC Panels',
            subtitle: 'In-House Manufacturing up to 6300A',
            description: 'Custom assembly of Power Control Centers (PCC), Motor Control Centers (MCC with VFDs & Soft Starters), and main distribution switchboards.',
            link: '/services/lt-panels'
        },
        {
            image: VcbMvImg,
            title: 'VCB & MV Switchgear',
            subtitle: '11kV Panels & RMU Solutions',
            description: 'Maintenance, troubleshooting, breaker retrofits, and testing of 11kV Vacuum Circuit Breakers, Ring Main Units, and compartmentalized panels.',
            link: '/services/vcb-mv-panels'
        },
        {
            image: TestingImg,
            title: 'Testing & Commissioning',
            subtitle: 'MiCOM & Numerical Relays',
            description: 'Relay calibration, primary/secondary current injection, insulation resistance (megger), oil BDV breakdown, and complete site energization.',
            link: '/services/testing-commissioning'
        },
        {
            image: PfiImg,
            title: 'Power Factor Improvement',
            subtitle: 'Automatic APFC Capacitor Banks',
            description: 'Heavy-duty PFI panels equipped with detuned harmonic filters, microprocessor PF controllers, and high-dielectric capacitor protection.',
            link: '/services/power-factor-improvement'
        },
        {
            image: TurnkeyImg,
            title: 'Complete Substation Setup',
            subtitle: 'A-to-Z Design, Supply & Erection',
            description: 'Complete indoor and outdoor 11kV substation projects from foundation, HT cable laying, transformer positioning to utility commissioning.',
            link: '/services/turnkey-electrical'
        },
        {
            image: PowerTransImg,
            title: 'Transformer Maintenance',
            subtitle: 'Oil Filtration & Overhaul',
            description: 'Preventive lifecycle care, nitrogen purging, gasket replacement, on-site oil dielectric testing, and emergency breakdown response.',
            link: '/services/power-transformer'
        },
        {
            image: AutomationImg,
            title: 'Automation & SCADA',
            subtitle: 'PLC & Industrial Monitoring',
            description: 'Substation SCADA integration, automated mains failure (AMF/ATS) systems, PLC automation, and remote energy management.',
            link: '/services/instrumentation-automation'
        },
    ];

    // Lifecycle capabilities
    const lifecycleCapabilities = [
        {
            num: '01',
            icon: '🏭',
            title: 'Panel Manufacturing & Assembly',
            desc: 'Custom fabrication of LT panels, PCC, MCC, and APFC boards in our fully equipped sheet-metal and copper assembly floor.'
        },
        {
            num: '02',
            icon: '📦',
            title: 'Power Transformers & Equipment Supply',
            desc: 'Direct supply of oil-immersed & dry-type Power Transformers in multiple kVA / MVA ratings, HT VCB switchgear, Ring Main Units, and tier-1 breakers.'
        },
        {
            num: '03',
            icon: '🏗️',
            title: 'Installation & Erection',
            desc: 'Site positioning, rigging, busbar trunking, 11kV HT cable termination, earthing grid installation, and mechanical assembly.'
        },
        {
            num: '04',
            icon: '🔬',
            title: 'Testing & Relay Commissioning',
            desc: 'MiCOM & numerical protection relay testing, secondary injection, Megger, Hi-Pot, and oil BDV dielectric verification.'
        },
        {
            num: '05',
            icon: '🔧',
            title: 'Repair, Rewinding & Overhaul',
            desc: 'Complete workshop rewinding of HV/LV coils, high-vacuum oil dehydration, gasket refurbishment, and 24/7 breakdown repair.'
        }
    ];

    // Industries served
    const industries = [
        { name: 'Textile Spinning & Weaving', icon: '🧵' },
        { name: 'Steel Mills & Induction Furnaces', icon: '🏭' },
        { name: 'Cement & Chemical Complexes', icon: '🧪' },
        { name: 'Food & Beverage Plants', icon: '🥫' },
        { name: 'Commercial High-Rises & Malls', icon: '🏢' },
        { name: 'Hospitals & Healthcare Grids', icon: '🏥' },
        { name: 'Data Centers & Telecom', icon: '📡' },
        { name: 'Water & Wastewater Utilities', icon: '💧' },
    ];

    // Brands
    const brands = [
        'Schneider Electric', 'Siemens', 'ABB', 'Mitsubishi Electric',
        'LS Electric', 'Terasaki', 'Hyundai', 'PEL', 'Transfopower', 'MiCOM Relays'
    ];

    const logos = [
        { src: Cl1, alt: 'Client 1' },
        { src: Cl2, alt: 'Client 2' },
        { src: Cl3, alt: 'Client 3' },
        { src: Cl4, alt: 'Client 4' },
        { src: Cl5, alt: 'Client 5' },
        { src: Cl6, alt: 'Client 6' },
        { src: Cl7, alt: 'Client 7' },
        { src: Cl9, alt: 'Client 9' },
        { src: Cl11, alt: 'Client 11' },
        { src: Cl12, alt: 'Client 12' },
        { src: Cl13, alt: 'Client 13' },
        { src: Cl14, alt: 'Client 14' },
        { src: Cl15, alt: 'Client 15' },
        { src: Cl16, alt: 'Client 16' },
        { src: Cl17, alt: 'Client 17' },
        { src: Cl18, alt: 'Client 18' },
        { src: Cl19, alt: 'Client 19' },
        { src: Cl20, alt: 'Client 20' },
    ];

    return (
        <div className="bg-white text-gray-800">
            {/* ─── HERO SECTION ─── */}
            <div className="relative min-h-[800px] lg:min-h-[860px] flex flex-col justify-start text-white overflow-hidden pt-36 sm:pt-40 lg:pt-44 pb-24">
                {/* 1. Real MP4 Video Background (Active when hero_video.mp4 exists in public/videos) */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    onPlay={() => setVideoLoaded(true)}
                    onLoadedData={() => setVideoLoaded(true)}
                    className={`absolute inset-0 w-full h-full object-cover object-center z-0 transition-opacity duration-1000 ${
                        videoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <source src="/videos/hero_video.mp4" type="video/mp4" />
                </video>

                {/* 2. Cinematic Live Video-Style Animated Slideshow (Ken Burns Camera Motion with Real Site Photos) */}
                <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}>
                    {heroSlides.map((slide, idx) => (
                        <div
                            key={idx}
                            className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-out ${
                                idx === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                            }`}
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                        />
                    ))}
                </div>

                {/* Ambient dark gradient overlay to ensure 100% readability of text & CTAs */}
                <div 
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to right, rgba(0,23,48,0.95) 0%, rgba(0,31,63,0.88) 55%, rgba(0,23,48,0.72) 100%)'
                    }}
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px] z-0 pointer-events-none" />

                {/* Hero Content */}
                <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
                    <div className="max-w-4xl">
                        {/* Top badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C00000]/25 border border-[#C00000]/50 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-[#ff4d4d] animate-ping" />
                            <span>Power Transformers, HT/LT Switchgear & Substation Specialists</span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight uppercase">
                            Pakistan Power{' '}
                            <span className="text-[#C00000] block sm:inline">Engineering Services</span>
                        </h1>

                        {/* Typewriter Highlight */}
                        <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#ff8080] mt-3 sm:mt-4 min-h-[48px] flex items-center">
                            <Typewriter
                                options={{
                                    strings: [
                                        'Power Transformers: Supply, Repairing, Testing & Commissioning',
                                        'Oil & Dry-Type Transformers (Multiple kVA & MVA Ratings)',
                                        'HV, MV & LV Switchgears & Panels Manufacturing',
                                        'HV, MV & LV Breaker Trolleys: Repair, Maintenance & Testing',
                                        'Protection Relays (MiCOM, ABB & Schneider): Testing & Commissioning',
                                        'Complete A-to-Z Substation Setup'
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 45,
                                    deleteSpeed: 25,
                                    cursor: '<span style="color: #ffffff;">|</span>',
                                }}
                            />
                        </div>

                        {/* Description */}
                        <p className="mt-5 text-gray-200 text-base sm:text-lg max-w-3xl leading-relaxed">
                            Complete engineering lifecycle solutions across Pakistan: HV, MV & LV switchgears, panels & breaker trolleys (manufacturing, testing, commissioning & repair), power transformers (oil & dry type) with high-vacuum oil filtration & BDV testing, advanced numerical protection relay calibration (MiCOM, ABB & Schneider with primary/secondary injection), Megger (IR) & Hi-Pot field testing, and complete A-to-Z substation setup.
                        </p>

                        {/* Hero CTAs */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <button
                                onClick={() => navigate('/contact')}
                                className="bg-[#C00000] hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-[#C00000]/40 transition-all duration-300 hover:scale-105"
                            >
                                Request a Free Quote
                            </button>
                            <a
                                href="/docs/Pakistan-Power-Company-Profile.pdf"
                                download="Pakistan-Power-Engineering-Services-Profile.pdf"
                                className="bg-white/10 hover:bg-white hover:text-blueColor text-white font-bold px-6 py-3.5 rounded-xl border border-white/30 backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:scale-105"
                            >
                                <span>📄</span>
                                <span>Download Profile</span>
                            </a>
                            <a
                                href="tel:+923092302512"
                                className="text-white hover:text-[#ff8080] font-semibold text-sm flex items-center gap-2 px-3 py-2 transition-colors"
                            >
                                <span className="text-lg">📞</span>
                                <span>+92 309 2302512</span>
                            </a>
                        </div>

                        {/* Live Equipment Showcase Pill */}
                        <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 border border-white/15 backdrop-blur-md text-xs text-gray-300">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-gray-400 font-medium">Live Showcase:</span>
                            <span className="text-white font-semibold">{heroSlides[currentSlide]?.title}</span>
                            <span className="text-[#ff8080] font-mono text-[11px] ml-1">({currentSlide + 1}/{heroSlides.length})</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Highlights Strip */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#001730]/90 border-t border-white/10 py-3 backdrop-blur-md hidden md:block">
                    <div className="max-w-[1480px] mx-auto px-6 flex justify-between items-center text-xs lg:text-sm font-semibold text-gray-300">
                        <div className="flex items-center gap-2">
                            <span className="text-[#ff6b6b]">⚡</span>
                            <span>Oil & Dry Power Transformers</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-500" />
                        <div className="flex items-center gap-2">
                            <span className="text-[#ff6b6b]">🏭</span>
                            <span>HV, MV & LV Panels</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-500" />
                        <div className="flex items-center gap-2">
                            <span className="text-[#ff6b6b]">🔌</span>
                            <span>11kV VCB & RMU Switchgear</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-500" />
                        <div className="flex items-center gap-2">
                            <span className="text-[#ff6b6b]">🔬</span>
                            <span>Protection Relay Testing & Commissioning</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-500" />
                        <div className="flex items-center gap-2">
                            <span className="text-[#ff6b6b]">🇵🇰</span>
                            <span>All Pakistan Coverage</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── 5 CORE CAPABILITIES BAND (WHAT WE DO) ─── */}
            <div className="py-14 bg-gray-50 border-b border-gray-200">
                <div className="max-w-[1480px] mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-xs sm:text-sm font-bold text-[#C00000] tracking-widest uppercase">
                            Complete Lifecycle Capabilities
                        </h2>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-blueColor mt-1">
                            From In-House Manufacturing to On-Site Commissioning
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {lifecycleCapabilities.map((cap) => (
                            <div
                                key={cap.num}
                                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg border border-gray-100 hover:border-[#C00000]/40 transition-all duration-300 group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-2xl group-hover:scale-110 transition-transform">
                                            {cap.icon}
                                        </span>
                                        <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-[#C00000]">
                                            {cap.num}
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-blueColor text-base mb-2 group-hover:text-[#C00000] transition-colors leading-snug">
                                        {cap.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        {cap.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── 8 CORE CLICKABLE ENGINEERING OFFERINGS ─── */}
            <div className="py-16 bg-white">
                <div className="max-w-[1480px] mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-xs sm:text-sm text-blueColor font-bold tracking-widest uppercase mb-2">
                            ENGINEERING PORTFOLIO
                        </h2>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                            <span className="text-[#C00000]">Core Power & Switchgear </span>
                            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-blueColor">
                                <span className="relative text-white px-2">Services</span>
                            </span>
                        </h1>
                        <p className="text-gray-600 text-sm sm:text-base mt-3">
                            Click any service below to view technical specifications, capacity ratings, and project details.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {offerings.map((offering, index) => (
                            <div
                                key={offering.title}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <OfferingsCard
                                    image={offering.image}
                                    title={offering.title}
                                    subtitle={offering.subtitle}
                                    description={offering.description}
                                    onClick={() => navigate(offering.link)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── INTERACTIVE SUBSTATION ARCHITECTURE FLOW DIAGRAM ─── */}
            <SubstationDiagram />

            {/* ─── ABOUT COMPANY COMPONENT ─── */}
            <AboutSection />

            {/* ─── COMPLETE ENGINEERING PROCESS SECTION ─── */}
            <div className="py-16 bg-gray-50 overflow-hidden">
                <div className="text-center mb-16">
                    <h2 className="text-xs sm:text-sm text-blueColor font-bold tracking-widest uppercase">
                        STANDARDIZED EXECUTION METHODOLOGY
                    </h2>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#C00000] mt-2">
                        Complete Project <span className="text-blueColor">Execution Process</span>
                    </h1>
                    <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-2 px-4">
                        From initial electrical load assessment to final utility inspection and complete energized handover.
                    </p>
                </div>

                <div ref={timelineRef} className="relative max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Timeline track (desktop only) */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full bg-gray-200" />

                    {/* Scroll-driven progress fill */}
                    <div
                        className="hidden lg:block absolute left-1/2 top-0 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#C00000] via-[#e02424] to-blueColor shadow-[0_0_12px_rgba(192,0,0,0.55)] transition-[height] duration-150 ease-out"
                        style={{ height: `${timelineProgress * 100}%` }}
                    >
                        {/* Glowing tip that travels with the scroll */}
                        {timelineProgress > 0 && timelineProgress < 1 && (
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex h-4 w-4">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-[#C00000] opacity-60 animate-ping" />
                                <span className="relative inline-flex h-4 w-4 rounded-full bg-[#C00000] border-2 border-white shadow-md" />
                            </span>
                        )}
                    </div>

                    <div className="space-y-14 lg:space-y-20">
                        {executionSteps.map((step, idx) => {
                            const imageRight = idx % 2 === 1;
                            const isActive = idx < activeSteps;
                            return (
                                <div key={step.num} className="relative grid lg:grid-cols-2 gap-6 lg:gap-20 items-center">
                                    {/* Timeline node — lights up when the progress line reaches it */}
                                    <div
                                        ref={(node) => (nodeRefs.current[idx] = node)}
                                        className={`hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full border-4 items-center justify-center transition-all duration-500 ${
                                            isActive
                                                ? 'bg-[#C00000] border-[#C00000] scale-110 shadow-[0_0_0_6px_rgba(192,0,0,0.15),0_8px_20px_rgba(192,0,0,0.35)]'
                                                : 'bg-white border-gray-300 shadow-md'
                                        }`}
                                    >
                                        <span className={`font-extrabold text-base transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                                            {step.num}
                                        </span>
                                    </div>

                                    {/* Image */}
                                    <div className={imageRight ? 'lg:order-2' : ''} data-aos={imageRight ? 'fade-left' : 'fade-right'}>
                                        <div className="group relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] bg-gray-200">
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#001730]/70 via-transparent to-transparent" />
                                            <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C00000] text-white text-xs font-bold tracking-wider uppercase shadow-lg">
                                                <span>{step.icon}</span>
                                                <span>Step {step.num}</span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={imageRight ? 'lg:order-1' : ''} data-aos={imageRight ? 'fade-right' : 'fade-left'}>
                                        <div
                                            className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 border-t-4 border-t-[#C00000] lg:border-t lg:border-t-gray-100 hover:shadow-2xl transition-shadow duration-300 ${
                                                imageRight ? 'lg:border-r-4 lg:border-r-[#C00000]' : 'lg:border-l-4 lg:border-l-[#C00000]'
                                            }`}
                                        >
                                            <span className="text-xs font-bold tracking-widest uppercase text-[#C00000]">
                                                Step {step.num} — {step.phase}
                                            </span>
                                            <h3 className="mt-2 text-2xl sm:text-[26px] font-extrabold text-blueColor leading-snug">
                                                {step.title}
                                            </h3>
                                            <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                                                {step.desc}
                                            </p>
                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {step.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blueColor border border-blue-100"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ─── INDUSTRIES WE SERVE & TRUSTED COMPONENT BRANDS ─── */}
            <div className="py-16 bg-white border-t border-gray-200">
                <div className="max-w-[1480px] mx-auto px-6">
                    {/* Industries */}
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-xs sm:text-sm font-bold text-blueColor tracking-widest uppercase">
                            SECTORS & APPLICATIONS
                        </h2>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                            Industries Powered by <span className="text-[#C00000]">Pakistan Power Engineering</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
                        {industries.map((ind) => (
                            <div
                                key={ind.name}
                                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-[#C00000] hover:shadow-md transition-all duration-200"
                            >
                                <span className="text-2xl">{ind.icon}</span>
                                <span className="font-semibold text-xs sm:text-sm text-gray-800">
                                    {ind.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Brands Strip */}
                    <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 text-center">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                            Major Switchgear & Component Brands Integrated in Our Projects
                        </h4>
                        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5">
                            {brands.map((b) => (
                                <span
                                    key={b}
                                    className="bg-white border border-gray-200 px-4 py-2 rounded-lg font-bold text-xs sm:text-sm text-blueColor shadow-sm"
                                >
                                    {b}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── CLIENT LOGO MARQUEE ─── */}
            <div className="py-14 bg-gray-50 border-t border-gray-200">
                <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#C00000]">
                        Trusted by <span className="text-blueColor">Industry Leaders</span>
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Over 100+ industrial and commercial clients served across all provinces of Pakistan
                    </p>
                </div>
                <ClientLogoMarquee logos={logos} />
            </div>

            {/* ─── HIGH CONVERSION FINAL CTA ─── */}
            <div className="py-16 bg-gradient-to-r from-[#001f3f] via-[#001730] to-[#001f3f] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#C00000]/30 text-[#ff6b6b] text-xs font-bold uppercase tracking-wider mb-3">
                        24/7 Technical Engineering Support
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        Ready to Power Your Industrial Facility?
                    </h2>
                    <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                        Speak directly with our substation and panel engineering specialists. Get immediate technical consultation, site assessment, or custom panel quotation.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-[#C00000] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 text-base"
                        >
                            Request Free Quotation
                        </button>
                        <a
                            href="tel:+923092302512"
                            className="border-2 border-white/40 hover:bg-white hover:text-blueColor text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-base flex items-center gap-2"
                        >
                            <span>📞</span>
                            <span>+92 309 2302512</span>
                        </a>
                        <a
                            href="https://wa.me/923092302512?text=Hello%20Pakistan%20Power%20Engineering%20Services,%20I%20need%20assistance%20with%20substation%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-base flex items-center gap-2"
                        >
                            <span>💬</span>
                            <span>WhatsApp Chat</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
