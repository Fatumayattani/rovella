import React from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { TravelCard } from './components/TravelCard';
import { StakingCard } from './components/StakingCard';
import { Hero } from './components/Hero';
import { SAMPLE_LISTINGS } from './data/listings';

export function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="relative">
        <Hero />
        <SearchBar />
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Featured Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SAMPLE_LISTINGS.map(listing => (
                <TravelCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Earn More Rewards</h2>
            <StakingCard />
          </div>
        </div>
      </main>
    </div>
  );
}