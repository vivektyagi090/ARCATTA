import { Globe, Maximize2 } from "lucide-react";

interface CategoryHeaderProps {
  activeData: {
    name: string;
    tagline: string;
    description: string;
    image: string;
    certifications?: string[];
    exportMarkets?: string[];
  };
}

export default function CategoryHeader({ activeData }: CategoryHeaderProps) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-stone-900">
          {activeData.name}
        </h2>
        <p className="text-xl text-green-700 font-medium">
          {activeData.tagline}
        </p>
        <p className="text-lg text-stone-600 leading-relaxed">
          {activeData.description}
        </p>

        {/* Certifications */}

        {/* {activeData.certifications && (
          <div className="pt-4">
            <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">
              Certifications
            </h4>
            
            <div className="flex flex-wrap gap-2">
              {activeData.certifications.map((cert, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )} */}

        {/* Export Markets */}
        {activeData.exportMarkets && (
          <div className="pt-4">
            <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">
              Export Markets
            </h4>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-stone-400" />
              <div className="flex flex-wrap gap-2">
                {activeData.exportMarkets.map((market, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-stone-100 text-stone-700 text-xs font-medium rounded"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Featured Image */}
      <div className="relative group rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
        <img
          src={activeData.image}
          alt={activeData.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
        <button
          onClick={() => {/* Will be handled by parent */}}
          className="absolute bottom-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
        >
          <Maximize2 size={20} className="text-stone-800" />
        </button>
      </div>
    </div>
  );
}