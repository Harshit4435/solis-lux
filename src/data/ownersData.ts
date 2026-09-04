import type { SolarOwner } from '../types/solar';
import ownerPhoto from '../assets/branding/owner-photo.jpg';

export const ownersData: SolarOwner[] = [
  {
    id: 'udayveer',
    name: 'Udayveer',
    role: 'Founder | Vittoris & Solar Asset Owner',
    company: 'AI Vittoris',
    bio: 'Founder at Vittoris and principal solar asset owner. Dedicated to high-visibility architectural solar panel projects, commercial rooftop leasehold matchmaking, and direct clean energy partnerships without middlemen.',
    avatar: ownerPhoto,
    verified: true,
    totalCapacityMW: 480.5,
    location: 'Pune & Western India',
    specialization: 'Architectural Solar Estates & Rooftop Asset Ownership',
    rating: 5.0,
    completedProjectsCount: 150,
    phone: '+91 (020) 8840 2200',
    email: 'udayveer@vittoris.in',
    availableMeetingTypes: [
      'Virtual Consultation',
      'On-Site Feasibility Audit',
      'Rooftop Host Leasing Sync',
      'EPC Partnership'
    ]
  }
];
