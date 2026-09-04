import type { SolarOwner } from '../types/solar';
import ownerPhoto from '../assets/branding/owner-photo.jpg';

export const ownersData: SolarOwner[] = [
  {
    id: 'udayveer-singh',
    name: 'Udayveer Singh',
    role: 'Founder | Vittoris',
    company: 'Vittoris',
    bio: 'Vittoris AI Agency delivers AI-powered sales automation and lead generation to fast-track B2B growth. We build custom AI voice agents and automate outreach workflows for SaaS and tech companies, driving qualified leads and high-converting appointments. Our data-driven approach maximizes conversion rates, streamlines sales pipelines, and boosts revenue—all with scalable, hands-off solutions tailored to your business goals.',
    avatar: ownerPhoto,
    verified: true,
    location: 'Remote',
    availability: 'Remote Consultations',
    pricing: 'Contact for pricing',
    specialization: 'Solar Panel Project Visibility & AI-Powered Matchmaking',
    services: [
      'Appointment Scheduling',
      'Lead Generation',
      'Real Estate Marketing',
      'Growth Marketing',
      'Performance Marketing',
      'Digital Marketing',
      'Marketing Strategy',
      'Email Marketing',
      'Social Media Marketing',
      'Advertising'
    ],
    email: 'udayveer@vittoris.in',
    secondaryEmail: 'contact@vittoris.in',
    availableMeetingTypes: [
      'Virtual Consultation',
      'On-Site Feasibility Audit',
      'Rooftop Host Leasing Sync',
      'EPC Partnership'
    ]
  }
];
