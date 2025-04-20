import React from 'react';

export default function SearchFilter() {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 mb-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search Species
          </label>
          <div className="relative">
            <input
              type="text"
              id="search"
              placeholder="Enter species name, scientific name, or taxon ID..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              id="search-btn"
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Kingdom
          </label>
          <select
            id="category"
            className="w-full md:w-48 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Kingdoms</option>
            <option value="ANIMALIA">Animals</option>
            <option value="PLANTAE">Plants</option>
            <option value="FUNGI">Fungi</option>
            <option value="BACTERIA">Bacteria</option>
            <option value="ARCHAEA">Archaea</option>
            <option value="PROTOZOA">Protozoa</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            id="advanced-search-btn"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition duration-300 flex items-center"
          >
            <i className="fas fa-sliders-h mr-2"></i> Filters
          </button>
        </div>
      </div>

      {/* Advanced Filters (can be shown with state toggle) */}
      <div id="advanced-filters" className="mt-4 hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="conservation-status" className="block text-sm font-medium text-gray-700 mb-1">
              Conservation Status
            </label>
            <select
              id="conservation-status"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Statuses</option>
              <option value="CR">Critically Endangered</option>
              <option value="EN">Endangered</option>
              <option value="VU">Vulnerable</option>
              <option value="NT">Near Threatened</option>
              <option value="LC">Least Concern</option>
              <option value="DD">Data Deficient</option>
            </select>
          </div>

          <div>
            <label htmlFor="habitat" className="block text-sm font-medium text-gray-700 mb-1">
              Habitat
            </label>
            <select
              id="habitat"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Habitats</option>
              <option value="terrestrial">Terrestrial</option>
              <option value="freshwater">Freshwater</option>
              <option value="marine">Marine</option>
            </select>
          </div>

          <div>
            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
              Region
            </label>
            <select
              id="region"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Global</option>
              <option value="africa">Africa</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="north_america">North America</option>
              <option value="south_america">South America</option>
              <option value="oceania">Oceania</option>
              <option value="antarctica">Antarctica</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
