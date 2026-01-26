"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function ProductGallery({ images }: { images: string[] }) {
  return (
    <Swiper navigation pagination modules={[Navigation, Pagination]}>
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img
            src={img}
            className="w-full h-[450px] object-cover rounded-3xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
