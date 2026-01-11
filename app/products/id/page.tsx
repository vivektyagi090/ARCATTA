"use client";

import { useParams, useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import { ArrowLeft, Share2, Download, Heart, Factory } from "lucide-react";
import { productCategories } from "@/app/data/products";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const [category, setCategory] = useState<any>(null);
  const [favoriteProducts, setFavoriteProducts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get product slug from URL params
    const productSlug = params.productId as string;
    console.log("Looking for product with slug:", productSlug);
    
    // Find the product from your data
    let foundProduct = null;
    let foundCategory = null;
    
    for (const cat of productCategories) {
      const prod = cat.items.find((item: any) => {
        // Create slug from product name
        const itemSlug = item.name.toLowerCase().replace(/\s+/g, '-');
        console.log(`Comparing: ${itemSlug} with ${productSlug}`);
        return itemSlug === productSlug;
      });
      
      if (prod) {
        foundProduct = prod;
        foundCategory = cat;
        console.log("Found product:", prod.name);
        break;
      }
    }
    
    setProduct(foundProduct);
    setCategory(foundCategory);
    setLoading(false);
    
    // Load favorites from localStorage
    if (typeof window !== 'undefined') {
      const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setFavoriteProducts(savedFavorites);
    }
  }, [params.productId]);

  const toggleFavorite = (name: string) => {
    const newFavorites = favoriteProducts.includes(name)
      ? favoriteProducts.filter(n => n !== name)
      : [...favoriteProducts, name];
    
    setFavoriteProducts(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  // Add a helper function to find all products (for debugging)
  useEffect(() => {
    console.log("All available products:");
    productCategories.forEach(cat => {
      console.log(`Category: ${cat.name}`);
      cat.items.forEach(item => {
        const slug = item.name.toLowerCase().replace(/\s+/g, '-');
        console.log(`  - ${item.name} (slug: ${slug})`);
      });
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-stone-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <h2 className="text-2xl font-bold text-stone-700 mb-4">Product not found</h2>
          <p className="text-stone-600 mb-6">
            The product you're looking for doesn't exist or has been moved.
          </p>
          <button
            onClick={() => router.push('/products')}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Browse All Products
          </button>
        </div>
      </div>
    );
  }

  // ... rest of your component remains the same
  return (
    <main className="bg-stone-50 min-h-screen font-sans text-stone-800">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to {category?.name || 'Products'}</span>
          </button>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
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
              }}
              className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              title="Share"
            >
              <Share2 size={20} className="text-stone-600" />
            </button>
            <button
              onClick={() => {
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
              }}
              className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              title="Download Info"
            >
              <Download size={20} className="text-stone-600" />
            </button>
            <button
              onClick={() => toggleFavorite(product.name)}
              className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              title="Add to Favorites"
            >
              <Heart
                size={20}
                className={
                  favoriteProducts.includes(product.name)
                    ? "fill-red-500 text-red-500"
                    : "text-stone-600"
                }
              />
            </button>
          </div>
        </div>
      </header>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-8">
          <div className="grid md:grid-cols-2">
            {/* Left Column - Images */}
            <div className="p-4 md:p-6 bg-stone-100">
              <div className="rounded-xl overflow-hidden">
                {product.images && product.images.length > 0 ? (
                  <Swiper
                    modules={[Navigation, Pagination, Zoom]}
                    navigation={true}
                    pagination={{ clickable: true }}
                    zoom={true}
                    className="h-[400px] md:h-[500px]"
                    style={
                      {
                        "--swiper-navigation-color": "#15803d",
                        "--swiper-pagination-color": "#15803d",
                      } as React.CSSProperties
                    }
                  >
                    {product.images.map((img: string, index: number) => (
                      <SwiperSlide key={index}>
                        <div className="swiper-zoom-container h-full">
                          <img
                            src={img}
                            alt={`${product.name} - View ${index + 1}`}
                            className="w-full h-full object-contain bg-white"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[400px] md:h-[500px] object-contain bg-white"
                  />
                )}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="p-6 md:p-8">
              {category && (
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
                  {category.name}
                </span>
              )}
              
              <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                {product.name}
              </h1>
              
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                {product.desc}
              </p>

              {/* Specifications */}
              {product.specifications && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-stone-800 mb-4">
                    Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div key={key} className="bg-stone-50 p-3 rounded-lg">
                          <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">
                            {key}
                          </div>
                          <div className="text-base font-medium text-stone-900">
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
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-stone-800 mb-4">
                    Applications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map(
                      (app: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-green-100 text-green-800 text-sm rounded-full font-medium"
                        >
                          {app}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() =>
                    router.push(`/contact?product=${encodeURIComponent(product.name)}`)
                  }
                  className="w-full py-3.5 bg-green-700 text-white rounded-xl font-semibold hover:bg-green-800 transition-colors text-lg"
                >
                  Request Custom Quote
                </button>
                <button
                  onClick={() => router.push('/products')}
                  className="w-full py-3.5 border-2 border-green-700 text-green-700 rounded-xl font-semibold hover:bg-green-50 transition-colors text-lg"
                >
                  View All Products
                </button>
              </div>
            </div>
          </div>

          {/* Additional Sections */}
          {product.process && product.process.length > 0 && (
            <div className="p-6 md:p-8 border-t border-stone-100">
              <h3 className="flex items-center gap-2 text-2xl font-bold text-green-700 mb-6">
                <Factory size={24} /> Manufacturing Process
              </h3>
              <div className="space-y-4">
                {product.process.map((step: string, index: number) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-stone-800 mb-1">
                        Step {index + 1}
                      </h4>
                      <p className="text-stone-600">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}