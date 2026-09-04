import React, { useState } from 'react';
import { Sun, Zap, Leaf, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { Reveal } from '../common/Reveal';

interface SolarCalculatorProps {
  onScheduleConsultation: () => void;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({
  onScheduleConsultation
}) => {
  const [areaSqFt, setAreaSqFt] = useState(5000);
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial' | 'industrial'>('residential');

  // Realistic solar physics calculation:
  // 1 kWp roughly requires 90-100 sq ft of shadow-free rooftop with modern 580W TOPCon modules.
  // 1 kWp produces ~1,500 kWh (1.5 MWh) per year in sun-rich zones like Pune / Maharashtra / California.
  // Commercial tariff: ~₹10/kWh ($0.12/kWh), Residential: ~₹8/kWh ($0.10/kWh), Industrial: ~₹9/kWh
  const kwp = Math.round((areaSqFt / 95) * 10) / 10;
  const annualMWh = Math.round(kwp * 1.52 * 10) / 10;
  const tariffPerKWh = propertyType === 'commercial' ? 10.5 : propertyType === 'industrial' ? 9.2 : 8.5;
  const annualSavingsINR = Math.round(annualMWh * 1000 * tariffPerKWh);
  const co2Tons = Math.round(annualMWh * 0.82 * 10) / 10;
  const treesEquivalent = Math.round(co2Tons * 45);
  const estimatedPayback = propertyType === 'commercial' ? 3.4 : propertyType === 'industrial' ? 3.2 : 4.2;

  return (
    <Card className="p-8 md:p-12" hoverEffect={false}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Inputs */}
        <div className="lg:col-span-6 space-y-6">
          <Reveal direction="up" delay={0.1}>
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs tracking-[0.25em] uppercase font-semibold">
              <Sun size={15} />
              <span>Interactive Feasibility Engine</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-serif mt-2 mb-3 text-white leading-snug">
              Estimate Your Estate’s Clean Power Potential
            </h3>
            <p className="text-xs md:text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Configure your available rooftop or parcel footprint to simulate system capacity, annual generation, and financial payback with Tier-1 bifacial photovoltaic cells.
            </p>
          </Reveal>

          {/* Property Category Buttons */}
          <Reveal direction="up" delay={0.2}>
            <label className="block text-[11px] tracking-[0.2em] uppercase font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
              Property Category
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'residential', label: 'Luxury Villa' },
                { id: 'commercial', label: 'Commercial HQ' },
                { id: 'industrial', label: 'Industrial Campus' }
              ].map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPropertyType(item.id as any)}
                  className={`py-2.5 px-3 text-xs tracking-wider rounded border transition-all text-center ${
                    propertyType === item.id
                      ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37] font-semibold'
                      : 'border-white/10 hover:border-white/25 text-white/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Slider for Area */}
          <Reveal direction="up" delay={0.3}>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span style={{ color: 'var(--text-muted)' }}>Shadow-Free Surface Area</span>
                <span className="font-mono text-sm font-bold text-[#D4AF37]">
                  {areaSqFt.toLocaleString()} Sq. Ft.
                </span>
              </div>
              <input
                type="range"
                min={800}
                max={50000}
                step={200}
                value={areaSqFt}
                onChange={e => setAreaSqFt(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <div className="flex justify-between text-[10px] text-white/40">
                <span>800 sq ft (Compact Villa)</span>
                <span>25,000 sq ft</span>
                <span>50,000 sq ft (Campus)</span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <div className="pt-2">
              <Button
                variant="gold"
                fullWidth
                onClick={onScheduleConsultation}
                icon={<ArrowRight size={16} />}
              >
                Connect With Lead Engineer to Verify
              </Button>
              <p className="text-[10px] text-center mt-2.5 text-white/40 tracking-wider">
                Direct matching with verified solar asset owners & EPC license holders
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right Output Dashboard */}
        <div className="lg:col-span-6 bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-md">
          <div className="text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-semibold mb-6 flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--border-divider)' }}>
            <span>Telemetry Simulation</span>
            <span className="flex items-center gap-1 text-[10px] text-[#10B981]">
              <ShieldCheck size={12} /> Tier-1 Standard
            </span>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-black/30 border border-white/5">
              <div className="flex items-center gap-1.5 text-white/50 text-[10px] uppercase tracking-wider mb-1">
                <Zap size={13} className="text-[#D4AF37]" />
                <span>Optimal Capacity</span>
              </div>
              <div className="text-2xl md:text-3xl font-serif text-[#D4AF37]">
                {kwp} <span className="text-xs font-sans text-white/70">kWp</span>
              </div>
              <p className="text-[10px] text-white/40 mt-1">~{Math.round(kwp * 1000 / 580)} Bi-facial N-type modules</p>
            </div>

            <div className="p-4 rounded-lg bg-black/30 border border-white/5">
              <div className="flex items-center gap-1.5 text-white/50 text-[10px] uppercase tracking-wider mb-1">
                <Sun size={13} className="text-[#D4AF37]" />
                <span>Annual Output</span>
              </div>
              <div className="text-2xl md:text-3xl font-serif text-white">
                {annualMWh} <span className="text-xs font-sans text-white/70">MWh</span>
              </div>
              <p className="text-[10px] text-white/40 mt-1">~{(annualMWh * 1000 / 365).toFixed(0)} kWh daily yield</p>
            </div>

            <div className="p-4 rounded-lg bg-black/30 border border-white/5">
              <div className="flex items-center gap-1.5 text-white/50 text-[10px] uppercase tracking-wider mb-1">
                <TrendingUp size={13} className="text-[#10B981]" />
                <span>Est. Annual Savings</span>
              </div>
              <div className="text-2xl md:text-3xl font-serif text-[#10B981]">
                ₹{(annualSavingsINR / 100000).toFixed(2)} <span className="text-xs font-sans text-white/70">Lakh / yr</span>
              </div>
              <p className="text-[10px] text-white/40 mt-1">Est. Payback: ~{estimatedPayback} Years</p>
            </div>

            <div className="p-4 rounded-lg bg-black/30 border border-white/5">
              <div className="flex items-center gap-1.5 text-white/50 text-[10px] uppercase tracking-wider mb-1">
                <Leaf size={13} className="text-[#10B981]" />
                <span>CO₂ Abatement</span>
              </div>
              <div className="text-2xl md:text-3xl font-serif text-white">
                {co2Tons} <span className="text-xs font-sans text-white/70">Tons / yr</span>
              </div>
              <p className="text-[10px] text-white/40 mt-1">Equivalent to {treesEquivalent} trees planted</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t flex items-center justify-between text-[11px]" style={{ borderColor: 'var(--border-divider)', color: 'var(--text-muted)' }}>
            <span>Technology Basis: 580W N-type Dual-Glass</span>
            <span className="text-[#D4AF37]">25-Yr 87.4% Output Guarantee</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
