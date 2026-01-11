"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  Pagination,
  EffectFade,
  Zoom,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/zoom";

interface ProductGalleryProps {
  activeData: {
    galleryImages: string[];
  };
  setExpandedGallery: (value: boolean) => void;
}

export default function ProductGallery({ activeData, setExpandedGallery }: ProductGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);

  return (
    <div className="mb-24">
      <h3 className="text-2xl font-bold mb-8 text-stone-900">
        Product Gallery
      </h3>

      <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-lg">
        {/* Main Swiper Slider */}
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties
          }
          spaceBetween={10}
          effect={"fade"}
          navigation={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[
            EffectFade,
            FreeMode,
            Navigation,
            Thumbs,
            Autoplay,
            Pagination,
            Zoom,
          ]}
          className="rounded-2xl shadow-inner mb-4 aspect-[16/10] md:aspect-[16/9]"
          zoom={true}
          onSwiper={setMainSwiper}
        >
          {activeData.galleryImages.map((img, i) => (
            <SwiperSlide key={`main-${i}`}>
              <div className="swiper-zoom-container">
                <img
                  src={img}
                  alt={`Gallery item ${i + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Swiper Slider */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbs-slider h-24 md:h-28 rounded-xl"
          breakpoints={{
            640: { slidesPerView: 5 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
          }}
        >
          {activeData.galleryImages.map((img, i) => (
            <SwiperSlide
              key={`thumb-${i}`}
              className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300 group"
            >
              <div className="w-full h-full rounded-xl overflow-hidden border-4 border-transparent group-[.swiper-slide-thumb-active]:border-green-600 group-[.swiper-slide-thumb-active]:shadow-lg transition-all duration-300">
                <img
                  src={img}
                  alt={`Thumb item ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}