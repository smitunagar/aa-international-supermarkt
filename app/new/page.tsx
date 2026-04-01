import Link from 'next/link'
import PageLayout from '@/components/layout/PageLayout'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'

export const metadata = {
  title: 'New Arrivals | A&A International Supermarkt',
  description: 'Fresh new products just added to our store.',
}

const newProducts = products.filter(p => p.badge === 'new')
const allProducts  = products

export default function NewArrivalsPage() {
  const display = newProducts.length > 0 ? newProducts : allProducts.slice(0, 8)

  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'New Arrivals' }]}>

      {/* Hero */}
      <div className="bg-white border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-saffron-50 border border-saffron-200 rounded-full px-3.5 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 animate-pulse" />
                <span className="text-xs font-semibold text-saffron-600 tracking-wide">Just In</span>
              </div>
              <h1 className="font-display text-3xl lg:text-4xl font-bold text-stone-900">New Arrivals</h1>
              <p className="text-stone-500 text-sm mt-2 max-w-md">
                Freshly sourced and just landed in our store. Be the first to try something new.
              </p>
            </div>
            <Link href="/shop" className="text-sm font-semibold text-forest-700 hover:text-forest-800 transition-colors flex-shrink-0">
              View all products →
            </Link>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {display.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        {/* Notify banner */}
        <div className="mt-14 bg-forest-800 rounded-3xl p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold text-white">Get Notified First</h3>
            <p className="text-sm text-white/60 mt-1.5">
              Subscribe to hear about new products, seasonal arrivals, and exclusive drops.
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 sm:w-56 px-4 py-3 rounded-full bg-white/15 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400/50"
            />
            <button className="flex-shrink-0 bg-saffron-500 hover:bg-saffron-600 text-white font-bold px-5 py-3 rounded-full text-sm transition-colors">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
