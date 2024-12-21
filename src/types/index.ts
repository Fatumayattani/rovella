export interface TravelListing {
  id: string;
  type: 'flight' | 'hotel' | 'experience';
  title: string;
  description: string;
  price: number; // In USDe
  location: string;
  provider: string;
  availableFrom: string;
  availableTo: string;
  imageUrl: string;
}

export interface User {
  address: string;
  travelPoints: number;
  stakedAmount: number;
  reputation: number;
}

export interface Booking {
  id: string;
  listingId: string;
  userId: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  earnedPoints: number;
}