// About section
import React from "react";
import about from "../data/about";

const About = () => (
  <section id="about" className="scroll-mt-24 bg-section-bg rounded-2xl shadow-lg p-8 my-10 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-primary text-center mb-4">{about.title}</h2>
    <p className="text-lg text-text text-center">{about.description}</p>
  </section>
);

export default About;
