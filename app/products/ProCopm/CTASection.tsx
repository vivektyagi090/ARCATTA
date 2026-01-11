import Link from "next/link";
import { Sun, ArrowRight, Download } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-green-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-10">
        <Sun size={400} />
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready for Wholesale Pricing?
        </h2>
        <p className="text-green-100 text-xl mb-10 max-w-2xl mx-auto">
          Contact us for bulk orders, custom branding, and special export
          pricing on all our products.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-white text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transform hover:scale-105 transition-all shadow-xl"
          >
            Request a Quote <ArrowRight size={20} />
          </Link>
          <button
            onClick={() => window.open("/catalog.pdf", "_blank")}
            className="inline-flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transform hover:scale-105 transition-all"
          >
            Download Catalog <Download size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}