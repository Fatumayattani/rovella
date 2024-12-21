import React from 'react';
import { MapPin, Star, CreditCard } from 'lucide-react';
import type { TravelListing } from '../types';

interface TravelCardProps {
  listing: TravelListing;
}

export function TravelCard({ listing }: TravelCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={listing.imageUrl}
          alt={listing.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold">
          {listing.type.charAt(0).toUpperCase() + listing.type.slice(1)}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin className="h-4 w-4 mr-1" />
          {listing.location}
        </div>
        
        <h3 className="mt-2 text-lg font-semibold">{listing.title}</h3>
        <p className="mt-1 text-gray-600 text-sm">{listing.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-sm">4.8 (128 reviews)</span>
          </div>
          
          <div className="flex items-center">
            <CreditCard className="h-5 w-5 text-orange-600" />
            <span className="ml-1 font-semibold">{listing.price} USDe</span>
          </div>
        </div>
        
        <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-500">
          Book Now
        </button>
      </div>
    </div>
  );
}