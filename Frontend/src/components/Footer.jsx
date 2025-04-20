import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">BioCatalog</h4>
            <p className="text-gray-400">
              A comprehensive life sciences data hub connecting researchers with biodiversity information from around the world.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Data Download</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Research Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Educational Materials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Data Usage</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Citation Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">Get updates on new features and data additions</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            © 2023 BioCatalog. All rights reserved. Data provided by GBIF, IUCN, NCBI, and PubMLST.
          </p>
        </div>
      </div>
    </footer>
  );
}
