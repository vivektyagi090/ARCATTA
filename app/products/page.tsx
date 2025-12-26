"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Leaf, ShieldCheck, Sun, Recycle, Package, CheckCircle2 ,IndianRupee  , Truck} from "lucide-react"

// Updated Data with Real Placeholder Images for Visualization
const productCategories = [
  {
    id: "coir",
    name: "Coir Products",
    tagline: "Nature's Strength, Woven for You",
    description: "Natural coir-based products for industrial, agricultural, and domestic applications.",
    image: "/coir-fiber-products-natural-materials.jpg", // Coir rope/texture
    galleryImages: [
      "/eco-friendly-coir-products-collection.jpg",
      "/hero-eco-products-sustainable-green-background.jpg",
    ],
    items: [
      { name: "Coir Rope", desc: "Strong, durable ropes for industrial use." },
      { name: "Coir Mats", desc: "Premium anti-slip door and floor mats." },
      { name: "Door Mats", desc: "Decorative and functional entrance mats." },
      { name: "Coir Fibre", desc: "Raw coir fiber for manufacturing." },
      { name: "Coco Peat Blocks", desc: "Compressed peat for gardening." },
      { name: "Grow Bags", desc: "Biodegradable bags for cultivation." },
      { name: "Geotextiles", desc: "Natural fiber mats for erosion control." },
      { name: "Coir Poles", desc: "Plant support poles made from husk." },
      { name: "Brushes", desc: "Handmade brushes with natural bristles." },
      { name: "Industrial Ropes", desc: "Heavy-duty ropes, export quality." },
    ],
    features: ["100% natural fiber", "Biodegradable", "Weather-resistant", "Handmade precision"],
  },
  {
    id: "areca",
    name: "Areca Leaf Products",
    tagline: "Sustainable Dining, Elegant Design",
    description: "Premium dining and food containers made from fallen areca palm leaves.",
    image: "/areca-palm-leaf-plates-bowls-disposable-eco-friend.jpg", // Eco plates
    galleryImages: [
      "/areca-leaf-food-service-plates.jpg",
      "/areca-leaf-disposable-plates-eco-friendly.jpg",
    ],
    items: [
      { name: "Areca Leaf Plates", desc: "Biodegradable dining plates (6-12\")." },
      { name: "Areca Leaf Bowls", desc: "Sturdy bowls for food service." },
      { name: "Areca Leaf Trays", desc: "Multi-compartment trays." },
      { name: "Lunch Boxes", desc: "Sealed, leak-proof containers." },
      { name: "Food Containers", desc: "FDA compliant bakery containers." },
      { name: "Clamshells", desc: "Hinged containers for takeaways." },
      { name: "Serving Platters", desc: "Elegant platters for events." },
      { name: "Disposable Plates", desc: "Heavy-duty restaurant grade." },
      { name: "Compartment Trays", desc: "Airline approved trays." },
      { name: "Bio-plates", desc: "Premium compostable solutions." },
    ],
    features: ["Microwave safe", "Chemical free", "Compostable", "Oven safe to 200°C"],
  },
  {
    id: "peat",
    name: "Coco Peat",
    tagline: "The Perfect Growing Medium",
    description: "A 100% natural soil conditioner with excellent water retention and aeration.",
    image: "/image008.jpg", // Soil/Peat
    galleryImages: [
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=600&auto=format&fit=crop",
    ],
    items: [
      { name: "Kraft Paper Bags", desc: "Durable retail bags." },
      { name: "Eco Boxes", desc: "Recyclable shipping boxes." },
      { name: "Corrugated Trays", desc: "Protective shipment packaging." },
      { name: "Biodegradable Pack", desc: "Food-safe compostable materials." },
      { name: "Kraft Packaging", desc: "Moisture resistant wrapping." },
      { name: "Natural Boxes", desc: "Agri-waste based boxes." },
      { name: "Sustainable Liners", desc: "BPI certified liners." },
      { name: "Eco Cushioning", desc: "Natural fiber padding." },
      { name: "Paper Packaging", desc: "Bulk recyclable materials." },
      { name: "Compostable Mats", desc: "Industrial grade solutions." },
    ],
    features: ["High Water Retention", "High Aeration", "pH Neutral", "Renewable Resource"],
  },
  {
    id: "geo",
    name: "Geotextiles",
    tagline: "Earth Protection & Stabilization",
    description: "Biodegradable fabrics for soil stabilization, erosion control, and landscaping.",
    image: "/image001.png", // Fabric/Texture
    galleryImages: [
      "/image002.png",
      "/image005.png",
    ],
    items: [
      { name: "Erosion Mats", desc: "Prevents soil shifting." },
      { name: "Slope Protection", desc: "Stabilizes steep terrains." },
      { name: "Riverbank Mesh", desc: "Water flow protection." },
      { name: "Road Works", desc: "Under-layer for roads." },
      { name: "Landscaping", desc: "Garden foundation layers." },
      { name: "Weed Control", desc: "Natural weed barrier." },
      { name: "Veg. Carriers", desc: "Promotes plant growth." },
      { name: "Embankments", desc: "Reinforces structural soil." },
      { name: "Drainage Filters", desc: "Allows water, stops soil." },
      { name: "Eco-Mesh", desc: "Plastic-free alternative." },
    ],
    features: ["High Tensile Strength", "UV Resistant", "Promotes Vegetation", "100% Biodegradable"],
  },
]

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(productCategories[0].id)
  
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
            Discover our premium range of Coir, Areca, and Eco-friendly agricultural products. Export quality, delivered globally.
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
                  className="group bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-green-700 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <ArrowRight size={18} />
                  </div>
                  <h4 className="text-lg font-bold text-stone-900 mb-2">{item.name}</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
        </div>

        {/* Gallery Strip */}
        <div className="grid grid-cols-2 gap-4 h-64 md:h-80 rounded-3xl overflow-hidden">
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
      </section>

      {/* 4. Why Choose Us (General Features) */}
      <section className="py-24 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-stone-400">Export-quality standards with a commitment to the planet.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Consistent Quality", desc: "Premium raw materials processed with strict quality checks to ensure uniformity in every shipment." },
              { icon: IndianRupee , title: "Competitive Pricing", desc: "Direct manufacturer access eliminates middlemen, ensuring the best wholesale rates for bulk orders." },
              { icon: Truck, title: "Reliable Supply Chain", desc: "Streamlined logistics and inventory management guarantee on-time delivery for high-volume demands." },
              { icon: ShieldCheck, title: "Export Experience", desc: "Extensive expertise in international shipping, handling customs, and meeting global compliance standards." },
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

    </main>
  )
}




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
