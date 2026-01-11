
import { ShoppingBag, ChevronRight, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
interface ProductGridProps {
  activeData: {
    items: Array<{
      name: string;
      desc: string;
      image: string;
      applications?: string[];
      specifications?: Record<string, string>;
    }>;
  };
  favoriteProducts: string[];
  setSelectedProduct: (product: any) => void;
  toggleFavorite: (name: string) => void;
}

export default function ProductGrid({ 
  activeData, 
  favoriteProducts, 
  setSelectedProduct, 
  toggleFavorite 
}: ProductGridProps) {
  return (
    <div className="mb-20">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <ShoppingBag className="text-green-600" /> Available Items
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {activeData.items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedProduct(item)}
            className="group bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(item.name);
                }}
                className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
              >
                <Heart
                  size={18}
                  className={
                    favoriteProducts.includes(item.name)
                      ? "fill-red-500 text-red-500"
                      : "text-stone-400"
                  }
                />
              </button>
            </div>

            <div className="flex items-start justify-between mb-2">
              <h4 className="text-lg font-bold text-stone-900">
                {item.name}
              </h4>
              {item.applications && (
                <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-800 rounded">
                  {item.applications.length} uses
                </span>
              )}
            </div>

            <p className="text-sm text-stone-500 leading-relaxed mb-4 line-clamp-2">
              {item.desc}
            </p>

            {item.specifications && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  {Object.entries(item.specifications)
                    .slice(0, 2)
                    .map(([key, value]) => (
                      <span
                        key={key}
                        className="text-xs px-2 py-1 bg-stone-100 text-stone-700 rounded"
                      >
                        {String(value)}
                      </span>
                    ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-green-600 underline decoration-green-300 underline-offset-4 group-hover:text-green-700">
                View details & gallery
              </span>
              <ChevronRight
                size={16}
                className="text-stone-400 group-hover:text-green-600"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// import { ShoppingBag, ChevronRight, Heart } from "lucide-react";

// interface ProductGridProps {
//   activeData: {
//     items: Array<{
//       name: string;
//       desc: string;
//       image: string;
//       applications?: string[];
//       specifications?: Record<string, string>;
//     }>;
//   };
//   favoriteProducts: string[];
//   setSelectedProduct: (product: any) => void;
//   toggleFavorite: (name: string) => void;
// }

// export default function ProductGrid({ 
//   activeData, 
//   favoriteProducts, 
//   setSelectedProduct, 
//   toggleFavorite 
// }: ProductGridProps) {
//   return (
//     <div className="mb-20">
//       <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
//         <ShoppingBag className="text-green-600" /> Available Items
//       </h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {activeData.items.map((item, idx) => (
//           <div
//             key={idx}
//             onClick={() => setSelectedProduct(item)}
//             className="group bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
//           >
//             <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   toggleFavorite(item.name);
//                 }}
//                 className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
//               >
//                 <Heart
//                   size={18}
//                   className={
//                     favoriteProducts.includes(item.name)
//                       ? "fill-red-500 text-red-500"
//                       : "text-stone-400"
//                   }
//                 />
//               </button>
//             </div>

//             <div className="flex items-start justify-between mb-2">
//               <h4 className="text-lg font-bold text-stone-900">
//                 {item.name}
//               </h4>
//               {item.applications && (
//                 <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-800 rounded">
//                   {item.applications.length} uses
//                 </span>
//               )}
//             </div>

//             <p className="text-sm text-stone-500 leading-relaxed mb-4 line-clamp-2">
//               {item.desc}
//             </p>

//             {item.specifications && (
//               <div className="mb-4">
//                 <div className="flex flex-wrap gap-1 mb-2">
//                   {Object.entries(item.specifications)
//                     .slice(0, 2)
//                     .map(([key, value]) => (
//                       <span
//                         key={key}
//                         className="text-xs px-2 py-1 bg-stone-100 text-stone-700 rounded"
//                       >
//                         {String(value)}
//                       </span>
//                     ))}
//                 </div>
//               </div>
//             )}

//             <div className="flex items-center justify-between">
//               <span className="text-xs font-semibold text-green-600 underline decoration-green-300 underline-offset-4 group-hover:text-green-700">
//                 View details & gallery
//               </span>
//               <ChevronRight
//                 size={16}
//                 className="text-stone-400 group-hover:text-green-600"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }