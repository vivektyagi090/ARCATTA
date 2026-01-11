"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { X } from "lucide-react";

interface ExpandedGalleryModalProps {
  activeData: {
    galleryImages: string[];
  };
  onClose: () => void;
}

export default function ExpandedGalleryModal({ activeData, onClose }: ExpandedGalleryModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
        >
          <X size={24} className="text-white" />
        </button>

        <Swiper
          spaceBetween={10}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="h-full w-full"
        >
          {activeData.galleryImages.map((img, i) => (
            <SwiperSlide key={`expanded-${i}`}>
              <img
                src={img}
                alt={`Gallery view ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}