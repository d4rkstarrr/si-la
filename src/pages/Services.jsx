// Services section
import React from "react";
import services from "../data/services";

const Services = () => (
  <section id="services" className="scroll-mt-24 bg-section-bg rounded-2xl shadow-lg p-8 my-10 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, idx) => (
        <div key={idx} className="bg-card-bg rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold text-primary mb-2 text-center">{service.title}</h3>
          <p className="text-text text-center">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
