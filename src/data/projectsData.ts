import type { SolarProject } from '../types/solar';
import { ownersData } from './ownersData';

export const projectsData: SolarProject[] = [
  {
    id: 'monocrystalline-topcon',
    title: 'Monocrystalline TOPCon All-Black Panels',
    type: 'Monocrystalline TOPCon',
    panelType: 'N-Type TOPCon Monocrystalline',
    efficiency: 'Up to 24.5% Module Efficiency',
    idealFor: 'Luxury Residential Estates, Rooftops & High-Yield Decks',
    status: 'Available for Installation',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Ultra-high-efficiency N-Type TOPCon monocrystalline cells engineered with tunnel oxide passivated contact layers. Pure all-black aesthetic delivers maximum power generation even in diffuse, low-light or overcast conditions.',
    panelTechnology: 'N-Type TOPCon Dual-Glass All-Black 590W (24.2% cell efficiency)',
    inverterBattery: 'Microinverters or Hybrid String Inverters with modular LFP battery storage',
    certification: 'IEC 61215, IEC 61730, CE, BIS Certified',
    owner: ownersData[0],
    specs: [
      'Pure matte-black visual profile with hidden multi-busbar technology',
      'Superior temperature coefficient (-0.29%/°C) optimized for tropical heat',
      'Zero light-induced degradation (LID) and anti-PID certified',
      '30-Year linear power generation performance warranty'
    ],
    highlights: [
      'Ideal for private luxury villas requiring uncompromised architectural beauty',
      'Generates up to 15% more power over 30 years compared to standard PERC',
      'Compatible with smart home energy management automation'
    ]
  },
  {
    id: 'bipv-solar-glass',
    title: 'Building-Integrated Photovoltaic Glass (BIPV)',
    type: 'Architectural BIPV Glass',
    panelType: 'Semi-Transparent Solar Glass',
    efficiency: '185–210 W/m² Power Generation',
    idealFor: 'Glass Facades, Skylights, Modern Verandas & Atriums',
    status: 'Available for Installation',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Double-laminated structural architectural glass embedded with invisible photovoltaic cells. Combines natural daylighting, interior thermal insulation, and on-site electricity generation directly through windows and skylights.',
    panelTechnology: 'See-Through Monocrystalline BIPV Glass (20% to 50% custom light transmittance)',
    inverterBattery: 'Dedicated DC Power Optimizers with Smart Commercial Inverters',
    certification: 'Safety Glass ANSI Z97.1 / EN 12600, IEC 63092 BIPV Standard',
    owner: ownersData[0],
    specs: [
      'Custom tint gradients matching modern architectural low-iron glass',
      'High thermal barrier (low U-value) drastically reducing interior cooling load',
      'Acoustic sound reduction laminate (STC 42+ rating)',
      'Structural glass certified for building codes and extreme wind shear'
    ],
    highlights: [
      'Replaces conventional glass facades while generating self-sustaining power',
      'Elevates building energy rating to LEED Platinum and IGBC Net Zero standards',
      'Perfect for commercial atriums, luxury pergolas, and greenhouse roofs'
    ]
  },
  {
    id: 'bifacial-dual-glass',
    title: 'Bifacial Dual-Glass High-Yield Solar Panels',
    type: 'Bifacial Dual-Glass',
    panelType: 'Dual-Sided Glass Photovoltaic',
    efficiency: 'Up to 30% Additional Rear-Side Energy Yield',
    idealFor: 'Commercial Rooftops, Carports, Pergolas & Open Terraces',
    status: 'Available for Installation',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Encased in dual tempered glass, bifacial modules capture direct sunlight from the front face and diffuse reflected light (albedo) from the underside. Especially powerful when mounted over light-colored rooftops, concrete, or reflective ground surfaces.',
    panelTechnology: 'Bifacial TOPCon Dual 2.0mm Tempered Glass (620W+ Peak Combined Yield)',
    inverterBattery: 'High-Capacity Three-Phase String Inverters with AI Arcfault Circuit Protection',
    certification: 'UL 1703, IEC 61215, Class A Fire Rating',
    owner: ownersData[0],
    specs: [
      'Dual 2.0mm heat-strengthened glass with hydrophobic self-cleaning surface',
      '30-year warranty with less than 0.4% annual power degradation',
      'Class A fire protection rating for maximum rooftop safety',
      'Heavy mechanical snow load (5400 Pa) and wind load (2400 Pa) tolerance'
    ],
    highlights: [
      'Captures up to 30% extra clean energy from underside reflected sunlight',
      'Exceptional performance on elevated pergola structures and parking carports',
      'Eliminates polymer backsheets, preventing humidity ingress and discoloration'
    ]
  },
  {
    id: 'commercial-rooftop-pv',
    title: 'Commercial & Industrial Rooftop Solar Panels',
    type: 'Commercial Rooftop',
    panelType: 'Heavy-Duty Industrial Solar Arrays',
    efficiency: '620W+ High-Density Industrial Modules',
    idealFor: 'Industrial Sheds, Logistics Hubs, Warehouses & Manufacturing Plants',
    status: 'Available for Installation',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Engineered for maximum power density and commercial economics. Large-format multi-busbar solar modules designed for fast rooftop deployment, non-penetrating seam clamps, and high continuous power yields.',
    panelTechnology: 'Large-Format Half-Cut Multi-Busbar Commercial Cells 620W',
    inverterBattery: 'Industrial Central Inverters with SCADA telemetry & sub-station integration',
    certification: 'CEA / DISCOM Compliant, IEC 61730, ISO 9001 / ISO 14001',
    owner: ownersData[0],
    specs: [
      'Engineered for metal standing-seam and trapezoidal commercial roofs without punctures',
      'Rapid shutdown and integrated AI thermal detection sensors',
      'Lowest Leveled Cost of Electricity (LCOE) for commercial operating expenditures',
      'Designed for 25-year Power Purchase Agreements (PPAs) and corporate leasing'
    ],
    highlights: [
      'Dramatically reduces daytime grid utility tariffs for factories and office parks',
      'Non-invasive mounting protects roof warranties and building structural health',
      'Eligible for accelerated corporate tax benefits and carbon trading credits'
    ]
  },
  {
    id: 'agri-pv-canopy',
    title: 'Agri-PV & Elevated Canopy Solar Systems',
    type: 'Agri-PV Farm',
    panelType: 'Elevated Single-Axis Trackers & Canopies',
    efficiency: 'Dual Land-Use & Agricultural Optimization',
    idealFor: 'Farmland, Agro-Estates, Vineyards, Green Corridors & Solar Parks',
    status: 'Available for Installation',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Elevated solar frames mounted 2.5 to 4.5 meters above the ground, allowing farm machinery, cattle, and crops to flourish beneath. Partial shading shields crops from extreme scorching sun and preserves soil moisture.',
    panelTechnology: 'Bifacial Solar Trackers with Dynamic Sun Angle Adjustment',
    inverterBattery: 'Distributed Containerized Inverter Sub-Stations',
    certification: 'MNRE Certified, IEC 62804 PID Free, ISO 14064 Carbon Footprint Standard',
    owner: ownersData[0],
    specs: [
      'High ground clearance accommodating tractors, automated harvesters, and livestock',
      'Single-axis AI smart trackers calculating astronomical solar elevation dynamically',
      'Dual land revenue: organic agricultural harvesting + clean power export',
      'Reduces ground soil evaporation by up to 28%, conserving irrigation water'
    ],
    highlights: [
      'Creates secondary long-term lease income for land owners and farm estates',
      'Protects sensitive crops from hailstorms and heat wave transpiration stress',
      'Enables large-scale clean energy generation without sacrificing arable land'
    ]
  },
  {
    id: 'solar-roof-shingles',
    title: 'Architectural Solar Roof Shingles & Tiles',
    type: 'Solar Roof Shingles',
    panelType: 'Integrated Photovoltaic Shingles',
    efficiency: 'Seamless Seamless Architectural Integration',
    idealFor: 'Luxury Sloped Roofs, Modern Mansions & Architectural Villas',
    status: 'Available for Installation',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Discreet, elegant photovoltaic solar tiles that double as premium weather-resistant roofing shingles. Eliminates the look of bolted metal frames, delivering a uniform, clean roofline while powering the entire home.',
    panelTechnology: 'Integrated Monocrystalline Tempered Glass Solar Shingles',
    inverterBattery: 'Low-Voltage Inverter Array with Whole-Home Battery Backup System',
    certification: 'Class 4 Hail Resistance (FM 4473), Class A Fire Rating, Wind Speed 200+ km/h',
    owner: ownersData[0],
    specs: [
      'Flush aesthetic profile blending with modern slate or tile architecture',
      'Tough tempered glass construction outlasting traditional clay or asphalt roofing',
      'Interlocking weather-tight channels preventing moisture ingress',
      'Direct module-level power monitoring via smartphone companion app'
    ],
    highlights: [
      'Replaces both the roof and the solar panels with a single elegant installation',
      'Increases estate market valuation through integrated modern architectural prestige',
      'Zero visible cables, brackets, or bulky aluminium framing'
    ]
  }
];
