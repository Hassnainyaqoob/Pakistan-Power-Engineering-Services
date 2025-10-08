import backgroundImage from '../assets/images/NewMain1.png';
import PowerImg from '../assets/images/powerImg.jpg';
import UnderGroudnCables from '../assets/images/Underground-cables.jpg';
import PanelImg from '../assets/images/panelimg.jpg';
import AutomationImg from '../assets/images/automationImg.jpg';
import Typewriter from 'typewriter-effect';
import { OfferingsCard } from '../components/OfferingCard';
import AboutSection from '../components/AboutComponent';
import { LoadAssessmentCard } from '../components/ProcurementConstructionCard';
import TransfromerImage from '../assets/images/transformers.png';
import Step1 from '../assets/images/Step1.png';
import Step2 from '../assets/images/Step2.jpg';
import Step3 from '../assets/images/Step-3.jpeg';
import Step4 from '../assets/images/Step-4.jpg';
import Step5 from '../assets/images/Step-5.jpeg';
import Step6 from '../assets/images/Step-6.jpg';
import Helmet from '../assets/images/Helmet.jpg';
import WiredImg from '../assets/images/Step-33.jpg';
import ConstructionImg from '../assets/images/Step-44.jpeg';
import GovesImg from '../assets/images/Step-55.png';
import PaneImg from '../assets/images/Step-66.jpeg';

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
import ClientLogoMarquee from '../components/clientsimageslider';

export default function HomePage() {
    const offerings = [
        { image: PowerImg, title: 'Power', subtitle: 'Distribution' },
        { image: UnderGroudnCables, title: 'Underground', subtitle: 'Cables & Systems' },
        { image: PanelImg, title: 'Power', subtitle: 'Electrification' },
        { image: AutomationImg, title: 'Industrial', subtitle: 'Automation' },
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
        <>
            <div
                style={{
                    position: 'relative',
                    height: '730px',
                    maxHeight: '730px',
                    backgroundImage: `linear-gradient(to bottom, #00000026, #C00000), url(${backgroundImage})`,
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
                            FROM SOCKET TO TURBINE
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
                                    strings: ['Achieving That Extra Ampere'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    cursor: '<span style="color: white;">|</span>',
                                }}
                            />
                        </h1>
                        <p
                            className="hero-description"
                            style={{
                                fontSize: '1.5rem',
                                lineHeight: '1.6',
                                opacity: 0,
                                animation: 'fadeIn .7s ease-in-out forwards .6s',
                            }}
                        >
                            Pioneering Power Generation to Distribution
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-10 bg-gray-100" style={{ paddingBottom: "70px" }}>
                <div className="text-center">
                    <h2 className="text-lg text-blueColor font-bold">BEST WE OFFER</h2>
                    <h1 className="text-3xl font-bold">
                        <span className='text-brandRed'>4 Targeted </span>
                        <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blueColor">
                            <span className="relative text-white">Business</span>
                        </span>
                        <span className="text-brandRed"> Offerings</span>
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1480px] mx-auto px-6 mt-12">
                    {offerings.map((offering, index) => (
                        <div
                            key={index}
                            data-aos="flip-left"
                            data-aos-delay={index * 160}
                        >
                            <OfferingsCard
                                image={offering.image}
                                title={offering.title}
                                subtitle={offering.subtitle}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <AboutSection />
            </div>
            <div style={{ overflow: "hidden" }}>
                <div className="text-center mb-20 mt-10">
                    <h2 className="text-2xl text-blueColor font-bold">BEST WE OFFER</h2>
                    {/* <h1 className="text-4xl font-bold text-brandRed mt-3">Engineering Procurement Construction <br /> Services <span className="text-blueColor">Process</span></h1> */}
                    <h1 className="text-4xl font-bold text-brandRed mt-3 leading-[3.2rem]">
                        <span className='text-brandRed'>Engineering </span>
                        <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blueColor">
                            <span className="relative text-white">Procurement</span>
                        </span>
                        <span className="text-brandRed"> Construction</span>
                        <br />
                        Services <span className="text-brandRed">Process</span>
                    </h1>

                </div>
                {/* Section 1 */}
                <div style={{ display: "flex", width: "100%", marginBottom: "70px" }}>
                    <div data-aos="fade-right" data-aos-delay={380} style={{ flex: "3" }}>
                        <LoadAssessmentCard
                            stepNumber="STEP 1"
                            title="Load Assessment"
                            description="Professional installation and commissioning of your electrical power distribution system with full testing and validation."
                            imageUrl={Step1}
                        />
                    </div>
                    <div className="hidden sm:flex flex-1 items-center justify-center">
                        <img src={TransfromerImage} alt="" loading="lazy" className="float-slow max-w-full h-auto" />
                    </div>
                </div>

                {/* Section 2 */}
                <div style={{ display: "flex", width: "100%", marginBottom: "70px" }}>
                    <div className="hidden sm:flex flex-1 items-center justify-center">
                        <img src={Helmet} alt="" loading="lazy" className="float-slow max-w-full h-auto" />
                    </div>
                    <div data-aos="fade-left" data-aos-delay={380} style={{ flex: "3" }}>
                        <LoadAssessmentCard
                            reversecond={true}
                            stepNumber="STEP 2"
                            title="Engineering & Designing of Substation"
                            description="A substation is a part of an electrical generation, transmission, and distribution system. Substations"
                            imageUrl={Step2}
                        />
                    </div>
                </div>

                {/* Section 3 */}
                <div style={{ display: "flex", width: "100%", marginBottom: "70px" }}>
                    <div data-aos="fade-right" data-aos-delay={380} style={{ flex: "3" }}>
                        <LoadAssessmentCard
                            stepNumber="STEP 3"
                            title="Selecting of Switching System"
                            description="Switching in Electrical Transmission and Distribution Systems presents the issues and technological solutions associated"
                            imageUrl={Step3}
                        />
                    </div>
                    <div className="hidden sm:flex flex-1 items-center justify-center">
                        <img src={PaneImg} alt="" loading="lazy" className="float-slow max-w-full h-auto" />
                    </div>
                </div>

                {/* Section 4 */}
                <div style={{ display: "flex", width: "100%", marginBottom: "70px" }}>
                    <div className="hidden sm:flex flex-1 items-center justify-center">
                        <img src={ConstructionImg} alt="" loading="lazy" className="float-slow max-w-full h-auto" />
                    </div>
                    <div data-aos="fade-left" data-aos-delay={380} style={{ flex: "3" }}>
                        <LoadAssessmentCard
                            reversecond={true}
                            stepNumber="STEP 4"
                            title="Civil Construction"
                            description="Before specific electric power sources and distribution systems can be considered, realistic preliminary load"
                            imageUrl={Step4}
                        />
                    </div>
                </div>

                <div style={{ display: "flex", width: "100%", marginBottom: "70px" }}>
                    <div data-aos="fade-right" data-aos-delay={380} style={{ flex: "3" }}>
                        <LoadAssessmentCard
                            stepNumber="STEP 5"
                            title="Supply & Installation of Safety Equipment (LPI, Fire Alarm System, etc.)"
                            description="Switching in Electrical Transmission and Distribution Systems presents the issues and technological solutions associated"
                            imageUrl={Step5}
                        />
                    </div>
                    <div className="hidden sm:flex flex-1 items-center justify-center">
                        <img src={ConstructionImg} alt="" loading="lazy" className="float-slow max-w-full h-auto" />
                    </div>
                </div>
                <div style={{ display: "flex", width: "100%", marginBottom: "70px" }}>
                    <div className="hidden sm:flex flex-1 items-center justify-center">
                        <img src={PaneImg} alt="" loading="lazy" className="float-slow max-w-full h-auto" />
                    </div>
                    <div data-aos="fade-left" data-aos-delay={380} style={{ flex: "3" }}>
                        <LoadAssessmentCard
                            reversecond={true}
                            stepNumber="STEP 6"
                            title="Procurement / Manufacturing of Required MV Equipment"
                            description="Before specific electric power sources and distribution systems can be"
                            imageUrl={Step6}
                        />
                    </div>
                </div>
            </div>

            <div className="py-10 mb-15">
                <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brandRed mb-6">
                    Trusted by <span className="text-blueColor">Clients</span>
                    <span className="block text-sm text-gray-600 mt-2">Over 50+ Satisfied Clients Worldwide</span>
                </h2>
                <ClientLogoMarquee logos={logos} />
            </div>
        </>
    );
}