import { CheckCircle2 } from "lucide-react";

interface NavigationTabsProps {
  categories: Array<{ id: string; name: string }>;
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export default function NavigationTabs({ 
  categories, 
  activeTab, 
  setActiveTab 
}: NavigationTabsProps) {
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex md:justify-center space-x-2 md:space-x-8 min-w-max py-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-green-700 text-white shadow-lg shadow-green-700/20"
                  : "text-stone-500 hover:bg-stone-100 hover:text-stone-800"
              }`}
            >
              {activeTab === cat.id && <CheckCircle2 size={16} />}
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}