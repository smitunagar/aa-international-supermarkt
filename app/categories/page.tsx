import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import PageLayout from '@/components/layout/PageLayout'
import { categories } from '@/data/categories'

export const metadata = {
  title: 'Categories | A&A International Supermarkt',
  description: 'Browse all product categories — spices, rice, dal, snacks, dairy and more.',
}

export default function CategoriesPage() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Categories' }]}>

      {/* Page Header */}
      <div className="border-b border-warm-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-2">Explore</p>
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-stone-900">All Categories</h1>
          <p className="text-stone-500 text-sm mt-2">Discover the full range of authentic products we carry</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {cat.badge && (
                  <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-saffron-500 text-white">
                    {cat.badge}
                  </span>
                )}
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-stone-800 group-hover:text-forest-700 transition-colors">{cat.name}</h2>
                  <p className="text-xs text-stone-400 mt-0.5">{cat.description}</p>
                  <p className="text-xs font-semibold text-saffron-600 mt-1">{cat.count} products</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-warm-100 group-hover:bg-forest-700 flex items-center justify-center transition-all duration-200 flex-shrink-0 ml-3">
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
