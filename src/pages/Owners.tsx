import React, { useState } from 'react';
import { ShieldCheck, Calendar, MapPin } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Reveal } from '../components/common/Reveal';
import { ownersData } from '../data/ownersData';
import type { SolarOwner } from '../types/solar';

interface OwnersProps {
  onOpenConsultation: (owner?: SolarOwner) => void;
}

export const Owners: React.FC<OwnersProps> = ({ onOpenConsultation }) => {
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');

  const filteredOwners = ownersData.filter(owner => {
    if (selectedSpecialization === 'All') return true;
    return owner.specialization.toLowerCase().includes(selectedSpecialization.toLowerCase());
  });

  return (
    <div className="min-h-screen pb-32">
      <PageHeader
        badge="VERIFIED REGISTRY"
        subtitle="DIRECT STAKEHOLDER VISIBILITY"
        title="The Solar Asset Owners & EPC Guild."
        description="Connect with principal photovoltaic plant holders, certified electrical engineers, and commercial solar hosts for confidential consultations and site audits."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12">
        {/* Intro banner */}
        <div className="mb-10 p-8 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-card)' }}>
          <div>
            <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-semibold block mb-1">
              ZERO BROKERS • STRICT VERIFICATION
            </span>
            <h3 className="text-xl md:text-2xl font-serif text-white mb-2">
              Every Owner & Partner Holds Certified Grid Licenses
            </h3>
            <p className="text-xs max-w-xl font-light" style={{ color: 'var(--text-muted)' }}>
              All developers in our registry are pre-screened for financial liquidity, Tier-1 module supply agreements, and certified CEA / MNRE grid interconnect compliance.
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={() => onOpenConsultation()}>
            Apply to Join Registry
          </Button>
        </div>

        {/* Specialization Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b" style={{ borderColor: 'var(--border-divider)' }}>
          {[
            { id: 'All', label: 'All Specialists' },
            { id: 'BIPV', label: 'Architectural BIPV' },
            { id: 'Heterojunction', label: 'Heterojunction & BESS' },
            { id: 'Commercial', label: 'Commercial PPA' }
          ].map(spec => (
            <button
              key={spec.id}
              onClick={() => setSelectedSpecialization(spec.id)}
              className={`text-xs tracking-wider uppercase px-4 py-2 rounded-full border transition-all ${
                selectedSpecialization === spec.id
                  ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37] font-semibold'
                  : 'border-white/10 text-white/60 hover:text-white hover:border-white/25'
              }`}
            >
              {spec.label}
            </button>
          ))}
        </div>

        {/* Owners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredOwners.map((owner, idx) => (
            <Reveal key={owner.id} direction="up" delay={0.1 * idx}>
              <Card className="p-8 flex flex-col justify-between h-full">
                <div>
                  {/* Header Row with Avatar & Status */}
                  <div className="flex items-start gap-5 mb-6">
                    <img
                      src={owner.avatar}
                      alt={owner.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-[#D4AF37]/60 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-serif text-white font-medium">{owner.name}</h3>
                        {owner.verified && (
                          <span className="inline-flex items-center text-[10px] text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/30">
                            <ShieldCheck size={12} className="mr-1" /> Verified
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#D4AF37] font-semibold tracking-wider uppercase mb-1">
                        {owner.role}
                      </p>
                      <p className="text-xs text-white/50 flex items-center gap-1.5">
                        <MapPin size={12} />
                        <span>{owner.company} • {owner.location}</span>
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs font-light leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                    {owner.bio}
                  </p>

                  {/* Stats matrix */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-xl border mb-6 text-center text-xs" style={{ backgroundColor: 'var(--bg-section-muted)', borderColor: 'var(--border-card)' }}>
                    <div>
                      <span className="text-[10px] text-white/40 uppercase block">Portfolio</span>
                      <span className="font-serif text-base text-[#D4AF37] font-semibold">{owner.totalCapacityMW} MW</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/40 uppercase block">Completed</span>
                      <span className="font-serif text-base text-white font-semibold">{owner.completedProjectsCount} Sites</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/40 uppercase block">Rating</span>
                      <span className="font-serif text-base text-[#10B981] font-semibold">{owner.rating} ★</span>
                    </div>
                  </div>

                  {/* Meeting modes */}
                  <div className="mb-6">
                    <span className="text-[10px] uppercase tracking-wider text-white/40 block mb-2 font-semibold">
                      Available Consultation Formats:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {owner.availableMeetingTypes.map(type => (
                        <span
                          key={type}
                          className="text-[10px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/70"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-white/60">
                    Direct Matchmaking
                  </div>
                  <Button
                    variant="gold"
                    size="sm"
                    onClick={() => onOpenConsultation(owner)}
                    icon={<Calendar size={13} />}
                  >
                    Schedule Direct Sync
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Join Registry Prompt */}
        <div className="p-10 md:p-14 rounded-2xl border text-center relative overflow-hidden" style={{ backgroundColor: 'var(--bg-section-muted)', borderColor: 'var(--border-card)' }}>
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold block mb-3">
              FOR SOLAR PLANT OPERATORS & ROOFTOP LANDLORDS
            </span>
            <h3 className="text-2xl md:text-4xl font-serif text-white mb-4">
              List Your Solar Asset on AI Vittoris
            </h3>
            <p className="text-xs md:text-sm font-light leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              Increase visibility for your operational capacity, discover corporate off-takers under long-term PPAs, or offer your commercial rooftop to tier-1 solar EPC firms.
            </p>
            <Button variant="gold" size="md" onClick={() => onOpenConsultation()}>
              Submit Asset for Verification
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
