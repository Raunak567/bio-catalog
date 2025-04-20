import React from 'react';

export default function EndangeredSection() {
  return (
    <section id="endangered" className="container mx-auto px-4 py-8 mb-16">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Endangered Species Spotlight</h3>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl shadow-inner mb-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/3 mb-6 lg:mb-0 lg:pr-6">
            <img
              src="https://via.placeholder.com/500x350?text=Loading..."
              alt="Endangered Species"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="lg:w-2/3">
            <div className="flex items-center mb-2">
              <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">CR</span>
              <span className="ml-2 text-sm text-gray-600">Critically Endangered</span>
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-2">Loading...</h4>
            <p className="text-gray-600 mb-4">Scientific name loading...</p>
            <p className="text-gray-700 mb-4">Description loading...</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Population Trend</p>
                <p className="font-medium">Loading...</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Habitat</p>
                <p className="font-medium">Loading...</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Threats</p>
                <p className="font-medium">Loading...</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-300">
                <i className="fas fa-book mr-2"></i> Learn More
              </button>
              <button className="px-6 py-2 border border-gray-300 hover:bg-gray-100 text-gray-700 rounded-lg transition duration-300">
                <i className="fas fa-random mr-2"></i> Random Species
              </button>
            </div>
          </div>
        </div>
      </div>

      <h4 className="text-xl font-semibold text-gray-700 mb-4">Recently Assessed Endangered Species</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer">
            <div className="relative">
              <img
                className="w-full h-32 object-cover"
                src={`https://source.unsplash.com/random/400x300/?endangered,animal,${i}`}
                alt={`Endangered Species ${i}`}
              />
              <span className="absolute bottom-2 left-2 px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded">
                CR
              </span>
            </div>
            <div className="p-3">
              <h4 className="font-medium text-gray-800 truncate">Endangered Species {i}</h4>
              <p className="text-gray-600 text-sm italic truncate">Scientific name</p>
              <div className="flex items-center mt-2">
                <span className="inline-block w-2 h-2 rounded-full bg-red-600 mr-2"></span>
                <span className="text-xs text-gray-500">Critically Endangered</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
