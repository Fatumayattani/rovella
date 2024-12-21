import React from 'react';
import { Search, Calendar, Users } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg -mt-8 relative z-10">
      <div className="flex space-x-4">
        <div className="flex-1">
          <div className="flex items-center border rounded-lg p-3">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="ml-2 w-full focus:outline-none"
              aria-label="Search location"
            />
          </div>
        </div>
        
        <div className="w-48">
          <div className="flex items-center border rounded-lg p-3">
            <Calendar className="h-5 w-5 text-gray-400" />
            <input
              type="date"
              className="ml-2 w-full focus:outline-none"
              aria-label="Select date"
            />
          </div>
        </div>
        
        <div className="w-36">
          <div className="flex items-center border rounded-lg p-3">
            <Users className="h-5 w-5 text-gray-400" />
            <select className="ml-2 w-full focus:outline-none" aria-label="Select number of guests">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
          </div>
        </div>
        
        <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-500">
          Search
        </button>
      </div>
    </div>
  );
}