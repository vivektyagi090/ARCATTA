"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
// import HeroSection from "@/app/products/ProCopm/HeroSection"; // Replaced by CategoryHeroSlider
import CategoryHeroSlider from "@/app/products/ProCopm/CategoryHeroSlider";
import NavigationTabs from "@/app/products/ProCopm/NavigationTabs";
import CategoryHeader from "@/app/products/ProCopm/CategoryHeader";
import ProductGrid from "@/app/products/ProCopm/ProductGrid";
// import ProductGallery from "@/app/products/ProCopm/ProductGallery"; // Merged into CategoryHeroSlider
import WhyChooseUs from "@/app/products/ProCopm/WhyChooseUs";
import CTASection from "@/app/products/ProCopm/CTASection";
import { productCategories } from "@/app/data/products";

export default function ProductShowcase() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get active category from URL or default to first one
  const categoryParam = searchParams.get("category");
  // Validate that the param exists in our categories, otherwise fallback
  const initialTab = productCategories.find(c => c.id === categoryParam) 
    ? categoryParam! 
    : productCategories[0].id;

  const [activeTab, setActiveTabState] = useState(initialTab);

  // Sync state with URL param
  useEffect(() => {
    if (categoryParam && productCategories.some(c => c.id === categoryParam)) {
      setActiveTabState(categoryParam);
    }
  }, [categoryParam]);

  const handleTabChange = (id: string) => {
    setActiveTabState(id); // Optimistic update
    router.replace(`/products?category=${id}`, { scroll: false });
  };
  
  const [favoriteProducts, setFavoriteProducts] = useState<string[]>([]);
  
  // We don't need these states anymore as we are routing to a new page
  // const [selectedProduct, setSelectedProduct] = useState<any>(null);
  // const [expandedGallery, setExpandedGallery] = useState(false);
  //// const [zoomImage, setZoomImage] = useState<string | null>(null);

  const activeData =
    productCategories.find((c) => c.id === activeTab) || productCategories[0];

  return (
    <main className="bg-stone-50 min-h-screen font-sans text-stone-800 selection:bg-green-200">
      
      {/* 1. TOP SECTION: Premium 3D Slider Hero */}
      <CategoryHeroSlider activeData={activeData} />

      {/* 2. NAVIGATION: Sticky Tabs */}
      {/* Added negative margin to pull it up slightly if desired, or keep standard */}
      <div className="relative z-40 -mt-8">
         <NavigationTabs
           categories={productCategories}
           activeTab={activeTab}
           setActiveTab={handleTabChange}
         />
      </div>

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 space-y-16">
        
        {/* 3. Category Description */}
        <CategoryHeader activeData={activeData} />

        {/* 4. Product List (Grid) */}
        <ProductGrid
          activeData={activeData}
          favoriteProducts={favoriteProducts}
          toggleFavorite={(name) =>
            setFavoriteProducts((prev) =>
              prev.includes(name)
                ? prev.filter((n) => n !== name)
                : [...prev, name]
            )
          }
        />

      </section>

      <WhyChooseUs />
      <CTASection />

      {/* Modals Removed */}
    </main>
  );
}
