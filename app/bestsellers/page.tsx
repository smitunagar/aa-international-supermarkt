import Link from 'next/link'
import PageLayout from '@/components/layout/PageLayout'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'

export const metadata = {
  title: 'Best Sellers | A&A International Supermarkt',
  description: 'Our most loved and top-rated products, trusted by thousands of customers.',
}

const sorted = [...products].sort((a, b) => b.reviews - a.reviews)

export default function BestSellersPage() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Best Sellers' }]}>

      {/* Page Header */}
      <div className="bg-white border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-2">Customer Favourites</p>
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-stone-900">Best Sellers</h1>
          <p className="text-stone-500 text-sm mt-2">The most loved products in our store — tried, tested, and trusted by thousands.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

        {/* Top 3 podium */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {sorted.slice(0, 3).map((p, i) => (
            <Link
              key={p.id}
              href={`/products/${p.slug}`}
              className={`relative bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 flex items-center gap-4 ${i === 0 ? 'ring-2 ring-saffron-400' : ''}`}
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-black text-sm ${
                i === 0 ? 'bg-saffron-400 text-white' : i === 1 ? 'bg-stone-200 text-stone-600' : 'bg-warm-200 text-stone-500'
              }`}>
                #{i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-stone-400 font-medium">{p.brand}</p>
                <p className="text-sm font-semibold text-stone-800 line-clamp-1">{p.name}</p>
                <p className="text-sm font-bold text-forest-700 mt-0.5">€{p.price.toFixed(2)}</p>
              </div>
              <p className="text-xs text-stone-400 flex-shrink-0">{p.reviews} reviews</p>
            </Link>
          ))}
        </div>

        {/* Full Grid */}
        <h2 className="font-semibold text-stone-700 mb-6 text-lg">All Best Sellers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {sorted.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        <div className="mt-10 text-center">
          <Link href="/shop" className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all hover:shadow-md">
            Browse All 2,000+ Products
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
