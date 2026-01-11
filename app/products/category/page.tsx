import { productCategories } from "@/app/data/products"
import ProductCard from "@/components/ProductCard"

export default function CategoryPage({ params }: any) {
  const category = productCategories.find(c => c.id === params.category)

  if (!category) return <div>Category not found</div>

  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12">{category.name}</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {category.items.map((item: any) => (
          <ProductCard
            key={item.name}
            product={item}
            category={category.id}
          />
        ))}
      </div>
    </main>
  )
}
