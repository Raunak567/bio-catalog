import React, { useState, useEffect } from 'react';

export default function SpeciesCatalog() {
  const [loading, setLoading] = useState(true);
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    // Simulated loading delay and dummy data
    setTimeout(() => {
      setSpecies([1, 2, 3, 4, 5, 6, 7, 8]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section id="species" className="container mx-auto px-4 py-8 mb-16">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Species Catalog</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">Items per page:</span>
            <select id="items-per-page" className="px-2 py-1 border rounded-lg">
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100" disabled>
              <i className="fas fa-chevron-left"></i>
            </button>
            <span className="px-4 py-2">Page 1 of 1</span>
            <button className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <i className="fas fa-spinner fa-spin text-4xl text-blue-500 mb-4"></i>
            <p className="text-gray-600">Loading species data...</p>
          </div>
        </div>
      ) : species.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {species.map((s, index) => (
            <div
              key={index}
              className="species-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 cursor-pointer hover:translate-y-[-5px] hover:shadow-lg"
            >
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={`https://source.unsplash.com/random/400x300/?animal,${index}`}
                  alt="Species"
                />
                <div className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  DD
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">Sample Species {index + 1}</h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Kingdom</span>
                </div>
                <p className="text-gray-600 text-sm italic mb-3">Scientific Name</p>
                <div className="flex justify-between text-xs">
                  <div>
                    <span className="text-gray-500">Habitat:</span>
                    <span className="ml-1 font-medium">Forest</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Region:</span>
                    <span className="ml-1 font-medium">Asia</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
          <h4 className="text-xl font-medium text-gray-600">No species found</h4>
          <p className="text-gray-500 mt-2">Try adjusting your search criteria</p>
        </div>
      )}
    </section>
  );
}
