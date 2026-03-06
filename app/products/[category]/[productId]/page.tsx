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
  const [selectedVariant, setSelectedVariant] = useState<any>(null);

  // Find Category
  const category = productCategories.find((c) => c.id === categoryId);

  // Find Product Item (Slug match)
  const product = category?.items.find(
    (item) => item.name.replace(/\s+/g, "-") === productId
  ) as any;

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

  // Interaction Handler
  const handleVariantSelect = (variant: any) => {
    setSelectedVariant(variant);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Gallery Images Logic: Prioritize selected variant image, then product images, then category defaults
  const galleryImages = [
    ...(selectedVariant?.image ? [selectedVariant.image] : []),
    ...(product.images && product.images.length > 0 
      ? product.images 
      : [product.image, ...category.galleryImages.slice(0, 5)])
  ].filter((img, index, self) => self.indexOf(img) === index);

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
                  {galleryImages.map((img: string, i: number) => (
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
                  {galleryImages.map((img: string, i: number) => (
                    <SwiperSlide key={`thumb-${i}`} className="cursor-pointer rounded-lg overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
                       <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                    </SwiperSlide>
                  ))}
               </Swiper>
            </div>

            {/* 3. DETAILS & SPECS */}
            <div className="space-y-10">
               {/* Description Panel */}
               <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 relative overflow-hidden">
                  {selectedVariant && (
                    <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 text-[10px] font-bold rounded-bl-xl shadow-lg">
                       VIEWING VARIANT
                    </div>
                  )}
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                     <Leaf className="text-green-600"/> {selectedVariant ? `Overview: ${selectedVariant.name}` : "Product Overview"}
                  </h2>
                  <p className="text-stone-600 leading-relaxed text-lg">
                     {selectedVariant ? selectedVariant.description : (product.desc + " " + category.description)}
                  </p>
                  
                  {!selectedVariant && product.applications && (
                     <div className="mt-6">
                        <h4 className="font-semibold mb-3 text-stone-900">Ideal Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                           {product.applications.map((app: string, i: number) => (
                              <span key={i} className="bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm font-medium border border-green-100">
                                 {app}
                              </span>
                           ))}
                        </div>
                     </div>
                  )}
               </div>

               {/* Specifications Panel */}
               <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-stone-900">
                     <Package className="text-green-600" /> {selectedVariant ? "Specifications" : "Key Properties"}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                     {Object.entries(selectedVariant ? selectedVariant.details : product.specifications).map(([key, value], idx) => (
                        <div key={idx} className="flex flex-col pb-3 border-b border-stone-50 last:border-0">
                           <span className="text-stone-400 text-xs uppercase tracking-wider font-semibold mb-1">{key}</span>
                           <span className="text-stone-800 font-medium">{String(value)}</span>
                        </div>
                     ))}
                  </div>
                  {selectedVariant?.additionalInfo && (
                     <div className="mt-8 p-4 bg-stone-50 rounded-2xl border border-stone-100 text-sm text-stone-500 italic">
                        {selectedVariant.additionalInfo}
                     </div>
                  )}
               </div>

               {/* Environmental Impact / Benefits section */}
               <div className="bg-green-600 p-8 rounded-3xl text-white shadow-lg shadow-green-100">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                     <Sprout /> Sustainable Features
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {[
                       { icon: <CheckCircle2 />, text: "100% Biodegradable" },
                       { icon: <Sun />, text: "UV Resistant" },
                       { icon: <Truck />, text: "Bulk Supply Ready" },
                       { icon: <Leaf />, text: "Eco-Friendly Material" }
                     ].map((feature, i) => (
                       <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                          {feature.icon}
                          <span className="font-bold">{feature.text}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* 4. SIMPLIFIED VARIANTS TABLE */}
         {product.subItems && product.subItems.length > 0 && (
            <div className="mt-24">
               <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                  <div>
                     <h2 className="text-3xl font-bold text-stone-900 leading-tight">Product Variants</h2>
                     <p className="text-stone-500 mt-2">Compare technical specifications across our quality range.</p>
                  </div>
                  <div className="h-px flex-1 bg-stone-100 hidden md:block mx-8 mb-4"></div>
               </div>
               
                <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                   <table className="w-full min-w-[800px] border-collapse">
                      <thead>
                         <tr className="bg-stone-50 text-stone-600 text-xs font-bold uppercase tracking-widest text-left">
                            <th className="px-6 py-4 border-b border-r border-stone-200">Product Image</th>
                            <th className="px-6 py-4 border-b border-r border-stone-200">Name & Description</th>
                            <th className="px-6 py-4 border-b border-r border-stone-200">Technical Specs</th>
                            <th className="px-6 py-4 border-b border-stone-200 text-right">Inquiry</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200">
                         {product.subItems.map((sub: any, idx: number) => (
                            <tr 
                              key={idx} 
                              onClick={() => handleVariantSelect(sub)}
                              className={`cursor-pointer transition-colors group ${selectedVariant?.name === sub.name ? 'bg-green-50/50' : 'hover:bg-stone-50'}`}
                            >
                               <td className="px-6 py-8 align-top border-r border-stone-200">
                                  <div className="w-32 h-32 rounded-xl overflow-hidden bg-white border border-stone-100 group-hover:shadow-md transition-shadow">
                                     <img 
                                       src={sub.image || "/coir/geo.png"} 
                                       alt={sub.name} 
                                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                     />
                                  </div>
                               </td>
                               <td className="px-6 py-8 align-top border-r border-stone-200">
                                  <div className="max-w-xs">
                                     <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-xl font-bold text-stone-900">{sub.name}</h3>
                                        {selectedVariant?.name === sub.name && <span className="text-[10px] bg-green-600 text-white px-2 py-0.5 rounded-full font-bold">ACTIVE</span>}
                                     </div>
                                     <div className="text-green-600 font-bold mb-3">{sub.price}</div>
                                     <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                                        {sub.description}
                                     </p>
                                  </div>
                               </td>
                               <td className="px-6 py-8 align-top border-r border-stone-200">
                                  <div className="grid grid-cols-1 gap-y-3">
                                     {Object.entries(sub.details).map(([key, value], i) => (
                                        <div key={i} className="flex items-baseline gap-2">
                                           <span className="text-[10px] font-bold text-stone-400 uppercase min-w-[100px]">{key}:</span>
                                           <span className="text-stone-700 text-sm font-medium">{String(value)}</span>
                                        </div>
                                     ))}
                                  </div>
                                  {sub.additionalInfo && (
                                     <div className="mt-4 pt-4 border-t border-stone-100 text-[11px] text-stone-400 italic">
                                        {sub.additionalInfo}
                                     </div>
                                  )}
                               </td>
                               <td className="px-6 py-8 align-top text-right" onClick={(e) => e.stopPropagation()}>
                                  <div className="flex flex-col gap-2">
                                     <button 
                                       onClick={() => handleVariantSelect(sub)}
                                       className="bg-green-600 text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-green-700 transition-all shadow-sm"
                                     >
                                       View Details
                                     </button>
                                     <Link 
                                       href={`/contact?product=${encodeURIComponent(sub.name)}&subject=${encodeURIComponent("Price Inquiry: " + sub.name)}`}
                                       className="bg-stone-900 text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-stone-800 transition-all shadow-sm"
                                     >
                                       Get Price
                                     </Link>
                                     <Link 
                                       href={`/contact?product=${encodeURIComponent(sub.name)}&subject=${encodeURIComponent("Callback Request: " + sub.name)}`}
                                       className="bg-white text-stone-900 border border-stone-200 px-6 py-3 rounded-xl text-xs font-bold hover:bg-stone-50 transition-all"
                                     >
                                        Callback
                                     </Link>
                                  </div>
                               </td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
            </div>
         )}

         {/* 5. PROCESS VISUALIZATION */}
         <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">Manufacturing Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {processSteps.map((step: string, idx: number) => (
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
