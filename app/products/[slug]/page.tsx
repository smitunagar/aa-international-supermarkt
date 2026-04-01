import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/data/products'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductGallery from '@/components/product/ProductGallery'
import ProductInfo from '@/components/product/ProductInfo'
import ProductCard from '@/components/ui/ProductCard'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props) {
  const product = products.find(p => p.slug === params.slug)
  if (!product) return {}
  return {
    title: `${product.name} | A&A International Supermarkt`,
    description: product.description,
  }
}

export default function ProductPage({ params }: Props) {
  const product = products.find(p => p.slug === params.slug)
  if (!product) notFound()

  const related = products
    .filter(p => p.id !== product.id)
    .sort((a, b) => (a.category === product.category ? -1 : 1))
    .slice(0, 4)

  const categoryLabel = product.category
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  return (
    <>
      <Header />

      <main className="bg-warm-50 min-h-screen">

        {/* ── Breadcrumb ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-1">
          <nav className="flex items-center gap-1.5 text-sm text-stone-400 flex-wrap">
            <Link href="/" className="hover:text-forest-700 transition-colors">Home</Link>
            <span className="text-stone-300">›</span>
            <Link href={`/categories/${product.category}`} className="hover:text-forest-700 transition-colors capitalize">
              {categoryLabel}
            </Link>
            <span className="text-stone-300">›</span>
            <span className="text-stone-600 font-medium truncate max-w-[200px] sm:max-w-none">{product.name}</span>
          </nav>
        </div>

        {/* ── Product Detail ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-14">
            <ProductGallery product={product} />
            <ProductInfo product={product} />
          </div>
        </section>

        {/* ── Full Description ── */}
        {product.fullDescription && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-warm-200">
            <h2 className="text-lg font-bold text-stone-900 mb-3">About This Product</h2>
            <p className="text-sm text-stone-500 leading-relaxed max-w-3xl">{product.fullDescription}</p>
          </section>
        )}

        {/* ── Bottom Banner ── */}
        <section className="bg-forest-900 flex items-stretch overflow-hidden mt-8 min-h-[220px]">
          <div className="flex-1 flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-14">
            <p className="text-saffron-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">A&A International Supermarkt</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white uppercase leading-[1.1]">
              Taste the<br />
              <span className="text-saffron-400">World.</span>
            </h2>
            <p className="mt-4 text-sm text-white/55 max-w-xs">
              Authentic flavours, delivered fresh to your door — anywhere in Germany.
            </p>
          </div>
          <div className="hidden sm:block relative w-72 lg:w-[380px] overflow-hidden flex-shrink-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="380px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-900/60 to-transparent" />
          </div>
        </section>

        {/* ── Related Products ── */}
        {related.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-1">You May Also Like</p>
                <h2 className="text-2xl font-bold text-stone-900">More Products</h2>
              </div>
              <Link href="/shop" className="text-sm font-semibold text-forest-700 hover:text-forest-800 transition-colors hidden sm:block">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

      </main>

      <Footer />
    </>
  )
}
