import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-forest-900 min-h-[88vh] lg:min-h-[90vh] flex items-center">

      {/* ── Background Image ── */}
      <div className="absolute inset-0">
        <Image
          src="/hero-shop.jpeg"
          alt="A&A International Supermarkt — Frankfurt am Main"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-900/70 to-forest-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
      </div>

      {/* ── Decorative pattern ── */}
      <div className="absolute inset-0 bg-hero-pattern opacity-40" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="hero-fade-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-saffron-400 animate-pulse" />
            <span className="text-xs font-medium text-white/90 tracking-wide">Now delivering across Germany</span>
          </div>

          {/* Headline */}
          <h1 className="hero-fade-2 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Authentic Indian &amp;{' '}
            <span className="text-saffron-400">International</span>{' '}
            <br className="hidden sm:block" />
            Groceries in Germany
          </h1>

          {/* Subheading */}
          <p className="hero-fade-3 mt-5 text-lg sm:text-xl text-white/75 leading-relaxed max-w-xl">
            Over 2,000 carefully selected products from across India and the world —
            delivered fresh to your door, anywhere in Germany.
          </p>

          {/* CTAs */}
          <div className="hero-fade-4 mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link href="/shop">
              <Button variant="saffron" size="lg" className="gap-2.5 shadow-xl hover:shadow-saffron-500/30">
                <ShoppingBag className="w-5 h-5" />
                Shop Now
              </Button>
            </Link>
            <Link href="/categories">
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/15 gap-2"
              >
                Browse Categories
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Trust Micro-stats */}
          <div className="hero-fade-5 mt-10 flex flex-wrap items-center gap-6 sm:gap-8">
            {[
              { value: '2,000+', label: 'Products' },
              { value: '50,000+', label: 'Happy Customers' },
              { value: '4.9★', label: 'Avg. Rating' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/55 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Wave ── */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 lg:h-14">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 28C840 36 960 42 1080 40C1200 38 1320 28 1380 23L1440 18V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#FAF8F4"/>
        </svg>
      </div>
    </section>
  )
}
