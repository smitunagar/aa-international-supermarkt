import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'

export default function BestSellers() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-12">
          <div>
            <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-2">
              Customer Favourites
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-stone-900 leading-tight">
              Best Sellers
            </h2>
            <p className="mt-2 text-stone-500 text-sm max-w-sm">
              The most loved products in our store — tried, tested, and trusted.
            </p>
          </div>
          <Link
            href="/bestsellers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-800 transition-colors group"
          >
            View all products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
