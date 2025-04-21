import React from 'react';

export default function Modal({ show, onClose, species }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                {species?.name || 'Species Name'}
              </h3>
              <p className="text-gray-600 italic">
                {species?.scientificName || 'Scientific Name'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <img
                src={species?.image || 'https://via.placeholder.com/800x500?text=Species+Image'}
                alt={species?.name || 'Species Image'}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Taxonomic Information</h4>
              <table className="w-full text-sm">
                <tbody>
                  {['kingdom', 'phylum', 'class', 'order', 'family', 'genus'].map((field) => (
                    <tr key={field} className="border-b border-gray-200">
                      <td className="py-2 font-medium text-gray-700">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </td>
                      <td className="py-2">{species?.[field] || '-'}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-2 font-medium text-gray-700">GBIF ID</td>
                    <td className="py-2">{species?.gbifId || '-'}</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Conservation Status</h4>
              <div className="flex items-center mb-2">
                <span className={`px-3 py-1 text-white text-sm font-medium rounded-full bg-${species?.statusColor || 'gray-500'}`}>
                  {species?.status || 'DD'}
                </span>
                <span className="ml-2 text-sm text-gray-600">
                  {species?.statusText || 'Data Deficient'}
                </span>
              </div>
              <p className="text-sm text-gray-700">
                Population trend: {species?.populationTrend || 'Unknown'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Description</h4>
              <p className="text-gray-700">
                {species?.description || 'No description available.'}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Distribution</h4>
              <div className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center">
                <p className="text-gray-500">Distribution map loading...</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Habitat</h4>
              <p className="text-gray-700">
                {species?.habitats?.join(', ') || 'No habitat information available.'}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Threats</h4>
              <p className="text-gray-700">
                {species?.threats?.join(', ') || 'No threat information available.'}
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">External Resources</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'GBIF', link: species?.gbifLink },
                { label: 'IUCN Red List', link: species?.iucnLink },
                { label: 'NCBI', link: species?.ncbiLink },
                { label: 'Wikipedia', link: species?.wikipediaLink },
              ].map((res, idx) =>
                res.link ? (
                  <a
                    key={idx}
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex items-center"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i> {res.label}
                  </a>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}