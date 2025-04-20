import React from 'react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-700 to-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <i className="fas fa-leaf text-3xl mr-3"></i>
            <h1 className="text-2xl md:text-3xl font-bold">BioCatalog</h1>
          </div>
          <nav className="flex space-x-4 md:space-x-6">
            <a href="#species" className="hover:text-green-200 font-medium">Species</a>
            <a href="#microbes" className="hover:text-green-200 font-medium">Microbes</a>
            <a href="#endangered" className="hover:text-green-200 font-medium">Endangered</a>
            <a href="#about" className="hover:text-green-200 font-medium">About</a>
          </nav>
        </div>
      </div>
    </header>
  );
}