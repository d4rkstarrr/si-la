// Simple modern Footer component
import React from "react";

const Footer = () => (
  <footer className="w-full bg-section-bg mt-10">
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <img src="/si-la_logo.png" alt="SI-Linear Automation Logo" className="h-12 w-auto mx-auto mb-4" />
        <h3 className="text-primary font-bold text-lg mb-2">SI-Linear Automation</h3>
        <p className="text-gray-600 text-sm">Empowering industries with innovative automation solutions.</p>
      </div>
      
      <div className="border-t border-gray-200 pt-8">
        <p className="text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} SI-Linear Automation Technologies Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
