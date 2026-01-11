"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const ProductSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { title: "Premium Cashews", img: "/casu/30.png" },
    { title: "Coir Fibre", img: "/coir/all.png" },
    { title: "Areca Plates", img: "/areca-palm-leaf-plates-bowls-disposable-eco-friend.jpg" },
    { title: "Geotext", img: "/coir/geo.png" },
    { title: "Coir Rope", img: "/coir/fibre/image007.png" },
    { title: "Coir Mats", img: "/coir/c1.jpg" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (products.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + (products.length - 3)) % (products.length - 3)
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Our Sustainable Categories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore our range of eco-friendly solutions, from premium natural
          fibers to biodegradable tableware, crafted for a greener tomorrow.
        </p>
      </div>

      {/* TOP ROW: 3 Equal Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* COIR */}
        <div className="relative group h-[450px] overflow-hidden rounded-xl shadow-md">
          <img
            src="/coir/all.png"
            alt="Coir"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white text-3xl font-bold mb-2">Natural Coir</h3>
            <p className="text-white/80 text-sm mb-4">
              Premium grade industrial & garden fibers.
            </p>
            <div className="w-10 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* ARECA LEAF */}
        <div className="relative group h-[450px] overflow-hidden rounded-xl shadow-md">
          <img
            src="/coir/biodegradable-dinnerware-made-from-areca-leaf-sheath.jpg"
            alt="Areca"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white text-3xl font-bold mb-2">
              Areca Tableware
            </h3>
            <p className="text-white/80 text-sm mb-4">
              100% compostable plates and bowls.
            </p>
            <div className="w-10 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* CASHEW */}
        <div className="relative group h-[450px] overflow-hidden rounded-xl shadow-md">
          <img
            src="/casu/24.png"
            alt="Cashew"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white text-3xl font-bold mb-2">
              Premium Cashews
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Export-quality organic cashew nuts.
            </p>
            <div className="w-10 h-1 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* BOTTOM SLIDER SECTION */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-bold text-gray-800 tracking-tight">
            Featured Products
          </h4>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden px-1">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products
              .slice(currentIndex, currentIndex + 4)
              .map((product, index) => (
                <div
                  key={index}
                  className="relative group h-[220px] overflow-hidden rounded-lg bg-gray-100 border border-gray-100 hover:shadow-lg transition-all"
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <h3 className="text-white text-xs md:text-sm font-bold uppercase tracking-widest text-center px-4 py-2 border border-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {product.title}
                    </h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
