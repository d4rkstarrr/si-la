// Clients section
import React from "react";
import clients from "../data/clients";

const Clients = () => (
  <section id="clients" className="scroll-mt-24 bg-section-bg rounded-2xl shadow-lg p-8 my-10 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Clients</h2>
    <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-4">
      {clients.map((client, idx) => (
        <div key={idx} className="flex items-center justify-center">
          <img 
            src={client.logo} 
            alt={client.name} 
            className="w-24 h-24 object-contain rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
