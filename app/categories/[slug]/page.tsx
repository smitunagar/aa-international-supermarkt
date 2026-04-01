import { notFound } from 'next/navigation'
import Image from 'next/image'
import PageLayout from '@/components/layout/PageLayout'
import ProductCard from '@/components/ui/ProductCard'
import { categories } from '@/data/categories'
import { products } from '@/data/products'

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return categories.map(c => ({ slug: c.slug }))
}

export function generateMetadata({ params }: Props) {
  const cat = categories.find(c => c.slug === params.slug)
  if (!cat) return {}
  return {
    title: `${cat.name} | A&A International Supermarkt`,
    description: cat.description,
  }
}

export default function CategoryPage({ params }: Props) {
  const cat = categories.find(c => c.slug === params.slug)
  if (!cat) notFound()

  const catProducts = products.filter(p => p.category === cat.slug || p.tags.some(t => cat.name.toLowerCase().includes(t)))
  const display = catProducts.length > 0 ? catProducts : products.slice(0, 4)

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Home',        href: '/' },
        { label: 'Categories',  href: '/categories' },
        { label: cat.name },
      ]}
    >
      {/* Category Hero */}
      <div className="relative overflow-hidden bg-stone-900 h-52 sm:h-64 lg:h-72">
        <Image
          src={cat.image}
          alt={cat.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-14 lg:px-20">
          {cat.badge && (
            <span className="inline-block mb-3 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-saffron-500 text-white w-fit">
              {cat.badge}
            </span>
          )}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {cat.name}
          </h1>
          <p className="mt-2 text-white/65 text-sm max-w-xs">{cat.description}</p>
          <p className="mt-3 text-xs text-saffron-400 font-semibold">{cat.count} products available</p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex items-center justify-between mb-7">
          <h2 className="font-semibold text-stone-800">{display.length} Products</h2>
        </div>
        {display.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {display.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">🫙</p>
            <h3 className="font-semibold text-stone-700">Coming soon</h3>
            <p className="text-sm text-stone-400 mt-1">We&apos;re adding products to this category</p>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
