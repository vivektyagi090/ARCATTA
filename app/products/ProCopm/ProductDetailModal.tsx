"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { X, Share2, Download, Heart, Factory } from "lucide-react";

interface ProductDetailModalProps {
  product: any;
  favoriteProducts: string[];
  onClose: () => void;
  onToggleFavorite: (name: string) => void;
}

export default function ProductDetailModal({ 
  product, 
  favoriteProducts, 
  onClose, 
  onToggleFavorite 
}: ProductDetailModalProps) {
  
  const shareProduct = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.desc,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const downloadProductInfo = () => {
    const content = `
Product: ${product.name}
Description: ${product.desc}

Specifications:
${Object.entries(product.specifications || {})
  .map(([key, value]) => `${key}: ${value}`)
  .join("\n")}

Applications: ${product.applications?.join(", ")}
Certifications: ${product.certifications?.join(", ")}
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${product.name.replace(/\s+/g, "_")}_specifications.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-[99] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
        >
          <X size={24} className="text-stone-800" />
        </button>

        {/* Action Buttons */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <button
            onClick={shareProduct}
            className="p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
          >
            <Share2 size={20} className="text-stone-800" />
          </button>
          <button
            onClick={downloadProductInfo}
            className="p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
          >
            <Download size={20} className="text-stone-800" />
          </button>
          <button
            onClick={() => onToggleFavorite(product.name)}
            className="p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
          >
            <Heart
              size={20}
              className={
                favoriteProducts.includes(product.name)
                  ? "fill-red-500 text-red-500"
                  : "text-stone-800"
              }
            />
          </button>
        </div>

        {/* Modal Image Section */}
        <div className="w-full md:w-1/2 h-96 md:h-auto min-h-[400px] relative bg-stone-100">
          {product.images && product.images.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Zoom]}
              navigation={true}
              pagination={{ clickable: true }}
              zoom={true}
              className="h-full w-full"
              style={
                {
                  "--swiper-navigation-color": "#15803d",
                  "--swiper-pagination-color": "#15803d",
                } as React.CSSProperties
              }
            >
              {product.images.map((img: string, index: number) => (
                <SwiperSlide key={index}>
                  <div className="swiper-zoom-container">
                    <img
                      src={img}
                      alt={`${product.name} - View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Modal Content Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
          <h3 className="text-3xl font-bold text-stone-900 mb-2">
            {product.name}
          </h3>
          <p className="text-stone-600 mb-6 leading-relaxed">
            {product.desc}
          </p>

          {/* Specifications */}
          {product.specifications && (
            <div className="mb-6">
              <h4 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3">
                Specifications
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(product.specifications).map(
                  ([key, value]) => (
                    <div key={key} className="bg-stone-50 p-3 rounded-lg">
                      <div className="text-xs font-semibold text-stone-500 uppercase">
                        {key}
                      </div>
                      <div className="text-sm font-medium text-stone-800">
                        {String(value)}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* Applications */}
          {product.applications && (
            <div className="mb-6">
              <h4 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3">
                Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.applications.map(
                  (app: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                    >
                      {app}
                    </span>
                  )
                )}
              </div>
            </div>
          )}

          {/* Certifications */}
          {product.certifications && (
            <div className="mb-6">
              <h4 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3">
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map(
                  (cert: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-stone-100 text-stone-700 text-xs font-medium rounded"
                    >
                      {cert}
                    </span>
                  )
                )}
              </div>
            </div>
          )}

          {/* Processing Journey */}
          {product.process && (
            <div className="mb-6 bg-stone-50 rounded-2xl p-5 border border-stone-100">
              <h4 className="flex items-center gap-2 text-sm font-bold text-green-700 uppercase tracking-wider mb-4">
                <Factory size={16} /> How it's Processed
              </h4>
              <ul className="space-y-3">
                {product.process?.map(
                  (step: string, index: number) => (
                    <li key={index} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm text-stone-700">{step}</p>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-auto pt-6 border-t border-stone-100 space-y-3">
            <button
              onClick={() =>
                (window.location.href = `/contact?product=${encodeURIComponent(
                  product.name
                )}`)
              }
              className="w-full py-3 bg-green-700 text-white rounded-xl font-semibold hover:bg-green-800 transition-colors"
            >
              Request Custom Quote
            </button>
            <button
              onClick={() => (window.location.href = "/catalog")}
              className="w-full py-3 border-2 border-green-700 text-green-700 rounded-xl font-semibold hover:bg-green-50 transition-colors"
            >
              View Full Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}