import Link from 'next/link'
import Image from 'next/image'
import PageLayout from '@/components/layout/PageLayout'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'

export const metadata = {
  title: 'Offers & Deals | A&A International Supermarkt',
  description: 'Exclusive offers and deals on authentic Indian and international groceries.',
}

const offerProducts = products.filter(p => p.originalPrice || p.badge === 'offer')
const allProducts   = products

export default function OffersPage() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Offers' }]}>

      {/* Hero */}
      <div className="bg-forest-800 overflow-hidden relative">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-forest-700/40" />
        <div className="absolute -bottom-20 -left-10 w-96 h-96 rounded-full bg-forest-900/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-saffron-400 text-xs font-bold tracking-widest uppercase mb-3">Limited Time</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight max-w-lg">
            Today&apos;s Best Deals &amp; Offers
          </h1>
          <p className="text-white/60 text-sm mt-3 max-w-sm">
            Save on your favourite Indian &amp; international grocery brands. Updated weekly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-black text-white">10%</p>
              <p className="text-xs text-white/60 mt-0.5">First order</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-black text-saffron-400">Free</p>
              <p className="text-xs text-white/60 mt-0.5">Delivery over €49</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center">
              <p className="text-2xl font-black text-white">Up to 20%</p>
              <p className="text-xs text-white/60 mt-0.5">Selected items</p>
            </div>
          </div>
        </div>
      </div>

      {/* Promo code banner */}
      <div className="bg-saffron-500 text-white py-3 px-4 text-center text-sm font-semibold tracking-wide">
        Use code <span className="font-mono bg-white/20 px-2 py-0.5 rounded mx-1">WELCOME10</span> for 10% off your first order ·{' '}
        <span className="font-mono bg-white/20 px-2 py-0.5 rounded mx-1">FREESHIP</span> for free delivery on any order
      </div>

      {/* On Sale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex items-end justify-between mb-7">
          <div>
            <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-1">Discounted</p>
            <h2 className="text-2xl font-bold text-stone-900">Products On Sale</h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-forest-700 hover:text-forest-800 transition-colors hidden sm:block">
            View all →
          </Link>
        </div>
        {offerProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {offerProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {allProducts.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}

        {/* Offer cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { code: 'WELCOME10', title: '10% Off First Order', desc: 'New customers only. No minimum spend.', color: 'bg-forest-800', accent: 'text-saffron-400' },
            { code: 'FREESHIP',  title: 'Free Delivery',       desc: 'On all orders, no minimum required.', color: 'bg-saffron-500', accent: 'text-white' },
            { code: 'BULK15',    title: '15% Bulk Discount',   desc: 'On orders of 3 or more same items.', color: 'bg-spice-600',   accent: 'text-white' },
          ].map(offer => (
            <div key={offer.code} className={`${offer.color} rounded-2xl p-6 relative overflow-hidden`}>
              <div className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full bg-white/10" />
              <p className={`text-xs font-bold tracking-widest uppercase mb-2 ${offer.accent}`}>Promo Code</p>
              <h3 className="text-xl font-bold text-white mb-1">{offer.title}</h3>
              <p className="text-sm text-white/65 mb-4">{offer.desc}</p>
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5">
                <span className="font-mono text-sm font-bold text-white">{offer.code}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
