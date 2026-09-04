import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Zap, MapPin, Calendar } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Reveal } from '../components/common/Reveal';
import { projectsData } from '../data/projectsData';
import type { SolarOwner, SolarProject } from '../types/solar';

interface ProjectsProps {
  onOpenConsultation: (owner?: SolarOwner, project?: SolarProject) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projectsData.filter(project => {
    const matchesFilter =
      activeFilter === 'All'
        ? true
        : activeFilter === 'Residential'
        ? project.type === 'Residential Estate'
        : activeFilter === 'Commercial'
        ? project.type === 'Commercial Microgrid'
        : activeFilter === 'BIPV'
        ? project.type === 'Architectural BIPV'
        : activeFilter === 'Agri-PV'
        ? project.type === 'Agri-PV Farm'
        : project.status === activeFilter;

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.panelTechnology.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen pb-28">
      <PageHeader
        badge="SOLAR PORTFOLIO"
        subtitle="CURATED INSTALLATIONS & BLUEPRINTS"
        title="Bespoke Clean Power Estates."
        description="Explore operational rooftop arrays, architectural solar glass, and commercial microgrids designed by verified solar developers and asset owners."
      />

      {/* Filter & Search Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12 pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b pb-8" style={{ borderColor: 'var(--border-divider)' }}>
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Residential', 'Commercial', 'BIPV', 'Agri-PV', 'Active Generation'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`text-xs tracking-[0.2em] uppercase py-2 px-4 rounded-full border transition-all ${
                  activeFilter === tab
                    ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37] font-semibold'
                    : 'border-white/10 text-white/60 hover:text-white hover:border-white/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Search by city, estate, technology..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-[11px] tracking-wider text-white/50 my-6">
          Showing {filteredProjects.length} Verified Solar Developments
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} direction="up" delay={0.08 * idx}>
              <Card className="group flex flex-col h-full">
                {/* Visual */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 bg-black/75 border border-white/15 backdrop-blur-md px-3 py-1 rounded text-[10px] tracking-widest text-[#D4AF37] uppercase font-semibold">
                    {project.status}
                  </div>

                  {/* Capacity */}
                  <div className="absolute bottom-4 left-4 bg-[#D4AF37] text-black px-2.5 py-1 rounded text-[11px] font-mono font-bold tracking-wider">
                    {project.capacityKWp} kWp
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase font-semibold mb-2">
                      <MapPin size={12} />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-[#D4AF37] transition-colors mb-3">
                      {project.title}
                    </h3>

                    <p className="text-xs font-light line-clamp-2 leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                      {project.description}
                    </p>

                    <div className="p-3 rounded-lg border text-[11px] space-y-1.5 mb-6" style={{ backgroundColor: 'var(--bg-section-muted)', borderColor: 'var(--border-card)' }}>
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--text-muted)' }}>Annual Generation:</span>
                        <span className="font-semibold text-white">{project.annualGenerationMWh} MWh</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--text-muted)' }}>Payback Period:</span>
                        <span className="font-semibold text-[#10B981]">~{project.roiPaybackYears} Years</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--text-muted)' }}>Asset Lead:</span>
                        <span className="text-[#D4AF37]">{project.owner.name}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold uppercase tracking-wider"
                    >
                      <span>Blueprint & Specs</span>
                      <ChevronRight size={14} />
                    </Link>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onOpenConsultation(project.owner, project)}
                      icon={<Calendar size={13} />}
                    >
                      Meet Owner
                    </Button>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border rounded-xl" style={{ borderColor: 'var(--border-divider)' }}>
            <Zap size={36} className="text-[#D4AF37] mx-auto mb-4" />
            <h3 className="text-xl font-serif text-white mb-2">No matching solar projects found</h3>
            <p className="text-xs max-w-sm mx-auto mb-6" style={{ color: 'var(--text-muted)' }}>
              Try adjusting your search criteria or filter tags to discover other estate installations.
            </p>
            <Button variant="gold" onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}>
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
