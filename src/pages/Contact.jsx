// Contact section
import React from "react";
import contact from "../data/contact";

const Contact = () => (
  <section id="contact" className="scroll-mt-24 bg-section-bg rounded-2xl shadow-lg p-8 my-10 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-primary text-center mb-8">Contact Us</h2>
    <div className="mx-auto">
      <div className="space-y-4 text-center mb-8">
        <p className="flex items-center justify-center gap-2">
          <span className="font-semibold text-primary">Address:</span>
          <span className="text-text">{contact.address}</span>
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="font-semibold text-primary">Phone:</span>
          <a href={`tel:${contact.phone}`} className="text-accent hover:text-primary transition-colors">
            {contact.phone}
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <span className="font-semibold text-primary">Email:</span>
          <a href={`mailto:${contact.email}`} className="text-accent hover:text-primary transition-colors">
            {contact.email}
          </a>
        </p>
      </div>
      {contact.mapEmbedUrl && (
        <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src={contact.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location"
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  </section>
);

export default Contact;
