export type ProjectCategory = 
  | 'Residential Estate' 
  | 'Commercial Microgrid' 
  | 'Architectural BIPV' 
  | 'Utility Solar Park' 
  | 'Agri-PV Farm'
  | 'Monocrystalline TOPCon'
  | 'Bifacial Dual-Glass'
  | 'Solar Roof Shingles';

export type ProjectStatus = 
  | 'Active Generation' 
  | 'Commercial Deployment' 
  | 'Under Installation' 
  | 'Open for Host Leasing'
  | 'Available for Installation';

export interface SolarOwner {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  avatar: string;
  verified: boolean;
  location: string;
  availability?: string;
  pricing?: string;
  phone?: string;
  specialization: string;
  services?: string[];
  email: string;
  secondaryEmail?: string;
  availableMeetingTypes: (
    | 'Virtual Consultation' 
    | 'On-Site Feasibility Audit' 
    | 'Rooftop Host Leasing Sync' 
    | 'EPC Partnership'
  )[];
}

export interface SolarProject {
  id: string;
  title: string;
  type: string;
  panelType?: string;
  efficiency?: string;
  idealFor?: string;
  status?: string;
  location?: string;
  capacityKWp?: number;
  annualGenerationMWh?: number;
  carbonOffsetTons?: number;
  image: string;
  gallery: string[];
  description: string;
  panelTechnology: string;
  inverterBattery?: string;
  certification?: string;
  roiPaybackYears?: number;
  owner: SolarOwner;
  specs: string[];
  highlights: string[];
}

export interface MeetingRequest {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  propertyType: 'Luxury Villa / Estate' | 'Commercial Headquarters' | 'Industrial Rooftop' | 'Agricultural Land' | 'BIPV Facade';
  rooftopAreaSqFt: number;
  meetingType: 'Virtual Architectural Consultation' | 'On-Site Solar Audit' | 'Owner-Host Co-Development';
  preferredDate: string;
  preferredTime: string;
  targetOwnerId?: string;
  targetProjectId?: string;
  notes?: string;
  createdAt: string;
}
