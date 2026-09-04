import React from 'react';
import { Leaf, Sun, Droplets } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Reveal } from '../components/common/Reveal';

interface ImpactProps {
  onOpenConsultation: () => void;
}

export const Impact: React.FC<ImpactProps> = ({ onOpenConsultation }) => {
  return (
    <div className="min-h-screen pb-32">
      <PageHeader
        badge="ESG & PLANETARY TELEMETRY"
        subtitle="ECOLOGICAL HARMONY"
        title="Decarbonizing Luxury Estates."
        description="Our mission extends beyond high-capacity energy generation. We architect systems that regenerate landscapes, conserve groundwater, and eliminate fossil reliance."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12">


        {/* 3 Impact Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <Reveal direction="up" delay={0.1}>
            <Card className="p-8 h-full">
              <div className="w-14 h-14 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-6">
                <Leaf size={24} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-3">Agri-Photovoltaic Symbiosis</h3>
              <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Elevated single-axis tracker frames allow organic agricultural cultivation beneath bifacial panels. Partial shading reduces soil evaporation by 28%, conserving vital groundwater while producing clean export tariffs.
              </p>
            </Card>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <Card className="p-8 h-full">
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-6">
                <Sun size={24} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-3">Circular Lifecycle Integrity</h3>
              <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                All Tier-1 modules featured across AI Vittoris assets are registered with global PV Cycle reclamation directives. Over 95% of silicon, aluminium framing, and tempered glass are reclaimed and remanufactured at end-of-life.
              </p>
            </Card>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <Card className="p-8 h-full">
              <div className="w-14 h-14 rounded-full bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center mb-6">
                <Droplets size={24} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-3">Zero-Water Robotic Array Care</h3>
              <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Standard commercial solar arrays consume thousands of gallons of freshwater for dust removal. AI Vittoris developments mandate autonomous dry microfiber robotics, preserving pristine groundwater reserves.
              </p>
            </Card>
          </Reveal>
        </div>

        {/* Call to action */}
        <div className="p-10 md:p-14 rounded-2xl border text-center relative overflow-hidden" style={{ backgroundColor: 'var(--bg-section-muted)', borderColor: 'var(--border-card)' }}>
          <h3 className="text-2xl md:text-4xl font-serif text-white mb-4">
            Accelerate Your Estate's Net-Zero Horizon
          </h3>
          <p className="text-xs md:text-sm font-light max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Schedule an environmental feasibility consultation to measure your exact carbon abatement trajectory and explore certified carbon credit revenue programs.
          </p>
          <Button variant="gold" size="lg" onClick={onOpenConsultation}>
            Schedule Carbon Audit
          </Button>
        </div>
      </div>
    </div>
  );
};
