import { Leaf } from "lucide-react";

interface HeroSectionProps {
  activeData: {
    name: string;
    tagline: string;
    heroImage: string;
  };
}

export default function HeroSection({ activeData }: HeroSectionProps) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={activeData.heroImage}
          alt="Eco Friendly Background"
          className="w-full h-full object-cover brightness-[0.6]"
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-md mb-6">
          <Leaf size={16} className="text-green-400" />
          <span className="text-sm font-medium tracking-wide text-green-100">
            100% SUSTAINABLE & ORGANIC
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          {activeData.name}
        </h1>
        <p className="text-xl md:text-2xl text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
          {activeData.tagline}
        </p>
      </div>
    </section>
  );
}