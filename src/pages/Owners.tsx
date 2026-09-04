import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Calendar, MapPin, Mail, Phone, ArrowUpRight, Zap, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Reveal } from '../components/common/Reveal';
import { ownersData } from '../data/ownersData';
import { projectsData } from '../data/projectsData';
import type { SolarOwner } from '../types/solar';

interface OwnersProps {
  onOpenConsultation: (owner?: SolarOwner) => void;
}

export const Owners: React.FC<OwnersProps> = ({ onOpenConsultation }) => {
  const owner = ownersData[0];

  return (
    <div className="min-h-screen pb-32">
      <PageHeader
        badge="VERIFIED SOLAR ASSET OWNER"
        subtitle="AI VITTORIS • SOLAR PANEL PROJECT VISIBILITY"
        title="Direct Stakeholder & Asset Owner Matchmaking."
        description="Connect directly with Harshit Thakur, Principal Solar Asset Owner at AI Vittoris. This platform exists for transparent visibility of commissioned solar panel installations, commercial rooftop leaseholds, and clean energy co-development without intermediaries."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12">
        {/* Core Owner Profile Spotlight */}
        {owner && (
          <Reveal direction="up" delay={0.1}>
            <div className="mb-20 rounded-3xl border border-[#D4AF37]/40 p-8 md:p-14 bg-gradient-to-br from-[#1b082e]/60 via-[var(--bg-card)] to-[#08090A] shadow-[0_10px_50px_rgba(0,0,0,0.5)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left: Avatar with glowing halo */}
                <div className="lg:col-span-4 flex flex-col items-center text-center">
                  <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full p-1.5 bg-gradient-to-tr from-[#D4AF37] via-[#A855F7] to-[#D4AF37] shadow-[0_0_50px_rgba(168,85,247,0.35)] mb-6">
                    <img
                      src={owner.avatar}
                      alt={owner.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                    <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full bg-[#D4AF37] text-black font-bold text-xs flex items-center gap-1.5 shadow-xl">
                      <ShieldCheck size={16} />
                      Verified Owner
                    </div>
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-bold">
                    AI VITTORIS PRINCIPAL
                  </span>
                </div>

                {/* Right: Detailed Credentials */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold mb-3">
                      <CheckCircle2 size={13} /> Direct Asset Ownership • Zero Intermediaries
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-white font-normal mb-2">
                      {owner.name}
                    </h2>
                    <p className="text-sm md:text-base text-[#D4AF37] font-semibold tracking-wider uppercase mb-1">
                      {owner.role}
                    </p>
                    <p className="text-xs text-white/50 flex items-center gap-1.5">
                      <MapPin size={13} />
                      <span>{owner.company} • {owner.location}</span>
                    </p>
                  </div>

                  <p className="text-sm md:text-base font-light leading-relaxed text-white/80">
                    {owner.bio}
                  </p>

                  {/* Telemetry Stats Matrix */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl border" style={{ backgroundColor: 'var(--bg-section-muted)', borderColor: 'var(--border-card)' }}>
                    <div>
                      <span className="text-[10px] text-white/40 uppercase block tracking-wider font-medium">Asset Portfolio</span>
                      <span className="font-serif text-xl md:text-2xl text-[#D4AF37] font-bold">{owner.totalCapacityMW} MW</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/40 uppercase block tracking-wider font-medium">Solar Projects</span>
                      <span className="font-serif text-xl md:text-2xl text-white font-bold">{owner.completedProjectsCount}+</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/40 uppercase block tracking-wider font-medium">Rating</span>
                      <span className="font-serif text-xl md:text-2xl text-[#10B981] font-bold">{owner.rating} ★</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/40 uppercase block tracking-wider font-medium">Connection</span>
                      <span className="font-serif text-xl md:text-2xl text-[#A855F7] font-bold">Direct</span>
                    </div>
                  </div>

                  {/* Consultation formats */}
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/50 block mb-2.5 font-semibold">
                      Direct Engagement Formats:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {owner.availableMeetingTypes.map(type => (
                        <span
                          key={type}
                          className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action row */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <Button
                      variant="gold"
                      size="lg"
                      onClick={() => onOpenConsultation(owner)}
                      icon={<Calendar size={16} />}
                      fullWidth
                    >
                      Book 1-on-1 Consultation with Owner
                    </Button>
                    <a
                      href="mailto:contact@aivittoris.com"
                      className="w-full sm:w-auto text-xs px-5 py-3.5 rounded-xl border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-center flex items-center justify-center gap-2"
                    >
                      <Mail size={14} />
                      contact@aivittoris.com
                    </a>
                    <a
                      href="tel:+9102088402200"
                      className="w-full sm:w-auto text-xs px-5 py-3.5 rounded-xl border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-center flex items-center justify-center gap-2"
                    >
                      <Phone size={14} />
                      +91 (020) 8840 2200
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Section: Solar Panel Projects by the Owner */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b" style={{ borderColor: 'var(--border-divider)' }}>
            <div>
              <span className="text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-semibold block mb-1">
                PROJECT PORTFOLIO
              </span>
              <h3 className="text-2xl md:text-4xl font-serif text-white">
                Solar Panel Projects for Visibility.
              </h3>
            </div>
            <Link to="/projects" className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 mt-2 md:mt-0 font-medium">
              <span>View All Detailed Blueprints</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.slice(0, 3).map((project, idx) => (
              <Reveal key={project.id} direction="up" delay={0.1 * idx}>
                <Card className="overflow-hidden flex flex-col justify-between h-full group">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] tracking-wider uppercase text-white font-medium">
                      {project.type}
                    </div>
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[10px] text-[#10B981] font-semibold">
                      {project.status}
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div>
                      <h4 className="text-lg font-serif text-white group-hover:text-[#D4AF37] transition-colors mb-1">
                        {project.title}
                      </h4>
                      <p className="text-xs text-white/50 mb-3">{project.location}</p>
                      <p className="text-xs font-light line-clamp-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-[#D4AF37] font-semibold">
                        <Zap size={14} />
                        <span>{project.capacityKWp} kWp</span>
                      </div>
                      <Link
                        to={`/projects/${project.id}`}
                        className="text-xs text-white/70 hover:text-white flex items-center gap-1 font-medium"
                      >
                        <span>View Specs</span>
                        <ArrowUpRight size={12} />
                      </Link>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Commercial Rooftop / Landlord Prompt */}
        <div className="p-10 md:p-14 rounded-2xl border text-center relative overflow-hidden" style={{ backgroundColor: 'var(--bg-section-muted)', borderColor: 'var(--border-card)' }}>
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold block mb-3">
              FOR PROPERTY PROPRIETORS & COMMERCIAL ROOFTOPS
            </span>
            <h3 className="text-2xl md:text-4xl font-serif text-white mb-4">
              Offer Your Rooftop or Estate for Solarization
            </h3>
            <p className="text-xs md:text-sm font-light leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              Have an underutilized commercial rooftop or luxury estate? Connect directly with the owner to evaluate structural feasibility, solar generation yield, and clean power co-development agreements.
            </p>
            <Button variant="gold" size="md" onClick={() => onOpenConsultation(owner)}>
              Schedule Rooftop Feasibility Audit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
