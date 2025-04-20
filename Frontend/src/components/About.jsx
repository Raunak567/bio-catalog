import React from 'react';

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-8 mb-16">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">About BioCatalog</h3>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h4>
              <p className="text-gray-700 mb-4">
                BioCatalog is a comprehensive database of global biodiversity, providing researchers,
                conservationists, and the public with access to detailed information about species from around the world.
              </p>
              <p className="text-gray-700 mb-4">
                Our platform aggregates data from multiple authoritative sources including GBIF, IUCN Red List,
                NCBI Taxonomy, and PubMLST to create a unified resource for life sciences research.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Data Sources</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: 'GBIF',
                    desc: 'Global Biodiversity Information Facility',
                    img: 'https://www.gbif.org/img/logo-gbif-horizontal.svg',
                  },
                  {
                    name: 'IUCN Red List',
                    desc: 'International Union for Conservation of Nature',
                    img: 'https://www.iucn.org/themes/custom/iucn/images/logo.svg',
                  },
                  {
                    name: 'NCBI Taxonomy',
                    desc: 'National Center for Biotechnology Information',
                    img: 'https://www.ncbi.nlm.nih.gov/corehtml/ncbi/images/ncbi_logo.svg',
                  },
                  {
                    name: 'PubMLST',
                    desc: 'Public databases for molecular typing',
                    img: 'https://pubmlst.org/static/images/pubmlst-logo.png',
                  },
                ].map((source, index) => (
                  <div key={index} className="flex items-start p-3 border rounded-lg">
                    <img src={source.img} alt={source.name} className="h-10 mr-3" />
                    <div>
                      <h5 className="font-medium">{source.name}</h5>
                      <p className="text-sm text-gray-600">{source.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Quick Facts</h4>
                <ul className="space-y-3">
                  {[
                    'Over 2 million species records',
                    'Updated daily with new data',
                    'API access for researchers',
                    'Comprehensive conservation status data',
                    'Microbial strain typing information',
                  ].map((fact, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-700">{fact}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Contact</h4>
                <p className="text-gray-700 mb-2">
                  <i className="fas fa-envelope mr-2 text-blue-500"></i> contact@biocatalog.org
                </p>
                <p className="text-gray-700">
                  <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i> Biodiversity Research Center, 123 Science Park
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
