// Team section
import React from "react";
import team from "../data/team";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Team = () => (
  <section id="team" className="scroll-mt-24 bg-section-bg rounded-2xl shadow-lg p-8 my-10 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Team</h2>
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={16}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 24 },
        1024: { slidesPerView: 3, spaceBetween: 32 }
      }}
      className="!pb-12 relative"
    >
      <style>
        {`
          .swiper-button-disabled {
            opacity: 0.3;
            cursor: not-allowed;
          }
          .swiper-button-next, .swiper-button-prev {
            top: 50%;
            transform: translateY(-50%);
            width: 2.5rem;
            height: 2.5rem;
            background: rgba(0,0,0,0.5);
            border-radius: 50%;
            color: #3b437a;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
          }
          .swiper-button-next:after, .swiper-button-prev:after {
            font-size: 1.5rem;
            color: #3b437a;
            font-weight: bold;
            background: none;
            border-radius: 0;
          }
          .swiper-button-next {
            right: 1rem;
          }
          .swiper-button-prev {
            left: 1rem;
          }
        `}
      </style>
      {team.map((member, idx) => (
        <SwiperSlide key={idx}>
          <div className="bg-card-bg rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform">
            {/* <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            /> */}
            <h3 className="text-xl font-semibold text-primary mb-2 text-center">{member.name}</h3>
            <p className="text-accent font-medium mb-2 text-center">{member.role}</p>
            <p className="text-text text-sm text-center">{member.bio}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Team;
