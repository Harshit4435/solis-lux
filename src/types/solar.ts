export type ProjectCategory = 
  | 'Residential Estate' 
  | 'Commercial Microgrid' 
  | 'Architectural BIPV' 
  | 'Utility Solar Park' 
  | 'Agri-PV Farm';

export type ProjectStatus = 
  | 'Active Generation' 
  | 'Commissioned' 
  | 'Under Installation' 
  | 'Open for Host Leasing';

export interface SolarOwner {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  avatar: string;
  verified: boolean;
  totalCapacityMW: number;
  location: string;
  specialization: string;
  rating: number;
  completedProjectsCount: number;
  phone: string;
  email: string;
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
  type: ProjectCategory;
  status: ProjectStatus;
  location: string;
  capacityKWp: number;
  annualGenerationMWh: number;
  carbonOffsetTons: number;
  image: string;
  gallery: string[];
  description: string;
  panelTechnology: string;
  inverterBattery: string;
  certification: string;
  roiPaybackYears: number;
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
