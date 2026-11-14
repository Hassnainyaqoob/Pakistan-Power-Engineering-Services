import thermographyTransformers from '../assets/images/real/thermo_real_transformers.jpg';
import thermographyHtPanels from '../assets/images/real/thermo_real_ht_panels.jpg';
import thermographyLvPanels from '../assets/images/real/thermo_real_lv_panels.jpg';
import thermographyControlPanels from '../assets/images/real/thermo_real_control_panels.jpg';
import thermographyMccPanels from '../assets/images/real/thermo_real_mcc_panels.jpg';

/**
 * Multi-OEM protection relay support (explicitly covering all relay families,
 * not limited to any single model line).
 */
export const relayBrandsSupported = [
    {
        brand: 'Schneider Electric',
        families: 'Easergy P3 / P5, Sepam Series & All Schneider Numerical Relays',
        scope: 'Overcurrent (50/51), Earth Fault (50N/51N), Differential (87), Motor & Feeder Protection — Testing, Settings & Configurations',
        badge: 'Testing • Settings • Config',
    },
    {
        brand: 'Siemens',
        families: 'SIPROTEC 4 / 5, Reyrolle & All Siemens Protection Relays',
        scope: 'Transformer Differential (87T), Distance (21), Feeder, Busbar & Motor Protection — DIGSI Parameterization & Secondary Injection',
        badge: 'Testing • Settings • Config',
    },
    {
        brand: 'ABB',
        families: 'Relion (REF, RET, REM, REC, RED Series) & Microprocessor Relays',
        scope: 'Directional, Voltage/Frequency (27/59/81), Breaker Failure (50BF) & IEC 61850 Logic — Curve Calibration & Trip Verification',
        badge: 'Testing • Settings • Config',
    },
    {
        brand: 'GE, SEL & All Other Makes',
        families: 'GE Multilin, SEL, Woodward, Electromechanical & Numeric Relays',
        scope: 'Complete reverse-engineering of legacy & modern relay curves, CT burden checks, trip matrix testing, and full coordination studies',
        badge: 'All Relay Types',
    },
];

/**
 * Complete 14-point electrical diagnostic & commissioning test portfolio.
 * Used across Home, Testing & Commissioning, and SEO summaries.
 */
export const diagnosticTestsList = [
    {
        id: 'all-type-relays',
        category: 'Protection Relays & Injection',
        title: 'All Type Protection Relays (Testing, Settings & Configurations)',
        shortTitle: 'All Type Protection Relays Testing, Settings & Config',
        standard: 'IEC 60255 / IEEE C37.90',
        desc: 'Complete testing, parameter settings & configuration across Schneider Electric, Siemens, ABB, GE, SEL & all numerical/electromechanical protection relays.',
    },
    {
        id: 'primary-injection',
        category: 'Protection Relays & Injection',
        title: 'Primary Injection Testing',
        shortTitle: 'Primary Injection Testing',
        standard: 'IEC 62271 / NETA ATS',
        desc: 'High-current AC primary injection directly through CTs, busbars, switchgear loops & breaker coils to verify entire end-to-end trip integrity under fault current.',
    },
    {
        id: 'secondary-injection',
        category: 'Protection Relays & Injection',
        title: 'Secondary Injection Testing',
        shortTitle: 'Secondary Injection Testing',
        standard: 'IEC 60255 / IEEE C37.90',
        desc: 'Automated 3-phase relay test bench injection to verify pickup thresholds, IDMT/definite-time curves, instantaneous elements, and trip contact closure timing.',
    },
    {
        id: 'ir-testing',
        category: 'Insulation, Dielectric & Thermal',
        title: 'IR Testing (Insulation Resistance)',
        shortTitle: 'IR Testing (Megger up to 10kV)',
        standard: 'IEEE 43 / NETA MTS',
        desc: 'High-voltage DC Megger insulation resistance, Dielectric Absorption Ratio (DAR) & Polarization Index (PI) verification for switchgear, panels, motors & feeders.',
    },
    {
        id: 'thermography',
        category: 'Insulation, Dielectric & Thermal',
        title: 'Infrared Thermography Inspection',
        shortTitle: 'Thermography (IR Thermal Scan)',
        standard: 'NFPA 70B / NETA MTS',
        desc: 'Non-contact live-load FLIR thermal imaging across Transformers, HT Panels, LV Panels, Control Panels & Motor Control Panels to catch hotspots before failure.',
    },
    {
        id: 'hi-pot',
        category: 'Insulation, Dielectric & Thermal',
        title: 'Hi-Pot Testing (High Voltage Withstand)',
        shortTitle: 'Hi-Pot Dielectric Withstand Test',
        standard: 'IEC 62271 / IEEE C37.20',
        desc: 'High-voltage AC/DC dielectric withstand verification for 11kV switchgear cubicles, VCBs, busbars, spouts, and HV XLPE power cables.',
    },
    {
        id: 'transformer-bdv',
        category: 'Power Transformer Diagnostics',
        title: 'Transformer Oil BDV Dielectric Strength Test',
        shortTitle: 'Transformer Oil BDV Dielectric Strength Test',
        standard: 'IEC 60156 / ASTM D1816',
        desc: 'Precision oil breakdown voltage (BDV) testing to detect moisture, carbonization, or particulate contamination (verifying dielectric strength > 60kV after filtration).',
    },
    {
        id: 'transformer-winding-resistance',
        category: 'Power Transformer Diagnostics',
        title: 'Transformer Winding Resistance Test',
        shortTitle: 'Transformer Winding Resistance Test',
        standard: 'IEC 60076-1 / IEEE C57.12.90',
        desc: 'Precision micro-ohm DC resistance measurement across all HV & LV phases and OLTC/OCTC tap steps to expose loose joints, broken strands, or tap contact wear.',
    },
    {
        id: 'transformer-ttr',
        category: 'Power Transformer Diagnostics',
        title: 'Transformers Turn Ratio (TTR) Test',
        shortTitle: 'Transformers Turn Ratio (TTR) Test',
        standard: 'IEC 60076-1 / IEEE C57.12.90',
        desc: 'Turns ratio accuracy (±0.5% tolerance), polarity, phase displacement, and vector group (Dyn11) verification across every tap position.',
    },
    {
        id: 'transformer-ir',
        category: 'Power Transformer Diagnostics',
        title: 'Transformer Insulation Resistance Test',
        shortTitle: 'Transformer Insulation Resistance (IR / PI) Test',
        standard: 'IEEE C57.152 / IEC 60076',
        desc: 'HV-to-Earth, LV-to-Earth & HV-to-LV Megger insulation resistance and Polarization Index evaluation of solid paper/pressboard & oil insulation.',
    },
    {
        id: 'ht-breaker-ir',
        category: 'Breaker, CT/PT & Busbar Tests',
        title: 'HT Breaker Insulation Resistance Test',
        shortTitle: 'HT Breaker Insulation Resistance Test',
        standard: 'IEC 62271-100 / IEEE C37.09',
        desc: 'Phase-to-earth, phase-to-phase, and across open vacuum interrupter bottle IR testing on 11kV VCBs and SF6/RMU switchgear breakers.',
    },
    {
        id: 'breaker-contact-timing',
        category: 'Breaker, CT/PT & Busbar Tests',
        title: 'Breaker Contact Time Interval Test',
        shortTitle: 'Breaker Contact Time Interval & CRM Test',
        standard: 'IEC 62271-100 / IEEE C37.09',
        desc: 'Millisecond opening/closing contact timing, pole-to-pole simultaneity/bounce analysis, coil trip timing, and micro-ohm ductor Contact Resistance (CRM).',
    },
    {
        id: 'ct-pt-tests',
        category: 'Breaker, CT/PT & Busbar Tests',
        title: 'CT & PT Insulation Resistance Test & Turn Ratio Test',
        shortTitle: 'CT & PT Insulation Resistance & Turn Ratio Test',
        standard: 'IEC 61869 / IEEE C57.13',
        desc: 'Primary-secondary winding IR, accurate turns ratio verification, polarity marks, and knee-point excitation curves for metering & 5P20 protection CTs/PTs.',
    },
    {
        id: 'busbar-ir',
        category: 'Breaker, CT/PT & Busbar Tests',
        title: 'Busbar IR Test',
        shortTitle: 'Busbar IR Test',
        standard: 'IEC 62271-200 / IEEE C37.20',
        desc: 'High-voltage insulation resistance testing across main & riser copper busbars (phase-to-phase and phase-to-earth) and epoxy post insulators.',
    },
];

/**
 * 5 Core Equipment Assets Covered in Live-Load Infrared Thermography Surveys
 */
export const thermographyAssets = [
    {
        id: 'transformers',
        num: '01',
        title: 'Transformers',
        subtitle: 'Oil-Immersed & Dry-Type Power Transformers',
        image: thermographyTransformers,
        alt: 'Infrared thermography thermal heatmap scan of an energized laminated-core electrical transformer highlighting winding and terminal heating patterns',
        inspectPoints: [
            'HV & LV porcelain bushings, stud clamps & cable lugs',
            'Radiator cooling tubes, headers & blocked oil flow paths',
            'OLTC / OCTC tap-changer tank & diverter compartment',
            'Enclosed HT / LT cable box joints & neutral earthing links',
        ],
        faultsDetected: 'Overheated bushing joints, oil circulation blockages, unbalanced phase loading & tap-changer contact heating.',
    },
    {
        id: 'ht-panels',
        num: '02',
        title: 'HT Panels',
        subtitle: '11kV VCB, RMU & Medium-Voltage Switchgear',
        image: thermographyHtPanels,
        alt: 'FLIR infrared thermography scan of 3-phase high-current vertical switchgear feeder risers showing a localized 85.1°C thermal overload hotspot',
        inspectPoints: [
            '11kV XLPE cable heat-shrink / cold-shrink terminations',
            'Breaker drawout tulip contacts, spouts & isolating fingers',
            'Main HT copper busbar joints, risers & splice links',
            'CT / PT chambers, surge arresters & metering links',
        ],
        faultsDetected: 'Loose HT termination lugs, partial discharge heat signatures, degraded VCB drawout contacts & busbar joint arcing risk.',
    },
    {
        id: 'lv-panels',
        num: '03',
        title: 'LV Panels',
        subtitle: '415V LT Main Distribution, PCC & Changeover Boards',
        image: thermographyLvPanels,
        alt: 'Infrared thermal scan of a 3-pole LV distribution circuit breaker showing a 73.0°C thermal overload vs 27.0°C ambient terminal reading',
        inspectPoints: [
            'Air Circuit Breaker (ACB) incoming/outgoing busbar stabs',
            'Main electrolytic copper busbar bolted splice joints',
            'MCCB terminals, neutral bar connections & ATS changeover links',
            'Feeder cable lugs & capacitor / APFC bank switchgear',
        ],
        faultsDetected: 'Phase load imbalance, under-torqued busbar hardware, oxidized copper joints & failing ACB contact fingers.',
    },
    {
        id: 'control-panels',
        num: '04',
        title: 'Control Panels',
        subtitle: 'Relay, Marshalling, AMF & PLC Control Cabinets',
        image: thermographyControlPanels,
        alt: 'Infrared thermogram of a DIN-rail control cabinet fuse holder and relay terminal block revealing 112°C and 99°C connection hotspots',
        inspectPoints: [
            'DIN-rail terminal blocks, CT shorting links & PT fuse bases',
            'Protection relay rear wiring harnesses & DC power supplies',
            'Auxiliary contactors, trip relays, MCBs & selector switches',
            'PLC racks, I/O modules, transformers & cabinet cooling fans',
        ],
        faultsDetected: 'High-resistance CT/PT terminal blocks, overheating DC power units, failing auxiliary coils & panel ventilation issues.',
    },
    {
        id: 'motor-control-panels',
        num: '05',
        title: 'Motor Control Panels',
        subtitle: 'MCC Bays, VFDs, Soft Starters & DOL / Star-Delta Units',
        image: thermographyMccPanels,
        alt: 'Infrared thermography image of an industrial magnetic motor contactor inside an MCC bay showing a 108.3°C overheated upper phase terminal lug',
        inspectPoints: [
            'VFD / Soft Starter power semi-conductor heatsinks & DC bus capacitors',
            'Magnetic contactor power poles & Star-Delta timer connections',
            'Bimetallic / electronic thermal overload relays & fuse holders',
            'Outgoing heavy motor power cables & feeder isolator switches',
        ],
        faultsDetected: 'Pitted contactor tips causing single-phasing risk, VFD cooling failure, overload heating & imbalanced motor feeder currents.',
    },
];

/**
 * Industry benchmark delta-T classification per NETA MTS / NFPA 70B
 */
export const thermographySeverityLevels = [
    {
        deltaT: '1°C – 10°C',
        level: 'Advisory',
        colorClass: 'bg-sky-500/20 text-sky-300 border-sky-400/40',
        action: 'Possible deficiency — monitor during next scheduled PM cycle.',
    },
    {
        deltaT: '10°C – 20°C',
        level: 'Moderate Hotspot',
        colorClass: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
        action: 'Indicates probable loose joint / contact wear — repair at first planned shutdown.',
    },
    {
        deltaT: '20°C – 40°C',
        level: 'Serious Deficiency',
        colorClass: 'bg-orange-500/20 text-orange-300 border-orange-400/40',
        action: 'Major overheating — repair urgently before equipment insulation damage occurs.',
    },
    {
        deltaT: '> 40°C',
        level: 'Critical Fault',
        colorClass: 'bg-red-500/25 text-red-300 border-red-400/50',
        action: 'Immediate fire/arc-flash hazard — reduce load or de-energize & repair immediately.',
    },
];
