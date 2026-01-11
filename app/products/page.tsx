"use client";

import { useState } from "react";
import HeroSection from "@/app/products/ProCopm/HeroSection";
import NavigationTabs from "@/app/products/ProCopm/NavigationTabs";
import CategoryHeader from "@/app/products/ProCopm/CategoryHeader";
import ProductGrid from "@/app/products/ProCopm/ProductGrid";
import ProductGallery from "@/app/products/ProCopm/ProductGallery";
import WhyChooseUs from "@/app/products/ProCopm/WhyChooseUs";
import CTASection from "@/app/products/ProCopm/CTASection";
import ProductDetailModal from "@/app/products/ProCopm/ProductDetailModal";
import ExpandedGalleryModal from "@/app/products/ProCopm/ExpandedGalleryModal";
import ZoomModal from "@/app/products/ProCopm/ZoomModal";
import { productCategories } from "@/app/data/products";
import Manufactured from "./manufacturing/page";

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(productCategories[0].id);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [favoriteProducts, setFavoriteProducts] = useState<string[]>([]);
  const [expandedGallery, setExpandedGallery] = useState(false);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const activeData =
    productCategories.find((c) => c.id === activeTab) || productCategories[0];

  return (
    <main className="bg-stone-50 min-h-screen font-sans text-stone-800 selection:bg-green-200">
      <HeroSection activeData={activeData} />

      <NavigationTabs
        categories={productCategories}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <CategoryHeader activeData={activeData} />

        <ProductGrid
          activeData={activeData}
          favoriteProducts={favoriteProducts}
          setSelectedProduct={setSelectedProduct}
          toggleFavorite={(name) =>
            setFavoriteProducts((prev) =>
              prev.includes(name)
                ? prev.filter((n) => n !== name)
                : [...prev, name]
            )
          }
        />

        <ProductGallery
          activeData={activeData}
          setExpandedGallery={setExpandedGallery}
        />
      </section>

     
      <WhyChooseUs />
      <CTASection />

      {expandedGallery && (
        <ExpandedGalleryModal
          activeData={activeData}
          onClose={() => setExpandedGallery(false)}
        />
      )}

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          favoriteProducts={favoriteProducts}
          onClose={() => setSelectedProduct(null)}
          onToggleFavorite={(name) =>
            setFavoriteProducts((prev) =>
              prev.includes(name)
                ? prev.filter((n) => n !== name)
                : [...prev, name]
            )
          }
        />
      )}

      {zoomImage && (
        <ZoomModal image={zoomImage} onClose={() => setZoomImage(null)} />
      )}
    </main>
  );
}
