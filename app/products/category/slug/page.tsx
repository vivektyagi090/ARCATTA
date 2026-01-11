import { productCategories } from "@/app/data/products"
import ProductGallery from "@/components/ProductGallery"
import ProcessTimeline from "@/components/ProcessTimeline"
import SectionTitle from "@/components/SectionTitle"
import { slugify } from "@/lib/slugify"
import { Leaf, Truck } from "lucide-react"

export default function ProductDetailPage({ params }: any) {
  const category = productCategories.find(c => c.id === params.category)
  const product = category?.items.find(
    p => slugify(p.name) === params.slug
  )

  if (!product) return <div>Product not found</div>

  return (
    <main className="bg-stone-50">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-14">
        <ProductGallery images={product.images} />

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-stone-600 mb-6">{product.desc}</p>

          <div className="flex gap-4 mb-8">
            <span className="badge"><Leaf /> Eco Friendly</span>
            <span className="badge"><Truck /> Export Ready</span>
          </div>

          <a
            href="/contact"
            className="inline-block bg-green-700 text-white px-8 py-4 rounded-xl font-semibold"
          >
            Enquire Now
          </a>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle title="Manufacturing Process" />
          <ProcessTimeline steps={product.process} />
        </div>
      </section>
    </main>
  )
}
