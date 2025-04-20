import React from 'react';

export default function Stats() {
  return (
    <section className="container mx-auto px-4 py-8 mb-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Biodiversity Statistics</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <i className="fas fa-paw text-xl"></i>
            </div>
            <div>
              <p className="text-gray-500">Animal Species</p>
              <h4 className="text-xl font-bold" id="animal-count">1,553,052</h4>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <i className="fas fa-seedling text-xl"></i>
            </div>
            <div>
              <p className="text-gray-500">Plant Species</p>
              <h4 className="text-xl font-bold" id="plant-count">383,175</h4>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
              <i className="fas fa-bacteria text-xl"></i>
            </div>
            <div>
              <p className="text-gray-500">Microbial Species</p>
              <h4 className="text-xl font-bold" id="microbe-count">14,556</h4>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
              <i className="fas fa-exclamation-triangle text-xl"></i>
            </div>
            <div>
              <p className="text-gray-500">Endangered</p>
              <h4 className="text-xl font-bold" id="endangered-count">41,415</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}