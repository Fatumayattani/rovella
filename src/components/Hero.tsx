import React from 'react';

export function Hero() {
  return (
    <div className="relative">
      <div 
        className="h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80)'
        }}
      >
        {/* Gradient overlay with sparkle effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 backdrop-blur-[1px]">
          {/* Sparkle dots */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: '0.1'
          }} />
          
          <div className="max-w-7xl mx-auto h-full flex items-center px-4">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
                Travel with Crypto, Earn Rewards
              </h1>
              <p className="text-xl mb-8 drop-shadow">
                Book your next adventure using USDe and earn Travel Points
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}