"use client"

import { useState } from "react"
import Link from "next/link"

// --- SWIPER IMPORTS ---
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs, Autoplay, Pagination, EffectFade } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
// --- END SWIPER IMPORTS ---
import { 
  ArrowRight, 
  Leaf, 
  ShieldCheck, 
  Sun, 
  Package, 
  CheckCircle2, 
  IndianRupee, 
  Truck,
  X,
  Factory
} from "lucide-react"

// Updated Data with Cashew Category and Detailed Item Info
const productCategories = [
  {
    id: "coir",
    name: "Coir Products",
    tagline: "Nature's Strength, Woven for You",
    description: "Natural coir-based products for industrial, agricultural, and domestic applications.",
    image: "/coir/all.png", 
    galleryImages: [
      "/coir/all.png", 
      "/coir/c1.jpg",
      "/coir/c2.jpg",
      "/coir/c3.jpg",
      "/coir/c4.png",
      "/coir/c5.png",
      "/coir/c6.jpg",
      "/coir/c7.png",
      "/coir/c8.jpg",
      "/coir/c9.jpg",
      "/coir/c10.png",
      "/coir/c11.png",
      "/coir/c12.jpg",
      "/coir/c13.jpg",
      "/coir/c14.png",
      "/coir/c15.jpg",
      "/coir/c16.png",
      "/coir/c17.png",
      "/coir/c18.png",
       "/coir/coco-packaging.png",
      
    ],
    items: [
      { 
        name: "Coir Rope", 
        desc: "Strong, durable ropes for industrial use.",
        image: "/coir/fibre/image007.png", 
        process: ["Husks extracted from coconut", "Retting (soaking) to soften fibers", "Fiber extraction via defibering machine", "Spinning into yarn/rope"]
      },
      { 
        name: "Coir Mats", 
        desc: "Premium anti-slip door and floor mats.",
        image: "/coir/c1.jpg",
       
        process: ["Yarn preparation", "Weaving on handlooms or power looms", "Latex backing application", "Cutting and finishing"]
      },
      { 
        name: "Coco Peat Blocks", 
        desc: "Compressed peat for gardening.",
        image: "/coir/coco.png",
         // ADD THIS LIST OF IMAGES:
        images: [
          "/coir/coco.png",
          "/coir/coco-side-view.png",
          "/coir/coco-packaging.png",
          "/coir/coco-usage.png"
        ],
        process: ["Washing raw peat to lower salt", "Drying under sun/machine", "Sieving to remove fibers", "Compression into 5kg blocks"]
      },

      { name: "Coir Fibre", desc: "Raw coir fiber for manufacturing." ,image: "/coir/fibre/image001.png",process: ["Yarn preparation", "Weaving on handlooms or power looms", "Latex backing application", "Cutting and finishing"]},
      
      
      { name: "Geotextiles", desc: "Natural fiber mats for erosion control.",image: "/coir/geo.png",process: ["Yarn preparation", "Weaving on handlooms or power looms", "Latex backing application", "Cutting and finishing"] },
      { name: "Coir Poles", desc: "Plant support poles made from husk." ,image: "/the-sill_Coco-Coir_Variant-2.jpg",process: ["Yarn preparation", "Weaving on handlooms or power looms", "Latex backing application", "Cutting and finishing"]},
      
      { name: "Industrial Ropes", desc: "Heavy-duty ropes, export quality.",image: "/coir/fibre/image019.png",process: ["Yarn preparation", "Weaving on handlooms or power looms", "Latex backing application", "Cutting and finishing"] },
      
    ],
     features: [
      "100% natural coconut husk fiber",
      "Fully biodegradable and compostable",
      "Non-toxic and safe for plants",
      "Weather-resistant and durable",
      "Affordable bulk pricing",
      "Handmade with precision",
    ],
    // features: ["100% natural fiber", "Biodegradable", "Weather-resistant", "Handmade precision"],
  },
  {
    id: "areca",
    name: "Areca Leaf Products",
    tagline: "Sustainable Dining, Elegant Design",
    description: "Premium dining and food containers made from fallen areca palm leaves.",
    image: "/areca-palm-leaf-plates-bowls-disposable-eco-friend.jpg", 
    galleryImages: [
      "/areca-leaf-food-service-plates.jpg",
      "/areca-leaf-disposable-plates-eco-friendly.jpg",
    ],
    items: [
      { 
        name: "Areca Leaf Plates", 
        desc: "Biodegradable dining plates (6-12\").",
        image:"/areca-leaf-food-service-plates.jpg",
        process: ["Collection of fallen leaves", "High-pressure washing", "Heat pressing into molds", "UV sterilization"]
      },
      { 
        name: "Areca Leaf Bowls", 
        desc: "Sturdy bowls for food service.",
        image: "/areca-leaf-disposable-plates-eco-friendly.jpg",
        process: ["Leaf selection", "Soaking and cleaning", "Hydraulic heat pressing", "Edge trimming and quality check"]
      },
    ],
    features: ["Microwave safe", "Chemical free", "Compostable", "Oven safe to 200°C"],
  },
  {
    id: "cashew",
    name: "Cashew Products",
    tagline: "Premium Taste, Naturally Healthy",
    description: "High-quality raw and processed cashew nuts straight from the farm.",
    image: "/image015.jpg", // Placeholder
    galleryImages: [
      "/casu/21.jpg",
      "/casu/22.png",
      "/casu/23.png",
      "/casu/24.png",
      "/casu/25.jpg",
      "/casu/26.png",
      "/casu/27.png",
      "/casu/28.png",
      "/casu/29.png",
      "/casu/30.png",
      "/casu/31.png",
      "/casu/32.jpg",
      "/casu/33.png",
      "/casu/34.png",
      "/casu/35.png",
      "/casu/36.jpg",
      "/casu/37.png",
     
      
    ],
    items: [
      { 
        name: "Whole Cashew Nut (W180)", 
        desc: "The 'King of Cashew' - large, premium white kernels.",
        image: "/casu/image021.jpg",
        process: ["Raw nut harvesting", "Steam roasting to soften shell", "Shell cutting", "Peeling the testa (skin)", "Grading by size"]
      },
      { 
        name: "Split Cashews", 
        desc: "Halved kernels perfect for cooking and confectionery.",
        image: "/casu/37.png",
        process: ["Sorting whole kernels", "Careful splitting", "Heat drying", "Vacuum packaging"]
      },
      { 
        name: "Roasted & Salted", 
        desc: "Crunchy snack-ready cashews.",
        image: "/casu/29.png",
        process: ["Kernel selection", "Roasting in oil or dry heat", "Seasoning/Salting", "Cooling and packing"]
      },
      { 
        name: "Cashew Husk", 
        desc: "Industrial by-product used for tanning and pigment.",
        image: "/casu/image009.jpg",
        process: ["Removed during peeling stage", "Sun drying", "Sieving for purity", "Bagging for industrial use"]
      }
    ],
    features: ["High Protein", "Heart Healthy Fats", "Crunchy Texture", "Grade A Quality"],
  }
]

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(productCategories[0].id)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  // --- SWIPER STATE FOR THUMBS ---
  // This connects the main slider and the thumbnail slider
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  // --- END SWIPER STATE ---
  // Helper to get active category data
  const activeData = productCategories.find((c) => c.id === activeTab) || productCategories[0]

  return (
    <main className="bg-stone-50 min-h-screen font-sans text-stone-800 selection:bg-green-200">
      
      {/* 1. Immersive Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop"
            alt="Eco Friendly Background"
            className="w-full h-full object-cover brightness-[0.6]"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-md mb-6">
            <Leaf size={16} className="text-green-400" />
            <span className="text-sm font-medium tracking-wide text-green-100">100% SUSTAINABLE & ORGANIC</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Nature's Finest Resources
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
            Discover our premium range of Coir, Areca, Cashew, and Eco-friendly agricultural products.
          </p>
        </div>
      </section>

      {/* 2. Sticky Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex md:justify-center space-x-2 md:space-x-8 min-w-max py-4">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-green-700 text-white shadow-lg shadow-green-700/20"
                    : "text-stone-500 hover:bg-stone-100 hover:text-stone-800"
                }`}
              >
                {activeTab === cat.id && <CheckCircle2 size={16} />}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Dynamic Product Display Area */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        
        {/* Category Header */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900">{activeData.name}</h2>
            <p className="text-xl text-green-700 font-medium">{activeData.tagline}</p>
            <p className="text-lg text-stone-600 leading-relaxed">{activeData.description}</p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {activeData.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white border border-stone-200 px-4 py-2 rounded-lg shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm font-semibold text-stone-700">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img 
              src={activeData.image} 
              alt={activeData.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
          </div>
        </div>

        {/* Product Grid Items */}
        <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Package className="text-green-600" /> Available Items
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {activeData.items.map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedProduct(item)}
                  className="group bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-green-700 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <ArrowRight size={18} />
                  </div>
                  <h4 className="text-lg font-bold text-stone-900 mb-2">{item.name}</h4>
                  <p className="text-sm text-stone-500 leading-relaxed mb-4 line-clamp-2">{item.desc}</p>
                  <span className="text-xs font-semibold text-green-600 underline decoration-green-300 underline-offset-4">Click for details</span>
                </div>
              ))}
            </div>
        </div>



{/* --- START NEW DYNAMIC SLIDER GALLERY SECTION --- */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-8 text-stone-900">Product Gallery</h3>
          
          <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-lg">
            {/* 1. Main Swiper Slider */}
            {/* Added Fade effect, Autoplay, Pagination, and Linked to thumbsSwiper */}
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }as React.CSSProperties}
              spaceBetween={10}
              effect={'fade'}
              navigation={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              // LINKED STATE: connects to thumbnail swiper
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[EffectFade, FreeMode, Navigation, Thumbs, Autoplay, Pagination]}
              className="rounded-2xl shadow-inner mb-4 aspect-[16/10] md:aspect-[16/9]"
            >
              {activeData.galleryImages.map((img, i) => (
                <SwiperSlide key={`main-${i}`}>
                  <img 
                    src={img} 
                    alt={`Gallery item ${i + 1}`} 
                    className="w-full h-full object-cover rounded-2xl"
                    loading="lazy" // performance tip
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* 2. Thumbnail Swiper Slider */}
            {/* This connected slider automatically highlights the active image in the main slider */}
            <Swiper
              // LINKED STATE: sets the thumbs swiper instance
              onSwiper={setThumbsSwiper}
              spaceBetween={12}
              slidesPerView={4} // how many thumbnails to show
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="thumbs-slider h-24 md:h-28 rounded-xl"
              // Responsive breakpoints for thumbnail counts
              breakpoints={{
                640: { slidesPerView: 5 },
                768: { slidesPerView: 6 },
                1024: { slidesPerView: 8 },
              }}
            >
              {activeData.galleryImages.map((img, i) => (
                <SwiperSlide key={`thumb-${i}`} className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300 group">
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
        {/* --- END NEW DYNAMIC SLIDER GALLERY SECTION --- */}

      </section>
        {/* Gallery Strip */}
        {/* <div className="grid grid-cols-2 gap-4 h-64 md:h-80 rounded-3xl overflow-hidden">
             {activeData.galleryImages.map((img, i) => (
               <div key={i} className="relative h-full overflow-hidden group">
                 <img 
                    src={img} 
                    alt="Gallery" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
               </div>
             ))}
        </div>
      </section> */}

      {/* 4. Why Choose Us */}
      <section className="py-24 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-stone-400">Export-quality standards with a commitment to the planet.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Consistent Quality", desc: "Premium raw materials processed with strict quality checks." },
              { icon: IndianRupee , title: "Competitive Pricing", desc: "Direct manufacturer access eliminates middlemen." },
              { icon: Truck, title: "Reliable Supply Chain", desc: "Streamlined logistics for high-volume demands." },
              { icon: ShieldCheck, title: "Export Experience", desc: "Expertise in international shipping and compliance." },
            ].map((f, i) => (
              <div key={i} className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700 text-center hover:bg-stone-800 transition-colors">
                <f.icon className="w-12 h-12 text-green-500 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-stone-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 bg-green-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Sun size={400} />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for Wholesale Pricing?</h2>
          <p className="text-green-100 text-xl mb-10 max-w-2xl mx-auto">
            Contact us for bulk orders, custom branding, and special export pricing on all our products.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transform hover:scale-105 transition-all shadow-xl"
          >
            Request a Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* --- PRODUCT DETAIL MODAL --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row relative">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full transition-colors"
            >
              <X size={24} className="text-stone-800" />
            </button>


            {/* Modal Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-stone-100">

              {/* CHECK: Do we have multiple images? */}
              {selectedProduct.images && selectedProduct.images.length > 0 ? (
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={true}
                  pagination={{ clickable: true }}
                  className="h-full w-full"
                  style={{
                    '--swiper-navigation-color': '#15803d', // Green-700
                    '--swiper-pagination-color': '#15803d',
                  } as React.CSSProperties}
                >
                  {selectedProduct.images.map((img: string, index: number) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt={`${selectedProduct.name} - View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                /* FALLBACK: If no extra images, just show the main one */
                selectedProduct.image ? (
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-stone-400">
                    <Package size={48} />
                  </div>
                )
              )}
            </div>
            {/* Modal Image Section */}
            {/* <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-stone-100">
               {selectedProduct.image ? (
                 <img 
                   src={selectedProduct.image} 
                   alt={selectedProduct.name}
                   className="w-full h-full object-cover"
                 />
               ) : (
                 <div className="w-full h-full flex items-center justify-center text-stone-400">
                    <Package size={48} />
                 </div>
               )}
            </div> */}

            {/* Modal Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col">
              <h3 className="text-3xl font-bold text-stone-900 mb-2">{selectedProduct.name}</h3>
              <p className="text-stone-600 mb-8 leading-relaxed">{selectedProduct.desc}</p>

              {/* Processing Journey */}
              {selectedProduct.process && (
                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-green-700 uppercase tracking-wider mb-4">
                    <Factory size={16} /> How it's Processed
                  </h4>
                  <ul className="space-y-4">
                    {selectedProduct.process?.map((step : string, index : number) => (
                      <li key={index} className="flex gap-4 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-sm text-stone-700">{step}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-8 pt-6 border-t border-stone-100">
                 <button 
                   onClick={() => window.location.href = '/contact'}
                   className="w-full py-3 bg-green-700 text-white rounded-xl font-semibold hover:bg-green-800 transition-colors"
                 >
                   Enquire About This Product
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}

// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { ArrowRight, Leaf, ShieldCheck, Sun, Recycle, Package, CheckCircle2 ,IndianRupee  , Truck} from "lucide-react"

// // Updated Data with Real Placeholder Images for Visualization
// const productCategories = [
//   {
//     id: "coir",
//     name: "Coir Products",
//     tagline: "Nature's Strength, Woven for You",
//     description: "Natural coir-based products for industrial, agricultural, and domestic applications.",
//     image: "/coir-fiber-products-natural-materials.jpg", // Coir rope/texture
//     galleryImages: [
//       "/eco-friendly-coir-products-collection.jpg",
//       "/hero-eco-products-sustainable-green-background.jpg",
//     ],
//     items: [
//       { name: "Coir Rope", desc: "Strong, durable ropes for industrial use." },
//       { name: "Coir Mats", desc: "Premium anti-slip door and floor mats." },
//       { name: "Door Mats", desc: "Decorative and functional entrance mats." },
//       { name: "Coir Fibre", desc: "Raw coir fiber for manufacturing." },
//       { name: "Coco Peat Blocks", desc: "Compressed peat for gardening." },
//       { name: "Grow Bags", desc: "Biodegradable bags for cultivation." },
//       { name: "Geotextiles", desc: "Natural fiber mats for erosion control." },
//       { name: "Coir Poles", desc: "Plant support poles made from husk." },
//       { name: "Brushes", desc: "Handmade brushes with natural bristles." },
//       { name: "Industrial Ropes", desc: "Heavy-duty ropes, export quality." },
//       { name: "Coco Peat", desc: "A 100% natural soil conditioner with excellent water retention and aeration." },
//     ],
//     features: ["100% natural fiber", "Biodegradable", "Weather-resistant", "Handmade precision"],
//   },
//   {
//     id: "areca",
//     name: "Areca Leaf Products",
//     tagline: "Sustainable Dining, Elegant Design",
//     description: "Premium dining and food containers made from fallen areca palm leaves.",
//     image: "/areca-palm-leaf-plates-bowls-disposable-eco-friend.jpg", // Eco plates
//     galleryImages: [
//       "/areca-leaf-food-service-plates.jpg",
//       "/areca-leaf-disposable-plates-eco-friendly.jpg",
//     ],
//     items: [
//       { name: "Areca Leaf Plates", desc: "Biodegradable dining plates (6-12\")." },
//       { name: "Areca Leaf Bowls", desc: "Sturdy bowls for food service." },
//       { name: "Areca Leaf Trays", desc: "Multi-compartment trays." },
//       { name: "Lunch Boxes", desc: "Sealed, leak-proof containers." },
//       { name: "Food Containers", desc: "FDA compliant bakery containers." },
//       { name: "Clamshells", desc: "Hinged containers for takeaways." },
//       { name: "Serving Platters", desc: "Elegant platters for events." },
//       { name: "Disposable Plates", desc: "Heavy-duty restaurant grade." },
//       { name: "Compartment Trays", desc: "Airline approved trays." },
//       { name: "Bio-plates", desc: "Premium compostable solutions." },
//     ],
//     features: ["Microwave safe", "Chemical free", "Compostable", "Oven safe to 200°C"],
//   },
//   // {
//   //   id: "peat",
//   //   name: "Coco Peat",
//   //   tagline: "The Perfect Growing Medium",
//   //   description: "A 100% natural soil conditioner with excellent water retention and aeration.",
//   //   image: "/image008.jpg", // Soil/Peat
//   //   galleryImages: [
//   //     "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=600&auto=format&fit=crop",
//   //     "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=600&auto=format&fit=crop",
//   //   ],
//   //   items: [
//   //     { name: "Kraft Paper Bags", desc: "Durable retail bags." },
//   //     { name: "Eco Boxes", desc: "Recyclable shipping boxes." },
//   //     { name: "Corrugated Trays", desc: "Protective shipment packaging." },
//   //     { name: "Biodegradable Pack", desc: "Food-safe compostable materials." },
//   //     { name: "Kraft Packaging", desc: "Moisture resistant wrapping." },
//   //     { name: "Natural Boxes", desc: "Agri-waste based boxes." },
//   //     { name: "Sustainable Liners", desc: "BPI certified liners." },
//   //     { name: "Eco Cushioning", desc: "Natural fiber padding." },
//   //     { name: "Paper Packaging", desc: "Bulk recyclable materials." },
//   //     { name: "Compostable Mats", desc: "Industrial grade solutions." },
//   //   ],
//   //   features: ["High Water Retention", "High Aeration", "pH Neutral", "Renewable Resource"],
//   // },
//   // {
//   //   id: "geo",
//   //   name: "Geotextiles",
//   //   tagline: "Earth Protection & Stabilization",
//   //   description: "Biodegradable fabrics for soil stabilization, erosion control, and landscaping.",
//   //   image: "/image001.png", // Fabric/Texture
//   //   galleryImages: [
//   //     "/image002.png",
//   //     "/image005.png",
//   //   ],
//   //   items: [
//   //     { name: "Erosion Mats", desc: "Prevents soil shifting." },
//   //     { name: "Slope Protection", desc: "Stabilizes steep terrains." },
//   //     { name: "Riverbank Mesh", desc: "Water flow protection." },
//   //     { name: "Road Works", desc: "Under-layer for roads." },
//   //     { name: "Landscaping", desc: "Garden foundation layers." },
//   //     { name: "Weed Control", desc: "Natural weed barrier." },
//   //     { name: "Veg. Carriers", desc: "Promotes plant growth." },
//   //     { name: "Embankments", desc: "Reinforces structural soil." },
//   //     { name: "Drainage Filters", desc: "Allows water, stops soil." },
//   //     { name: "Eco-Mesh", desc: "Plastic-free alternative." },
//   //   ],
//   //   features: ["High Tensile Strength", "UV Resistant", "Promotes Vegetation", "100% Biodegradable"],
//   // },
// ]

// export default function ProductShowcase() {
//   const [activeTab, setActiveTab] = useState(productCategories[0].id)
  
//   // Helper to get active category data
//   const activeData = productCategories.find((c) => c.id === activeTab) || productCategories[0]

//   return (
//     <main className="bg-stone-50 min-h-screen font-sans text-stone-800 selection:bg-green-200">
      
//       {/* 1. Immersive Hero Section */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop"
//             alt="Eco Friendly Background"
//             className="w-full h-full object-cover brightness-[0.6]"
//           />
//         </div>
//         <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-md mb-6">
//             <Leaf size={16} className="text-green-400" />
//             <span className="text-sm font-medium tracking-wide text-green-100">100% SUSTAINABLE & ORGANIC</span>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
//             Nature's Finest Resources
//           </h1>
//           <p className="text-xl md:text-2xl text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
//             Discover our premium range of Coir, Areca, and Eco-friendly agricultural products. Export quality, delivered globally.
//           </p>
//         </div>
//       </section>

//       {/* 2. Sticky Navigation Tabs */}
//       <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-stone-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
//           <div className="flex md:justify-center space-x-2 md:space-x-8 min-w-max py-4">
//             {productCategories.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => setActiveTab(cat.id)}
//                 className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
//                   activeTab === cat.id
//                     ? "bg-green-700 text-white shadow-lg shadow-green-700/20"
//                     : "text-stone-500 hover:bg-stone-100 hover:text-stone-800"
//                 }`}
//               >
//                 {activeTab === cat.id && <CheckCircle2 size={16} />}
//                 {cat.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* 3. Dynamic Product Display Area */}
//       <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        
//         {/* Category Header */}
//         <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
//           <div className="space-y-6">
//             <h2 className="text-4xl md:text-5xl font-bold text-stone-900">{activeData.name}</h2>
//             <p className="text-xl text-green-700 font-medium">{activeData.tagline}</p>
//             <p className="text-lg text-stone-600 leading-relaxed">{activeData.description}</p>
            
//             {/* Feature Pills */}
//             <div className="flex flex-wrap gap-3 pt-4">
//               {activeData.features.map((feat, idx) => (
//                 <div key={idx} className="flex items-center gap-2 bg-white border border-stone-200 px-4 py-2 rounded-lg shadow-sm">
//                   <div className="w-2 h-2 rounded-full bg-green-500" />
//                   <span className="text-sm font-semibold text-stone-700">{feat}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Featured Image */}
//           <div className="relative group rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
//             <img 
//               src={activeData.image} 
//               alt={activeData.name}
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
//           </div>
//         </div>

//         {/* Product Grid Items */}
//         <div className="mb-20">
//             <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
//               <Package className="text-green-600" /> Available Items
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {activeData.items.map((item, idx) => (
//                 <div 
//                   key={idx}
//                   className="group bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-green-700 group-hover:bg-green-600 group-hover:text-white transition-colors">
//                     <ArrowRight size={18} />
//                   </div>
//                   <h4 className="text-lg font-bold text-stone-900 mb-2">{item.name}</h4>
//                   <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//         </div>

//         {/* Gallery Strip */}
//         <div className="grid grid-cols-2 gap-4 h-64 md:h-80 rounded-3xl overflow-hidden">
//              {activeData.galleryImages.map((img, i) => (
//                <div key={i} className="relative h-full overflow-hidden group">
//                  <img 
//                     src={img} 
//                     alt="Gallery" 
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                  />
//                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
//                </div>
//              ))}
//         </div>
//       </section>

//       {/* 4. Why Choose Us (General Features) */}
//       <section className="py-24 bg-stone-900 text-stone-100">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
//             <p className="text-stone-400">Export-quality standards with a commitment to the planet.</p>
//           </div>
          
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               { icon: Leaf, title: "Consistent Quality", desc: "Premium raw materials processed with strict quality checks to ensure uniformity in every shipment." },
//               { icon: IndianRupee , title: "Competitive Pricing", desc: "Direct manufacturer access eliminates middlemen, ensuring the best wholesale rates for bulk orders." },
//               { icon: Truck, title: "Reliable Supply Chain", desc: "Streamlined logistics and inventory management guarantee on-time delivery for high-volume demands." },
//               { icon: ShieldCheck, title: "Export Experience", desc: "Extensive expertise in international shipping, handling customs, and meeting global compliance standards." },
//             ].map((f, i) => (
//               <div key={i} className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700 text-center hover:bg-stone-800 transition-colors">
//                 <f.icon className="w-12 h-12 text-green-500 mx-auto mb-6" />
//                 <h3 className="text-xl font-bold mb-3">{f.title}</h3>
//                 <p className="text-stone-400 leading-relaxed">{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. CTA Section */}
//       <section className="py-24 bg-green-700 relative overflow-hidden">
//         <div className="absolute top-0 right-0 p-12 opacity-10">
//           <Sun size={400} />
//         </div>
//         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for Wholesale Pricing?</h2>
//           <p className="text-green-100 text-xl mb-10 max-w-2xl mx-auto">
//             Contact us for bulk orders, custom branding, and special export pricing on all our products.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-3 bg-white text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transform hover:scale-105 transition-all shadow-xl"
//           >
//             Request a Quote <ArrowRight size={20} />
//           </Link>
//         </div>
//       </section>

//     </main>
//   )
// }




// import Link from "next/link"
// import { ArrowRight } from "lucide-react"

// const productCategories = [
//   {
//     name: "Coir Products",
//     description: "Natural coir-based products for various applications",
//     image: "/natural-coir-fiber-rope-mats-eco-friendly.jpg",
//     galleryImages: ["/coir-fiber-products-natural-materials.jpg", "/natural-coir-fiber-rope-mats-eco-friendly.jpg"],
//     items: [
//       {
//         name: "Coir Rope",
//         desc: "Strong, durable ropes for industrial and agricultural use. Available in various thicknesses.",
//       },
//       {
//         name: "Coir Mats",
//         desc: "Premium door and floor mats made from natural coir. Anti-slip and weather-resistant.",
//       },
//       {
//         name: "Door Mats",
//         desc: "Decorative and functional entrance mats. Custom sizes available.",
//       },
//       {
//         name: "Coir Fibre",
//         desc: "Raw coir fiber for manufacturing and cushioning. Bulk quantities available.",
//       },
//       {
//         name: "Coco Peat Blocks",
//         desc: "Compressed peat for gardening and horticulture. Eco-friendly growing medium.",
//       },
//       {
//         name: "Grow Bags",
//         desc: "Biodegradable bags for plant cultivation. Sustainable farming solution.",
//       },
//       {
//         name: "Geotextiles",
//         desc: "Natural fiber mats for erosion control. Environmental protection.",
//       },
//       {
//         name: "Coir Poles",
//         desc: "Plant support poles made from coconut husk. Long-lasting and natural.",
//       },
//       {
//         name: "Brushes",
//         desc: "Handmade brushes with natural bristles. Various sizes for different uses.",
//       },
//       {
//         name: "Industrial Ropes",
//         desc: "Heavy-duty coir ropes for industrial applications. Export quality.",
//       },
//     ],
//     features: [
//       "100% natural coconut husk fiber",
//       "Fully biodegradable and compostable",
//       "Non-toxic and safe for plants",
//       "Weather-resistant and durable",
//       "Affordable bulk pricing",
//       "Handmade with precision",
//     ],
//   },
//   {
//     name: "Areca Leaf Products",
//     description: "Premium areca leaf dining and food containers",
//     image: "/areca-palm-leaf-plates-bowls-disposable-eco-friend.jpg",
//     galleryImages: [
//       "/areca-leaf-disposable-plates-eco-friendly.jpg",
//       "/areca-palm-leaf-plates-bowls-disposable-eco-friend.jpg",
//     ],
//     items: [
//       {
//         name: "Areca Leaf Plates",
//         desc: '100% biodegradable dining plates in various sizes (6", 8", 10", 12").',
//       },
//       {
//         name: "Areca Leaf Bowls",
//         desc: "Sturdy bowls perfect for food service and catering. Microwave safe.",
//       },
//       {
//         name: "Areca Leaf Trays",
//         desc: "Multi-compartment trays for organized food service. Perfect for meal prep.",
//       },
//       {
//         name: "Lunch Boxes",
//         desc: "Sealed lunch containers made from areca leaves. Leak-proof design.",
//       },
//       {
//         name: "Food Containers",
//         desc: "Custom-sized containers for bakery and food products. FDA compliant.",
//       },
//       {
//         name: "Clamshells",
//         desc: "Hinged containers for takeaway and packaging. Burger and sandwich friendly.",
//       },
//       {
//         name: "Serving Platters",
//         desc: "Large platters for events and gatherings. Elegant presentation.",
//       },
//       {
//         name: "Disposable Plates",
//         desc: "Heavy-duty plates for restaurant and catering use. Compostable.",
//       },
//       {
//         name: "Compartment Trays",
//         desc: "Multi-section trays for diverse food items. Airline approved.",
//       },
//       {
//         name: "Bio-plates",
//         desc: "Premium quality compostable dining solutions. Restaurant grade.",
//       },
//     ],
//     features: [
//       "100% natural areca palm leaves",
//       "No toxic chemicals or processing",
//       "Microwave and oven safe up to 200°C",
//       "USDA certified organic and compostable",
//       "Food-grade quality",
//       "Handmade from renewable resources",
//     ],
//   },
//   {
//     name: "Coco Peat (Coir Pith)",
//     description: "Natural Growing Medium for Sustainable Agriculture Coco Peat is a 100% natural, eco‐friendly by‐product of coconut husk processing. It is widely used as a soil conditioner and growing medium due to its excellent water retention, aeration, and sustainability.",
//     image: "/kraft-paper-boxes-biodegradable-packaging-sustaina.jpg",
//     galleryImages: [
//       "/biodegradable-packaging-kraft-paper-sustainable.jpg",
//       "/kraft-paper-boxes-biodegradable-packaging-sustaina.jpg",
//     ],
//     items: [
//       {
//         name: "Kraft Paper Bags",
//         desc: "Durable bags for retail and grocery use. Custom printing available.",
//       },
//       {
//         name: "Eco Boxes",
//         desc: "Custom-sized corrugated boxes for shipping. Fully recyclable.",
//       },
//       {
//         name: "Corrugated Trays",
//         desc: "Protective packaging for product shipment. Impact resistant.",
//       },
//       {
//         name: "Biodegradable Packaging",
//         desc: "Fully compostable packaging materials. Food-safe options.",
//       },
//       {
//         name: "Kraft Paper Packaging",
//         desc: "Premium kraft paper for wrapping and lining. Moisture resistant.",
//       },
//       {
//         name: "Natural Fiber Boxes",
//         desc: "Boxes made from natural agricultural waste. Eco-conscious choice.",
//       },
//       {
//         name: "Sustainable Liners",
//         desc: "Compostable liners for packaging and storage. BPI certified.",
//       },
//       {
//         name: "Eco Cushioning",
//         desc: "Natural fiber padding for fragile items. Protective and green.",
//       },
//       {
//         name: "Paper Packaging",
//         desc: "Recyclable and biodegradable paper materials. Bulk discounts.",
//       },
//       {
//         name: "Compostable Materials",
//         desc: "End-of-life compostable packaging solutions. Industrial grade.",
//       },
//     ],
//     features: [
//       "Excellent Water Retention (8–10 times its weight)",
//       "High Porosity & Aeration for strong root development",
//       "pH Neutral (5.5–6.5) suitable for most crops",
//       "Low EC / Washed & Buffered Options Available",
//       "Eco‐Friendly & Renewable",
//       "Certified sustainable materials",
//     ],
//   },
//   {
//     name: "Coir Geotextiles (GEO COIR / COIR MATS)",
//     description: "Coir Geotextiles are biodegradable fabrics made from natural coconut fibre. They are widely used for soil stabilization, erosion control, slope protection, riverbanks, embankments,road works, and landscaping projects.",
//     image: "/kraft-paper-boxes-biodegradable-packaging-sustaina.jpg",
//     galleryImages: [
//       "/biodegradable-packaging-kraft-paper-sustainable.jpg",
//       "/kraft-paper-boxes-biodegradable-packaging-sustaina.jpg",
//     ],
//     items: [
//       {
//         name: "Kraft Paper Bags",
//         desc: "Durable bags for retail and grocery use. Custom printing available.",
//       },
//       {
//         name: "Eco Boxes",
//         desc: "Custom-sized corrugated boxes for shipping. Fully recyclable.",
//       },
//       {
//         name: "Corrugated Trays",
//         desc: "Protective packaging for product shipment. Impact resistant.",
//       },
//       {
//         name: "Biodegradable Packaging",
//         desc: "Fully compostable packaging materials. Food-safe options.",
//       },
//       {
//         name: "Kraft Paper Packaging",
//         desc: "Premium kraft paper for wrapping and lining. Moisture resistant.",
//       },
//       {
//         name: "Natural Fiber Boxes",
//         desc: "Boxes made from natural agricultural waste. Eco-conscious choice.",
//       },
//       {
//         name: "Sustainable Liners",
//         desc: "Compostable liners for packaging and storage. BPI certified.",
//       },
//       {
//         name: "Eco Cushioning",
//         desc: "Natural fiber padding for fragile items. Protective and green.",
//       },
//       {
//         name: "Paper Packaging",
//         desc: "Recyclable and biodegradable paper materials. Bulk discounts.",
//       },
//       {
//         name: "Compostable Materials",
//         desc: "End-of-life compostable packaging solutions. Industrial grade.",
//       },
//     ],
//     features: [
//       "100% Natural &amp; Biodegradable",
//       "High Tensile Strength",
//       "Excellent Water Absorption",
//       "UV Resistant (Short-term)",
//       "Promotes Vegetation Growth",
//       "Eco-friendly Alternative to Synthetic Geotextiles",
//     ],
//   },
// ]

// export default function Products() {
//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="relative min-h-96 flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 -z-10">
//           <img
//             src="/coir-fiber-products-natural-materials.jpg"
//             alt="Premium eco-friendly products"
//             className="w-full h-full object-cover opacity-40"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95"></div>
//         </div>

//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
//           <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">Our Complete Product Range</h1>
//           <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
//             30+ Premium natural, biodegradable, and sustainable eco-friendly solutions. Export-quality products for
//             every need.
//           </p>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="space-y-24">
//             {productCategories.map((category, idx) => (
//               <div key={idx} className="scroll-mt-20">
//                 <div className="mb-12">
//                   <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">{category.name}</h2>
//                   <p className="text-lg text-foreground/70">{category.description}</p>
//                 </div>

//                 <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="rounded-xl overflow-hidden shadow-xl h-80">
//                     <img
//                       src={category.image || "/placeholder.svg"}
//                       alt={category.name}
//                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     {category.galleryImages.map((img, i) => (
//                       <div
//                         key={i}
//                         className="rounded-lg overflow-hidden shadow-lg h-40 hover:shadow-xl transition-shadow"
//                       >
//                         <img
//                           src={img || "/placeholder.svg"}
//                           alt={`${category.name} gallery ${i + 1}`}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-12">
//                   {category.items.map((item, i) => (
//                     <div
//                       key={i}
//                       className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 rounded-lg p-6 hover:border-primary hover:shadow-md transition-all"
//                     >
//                       <div className="flex items-start gap-3">
//                         <div className="text-primary mt-1 flex-shrink-0 text-xl font-bold">✓</div>
//                         <div>
//                           <p className="font-semibold text-foreground text-lg">{item.name}</p>
//                           <p className="text-sm text-foreground/60 mt-1">{item.desc}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 mb-8 border border-primary/20">
//                   <h3 className="text-2xl font-bold text-foreground mb-6">Product Features</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {category.features.map((feature, i) => (
//                       <div key={i} className="flex items-center gap-3">
//                         <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 flex items-center justify-center">
//                           <span className="text-white font-bold text-sm">✓</span>
//                         </div>
//                         <p className="text-foreground font-medium">{feature}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {idx < productCategories.length - 1 && <hr className="border-t-2 border-secondary/20 my-12" />}
//               </div>
//             ))}
//           </div>

//           {/* Features Section */}
//           <div className="mt-24 bg-primary text-primary-foreground rounded-xl p-12 shadow-lg">
//             <h3 className="text-3xl font-bold mb-8 text-center">Why Our Products Stand Out</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[
//                 "100% Natural Materials",
//                 "Biodegradable & Compostable",
//                 "Handmade Craftsmanship",
//                 "Export Quality Standards",
//                 "Direct Manufacturer Pricing",
//                 "Sustainable Production",
//                 "Eco-Friendly Processing",
//                 "Custom Branding Available",
//               ].map((feature, i) => (
//                 <div key={i} className="flex items-center gap-3">
//                   <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
//                     <span className="text-primary font-bold">✓</span>
//                   </div>
//                   <p className="font-medium">{feature}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5 border-t-2 border-primary/20">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-foreground mb-4">Ready for Wholesale Pricing?</h2>
//           <p className="text-xl text-foreground/70 mb-8">
//             Contact us for bulk orders, custom branding, and special export pricing on all our products
//           </p>
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all hover:shadow-lg"
//           >
//             Request a Quote <ArrowRight size={20} />
//           </Link>
//         </div>
//       </section>
//     </main>
//   )
// }
