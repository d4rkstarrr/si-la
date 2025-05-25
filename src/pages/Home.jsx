// Home (Landing) page section
import React from "react";

const Home = () => (
  <section id="home" className="scroll-mt-16 flex flex-col items-center justify-center min-h-screen pt-20 pb-10 px-4">
    <div className="bg-gradient-to-b from-section-bg to-white rounded-2xl shadow-xl p-8 md:p-12 max-w-7xl mx-auto w-full">
      <h1 className="text-4xl md:text-6xl font-bold text-primary text-center mb-8 leading-tight">
        Welcome to{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          SI-Linear Automation
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-10">
        Empowering industries with innovative automation solutions for a smarter, more efficient future.
      </p>
      <div className="flex justify-center gap-4">
        <a 
          href="#services" 
          className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 shadow-lg"
        >
          Our Services
        </a>
        <a 
          href="#contact" 
          className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary/10 transition-all duration-200 hover:scale-105 shadow-lg"
        >
          Contact Us
        </a>
      </div>
    </div>
  </section>
);

export default Home;
