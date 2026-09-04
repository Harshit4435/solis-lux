import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send, Calendar } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Reveal } from '../components/common/Reveal';

interface ContactProps {
  onOpenConsultation: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenConsultation }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Property Owner Seeking Solar Feasibility',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pb-32">
      <PageHeader
        badge="DIRECT ENGAGEMENT"
        subtitle="SOLIS LUX ADVISORY DESK"
        title="Schedule a Private Solar Consultation."
        description="Whether you are an estate proprietor evaluating rooftop solarization, a commercial landlord offering rooftop leaseholds, or an accredited solar developer seeking asset visibility."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12">
        {/* Direct consultation quick banner */}
        <div className="mb-12 p-6 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs">
            <Calendar size={20} className="text-[#D4AF37] shrink-0" />
            <div>
              <span className="font-semibold text-white block">Prefer Instant Calendar Synchronization?</span>
              <span style={{ color: 'var(--text-muted)' }}>Skip the contact form and lock in an on-site or virtual appointment directly.</span>
            </div>
          </div>
          <Button variant="gold" size="sm" onClick={onOpenConsultation} icon={<Calendar size={13} />}>
            Open Matchmaking Scheduler
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left: Contact Info & Address */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal direction="up" delay={0.1}>
              <div className="text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-semibold mb-2">
                EXECUTIVE HEADQUARTERS
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
                We Welcome In-Person & Virtual Consultations.
              </h2>
              <p className="text-xs leading-relaxed font-light mb-8" style={{ color: 'var(--text-muted)' }}>
                Our architectural engineering team operates from regional headquarters in Pune with international advisory satellite desks in Zurich and Singapore.
              </p>
            </Reveal>

            <div className="space-y-6 text-xs">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif text-white mb-1">Western India Engineering Hub</h4>
                    <p style={{ color: 'var(--text-muted)' }}>
                      Level 14, Helios Energy Tower, Senapati Bapat Road, Pune, Maharashtra 411016
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif text-white mb-1">Direct Advisory Line</h4>
                    <p style={{ color: 'var(--text-muted)' }}>+91 (020) 8840 2200 / +91 (020) 7712 9900</p>
                    <p className="text-[11px] text-white/40 mt-1">Monday – Saturday: 09:00 AM – 07:00 PM IST</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif text-white mb-1">Electronic Correspondence</h4>
                    <p style={{ color: 'var(--text-muted)' }}>advisory@solislux.energy</p>
                    <p style={{ color: 'var(--text-muted)' }}>owners.registry@solislux.energy</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right: Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] mx-auto mb-5">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2">Inquiry Dispatched Successfully</h3>
                  <p className="text-xs leading-relaxed max-w-md mx-auto mb-8" style={{ color: 'var(--text-muted)' }}>
                    Thank you, {formData.name}. Our principal solar technical desk will review your parameters and connect directly via phone and email within 4 business hours.
                  </p>
                  <Button variant="gold" onClick={() => setSubmitted(false)}>
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b pb-4 mb-6" style={{ borderColor: 'var(--border-divider)' }}>
                    <h3 className="text-xl font-serif text-white mb-1">Direct Advisory Inquiry</h3>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      Connect with our engineering specialists or request a private site feasibility assessment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: 'var(--text-muted)' }}>
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Vikram Singhania"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: 'var(--text-muted)' }}>
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="vikram@estate.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: 'var(--text-muted)' }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: 'var(--text-muted)' }}>
                        Inquiry Archetype *
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-[#121418] border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Property Owner Seeking Solar Feasibility">Property Owner Seeking Solar Feasibility</option>
                        <option value="Solar Plant Owner Seeking Asset Visibility">Solar Plant Owner Seeking Asset Visibility</option>
                        <option value="Commercial Landlord Offering Rooftop Lease">Commercial Landlord Offering Rooftop Lease</option>
                        <option value="EPC Developer Registration">EPC Developer Registration</option>
                        <option value="Architectural BIPV Specification">Architectural BIPV Specification</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-wider uppercase font-semibold mb-1.5" style={{ color: 'var(--text-muted)' }}>
                      Message & Technical Context
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please outline your property area, current monthly grid expenditure, or solar asset capacity..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="pt-2">
                    <Button variant="gold" fullWidth type="submit" icon={<Send size={15} />}>
                      Transmit Confidential Inquiry
                    </Button>
                    <p className="text-[10px] text-center mt-3 text-white/40">
                      Strict NDA adherence • Zero third-party marketing brokers
                    </p>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="border-t pt-20" style={{ borderColor: 'var(--border-divider)' }}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-semibold block mb-2">
              FREQUENTLY ADDRESSED
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-white">
              Understanding the Solis Lux Visibility Model.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: 'How does user-owner direct matchmaking work?',
                a: 'Unlike generic aggregate portals, Solis Lux directly connects verified property owners with accredited solar asset owners and principal EPC license holders. Inquiries trigger direct calendar synchronization for on-site audits or virtual technical briefings.'
              },
              {
                q: 'What is the role of this platform if it is only for visibility?',
                a: 'Solis Lux serves as a dedicated architectural showroom and credibility index. We showcase real commissioned projects, verified production data, and engineering specs so property seekers can evaluate genuine workmanship without sales middlemen.'
              },
              {
                q: 'How are solar plant owners and developers verified?',
                a: 'Every listed developer must submit proven Tier-1 module supplier contracts, CEA/DISCOM grid interconnect approvals, safety compliance records, and minimum 5 operational megawatts in verified capacity.'
              },
              {
                q: 'Can rooftop owners list their properties for solar leasing?',
                a: 'Yes. Commercial, industrial, and large estate owners can submit their rooftops to our registry. Verified solar asset owners regularly search for viable host rooftops under 20- to 25-year Power Purchase Agreements (PPAs).'
              }
            ].map((faq, i) => (
              <Card key={i} className="p-6">
                <h4 className="text-sm font-serif text-white font-medium mb-2 flex items-center gap-2">
                  <span className="text-[#D4AF37]">Q.</span> {faq.q}
                </h4>
                <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {faq.a}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
