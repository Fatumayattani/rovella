import React from 'react';
import { Compass, Wallet, Plane, Hotel, Map, Award } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-orange-600 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Compass className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Rovella</span>
          </div>
          
          <div className="flex space-x-8">
            <a href="#flights" className="flex items-center hover:text-orange-200">
              <Plane className="h-5 w-5 mr-1" />
              Flights
            </a>
            <a href="#hotels" className="flex items-center hover:text-orange-200">
              <Hotel className="h-5 w-5 mr-1" />
              Hotels
            </a>
            <a href="#experiences" className="flex items-center hover:text-orange-200">
              <Map className="h-5 w-5 mr-1" />
              Experiences
            </a>
            <a href="#rewards" className="flex items-center hover:text-orange-200">
              <Award className="h-5 w-5 mr-1" />
              Rewards
            </a>
          </div>

          <button className="flex items-center bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-400">
            <Wallet className="h-5 w-5 mr-2" />
            Connect Wallet
          </button>
        </div>
      </nav>
    </header>
  );
}