import Link from "next/link"
import { ArrowRight } from "lucide-react"

const productCategories = [
  {
    name: "Coir Products",
    description: "Natural coir-based products for various applications",
    image: "/natural-coir-fiber-rope-mats-eco-friendly.jpg",
    galleryImages: ["/coir-fiber-products-natural-materials.jpg", "/natural-coir-fiber-rope-mats-eco-friendly.jpg"],
    items: [
      {
        name: "Coir Rope",
        desc: "Strong, durable ropes for industrial and agricultural use. Available in various thicknesses.",
      },
      {
        name: "Coir Mats",
        desc: "Premium door and floor mats made from natural coir. Anti-slip and weather-resistant.",
      },
      {
        name: "Door Mats",
        desc: "Decorative and functional entrance mats. Custom sizes available.",
      },
      {
        name: "Coir Fibre",
        desc: "Raw coir fiber for manufacturing and cushioning. Bulk quantities available.",
      },
      {
        name: "Coco Peat Blocks",
        desc: "Compressed peat for gardening and horticulture. Eco-friendly growing medium.",
      },
      {
        name: "Grow Bags",
        desc: "Biodegradable bags for plant cultivation. Sustainable farming solution.",
      },
      {
        name: "Geotextiles",
        desc: "Natural fiber mats for erosion control. Environmental protection.",
      },
      {
        name: "Coir Poles",
        desc: "Plant support poles made from coconut husk. Long-lasting and natural.",
      },
      {
        name: "Brushes",
        desc: "Handmade brushes with natural bristles. Various sizes for different uses.",
      },
      {
        name: "Industrial Ropes",
        desc: "Heavy-duty coir ropes for industrial applications. Export quality.",
      },
    ],
    features: [
      "100% natural coconut husk fiber",
      "Fully biodegradable and compostable",
      "Non-toxic and safe for plants",
      "Weather-resistant and durable",
      "Affordable bulk pricing",
      "Handmade with precision",
    ],
  },
  {
    name: "Areca Leaf Products",
    description: "Premium areca leaf dining and food containers",
    image: "/areca-palm-leaf-plates-bowls-disposable-eco-friend.jpg",
    galleryImages: [
      "/areca-leaf-disposable-plates-eco-friendly.jpg",
      "/areca-palm-leaf-plates-bowls-disposable-eco-friend.jpg",
    ],
    items: [
      {
        name: "Areca Leaf Plates",
        desc: '100% biodegradable dining plates in various sizes (6", 8", 10", 12").',
      },
      {
        name: "Areca Leaf Bowls",
        desc: "Sturdy bowls perfect for food service and catering. Microwave safe.",
      },
      {
        name: "Areca Leaf Trays",
        desc: "Multi-compartment trays for organized food service. Perfect for meal prep.",
      },
      {
        name: "Lunch Boxes",
        desc: "Sealed lunch containers made from areca leaves. Leak-proof design.",
      },
      {
        name: "Food Containers",
        desc: "Custom-sized containers for bakery and food products. FDA compliant.",
      },
      {
        name: "Clamshells",
        desc: "Hinged containers for takeaway and packaging. Burger and sandwich friendly.",
      },
      {
        name: "Serving Platters",
        desc: "Large platters for events and gatherings. Elegant presentation.",
      },
      {
        name: "Disposable Plates",
        desc: "Heavy-duty plates for restaurant and catering use. Compostable.",
      },
      {
        name: "Compartment Trays",
        desc: "Multi-section trays for diverse food items. Airline approved.",
      },
      {
        name: "Bio-plates",
        desc: "Premium quality compostable dining solutions. Restaurant grade.",
      },
    ],
    features: [
      "100% natural areca palm leaves",
      "No toxic chemicals or processing",
      "Microwave and oven safe up to 200°C",
      "USDA certified organic and compostable",
      "Food-grade quality",
      "Handmade from renewable resources",
    ],
  },
  {
    name: "Eco Packing Materials",
    description: "Sustainable and biodegradable packaging solutions",
    image: "/kraft-paper-boxes-biodegradable-packaging-sustaina.jpg",
    galleryImages: [
      "/biodegradable-packaging-kraft-paper-sustainable.jpg",
      "/kraft-paper-boxes-biodegradable-packaging-sustaina.jpg",
    ],
    items: [
      {
        name: "Kraft Paper Bags",
        desc: "Durable bags for retail and grocery use. Custom printing available.",
      },
      {
        name: "Eco Boxes",
        desc: "Custom-sized corrugated boxes for shipping. Fully recyclable.",
      },
      {
        name: "Corrugated Trays",
        desc: "Protective packaging for product shipment. Impact resistant.",
      },
      {
        name: "Biodegradable Packaging",
        desc: "Fully compostable packaging materials. Food-safe options.",
      },
      {
        name: "Kraft Paper Packaging",
        desc: "Premium kraft paper for wrapping and lining. Moisture resistant.",
      },
      {
        name: "Natural Fiber Boxes",
        desc: "Boxes made from natural agricultural waste. Eco-conscious choice.",
      },
      {
        name: "Sustainable Liners",
        desc: "Compostable liners for packaging and storage. BPI certified.",
      },
      {
        name: "Eco Cushioning",
        desc: "Natural fiber padding for fragile items. Protective and green.",
      },
      {
        name: "Paper Packaging",
        desc: "Recyclable and biodegradable paper materials. Bulk discounts.",
      },
      {
        name: "Compostable Materials",
        desc: "End-of-life compostable packaging solutions. Industrial grade.",
      },
    ],
    features: [
      "100% recyclable and biodegradable",
      "No plastic or harmful additives",
      "Custom printing and branding available",
      "Cost-effective bulk pricing",
      "International shipping capability",
      "Certified sustainable materials",
    ],
  },
]

export default function Products() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/coir-fiber-products-natural-materials.jpg"
            alt="Premium eco-friendly products"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">Our Complete Product Range</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            30+ Premium natural, biodegradable, and sustainable eco-friendly solutions. Export-quality products for
            every need.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {productCategories.map((category, idx) => (
              <div key={idx} className="scroll-mt-20">
                <div className="mb-12">
                  <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">{category.name}</h2>
                  <p className="text-lg text-foreground/70">{category.description}</p>
                </div>

                <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl overflow-hidden shadow-xl h-80">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {category.galleryImages.map((img, i) => (
                      <div
                        key={i}
                        className="rounded-lg overflow-hidden shadow-lg h-40 hover:shadow-xl transition-shadow"
                      >
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`${category.name} gallery ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-12">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 rounded-lg p-6 hover:border-primary hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1 flex-shrink-0 text-xl font-bold">✓</div>
                        <div>
                          <p className="font-semibold text-foreground text-lg">{item.name}</p>
                          <p className="text-sm text-foreground/60 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 mb-8 border border-primary/20">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Product Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">✓</span>
                        </div>
                        <p className="text-foreground font-medium">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {idx < productCategories.length - 1 && <hr className="border-t-2 border-secondary/20 my-12" />}
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-24 bg-primary text-primary-foreground rounded-xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-8 text-center">Why Our Products Stand Out</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "100% Natural Materials",
                "Biodegradable & Compostable",
                "Handmade Craftsmanship",
                "Export Quality Standards",
                "Direct Manufacturer Pricing",
                "Sustainable Production",
                "Eco-Friendly Processing",
                "Custom Branding Available",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <p className="font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5 border-t-2 border-primary/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready for Wholesale Pricing?</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Contact us for bulk orders, custom branding, and special export pricing on all our products
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all hover:shadow-lg"
          >
            Request a Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}
