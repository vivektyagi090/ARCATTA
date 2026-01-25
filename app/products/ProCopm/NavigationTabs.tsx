import { CheckCircle2, Factory, Leaf, Sprout } from "lucide-react";
import React, { useState } from "react";

interface NavigationTabsProps {
  categories: Array<{ id: string; name: string }>;
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const getIcon = (id: string, active: boolean) => {
  const className = `transition-all duration-300 ${active ? "scale-110" : ""}`;
  switch (id) {
    case "activeData": 
      return <Factory size={18} className={className} />;
    case "coir":
      return <Factory size={18} className={className} />;
    case "areca":
      return <Leaf size={18} className={className} />;
    case "cashew":
      return <Sprout size={18} className={className} />;
    default:
      return <CheckCircle2 size={18} className={className} />;
  }
};

export default function NavigationTabs({
  categories,
  activeTab,
  setActiveTab,
}: NavigationTabsProps) {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <div className="sticky top-4 z-40 flex justify-center w-full px-4 mb-8 pointer-events-none">
      <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl md:rounded-full p-1.5 md:p-2 pointer-events-auto transition-all duration-500 hover:bg-white/95 hover:shadow-2xl flex items-center gap-1 w-full md:w-auto overflow-x-auto no-scrollbar ring-1 ring-black/5 snap-x snap-mandatory">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          const isHovered = hoveredTab === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              onMouseEnter={() => setHoveredTab(cat.id)}
              onMouseLeave={() => setHoveredTab(null)}
              className={`snap-center relative px-4 md:px-6 py-2.5 rounded-xl md:rounded-full text-sm font-medium transition-all duration-300 flex-shrink-0 flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                isActive
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
              }`}
            >
              {/* Background Pill for Active Tab */}
              {isActive && (
                <span className="absolute inset-0 bg-primary rounded-xl md:rounded-full shadow-md animate-in zoom-in-95 duration-200"></span>
              )}

              {/* Icon */}
              <span className={`relative z-10 flex items-center gap-2 ${isActive ? "text-white" : ""}`}>
                 {getIcon(cat.id, isActive)} 
                 <span className={`whitespace-nowrap ${isActive ? "font-bold" : "font-medium"}`}>{cat.name}</span>
              </span>

              {/* Hover Glow Effect */}
              {!isActive && isHovered && (
                 <span className="absolute inset-0 bg-gray-100/50 rounded-xl md:rounded-full -z-10 animate-in fade-in duration-200"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
