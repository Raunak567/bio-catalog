import React, { useState, useEffect } from 'react';
import { fetchSpecies } from '../services/api';

export default function SpeciesCatalog() {
  const [loading, setLoading] = useState(true);
  const [species, setSpecies] = useState([]);
  const [query, setQuery] = useState('cat');

  // Function to force https for URLs
  const cleanUrl = (url) => (url ? url.replace(/^http:\/\//i, 'https://') : '');

  useEffect(() => {
    const getSpecies = async () => {
      setLoading(true);
      const results = await fetchSpecies(query, 8);

      // Try to fetch occurrence image if original image is missing
      const enrichedResults = await Promise.all(
        results.map(async (s) => {
          if (s.images && s.images.length > 0) {
            return s;
          } else {
            const encodedName = encodeURIComponent(s.scientificName || s.canonicalName || '');
            try {
              const res = await fetch(
                `https://api.gbif.org/v1/occurrence/search?mediaType=StillImage&scientificName=${encodedName}&limit=1`
              );
              const data = await res.json();
              if (data.results?.[0]?.media?.[0]?.identifier) {
                s.fallbackImage = cleanUrl(data.results[0].media[0].identifier);
              }
            } catch (err) {
              console.error('Failed to fetch fallback image', err);
            }
            return s;
          }
        })
      );

      setSpecies(enrichedResults);
      setLoading(false);
    };

    getSpecies();
  }, [query]);

  return (
    <section id="species" className="container mx-auto px-4 py-8 mb-16">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Species Catalog</h3>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search species..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          />
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
          {species.map((s, index) => {
            // Set the image URL with fallbacks
            const imageUrl =
              cleanUrl(s.images?.[0]?.url) ||
              s.fallbackImage ||
              'https://via.placeholder.com/400x300?text=No+Image';

            return (
              <div
                key={s.key || index}
                className="species-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 cursor-pointer hover:translate-y-[-5px] hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover"
                    src={imageUrl}
                    alt={s.canonicalName || 'Species'}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {s.taxonomicStatus || 'DD'}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800">
                      {s.scientificName || `Species ${index + 1}`}
                    </h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {s.kingdom || 'Unknown'}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm italic mb-3">
                    {s.scientificName || 'N/A'}
                  </p>
                  <div className="flex justify-between text-xs">
                    <div>
                      <span className="text-gray-500">Phylum:</span>
                      <span className="ml-1 font-medium">{s.phylum || 'Unknown'}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Class:</span>
                      <span className="ml-1 font-medium">{s.class || 'Unknown'}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
