import Link from "next/link"
import { ArrowRight, Leaf, Check, Zap, Globe } from "lucide-react"

export default function Home() {
  return (
    <main>
      {/* Hero Section with Image Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 -z-10">
          <img
            src="/hero-eco-products-sustainable-green-background.jpg"
            alt="Eco-friendly sustainable products"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-block">
            <span className="bg-secondary/20 px-6 py-2 rounded-full text-primary font-semibold text-sm">
              ✓ 100% Natural • Handmade • Eco-Certified
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl font-bold text-foreground mb-6 leading-tight">
            Premium Eco-Friendly Products Made Simple
          </h1>

          <p className="text-xl sm:text-2xl text-foreground/70 max-w-3xl mx-auto mb-12">
            Discover sustainable solutions crafted from natural materials. From coir fibre to areca leaf plates and
            biodegradable packaging—all 100% natural, handmade, and export-quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/products"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all hover:shadow-lg flex items-center justify-center gap-2"
            >
              Explore All Products <ArrowRight size={24} />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary text-primary px-10 py-4 rounded-lg font-bold hover:bg-primary/10 transition-all"
            >
              Get Wholesale Quote
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <p className="text-foreground/70">Years Industry Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <p className="text-foreground/70">Premium Products</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-foreground/70">Countries Exported</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Gallery */}
      <section className="py-20 bg-gradient-to-b from-white via-secondary/5 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Product Categories</h2>
            <p className="text-xl text-foreground/70">Handcrafted, natural, and 100% biodegradable solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Coir Products",
                desc: "Natural coir rope, mats, and natural fibres",
                image: "/natural-coir-fiber-rope-mats-eco-friendly.jpg",
              },
              {
                title: "Areca Leaf Products",
                desc: "Eco-friendly plates, bowls, and containers",
                image: "/areca-palm-leaf-plates-bowls-disposable-eco-friend.jpg",
              },
              {
                title: "Eco Packaging",
                desc: "Sustainable kraft and biodegradable materials",
                image: "/kraft-paper-boxes-biodegradable-packaging-sustaina.jpg",
              },
            ].map((cat, i) => (
              <Link key={i} href="/products" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                  <img
                    src={cat.image || "/placeholder.svg"}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-start p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                      <p className="text-white/90">{cat.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Product Showcase */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/coir-fiber-products-natural-materials.jpg",
              "/areca-leaf-disposable-plates-eco-friendly.jpg",
              "/biodegradable-packaging-kraft-paper-sustainable.jpg",
              "/natural-coir-fiber-rope-mats-eco-friendly.jpg",
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-lg h-48 group cursor-pointer">
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Product showcase ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Why Choose ARCATTA GROUP?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Leaf,
                title: "100% Natural Materials",
                desc: "Crafted from pure coconut husk, areca palm leaves, and sustainable sources—zero chemicals.",
              },
              {
                icon: Check,
                title: "Certified Biodegradable",
                desc: "USDA certified organic, compostable, and safe for environment and human health.",
              },
              {
                icon: Zap,
                title: "Premium Quality",
                desc: "Export-grade craftsmanship with rigorous quality control and international standards.",
              },
              {
                icon: Globe,
                title: "Global Export Ready",
                desc: "Direct manufacturer with 50+ countries served and proven logistics expertise.",
              },
              {
                icon: Check,
                title: "Handmade Excellence",
                desc: "Traditional techniques meet modern innovation for superior, unique products.",
              },
              {
                icon: Leaf,
                title: "Sustainable Impact",
                desc: "Support local farmers, reduce waste, and contribute to a healthier planet.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-primary/20 backdrop-blur rounded-xl p-8 border border-primary-foreground/20">
                <item.icon size={32} className="mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-primary-foreground/90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Overview Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Our Complete Product Range</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { category: "Coir", products: "Rope, Mats, Fibre, Grow Bags, Poles, Brushes" },
              { category: "Areca Leaf", products: "Plates, Bowls, Trays, Containers, Clamshells" },
              { category: "Packaging", products: "Kraft Bags, Boxes, Liners, Eco Cushioning" },
              { category: "Custom Solutions", products: "Branding, Private Label, Bulk Orders" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-8 border border-secondary/30 hover:border-primary transition-colors"
              >
                <h3 className="text-2xl font-bold text-primary mb-3">{item.category}</h3>
                <p className="text-foreground/70">{item.products}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Supply Chain?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of businesses worldwide using ARCATTA GROUP's premium eco-friendly solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-secondary text-primary px-10 py-4 rounded-lg font-bold hover:bg-secondary/90 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/products"
              className="border-2 border-primary-foreground text-primary-foreground px-10 py-4 rounded-lg font-bold hover:bg-primary-foreground/10 transition-colors"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
