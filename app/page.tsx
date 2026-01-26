"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Leaf, Check, Zap, Globe } from "lucide-react";
import ProductSection from "@/app/slider/ProductSection"; // Import the component
import Benefits from "@/app/slider/Benefits";
import ServiceBenefits from "./slider/ServiceBenefits";
/* 🔹 HERO SLIDER DATA */
const slides = [
  {
    image: "/pexels-photo-767240.jpeg",
     title: "Premium Eco-Friendly Products Made Simple",
    description:
      "Discover sustainable solutions crafted from natural materials. From coir fibre to areca leaf plates and biodegradable packaging.",
  },
  {
    image: "/pexels-photo-8513292.jpeg  ",
     title: "Sustainable Packaging for a Greener Future",
    //title: "Premium Eco-Friendly Products Made Simple",
    description:
      "Biodegradable, compostable, and export-quality eco packaging for modern businesses.",
  },
  {
    image: "/h3.png",
    title: "Natural Products Trusted Worldwide",
    description:
      "Handmade coir and areca products exported to 50+ countries with premium quality assurance.",
  },
  {
    image: "/h4.png",
    title: "Sustainably Crafted for a Greener Tomorrow",
    description:
      "Eco-friendly coir and areca products made using traditional techniques and sustainable practices.",
  },
  {
    image: "/h5.png",
    title: "Export-Quality Natural Solutions",
    description:
      "Premium biodegradable products manufactured to meet global quality and compliance standards.",
  },
  {
    image: "/h6.png",
    title: "Nature-Inspired. Globally Trusted.",
    description:
      "Supplying natural, compostable products to businesses across 50+ countries worldwide.",
  },
];
export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];
  return (
    <main>
      {/* Hero Section with Image Background */}

      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* BACKGROUND IMAGE - Full Screen */}
        <div className="absolute inset-0 -z-10">
          <img
            src={slide.image}
            alt="Eco-friendly products"
            className="w-full h-full object-cover"
          />
          {/* VIGNETTE: Darker on the left to make text pop, clear on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          {/* CONTENT BOX: Set to 1/2 width and aligned left */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            {/* THE HIGHLIGHT: A new horizontal accent style */}

            <div className="mb-8 inline-block">
              <span className="bg-secondary/20 px-6 py-2 rounded-full text-primary font-semibold text-sm">
                ✓ 100% Natural • Handmade • Eco-Certified
              </span>
            </div>
            <h1
              key={slide.title}
              className="text-5xl sm:text-7xl font-extrabold text-white mb-6 leading-[1.1] animate-slideUp"
            >
              {slide.title}
            </h1>

            <p
              key={slide.description}
              className="text-lg sm:text-xl text-white/80 max-w-lg mb-10 leading-relaxed animate-slideUp delay-150"
            >
              {slide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/products"
                className="bg-primary text-primary-foreground px-10 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Explore Products <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="backdrop-blur-md border border-white/40 text-white px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-all text-center"
              >
                Wholesale Quote
              </Link>
            </div>

            {/* Modern Slider Indicators */}
            <div className="flex items-end gap-3 h-8">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "h-8 w-1.5 bg-primary"
                      : "h-4 w-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <ProductSection />
      </div>
      {/* 2. Benefits Section (The icons you just asked for) */}
      <Benefits />
      {/* <ServiceBenefits /> */}

    
      {/* Featured Product Gallery */}
      <section className="py-20 bg-gradient-to-b from-white via-secondary/5 to-white">
        {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Product Categories
            </h2>
            <p className="text-xl text-foreground/70">
              Handcrafted, natural, and 100% biodegradable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Coir Products",
                desc: "Natural coir rope, mats, and natural fibres",
                image: "/coir/all.png",
              },
              {
                title: "Areca Leaf Products",
                desc: "Eco-friendly plates, bowls, and containers",
                image:
                  "/areca-palm-leaf-plates-bowls-disposable-eco-friend.jpg",
              },
              {
                title: "Cashew",
                desc: "High-quality raw and processed cashew nuts straight from the farm.",
                image: "/image015.jpg",
              },
            ].map((cat, i) => (
              <Link key={i} href="/products" className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                  <img
                    src={cat.image || "/placeholder.svg"}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent flex items-end justify-start p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {cat.title}
                      </h3>
                      <p className="text-white/90">{cat.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Product Showcase */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          </div> */}
         
        {/* </div> */} 
         {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2+</div>
              <p className="text-foreground/70">Years Industry Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-foreground/70">Premium Products</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-foreground/70">Countries Exported</p>
            </div>
          </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Why Choose ARCATTA GROUP?
          </h2>

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
              <div
                key={i}
                className="bg-primary/20 backdrop-blur rounded-xl p-8 border border-primary-foreground/20"
              >
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
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Our Complete Product Range
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                category: "Coir",
                products: "Rope, Mats, Fibre, Grow Bags, Poles, Brushes",
              },
              {
                category: "Areca Leaf",
                products: "Plates, Bowls, Trays, Containers, Clamshells",
              },
              {
                category: "Cashew",
                products:
                  "High-quality raw and processed cashew nuts straight from the farm.",
              },
              {
                category: "Custom Solutions",
                products: "Branding, Private Label, Bulk Orders",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-8 border border-secondary/30 hover:border-primary transition-colors"
              >
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {item.category}
                </h3>
                <p className="text-foreground/70">{item.products}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of businesses worldwide using ARCATTA GROUP's premium
            eco-friendly solutions
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
  );
}
