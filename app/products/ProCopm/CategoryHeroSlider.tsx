"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Leaf } from "lucide-react";
import React, { useState } from "react";

interface CategoryHeroSliderProps {
  activeData: {
    name: string;
    tagline: string;
    galleryImages: string[];
    description: string;
  };
}

export default function CategoryHeroSlider({ activeData }: CategoryHeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Background image based on active slide
  const activeImage = activeData.galleryImages[activeIndex] || activeData.galleryImages[0];

  return (
    <section className="relative min-h-[85vh] flex flex-col pt-32 pb-12 overflow-hidden bg-stone-900">
      
      {/* 1. Dynamic Blurred Background */}
      <div className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out">
         <div className="absolute inset-0 bg-stone-900/60 z-10"></div>
         <img 
            src={activeImage} 
            alt="Background" 
            className="w-full h-full object-cover blur-2xl opacity-60 scale-110"
         />
      </div>

      {/* 2. Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 flex-1 flex flex-col justify-center">
        
        {/* Header Text */}
        <div className="text-center mb-10 space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-md text-green-100 text-sm font-medium tracking-wide">
               <Leaf size={14} className="text-green-400" />
               Premium Sustainable Collection
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
               {activeData.name}
            </h1>
            <p className="text-xl text-stone-200 max-w-2xl mx-auto font-light drop-shadow-md">
               {activeData.tagline}
            </p>
        </div>

        {/* 3. 3D Coverflow Slider */}
        <div className="w-full max-w-6xl mx-auto">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={2}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full py-12 category-hero-swiper"
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
          >
            {activeData.galleryImages.map((img, i) => (
              <SwiperSlide key={i} className="w-[300px] h-[400px] md:w-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
                  <img 
                    src={img} 
                    alt={`${activeData.name} ${i+1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
      
      {/* CSS for Swiper Pagination Customization */}
      <style jsx global>{`
        .category-hero-swiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.5);
          opacity: 1;
        }
        .category-hero-swiper .swiper-pagination-bullet-active {
          background: #4ade80; /* Green-400 */
          width: 24px;
          border-radius: 6px;
        }
        .category-hero-swiper .swiper-button-prev,
        .category-hero-swiper .swiper-button-next {
          color: white;
          background: rgba(0,0,0,0.3);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }
        .category-hero-swiper .swiper-button-prev:hover,
        .category-hero-swiper .swiper-button-next:hover {
          background: rgba(74, 222, 128, 0.8);
        }
        .category-hero-swiper .swiper-button-prev::after,
        .category-hero-swiper .swiper-button-next::after {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}
