import type { SolarProject } from '../types/solar';
import { ownersData } from './ownersData';

export const projectsData: SolarProject[] = [
  {
    id: 'solaria-crest',
    title: 'The Solaria Crest Estate',
    type: 'Residential Estate',
    status: 'Active Generation',
    location: 'Koregaon Park Hills, Pune',
    capacityKWp: 75.6,
    annualGenerationMWh: 118.4,
    carbonOffsetTons: 94.2,
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A bespoke 75 kWp private rooftop array seamlessly integrated into a cantilevered travertine roof deck, paired with smart battery storage to achieve 100% net-zero luxury living.',
    panelTechnology: 'Tier-1 N-Type TOPCon Dual-Glass All-Black 580W (23.4% module efficiency)',
    inverterBattery: 'Enphase IQ8 Microinverters + 90 kWh Modular Liquid-Cooled LFP Battery Bank',
    certification: 'IEC 61215 / IEC 61730, CE, Bureau of Indian Standards (BIS)',
    roiPaybackYears: 4.1,
    owner: ownersData[0],
    specs: [
      'Custom Matte Black Anodized Aluminium Mounts with zero roof punctures',
      'Continuous AI cloud generation telemetry with automated fault detection',
      'Bi-directional EV supercharging interface (Dual 22kW AC chargers)',
      'Sub-second islanding grid failover protecting luxury home automation'
    ],
    highlights: [
      'Zero grid reliance during peak summer heat waves',
      'Over 94 tons of CO2 offset annually',
      'Winner of 2025 Architectural Clean Energy Integration Award'
    ]
  },
  {
    id: 'aether-pavilion',
    title: 'Aether BIPV Glass Pavilion',
    type: 'Architectural BIPV',
    status: 'Active Generation',
    location: 'Bavdhan Valley, Pune',
    capacityKWp: 48.2,
    annualGenerationMWh: 69.5,
    carbonOffsetTons: 55.6,
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A masterclass in invisible solar technology. The complete skylight and west-facing glass facade comprise semi-transparent photovoltaic laminates that generate clean power while shading the interior atrium.',
    panelTechnology: 'See-Through Monocrystalline BIPV Glass (40% light transmittance, 185W/m²)',
    inverterBattery: 'SolarEdge High-Efficiency Inverters with individual panel Power Optimizers',
    certification: 'Safety Glass ANSI Z97.1 / EN 12600, IEC 63092 BIPV Standard',
    roiPaybackYears: 5.6,
    owner: ownersData[3],
    specs: [
      'Custom architectural tint matching European structural low-iron glass',
      'Sound attenuation acoustic laminate (STC 44 rating)',
      'Eliminates need for interior motorized shading curtains',
      'Direct DC microgrid power feed to interior climate control systems'
    ],
    highlights: [
      'Generates 185 kWh/day while lowering cooling load by 32%',
      'Architectural visual transparency preserved with zero visible cabling',
      'Designed for luxury headquarters and contemporary modern villas'
    ]
  },
  {
    id: 'vanguard-technopark',
    title: 'Vanguard Industrial Microgrid',
    type: 'Commercial Microgrid',
    status: 'Commissioned',
    location: 'Chakan Industrial Corridor, Pune',
    capacityKWp: 1250,
    annualGenerationMWh: 1980,
    carbonOffsetTons: 1584,
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A 1.25 MW high-density rooftop solar power plant spanning across three precision engineering manufacturing plants, operating under a build-own-operate (BOO) host leasing model.',
    panelTechnology: 'Bifacial Perc 670W Ultra-High Output Modules with Anti-Soiling Hydrophobic Coating',
    inverterBattery: 'SMA Sunny Highpower 150kW String Inverters with SCADA telemetry',
    certification: 'ISO 9001, ISO 14001, CEA Grid Code Compliance, CE',
    roiPaybackYears: 3.2,
    owner: ownersData[2],
    specs: [
      'Walkway robotic cleaning drones requiring zero water consumption',
      'Smart grid synchronization with 33kV dedicated industrial substation',
      'Real-time industrial demand-charge peak shaving algorithms',
      'Fire-safe rapid shutdown mechanisms tested to UL 3741'
    ],
    highlights: [
      'Saves industrial host over ₹1.8 Crore in annual grid tariffs',
      'Over 1,580 metric tons of industrial emissions eliminated every year',
      'Open for co-investment and rooftop host leasing inquiries'
    ]
  },
  {
    id: 'helio-valle-park',
    title: 'Helios Agro-Solar Reserve',
    type: 'Agri-PV Farm',
    status: 'Active Generation',
    location: 'Shirur Green Corridor, Maharashtra',
    capacityKWp: 3500,
    annualGenerationMWh: 5600,
    carbonOffsetTons: 4480,
    image: 'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Combining clean renewable energy with shade-loving botanical and medicinal crops. Elevated 4.5-meter tracker frames allow automated agricultural tractors to harvest crops while bifacial panels harvest sunlight from above and below.',
    panelTechnology: 'Bifacial HJT (Heterojunction) 620W Panels on Single-Axis AI Solar Trackers',
    inverterBattery: 'Central Containerized Power Conditioning Systems with 4 MWh BESS Storage',
    certification: 'TUV Rheinland, IEC 62804 PID Resistant, MNRE Approved Tier-1',
    roiPaybackYears: 4.8,
    owner: ownersData[1],
    specs: [
      'Single-axis AI smart trackers calculating astronomical elevation dynamically',
      'Integrated drip-irrigation grid utilizing captured rainwater runoff',
      'Dual land revenue: organic agricultural output + high-tariff solar export',
      '25-year linear performance warranty backed by Munich Re insurance'
    ],
    highlights: [
      'Powers 4,200 rural households daily via clean grid feed-in',
      'Lowers ground soil evaporation by 28%, preserving precious groundwater',
      'Model project for land owners seeking long-term passive energy leasing'
    ]
  },
  {
    id: 'zenith-sanctuary',
    title: 'Zenith Ridge Mountain Sanctuary',
    type: 'Residential Estate',
    status: 'Commissioned',
    location: 'Lonavala Mist Ridges, Maharashtra',
    capacityKWp: 120,
    annualGenerationMWh: 192,
    carbonOffsetTons: 153.6,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An off-grid architectural masterpiece tucked in the Western Ghats. Features integrated solar pergola terraces, geothermal cooling pairing, and a 200 kWh battery storage bank capable of sustaining the estate through prolonged monsoons.',
    panelTechnology: 'All-Black Architectural Shingled Solar Modules 450W with zero busbar visual profile',
    inverterBattery: 'Victron Quattro Multi-Inverter Matrix + 200 kWh BYD LFP Energy Storage',
    certification: 'Salt-Mist Corrosion Resistance IEC 61701 Class 6, IEC 62716 Ammonia Resistant',
    roiPaybackYears: 4.5,
    owner: ownersData[0],
    specs: [
      'Custom bronze-finished architectural framing matching dark wood cladding',
      'Zero carbon generator backup with micro-hydro emergency siphon',
      'Automated satellite weather forecasting for intelligent battery pre-charging',
      'Full thermal imaging drone inspection schedule included'
    ],
    highlights: [
      'Completely self-sustaining 12,000 sq ft luxury mountain compound',
      'Zero diesel generator odor or emissions',
      'Showcased on Architectural Digest & Green Architecture 2025'
    ]
  },
  {
    id: 'lumina-plaza',
    title: 'Lumina Corporate Solar Facade',
    type: 'Commercial Microgrid',
    status: 'Under Installation',
    location: 'Baner Commercial Hub, Pune',
    capacityKWp: 380,
    annualGenerationMWh: 570,
    carbonOffsetTons: 456,
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An upcoming 14-story commercial tower combining rooftop bifacial arrays with ventilated photovoltaic facade louvers to generate power while drastically decreasing heat absorption.',
    panelTechnology: 'Bifacial Frameless Glass Modules 550W + Custom Colored BIPV Louvers',
    inverterBattery: 'Huawei Smart String Inverters with AI Arcfault Circuit Interruption (AFCI)',
    certification: 'UL 1703, IEC 61215, LEED Platinum Targeted Certification',
    roiPaybackYears: 3.8,
    owner: ownersData[2],
    specs: [
      'Integrated shadow-tolerant cell matrix with bypass diodes per quadrant',
      'High-rise wind load engineering certified up to 210 km/h wind shear',
      'Integrated LED edge illumination powered directly by stored daytime solar power',
      'Scheduled grid commissioning Q3 2026'
    ],
    highlights: [
      'Expected to cover 65% of entire building common area power requirements',
      'Targeting LEED Platinum and IGBC Net Zero Energy certifications',
      'Commercial office leasing opportunities available'
    ]
  }
];
