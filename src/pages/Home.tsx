import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  ShieldCheck, 
  Zap, 
  Leaf, 
  Cpu, 
  Calendar, 
  MapPin,
  Mail
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Reveal } from '../components/common/Reveal';
import { VittorisIcon } from '../components/common/VittorisLogo';
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
    if (filterCategory === 'Monocrystalline') return project.type.includes('Monocrystalline');
    if (filterCategory === 'BIPV Glass') return project.type.includes('BIPV');
    if (filterCategory === 'Bifacial') return project.type.includes('Bifacial');
    if (filterCategory === 'Commercial') return project.type.includes('Commercial');
    if (filterCategory === 'Roof Shingles') return project.type.includes('Shingles');
    return true;
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
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#A855F7]/40 bg-[#3B0764]/40 mb-8 backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.25)]">
              <VittorisIcon size={24} />
              <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#E9D5FF] font-bold">
                AI VITTORIS • CLEAN ENERGY PLATFORM
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
                Traditional solar installations often sacrifice structural beauty for utility. AI Vittoris bridges this divide by providing high-visibility showcases of cutting-edge photovoltaic estates, BIPV architectural glass, and industrial microgrids.
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
                  PHOTO SHOWCASE & SPECIFICATIONS
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <h2 className="text-3xl md:text-5xl font-serif font-normal text-white">
                  Types of Solar Panels.
                </h2>
              </Reveal>
            </div>

            {/* Filter Tabs */}
            <Reveal direction="up" delay={0.3}>
              <div className="flex flex-wrap gap-2 border-b pb-3" style={{ borderColor: 'var(--border-divider)' }}>
                {['All', 'Monocrystalline', 'BIPV Glass', 'Bifacial', 'Commercial', 'Roof Shingles'].map(tab => (
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

          {/* Owner Detail Banner directly over the solar panels */}
          <Reveal direction="up" delay={0.15}>
            <div className="mb-10 p-5 md:p-6 rounded-2xl border bg-gradient-to-r from-black/80 via-[#1b082e]/40 to-black/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl" style={{ borderColor: 'var(--border-card)' }}>
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#D4AF37] via-[#A855F7] to-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                    <img
                      src={ownersData[0].avatar}
                      alt={ownersData[0].name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-[#D4AF37] text-black p-0.5 rounded-full shadow">
                    <ShieldCheck size={11} />
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="text-base font-serif text-white font-medium">{ownersData[0].name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 font-semibold tracking-wider uppercase">
                      Solar Asset Owner
                    </span>
                    <span className="text-[10px] text-white/50 font-mono">Founder • Vittoris</span>
                  </div>
                  <p className="text-xs text-white/70 font-light mt-0.5">
                    Curating and advising on all photovoltaic technologies. Direct consultations without intermediaries.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs shrink-0">
                <a
                  href={`mailto:${ownersData[0].email}`}
                  className="text-[#D4AF37] hover:underline flex items-center gap-1.5 font-medium bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30"
                >
                  <Mail size={12} />
                  <span>{ownersData[0].email}</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Solar Panel Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
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
                    
                    {/* Panel Type Badge */}
                    <div className="absolute top-4 left-4 bg-black/70 border border-white/15 backdrop-blur-md px-3 py-1 rounded text-[10px] tracking-widest text-[#D4AF37] uppercase font-semibold">
                      {project.type}
                    </div>

                    {/* Owner Overlay Badge Directly Over Image */}
                    <div className="absolute top-4 right-4 bg-black/80 border border-white/20 backdrop-blur-md pl-1.5 pr-3 py-1 rounded-full flex items-center gap-1.5 z-10 shadow-lg">
                      <img
                        src={ownersData[0].avatar}
                        alt={ownersData[0].name}
                        className="w-5 h-5 rounded-full object-cover border border-[#D4AF37]"
                      />
                      <span className="text-[10px] text-white/90 font-medium">Owner: {ownersData[0].name}</span>
                    </div>

                    {/* Efficiency Badge */}
                    {project.efficiency && (
                      <div className="absolute bottom-4 left-4 bg-[#D4AF37]/90 text-black px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider">
                        {project.efficiency}
                      </div>
                    )}
                  </div>

                  {/* Card Info */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase font-semibold mb-2">
                        {project.idealFor}
                      </div>
                      <h3 className="text-xl font-serif text-white group-hover:text-[#D4AF37] transition-colors mb-3">
                        {project.title}
                      </h3>
                      <p className="text-xs font-light line-clamp-3 leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                        {project.description}
                      </p>

                      {/* Specs bullets */}
                      <ul className="space-y-1.5 mb-6 text-[11px] text-white/70">
                        {project.specs.slice(0, 2).map((spec, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                            <span className="line-clamp-1">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Owner Detail Box */}
                    <div className="py-2.5 px-3 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={ownersData[0].avatar}
                          alt={ownersData[0].name}
                          className="w-7 h-7 rounded-full object-cover border border-[#D4AF37]"
                        />
                        <div className="text-left leading-tight">
                          <span className="text-[9px] uppercase tracking-wider text-white/40 block">Asset Owner</span>
                          <span className="text-xs text-white font-medium">{ownersData[0].name}</span>
                          <span className="text-[10px] text-[#D4AF37] block font-mono">Founder • Vittoris</span>
                        </div>
                      </div>
                      <a
                        href={`mailto:${ownersData[0].email}`}
                        className="text-[11px] text-[#D4AF37] hover:underline flex items-center gap-1 bg-[#D4AF37]/10 px-2 py-1 rounded border border-[#D4AF37]/20"
                        title="Direct Founder Email"
                      >
                        <Mail size={11} />
                        <span>Email</span>
                      </a>
                    </div>

                    {/* Footer meeting trigger */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                      <Button
                        variant="gold"
                        size="sm"
                        fullWidth
                        onClick={() => onOpenConsultation(ownersData[0], project)}
                        icon={<Calendar size={13} />}
                      >
                        Consult on this Panel
                      </Button>
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

      {/* 5. VERIFIED SOLAR ASSET OWNER */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-4 font-semibold">
                <ShieldCheck size={14} />
                DIRECT OWNER VISIBILITY
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-serif text-white font-normal mb-4">
                Meet the Solar Asset Owner.
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <p className="text-xs md:text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                This site is engineered exclusively for solar panel project visibility. Connect directly with the asset owner for site audits, commercial rooftop co-development, and clean energy matchmaking without intermediaries.
              </p>
            </Reveal>
          </div>

          {/* Single Owner Spotlight Card */}
          {ownersData[0] && (
            <Reveal direction="up" delay={0.2}>
              <Card className="p-8 md:p-12 border border-[#D4AF37]/30 relative overflow-hidden bg-gradient-to-br from-[#1b082e]/50 via-[var(--bg-card)] to-[#08090A]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                  {/* Photo with luxury ring */}
                  <div className="md:col-span-5 flex flex-col items-center text-center">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] via-[#A855F7] to-[#D4AF37] shadow-[0_0_40px_rgba(168,85,247,0.3)] mb-4">
                      <img
                        src={ownersData[0].avatar}
                        alt={ownersData[0].name}
                        className="w-full h-full rounded-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 px-3 py-1 rounded-full bg-[#D4AF37] text-black font-bold text-xs flex items-center gap-1 shadow-lg">
                        <ShieldCheck size={14} />
                        Verified Owner
                      </div>
                    </div>
                    <span className="text-[11px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
                      FOUNDER | VITTORIS
                    </span>
                  </div>

                  {/* Bio & Details */}
                  <div className="md:col-span-7 space-y-5 text-left">
                    <div>
                      <h3 className="text-2xl md:text-4xl font-serif text-white font-medium mb-1">
                        {ownersData[0].name}
                      </h3>
                      <p className="text-xs md:text-sm text-[#D4AF37] font-semibold tracking-wider uppercase mb-1">
                        {ownersData[0].role}
                      </p>
                      <p className="text-xs text-white/50 flex items-center gap-1.5">
                        <MapPin size={13} />
                        <span>{ownersData[0].company} • {ownersData[0].location}</span>
                      </p>
                    </div>

                    <p className="text-xs md:text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {ownersData[0].bio}
                    </p>

                    {/* Authentic Attributes Grid */}
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-xl border text-center" style={{ backgroundColor: 'var(--bg-section-muted)', borderColor: 'var(--border-card)' }}>
                      <div>
                        <span className="text-[10px] text-white/40 uppercase block tracking-wider font-medium">Availability</span>
                        <span className="font-serif text-sm md:text-base text-[#D4AF37] font-semibold">Remote</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-white/40 uppercase block tracking-wider font-medium">Pricing</span>
                        <span className="font-serif text-sm md:text-base text-white font-semibold">Contact</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-white/40 uppercase block tracking-wider font-medium">Access</span>
                        <span className="font-serif text-sm md:text-base text-[#10B981] font-semibold">Direct Desk</span>
                      </div>
                    </div>

                    {/* Services Tags from Profile */}
                    {ownersData[0].services && (
                      <div>
                        <span className="text-[10px] tracking-wider uppercase text-white/40 block mb-2 font-semibold">
                          Services & Expertise:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {ownersData[0].services.map(srv => (
                            <span
                              key={srv}
                              className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80"
                            >
                              {srv}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Consultation CTAs */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                      <Button
                        variant="gold"
                        size="md"
                        onClick={() => onOpenConsultation(ownersData[0])}
                        icon={<Calendar size={15} />}
                        fullWidth
                      >
                        Book Direct Consultation with Owner
                      </Button>
                      <Link to="/projects" className="w-full sm:w-auto">
                        <Button variant="outline" size="md" fullWidth>
                          Explore Solar Panels
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          )}
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
                Four Pillars of AI Vittoris Standards.
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
