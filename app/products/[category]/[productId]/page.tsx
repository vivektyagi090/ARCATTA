"use client";

import { useParams } from "next/navigation";
import { productCategories } from "@/app/data/products";
import { ArrowLeft, CheckCircle2, Factory, Leaf, Package, Sprout, Sun, Truck } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
// Reusing/Adapting Gallery Component (Simplified for Page)
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay, EffectFade, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "swiper/css/zoom";

export default function ProductDetailPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const productId = params.productId as string;

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // Find Category
  const category = productCategories.find((c) => c.id === categoryId);

  // Find Product Item (Slug match)
  const product = category?.items.find(
    (item) => item.name.replace(/\s+/g, "-") === productId
  );

  if (!category || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-stone-50">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link href="/products" className="text-green-600 hover:underline">
          Return to Products
        </Link>
      </div>
    );
  }

  // Use product specific images if available, else fallback to category gallery or single image
  const galleryImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image, ...category.galleryImages.slice(0, 5)];

  const processSteps = product.process || category.items[0].process || [];

  return (
    <main className="min-h-screen bg-stone-50 font-sans text-stone-800">
      
      {/* 1. HERO HEADER */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
         {/* Background Image with Overlay */}
         <div className="absolute inset-0 z-0">
            <img 
               src={category.heroImage || category.image} 
               alt={product.name}
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
         </div>

         {/* Content */}
         <div className="relative z-10 container mx-auto px-4 text-center">
             <Link 
               href={`/products?category=${categoryId}`} 
               className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-md"
             >
                <ArrowLeft size={16} /> Back to Products
             </Link>
             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                {product.name}
             </h1>
             <p className="text-xl text-stone-200 max-w-2xl mx-auto font-light">
                {product.desc}
             </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 -mt-20 relative z-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* 2. GALLERY SECTION */}
            <div className="bg-white p-4 rounded-3xl shadow-xl">
                <Swiper
                  style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff" } as React.CSSProperties}
                  spaceBetween={10}
                  effect={"fade"}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                  className="rounded-2xl aspect-square md:aspect-[4/3] mb-4 bg-stone-100"
                >
                  {galleryImages.map((img, i) => (
                    <SwiperSlide key={i}>
                       <div 
                         className="relative w-full h-full overflow-hidden cursor-zoom-in group"
                         onMouseMove={(e) => {
                           const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                           const x = ((e.clientX - left) / width) * 100;
                           const y = ((e.clientY - top) / height) * 100;
                           e.currentTarget.style.setProperty('--x', `${x}%`);
                           e.currentTarget.style.setProperty('--y', `${y}%`);
                         }}
                         style={{ '--x': '50%', '--y': '50%' } as React.CSSProperties}
                       >
                          <img 
                            src={img} 
                            alt={`${product.name} ${i}`} 
                            className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-[2] origin-[var(--x)_var(--y)]" 
                          />
                       </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
               
               <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="thumbs-slider h-20 md:h-24 px-1"
               >
                  {galleryImages.map((img, i) => (
                    <SwiperSlide key={`thumb-${i}`} className="cursor-pointer rounded-lg overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
                       <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                    </SwiperSlide>
                  ))}
               </Swiper>
            </div>

            {/* 3. DETAILS & SPECS */}
            <div className="space-y-10">
               {/* Description */}
               <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                     <Leaf className="text-green-600"/> Product Overview
                  </h2>
                  <p className="text-stone-600 leading-relaxed text-lg">
                     {product.desc} {category.description}
                  </p>
                  
                  {product.applications && (
                     <div className="mt-6">
                        <h4 className="font-semibold mb-3 text-stone-900">Ideal Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                           {product.applications.map((app, i) => (
                              <span key={i} className="bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm font-medium border border-green-100">
                                 {app}
                              </span>
                           ))}
                        </div>
                     </div>
                  )}
               </div>

               {/* Specifications */}
               {product.specifications && (
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                     <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Package className="text-blue-600"/> Technical Specifications
                     </h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                        {Object.entries(product.specifications).map(([key, value], idx) => (
                           <div key={idx} className="flex flex-col pb-3 border-b border-stone-50 last:border-0">
                              <span className="text-stone-400 text-xs uppercase tracking-wider font-semibold mb-1">{key}</span>
                              <span className="text-stone-800 font-medium">{String(value)}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               )}
            </div>
         </div>

         {/* 4. PROCESS VISUALIZATION */}
         <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">Manufacturing Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {processSteps.map((step, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 relative overflow-hidden group hover:shadow-lg transition-all">
                     <div className="absolute top-0 right-0 bg-stone-100 px-4 py-2 rounded-bl-2xl font-bold text-stone-300 text-xl group-hover:text-green-600 group-hover:bg-green-50 transition-colors">
                        {idx + 1}
                     </div>
                     <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <Factory size={24} />
                     </div>
                     <h3 className="text-xl font-bold mb-2">{step}</h3>
                     <p className="text-stone-500 text-sm">Strict quality control ensures premium output at this stage.</p>
                  </div>
               ))}
            </div>
         </div>
      
      </div>

    </main>
  );
}
