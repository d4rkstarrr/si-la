// Modern responsive Navbar component
import React from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
    <div className="container mx-auto px-4 flex items-center justify-between h-20">
      <div className="flex items-center gap-3">
        <img src="/si-la_logo.png" alt="SI-Linear Automation Logo" className="h-12 w-auto" />
        <span className="text-primary font-bold text-xl hidden sm:block">SI-Linear Automation</span>
      </div>
      
      <ul className="flex items-center gap-2 sm:gap-6 md:gap-8">
        <li>
          <a href="#about" className="text-gray-600 hover:text-primary px-2 py-1 text-sm md:text-base font-medium transition-colors duration-200 hover:scale-105 inline-block">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="text-gray-600 hover:text-primary px-2 py-1 text-sm md:text-base font-medium transition-colors duration-200 hover:scale-105 inline-block">
            Services
          </a>
        </li>
        <li>
          <a href="#projects" className="text-gray-600 hover:text-primary px-2 py-1 text-sm md:text-base font-medium transition-colors duration-200 hover:scale-105 inline-block">
            Projects
          </a>
        </li>
        <li>
          <a href="#team" className="text-gray-600 hover:text-primary px-2 py-1 text-sm md:text-base font-medium transition-colors duration-200 hover:scale-105 inline-block">
            Team
          </a>
        </li>
        {/* <li>
          <a href="#clients" className="text-gray-600 hover:text-primary px-2 py-1 text-sm md:text-base font-medium transition-colors duration-200 hover:scale-105 inline-block">
            Clients
          </a>
        </li> */}
        <li>
          <a href="#contact" className="bg-primary text-white px-4 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-primary/90 transition-colors duration-200 hover:scale-105 inline-block">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
