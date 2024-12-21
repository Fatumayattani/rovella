import React from 'react';
import { Coins, TrendingUp } from 'lucide-react';

export function StakingCard() {
  return (
    <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl text-white p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Stake USDe</h3>
        <Coins className="h-6 w-6" />
      </div>
      
      <div className="mt-4">
        <div className="flex items-center justify-between text-sm">
          <span>Current APY</span>
          <div className="flex items-center">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>12.5%</span>
          </div>
        </div>
        
        <div className="mt-4">
          <input
            type="number"
            placeholder="Amount to stake"
            className="w-full bg-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>
        
        <button className="mt-4 w-full bg-white text-orange-600 py-2 rounded-lg font-semibold hover:bg-orange-50">
          Stake Now
        </button>
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="flex justify-between text-sm">
          <span>Your Staked Amount</span>
          <span>1,000 USDe</span>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span>Earned Rewards</span>
          <span>125 Travel Points</span>
        </div>
      </div>
    </div>
  );
}