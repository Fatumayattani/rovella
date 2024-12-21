import type { TravelListing } from '../types';

export const SAMPLE_LISTINGS: TravelListing[] = [
  {
    id: '1',
    type: 'hotel',
    title: 'Luxury Ocean View Suite',
    description: 'Experience paradise with stunning ocean views and world-class amenities',
    price: 250,
    location: 'Maldives',
    provider: 'Ocean Resorts',
    availableFrom: '2024-04-01',
    availableTo: '2024-12-31',
    imageUrl: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    type: 'experience',
    title: 'Northern Lights Tour',
    description: 'Chase the aurora borealis with expert guides in the Arctic wilderness',
    price: 180,
    location: 'Iceland',
    provider: 'Arctic Adventures',
    availableFrom: '2024-04-01',
    availableTo: '2024-12-31',
    imageUrl: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    type: 'flight',
    title: 'Business Class to Paris',
    description: 'Direct flight with premium service and full-flat seats',
    price: 1200,
    location: 'Paris, France',
    provider: 'Global Airways',
    availableFrom: '2024-04-01',
    availableTo: '2024-12-31',
    imageUrl: 'https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=800&q=80'
  }
];