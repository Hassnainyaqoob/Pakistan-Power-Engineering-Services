import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';
import heroImage from '../../assets/images/instrumentation_automation_hero.jpg';

const services = [
    { icon: '🖥️', title: 'PLC Systems', description: 'Reliable PLC solutions for process control, machine automation and industrial applications. Design, programming, installation and maintenance.' },
    { icon: '📡', title: 'SCADA Systems', description: 'Supervisory control and data acquisition systems for real-time monitoring and control of your industrial processes.' },
    { icon: '🎛️', title: 'HMI & Control Panels', description: 'Custom designed HMI and control panels for intuitive operator interface and seamless process control.' },
    { icon: '📏', title: 'Sensors & Transmitters', description: 'Wide range of sensors and transmitters for accurate measurement of pressure, temperature, level, flow and other process parameters.' },
    { icon: '🏭', title: 'Field Instrumentation', description: 'Pressure, temperature, level, flow and other field instruments for critical process applications in industrial facilities.' },
    { icon: '🌐', title: 'Industrial Networking', description: 'Reliable industrial communication networks for secure and high-speed data transmission between field devices and control systems.' },
    { icon: '⚙️', title: 'Drives & Motion Control', description: 'Variable frequency drives and motion control solutions for improved efficiency and performance of motors and machines.' },
    { icon: '🔧', title: 'System Design & Engineering', description: 'Professional engineering for reliable and energy-efficient automation systems tailored to your specific requirements.' },
    { icon: '✅', title: 'Testing & Calibration', description: 'Complete testing, calibration and validation of all instrumentation and automation equipment for optimal performance.' },
];

const benefits = [
    { icon: '🎯', title: 'Customized Solutions', description: 'Tailored to meet your specific process requirements and industry standards.' },
    { icon: '🔬', title: 'Reliable & Accurate', description: 'High performance instruments for precise results and reliable process control.' },
    { icon: '🔗', title: 'Integration Expertise', description: 'Seamless integration with existing systems and equipment.' },
    { icon: '📈', title: 'Improved Efficiency', description: 'Optimize operations and reduce downtime & operating costs significantly.' },
    { icon: '👨‍💼', title: 'On-Site Support', description: 'Professional support from installation to commissioning and ongoing maintenance.' },
    { icon: '♻️', title: 'Sustainable Operations', description: 'Automation reduces waste and energy consumption for greener operations.' },
];

const keyFeatures = [
    'PLC Programming & Configuration',
    'SCADA System Design & Implementation',
    'HMI Development & Panel Building',
    'Process Instrumentation Installation',
    'Field Device Calibration & Testing',
    'Industrial Network Design & Setup',
    'VFD Installation & Programming',
    'Maintenance & Technical Support',
];

const applications = [
    'Power Plants', 'Oil & Gas', 'Manufacturing',
    'Water & Wastewater', 'Cement Industry', 'Steel Mills',
    'Pharmaceutical', 'Food & Beverage',
];

const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Automation Experts' },
    { number: '10+', label: 'Years Experience' },
    { number: '100+', label: 'Satisfied Clients' },
];

export default function InstrumentationAutomationPage() {
    return (
        <ServicePageTemplate
            heroImage={heroImage}
            heroTitle="Instrumentation"
            heroTitleAccent="& Automation"
            heroSubtitle="Pakistan Power Engineering Services"
            heroDescription="We deliver advanced instrumentation and automation solutions that improve efficiency, enhance control, ensure safety and enable real-time monitoring of industrial processes. Intelligent solutions for a smarter, safer future."
            overviewText="Pakistan Power Engineering Services delivers comprehensive instrumentation and automation solutions for industrial, commercial and utility sectors. From PLC programming and SCADA system design to field instrumentation, HMI panels and industrial networking — our experienced automation engineers ensure your processes operate with maximum efficiency, safety and reliability."
            services={services}
            benefits={benefits}
            keyFeatures={keyFeatures}
            applications={applications}
            stats={stats}
            ctaTitle="Automate Your Process Today"
            ctaDescription="Our automation experts will design and implement the perfect solution for your industrial facility. Contact us for a free consultation."
        />
    );
}
