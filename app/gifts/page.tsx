import Image from 'next/image'
import Link from 'next/link'
import { Gift, Heart, Star, ShoppingCart, Leaf, ChevronRight } from 'lucide-react'
import PageLayout from '@/components/layout/PageLayout'

const hampers = [
  {
    id: 1,
    name: 'Spice World Hamper',
    tagline: 'A curated journey through India\'s finest spices',
    includes: ['MDH Deggi Mirch 500g', 'Everest Garam Masala 200g', 'Tata Chai 250g', 'Ashoka Pickle 500g'],
    price: 34.99,
    originalPrice: 42.50,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    badge: 'Best Seller',
    badgeColor: 'bg-forest-700',
  },
  {
    id: 2,
    name: 'Rice & Grains Hamper',
    tagline: 'Premium staples for the well-stocked pantry',
    includes: ['Daawat Basmati 5kg', 'Masoor Dal 2kg', 'Toor Dal 1kg', 'Idli Rice 2kg'],
    price: 39.99,
    originalPrice: 52.00,
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&q=80',
    badge: 'New',
    badgeColor: 'bg-saffron-500',
  },
  {
    id: 3,
    name: 'Snack Lovers Hamper',
    tagline: 'The ultimate selection of Indian snacks & sweets',
    includes: ['Haldiram\'s Bhujia 400g', 'Kurkure 3-pack', 'Soan Papdi 250g', 'Parle-G 800g'],
    price: 28.99,
    originalPrice: 36.00,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    badge: '23% Off',
    badgeColor: 'bg-spice-500',
  },
  {
    id: 4,
    name: 'Organic Wellness Hamper',
    tagline: 'Pure, certified-organic ingredients for a healthy home',
    includes: ['Organic Ghee 500ml', 'Organic Turmeric 200g', 'Organic Honey 500g', 'Herbal Tea 40 bags'],
    price: 54.99,
    originalPrice: 68.00,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
    badge: 'Organic',
    badgeColor: 'bg-forest-500',
  },
  {
    id: 5,
    name: 'Festive Diwali Hamper',
    tagline: 'Spread the joy — beautifully gift-wrapped',
    includes: ['Kaju Katli 250g', 'Dry Fruits Mix 500g', 'Saffron 1g', 'Rose Sharbat 750ml'],
    price: 64.99,
    originalPrice: 80.00,
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80',
    badge: 'Gift Wrapped',
    badgeColor: 'bg-saffron-500',
  },
  {
    id: 6,
    name: 'South Indian Essentials',
    tagline: 'Authentic flavours from the heart of South India',
    includes: ['MTR Sambar Powder', 'Idli Rava 1kg', 'Coconut Oil 1L', 'Rasam Powder 100g'],
    price: 32.99,
    originalPrice: 41.00,
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&q=80',
    badge: 'Popular',
    badgeColor: 'bg-forest-700',
  },
]

const features = [
  { Icon: Gift,       title: 'Gift Wrapping',      text: 'Every hamper comes in our premium A&A kraft box with tissue paper and a personalised message card.' },
  { Icon: Heart,      title: 'Handpicked Items',   text: 'Each item is chosen by our team for quality, authenticity, and the ability to delight.' },
  { Icon: Star,       title: 'Free Message Card',  text: 'Add a personal note at checkout — we\'ll print and include it at no extra charge.' },
  { Icon: Leaf,       title: 'Eco Packaging',      text: 'Our hamper boxes are made from recycled materials and are 100% biodegradable.' },
]

export default function GiftsPage() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Gift Hampers' }]}>

      {/* Hero */}
      <div className="relative bg-stone-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1400&q=80"
          alt="Gift hampers"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <span className="inline-block bg-saffron-500/20 border border-saffron-500/40 text-saffron-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            Thoughtful Gifting
          </span>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-white mb-4">
            Curated Gift Hampers
          </h1>
          <p className="text-stone-300 text-sm lg:text-base max-w-xl mx-auto leading-relaxed">
            Give the gift of authentic flavours. Our hampers are beautifully assembled and gift-wrapped, ready to delight friends, family, and colleagues.
          </p>
          <div className="flex gap-3 justify-center mt-7 flex-wrap">
            <a href="#hampers" className="bg-saffron-500 hover:bg-saffron-600 text-stone-900 font-bold px-6 py-3 rounded-full text-sm transition-all hover:shadow-md">
              Shop Hampers
            </a>
            <a href="#custom" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all border border-white/20">
              Build Your Own
            </a>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-warm-50 border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ Icon, title, text }) => (
              <div key={title} className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-forest-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-forest-700" />
                </div>
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{title}</p>
                  <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hamper Grid */}
      <div id="hampers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-1">Ready to Send</p>
            <h2 className="font-display text-2xl font-bold text-stone-900">Our Hamper Collection</h2>
          </div>
          <span className="text-xs text-stone-400">{hampers.length} hampers</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hampers.map((h) => {
            const discount = Math.round((1 - h.price / h.originalPrice) * 100)
            return (
              <div key={h.id} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group border border-warm-100">
                <div className="relative h-52 overflow-hidden">
                  <Image src={h.image} alt={h.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className={`${h.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {h.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-spice-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      -{discount}%
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-stone-900 text-sm">{h.name}</h3>
                  <p className="text-stone-500 text-xs mt-1">{h.tagline}</p>

                  <ul className="mt-3 space-y-1">
                    {h.includes.map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-xs text-stone-600">
                        <span className="w-1 h-1 rounded-full bg-saffron-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <span className="font-bold text-stone-900 text-base">€{h.price.toFixed(2)}</span>
                      <span className="text-stone-400 text-xs line-through ml-2">€{h.originalPrice.toFixed(2)}</span>
                    </div>
                    <button className="flex items-center gap-1.5 bg-forest-700 hover:bg-forest-800 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all">
                      <ShoppingCart className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Custom Hamper CTA */}
      <div id="custom" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-br from-saffron-50 to-warm-100 rounded-2xl border border-saffron-200 p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:flex-1 text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-saffron-100 mb-5 lg:mb-4">
              <Gift className="w-7 h-7 text-saffron-600" />
            </div>
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">
              Build Your Own Hamper
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed max-w-md">
              Can&apos;t find exactly what you&apos;re looking for? Browse our full store and add any products to your cart — we&apos;ll gift-wrap them beautifully together. Just select &quot;Gift Wrapping&quot; at checkout.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/shop"
              className="flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all hover:shadow-md"
            >
              Browse All Products
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 border-2 border-forest-700 text-forest-700 hover:bg-forest-700 hover:text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all"
            >
              Corporate Gifting
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
