import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

// Hero & Service Images
import backgroundImage from '../assets/images/home_hero_bg.jpg';
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

import TransfromerImage from '../assets/images/power_transformer_hero.jpg';
import Helmet from '../assets/images/step1_new.jpg';
import WiredImg from '../assets/images/step4_new.jpg';
import PaneImg from '../assets/images/instrumentation_automation_hero.jpg';
import GovesImg from '../assets/images/step5_new.jpg';

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
import { LoadAssessmentCard } from '../components/ProcurementConstructionCard';
import ClientLogoMarquee from '../components/clientsimageslider';
import SubstationDiagram from '../components/SubstationDiagram';

export default function HomePage() {
    const navigate = useNavigate();

    // 8 Core Clickable Offerings
    const offerings = [
        {
            image: ElevenKvTransImg,
            title: '11kV Power Transformers',
            subtitle: 'Up to 11,000 kVA (11 MVA)',
            description: 'Supply, high-vacuum oil dehydration & filtration, precision diagnostic testing, full coil rewinding, and overhauling for oil & dry type transformers.',
            link: '/services/11kv-transformers'
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
            title: 'Equipment Supply',
            desc: 'Direct supply of 11kV distribution transformers (up to 11 MVA), VCB switchgear, Ring Main Units, and tier-1 breakers.'
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
            <div
                className="relative min-h-[800px] lg:min-h-[860px] flex flex-col justify-start text-white overflow-hidden pt-36 sm:pt-40 lg:pt-44 pb-24"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,23,48,0.96) 0%, rgba(0,31,63,0.88) 55%, rgba(0,31,63,0.65) 100%), url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Visual grid pattern overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

                {/* Hero Content */}
                <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
                    <div className="max-w-4xl">
                        {/* Top badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C00000]/25 border border-[#C00000]/50 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-[#ff4d4d] animate-ping" />
                            <span>11kV Power Distribution & Substation Specialists</span>
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
                                        '11kV Transformers up to 11,000 kVA',
                                        'LT & PCC/MCC Panel Manufacturing',
                                        '11kV VCB Switchgear & RMU Solutions',
                                        'MiCOM & Numerical Relay Testing',
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
                            Complete engineering lifecycle solutions across Pakistan: in-house panel manufacturing (PCC/MCC/APFC up to 6300A), 11kV distribution transformers up to 11 MVA, high-vacuum oil filtration, precision relay testing, and emergency breakdown repair.
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
                    </div>
                </div>

                {/* Bottom Highlights Strip */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#001730]/90 border-t border-white/10 py-3 backdrop-blur-md hidden md:block">
                    <div className="max-w-[1480px] mx-auto px-6 flex justify-between items-center text-xs lg:text-sm font-semibold text-gray-300">
                        <div className="flex items-center gap-2">
                            <span className="text-[#ff6b6b]">⚡</span>
                            <span>11,000 kVA Transformers</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-500" />
                        <div className="flex items-center gap-2">
                            <span className="text-[#ff6b6b]">🏭</span>
                            <span>6300A LT & PCC/MCC Panels</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-500" />
                        <div className="flex items-center gap-2">
                            <span className="text-[#ff6b6b]">🔌</span>
                            <span>11kV VCB & RMU Switchgear</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-500" />
                        <div className="flex items-center gap-2">
                            <span className="text-[#ff6b6b]">🔬</span>
                            <span>MiCOM Relay Testing</span>
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

                <div className="max-w-[1480px] mx-auto px-6 space-y-12">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1" data-aos="fade-right">
                            <LoadAssessmentCard
                                stepNumber="STEP 1"
                                title="Site Survey & Electrical Load Assessment"
                                description="Comprehensive engineering evaluation of industrial power requirements, single-line diagrams (SLD), fault level calculations, and utility infeed compliance (K-Electric / DISCOs)."
                                imageUrl={Step1}
                            />
                        </div>
                        <div className="hidden md:flex flex-1 items-center justify-center">
                            <img src={TransfromerImage} alt="Transformer Step" loading="lazy" className="float-slow max-w-sm rounded-xl shadow-md" />
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="hidden md:flex flex-1 items-center justify-center">
                            <img src={Helmet} alt="Design & Engineering" loading="lazy" className="float-slow max-w-sm rounded-xl shadow-md" />
                        </div>
                        <div className="flex-1" data-aos="fade-left">
                            <LoadAssessmentCard
                                reversecond={true}
                                stepNumber="STEP 2"
                                title="Custom Design & Switchgear Engineering"
                                description="Detailed AutoCAD design of LT panels, PCC, MCC, VCB switchgear layout, busbar sizing, protection coordination studies, and bill of quantities (BOQ)."
                                imageUrl={Step2}
                            />
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1" data-aos="fade-right">
                            <LoadAssessmentCard
                                stepNumber="STEP 3"
                                title="In-House Panel Fabrication & Assembly"
                                description="Precision CNC punching, bending, powder coating, copper busbar fabrication, and integration of tier-1 breakers (Schneider, Siemens, ABB, Terasaki) with factory acceptance testing."
                                imageUrl={Step3}
                            />
                        </div>
                        <div className="hidden md:flex flex-1 items-center justify-center">
                            <img src={PaneImg} alt="Equipment Procurement" loading="lazy" className="float-slow max-w-sm rounded-xl shadow-md" />
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="hidden md:flex flex-1 items-center justify-center">
                            <img src={WiredImg} alt="Installation & Erection" loading="lazy" className="float-slow max-w-sm rounded-xl shadow-md" />
                        </div>
                        <div className="flex-1" data-aos="fade-left">
                            <LoadAssessmentCard
                                reversecond={true}
                                stepNumber="STEP 4"
                                title="On-Site Erection & Cable Termination"
                                description="Civil pad preparation, transformer positioning, switchboard alignment, 11kV HT & LT cable laying, glanding, earthing grid bonding, and busbar connections."
                                imageUrl={Step4}
                            />
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1" data-aos="fade-right">
                            <LoadAssessmentCard
                                stepNumber="STEP 5"
                                title="Testing, Relay Calibration & Commissioning"
                                description="Rigorous primary/secondary injection testing, MiCOM & numerical relay configuration, oil BDV breakdown testing, insulation resistance (megger), and energized commissioning."
                                imageUrl={Step5}
                            />
                        </div>
                        <div className="hidden md:flex flex-1 items-center justify-center">
                            <img src={GovesImg} alt="Testing & Handover" loading="lazy" className="float-slow max-w-sm rounded-xl shadow-md" />
                        </div>
                    </div>

                    {/* Step 6 */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="hidden md:flex flex-1 items-center justify-center">
                            <img src={PaneImg} alt="After Sales Maintenance" loading="lazy" className="float-slow max-w-sm rounded-xl shadow-md" />
                        </div>
                        <div className="flex-1" data-aos="fade-left">
                            <LoadAssessmentCard
                                reversecond={true}
                                stepNumber="STEP 6"
                                title="24/7 Technical Support & Lifecycle Maintenance"
                                description="Scheduled preventive maintenance, mobile oil filtration, emergency breakdown repair, transformer rewinding, and spare parts support across Pakistan."
                                imageUrl={Step6}
                            />
                        </div>
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
