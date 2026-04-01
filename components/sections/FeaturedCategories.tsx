import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/data/categories'
import CategoryCard from '@/components/ui/CategoryCard'

export default function FeaturedCategories() {
  return (
    <section className="py-16 lg:py-24 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-12">
          <div>
            <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-2">
              Explore the Store
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-stone-900 leading-tight">
              Shop by Category
            </h2>
            <p className="mt-2 text-stone-500 text-sm max-w-sm">
              From fragrant spices to wholesome staples — find everything your kitchen needs.
            </p>
          </div>
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-800 transition-colors group"
          >
            View all categories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
