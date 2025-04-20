import React from 'react';

export default function MicrobesSection() {
  return (
    <section id="microbes" className="container mx-auto px-4 py-8 mb-16">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Microbial Strains Database</h3>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Search Microbial Strains</h4>
              <p className="text-gray-600">
                Access data on bacterial, archaeal, and fungal strains
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <select className="px-4 py-2 border rounded-lg mr-2">
                <option value="all">All Microbes</option>
                <option value="bacteria">Bacteria</option>
                <option value="archaea">Archaea</option>
                <option value="fungi">Fungi</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                <i className="fas fa-search mr-2"></i> Search
              </button>
            </div>
          </div>

          {/* Table Placeholder */}
          <div className="text-center text-gray-500 py-10">
            <i className="fas fa-spinner fa-spin text-3xl text-blue-500 mb-3"></i>
            <p>Loading microbial data...</p>
          </div>
        </div>
      </div>
    </section>
  );
}