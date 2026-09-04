import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  ShieldCheck, 
  Zap, 
  Leaf, 
  Cpu, 
  Calendar, 
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Reveal } from '../components/common/Reveal';
import { TelemetryStats } from '../components/solar/TelemetryStats';
import { SolarCalculator } from '../components/solar/SolarCalculator';
import { projectsData } from '../data/projectsData';
import { ownersData } from '../data/ownersData';
import type { SolarProject, SolarOwner } from '../types/solar';

interface HomeProps {
  onOpenConsultation: (owner?: SolarOwner, project?: SolarProject) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenConsultation }) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const filteredProjects = projectsData.filter(project => {
    if (filterCategory === 'All') return true;
    if (filterCategory === 'Residential') return project.type === 'Residential Estate';
    if (filterCategory === 'Commercial') return project.type === 'Commercial Microgrid';
    if (filterCategory === 'BIPV') return project.type === 'Architectural BIPV';
    if (filterCategory === 'Agri-PV') return project.type === 'Agri-PV Farm';
    return project.status === filterCategory;
  });

  return (
    <div className="relative min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Visual with luxury dark gradient overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=2000&q=85"
            alt="Luxury Architectural Solar Estate"
            className="w-full h-full object-cover scale-105 filter brightness-[0.45] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A]/60 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#08090A_95%)] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center py-24">
          <Reveal direction="down" delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-xs tracking-[0.35em] uppercase text-[#D4AF37] font-semibold">
                Pioneering Clean Energy Architecture
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white font-normal mb-8 leading-[1.12] tracking-tight max-w-5xl">
              Architecting Sunlight.{' '}
              <br />
              <span className="italic font-light text-[#D4AF37] gold-gradient-text">
                Powering Legacies.
              </span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <div className="w-28 h-[1px] bg-[#D4AF37] origin-center mb-8 shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
          </Reveal>

          <Reveal direction="up" delay={0.5}>
            <p className="text-sm md:text-base lg:text-lg text-white/80 font-light max-w-2xl leading-relaxed mb-10">
              The premier visibility exchange connecting visionary estate proprietors, commercial hosts, and certified solar asset owners. Engineered for net-zero autonomy and timeless aesthetics.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link to="/projects" className="w-full sm:w-auto">
                <Button variant="gold" size="lg" fullWidth>
                  Explore Solar Estates
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onOpenConsultation()}
                icon={<Calendar size={15} />}
                fullWidth
              >
                Meet Project Owner
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 select-none pointer-events-none">
          <span className="text-[9px] tracking-[0.35em] uppercase text-white/40">
            SCROLL TO DISCOVER
          </span>
          <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#D4AF37] animate-bounce" style={{ animationDuration: '2s' }} />
          </div>
        </div>
      </section>

      {/* 2. TELEMETRY NUMERICAL COUNTER STATS */}
      <TelemetryStats />

      {/* 3. HERITAGE & VISION (Exact Prapti style layout) */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Large Visual */}
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
              alt="Architectural Solar Glass Integration"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            
            {/* Overlay spec badge */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl border border-white/15 bg-black/60 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-[#D4AF37] font-semibold tracking-widest uppercase text-[10px]">
                  Bespoke Architectural Engineering
                </span>
                <span className="text-white/60">Tier-1 Certified</span>
              </div>
              <p className="text-xs text-white/80 font-light">
                Zero visible cabling, high-efficiency black cell matrix, and non-penetrative architectural clamps.
              </p>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal direction="up" delay={0.1}>
              <div className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-4 font-semibold">
                OUR PHILOSOPHY & CAPABILITIES
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-serif text-white font-normal leading-tight mb-6">
                Where Solar Engineering Meets Architectural Elegance.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="text-sm md:text-base leading-relaxed font-light mb-6" style={{ color: 'var(--text-muted)' }}>
                Traditional solar installations often sacrifice structural beauty for utility. Solis Lux bridges this divide by providing high-visibility showcases of cutting-edge photovoltaic estates, BIPV architectural glass, and industrial microgrids.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <p className="text-sm md:text-base leading-relaxed font-light mb-8" style={{ color: 'var(--text-muted)' }}>
                We empower estate owners, commercial property developers, and institutional solar plant owners to convene directly—fostering transparent site audits, co-development agreements, and clean power independence.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.5}>
              <div className="flex flex-wrap items-center gap-6">
                <Button variant="outline" onClick={() => onOpenConsultation()}>
                  Meet Our Lead Engineers
                </Button>
                <div className="h-[1px] w-12 bg-white/20" />
                <span className="text-xs tracking-widest text-[#D4AF37] uppercase font-semibold">
                  100% CLEAN GENERATION
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. CURATED DEVELOPMENTS & INSTALLATIONS (Filtered Showcase) */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-16 border-t border-b" style={{ borderColor: 'var(--border-divider)', backgroundColor: 'var(--bg-section-muted)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Header & Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <Reveal direction="up" delay={0.1}>
                <div className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-3 font-semibold">
                  CURATED PORTFOLIO
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <h2 className="text-3xl md:text-5xl font-serif font-normal text-white">
                  Flagship Solar Installations.
                </h2>
              </Reveal>
            </div>

            {/* Filter Tabs */}
            <Reveal direction="up" delay={0.3}>
              <div className="flex flex-wrap gap-2 border-b pb-3" style={{ borderColor: 'var(--border-divider)' }}>
                {['All', 'Residential', 'Commercial', 'BIPV', 'Agri-PV'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setFilterCategory(tab)}
                    className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 pb-2 px-3 border-b-2 cursor-pointer ${
                      filterCategory === tab
                        ? 'border-[#D4AF37] text-[#D4AF37] font-semibold'
                        : 'border-transparent text-white/60 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, 6).map((project, idx) => (
              <Reveal key={project.id} direction="up" delay={0.1 * idx}>
                <Card className="group flex flex-col h-full">
                  {/* Visual Image container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 bg-black/70 border border-white/15 backdrop-blur-md px-3 py-1 rounded text-[10px] tracking-widest text-[#D4AF37] uppercase font-semibold">
                      {project.status}
                    </div>

                    {/* Capacity Badge */}
                    <div className="absolute bottom-4 left-4 bg-[#D4AF37]/90 text-black px-2.5 py-1 rounded text-[11px] font-mono font-bold tracking-wider">
                      {project.capacityKWp} kWp
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-semibold mb-2">
                        {project.type} • {project.location}
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-[#D4AF37] transition-colors mb-3">
                        {project.title}
                      </h3>
                      <p className="text-xs font-light line-clamp-2 leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                        {project.description}
                      </p>
                    </div>

                    {/* Footer specs & meeting trigger */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="text-[11px] text-white/60">
                        <span className="text-[#10B981] font-semibold">{project.carbonOffsetTons} Tons</span> CO₂ Offset
                      </div>
                      <Link
                        to={`/projects/${project.id}`}
                        className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-medium tracking-wider uppercase"
                      >
                        <span>Inspect Specs</span>
                        <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View All Solar Developments
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED SOLAR ASSET OWNERS & EPC SPECIALISTS */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal direction="up" delay={0.1}>
              <div className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-3 font-semibold">
                DIRECT MEETING PLATFORM
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-serif text-white font-normal mb-4">
                Meet Verified Solar Asset Owners & Engineers.
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <p className="text-xs md:text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Skip intermediaries. Connect directly with principal solar plant holders, EPC license owners, and rooftop host investors for confidential consultations.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ownersData.map((owner, idx) => (
              <Reveal key={owner.id} direction="up" delay={0.1 * idx}>
                <Card className="p-6 text-center flex flex-col justify-between h-full group">
                  <div>
                    {/* Avatar */}
                    <div className="relative w-24 h-24 mx-auto mb-5">
                      <img
                        src={owner.avatar}
                        alt={owner.name}
                        className="w-full h-full rounded-full object-cover border-2 border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors"
                      />
                      {owner.verified && (
                        <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#D4AF37] text-black flex items-center justify-center text-xs">
                          <ShieldCheck size={14} />
                        </div>
                      )}
                    </div>

                    <h3 className="text-lg font-serif text-white font-medium group-hover:text-[#D4AF37] transition-colors">
                      {owner.name}
                    </h3>
                    <div className="text-[11px] text-[#D4AF37] font-semibold tracking-wider uppercase mb-1">
                      {owner.role}
                    </div>
                    <p className="text-[11px] text-white/50 mb-4">
                      {owner.company} • {owner.location}
                    </p>
                    <p className="text-xs font-light line-clamp-3 leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                      {owner.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="flex justify-between text-[10px] text-white/60">
                      <span>Total Portfolio:</span>
                      <span className="text-[#D4AF37] font-semibold">{owner.totalCapacityMW} MW</span>
                    </div>
                    <Button
                      variant="gold"
                      size="sm"
                      fullWidth
                      onClick={() => onOpenConsultation(owner)}
                      icon={<Calendar size={13} />}
                    >
                      Book Consultation
                    </Button>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE SOLAR CALCULATOR */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-16 border-t" style={{ borderColor: 'var(--border-divider)', backgroundColor: 'var(--bg-section-muted)' }}>
        <div className="max-w-7xl mx-auto">
          <SolarCalculator onScheduleConsultation={() => onOpenConsultation()} />
        </div>
      </section>

      {/* 7. GREEN INFRASTRUCTURE & ENGINEERING PILLARS */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal direction="up" delay={0.1}>
              <div className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-3 font-semibold">
                ENGINEERING RIGOR
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-serif text-white font-normal mb-4">
                Four Pillars of Solis Standards.
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <p className="text-xs md:text-sm font-light" style={{ color: 'var(--text-muted)' }}>
                Every solar development featured on our network undergoes uncompromising mechanical, electrical, and aesthetic audits.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sun className="text-[#D4AF37]" size={28} />,
                title: 'N-Type TOPCon Cells',
                desc: 'Tier-1 dual-glass bifacial modules achieving up to 23.8% efficiency with minimal annual degradation (<0.4%/year).'
              },
              {
                icon: <Cpu className="text-[#D4AF37]" size={28} />,
                title: 'Modular BESS Storage',
                desc: 'Liquid-cooled Lithium Iron Phosphate (LFP) battery banks offering 15-year warranties and sub-second grid islanding.'
              },
              {
                icon: <Zap className="text-[#D4AF37]" size={28} />,
                title: 'Zero Roof Penetration',
                desc: 'Custom-engineered aerodynamic ballast framing and standing-seam clamp mechanisms preserving structural roof integrity.'
              },
              {
                icon: <Leaf className="text-[#D4AF37]" size={28} />,
                title: 'Automated Dry Cleaning',
                desc: 'Autonomous robotic wipers preserving 99.2% peak output without consuming ground water in arid or dusty seasons.'
              }
            ].map((pillar, i) => (
              <Reveal key={pillar.title} direction="up" delay={0.1 * i}>
                <Card className="p-8 text-center flex flex-col items-center justify-center h-full">
                  <div className="w-16 h-16 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 flex items-center justify-center mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-serif text-white mb-3 tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {pillar.desc}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL EDITORIAL CTA BANNER */}
      <section className="relative py-28 px-6 lg:px-16 text-center border-t border-b overflow-hidden" style={{ borderColor: 'var(--border-divider)', backgroundColor: 'var(--bg-section-muted)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal direction="up" delay={0.1}>
            <span className="text-xs tracking-[0.35em] uppercase text-[#D4AF37] font-semibold block mb-4">
              COMMENCE YOUR TRANSITION
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-normal mb-8 leading-tight">
              Ready to meet the owners architecting the next era of solar estates?
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="text-sm md:text-base font-light max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Whether you are an estate owner seeking self-sufficient luxury, a commercial landlord evaluating rooftop leasing revenue, or an EPC firm showcasing capacity.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gold" size="lg" onClick={() => onOpenConsultation()}>
                Book Private Feasibility Audit
              </Button>
              <Link to="/owners">
                <Button variant="outline" size="lg">
                  Browse Owner Profiles
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
