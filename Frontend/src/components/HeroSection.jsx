import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Global Species Database
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore comprehensive information on over 2 million species from around the world.
          </p>
        </div>
      </div>
    </section>
  );
}