// app/products/ProductShowcaseContent.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CategoryHeroSlider from "@/app/products/ProCopm/CategoryHeroSlider";
import NavigationTabs from "@/app/products/ProCopm/NavigationTabs";
import CategoryHeader from "@/app/products/ProCopm/CategoryHeader";
import ProductGrid from "@/app/products/ProCopm/ProductGrid";
import WhyChooseUs from "@/app/products/ProCopm/WhyChooseUs";
import CTASection from "@/app/products/ProCopm/CTASection";
import { productCategories } from "@/app/data/products";

export default function ProductShowcaseContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const categoryParam = searchParams.get("category");
  const initialTab = productCategories.find(c => c.id === categoryParam) 
    ? categoryParam! 
    : productCategories[0].id;

  const [activeTab, setActiveTabState] = useState(initialTab);

  useEffect(() => {
    if (categoryParam && productCategories.some(c => c.id === categoryParam)) {
      setActiveTabState(categoryParam);
    }
  }, [categoryParam]);

  const handleTabChange = (id: string) => {
    setActiveTabState(id);
    router.replace(`/products?category=${id}`, { scroll: false });
  };
  
  const [favoriteProducts, setFavoriteProducts] = useState<string[]>([]);
  
  const activeData = productCategories.find((c) => c.id === activeTab) || productCategories[0];

  return (
    <main className="bg-stone-50 min-h-screen font-sans text-stone-800 selection:bg-green-200">
      <CategoryHeroSlider activeData={activeData} />

      <div className="relative z-40 -mt-8">
         <NavigationTabs
           categories={productCategories}
           activeTab={activeTab}
           setActiveTab={handleTabChange}
         />
      </div>

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 space-y-16">
        <CategoryHeader activeData={activeData} />
        <ProductGrid
          activeData={activeData}
          favoriteProducts={favoriteProducts}
          toggleFavorite={(name) =>
            setFavoriteProducts((prev) =>
              prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
            )
          }
        />
      </section>

      <WhyChooseUs />
      <CTASection />
    </main>
  );
}