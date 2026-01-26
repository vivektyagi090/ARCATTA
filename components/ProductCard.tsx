import Link from "next/link"
import { slugify } from "@/lib/slugify"

export default function ProductCard({ product, category }: any) {
  return (
    <Link
      href={`/products/${category}/${slugify(product.name)}`}
      className="group bg-white rounded-2xl border shadow hover:-translate-y-1 transition"
    >
      <img
        src={product.image}
        className="w-full h-56 object-cover rounded-t-2xl"
      />
      <div className="p-5">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-sm text-stone-500 mt-2">{product.desc}</p>
        <span className="text-green-700 text-sm mt-4 inline-block">
          View Details →
        </span>
      </div>
    </Link>
  )
}
