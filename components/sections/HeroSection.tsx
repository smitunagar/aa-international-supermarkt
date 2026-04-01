'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react'

/* ─────────────────────────────────────────────────────────────────────────────
   Slide types:
     'fullbleed' – image fills the entire banner; text overlaid on a gradient
     'split'     – text left, image right (two-column card style)
───────────────────────────────────────────────────────────────────────────── */
type FullbleedSlide = {
  id: number
  type: 'fullbleed'
  tag: string
  headline: string
  subtext: string
  cta: string
  ctaHref: string
  badge: string
  badgeColor: string
  image: string
  imageAlt: string
  /** Which side the text panel sits on */
  textSide: 'left' | 'right'
  /** Tailwind gradient for the text-side veil */
  overlay: string
  dot: string
}

type SplitSlide = {
  id: number
  type: 'split'
  tag: string
  headline: string
  subtext: string
  cta: string
  ctaHref: string
  badge: string
  badgeColor: string
  image: string
  imageAlt: string
  bgFrom: string
  bgTo: string
  accent: string
  dot: string
}

type Slide = FullbleedSlide | SplitSlide

const slides: Slide[] = [
  // ── Slide 1 — full-bleed custom banner ───────────────────────────────────
  {
    id: 1,
    type: 'fullbleed',
    tag: '🛒 Welcome to A&A',
    headline: 'Authentic Indian &\nInternational Groceries',
    subtext: 'Over 2,000 products from India & the world — delivered across Germany',
    cta: 'Shop Now',
    ctaHref: '/shop',
    badge: 'Free delivery over €50',
    badgeColor: 'bg-amber-500',
    image: '/hero-banner-1.png',
    imageAlt: 'A&A International Supermarkt — authentic Indian groceries',
    textSide: 'left',
    overlay: 'bg-gradient-to-r from-black/70 via-black/40 to-transparent',
    dot: 'bg-amber-400',
  },
  // ── Slide 2 — split ──────────────────────────────────────────────────────
  {
    id: 2,
    type: 'split',
    tag: '🍚 Bestseller',
    headline: 'Premium Basmati\nRice & Grains',
    subtext: 'Long-grain, aged basmati sourced from the finest mills in India',
    cta: 'Shop Rice',
    ctaHref: '/categories/rice-grains',
    badge: 'Free delivery over €50',
    badgeColor: 'bg-forest-600',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'Premium basmati rice',
    bgFrom: 'from-green-50',
    bgTo:   'to-emerald-50',
    accent: 'text-forest-700',
    dot:    'bg-forest-600',
  },
  // ── Slide 3 — split ──────────────────────────────────────────────────────
  {
    id: 3,
    type: 'split',
    tag: '🧃 Just Restocked',
    headline: 'Drinks, Teas &\nFavourite Beverages',
    subtext: 'From masala chai to mango drinks — all your go-to brands in stock',
    cta: 'Shop Drinks',
    ctaHref: '/categories/beverages',
    badge: 'New in store',
    badgeColor: 'bg-saffron-500',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'Assorted beverages and drinks',
    bgFrom: 'from-orange-50',
    bgTo:   'to-yellow-50',
    accent: 'text-saffron-600',
    dot:    'bg-saffron-500',
  },
]

/* ─────────────────────────────────────────────────────────────────────────── */

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent(i => (i - 1 + slides.length) % slides.length)
  const next = () => setCurrent(i => (i + 1) % slides.length)
  const slide = slides[current]

  /* ── shared dot colour for the nav dots ── */
  const dotActive = slide.dot

  return (
    <div className="relative">

      {/* ════════════════════════════════════════════════
          FULLBLEED slide (slide 1)
      ════════════════════════════════════════════════ */}
      {slide.type === 'fullbleed' && (
        <section className="relative w-full overflow-hidden h-[320px] sm:h-[400px] md:h-[440px] lg:h-[480px] xl:h-[520px]">

          {/* Background image — object-cover crops to fill, object-center focuses the centre */}
          <Image
            key={slide.id}
            src={slide.image}
            alt={slide.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Directional gradient veil so text stays legible */}
          <div className={`absolute inset-0 ${slide.overlay}`} />
          {/* Bottom fade to page background */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white/30 to-transparent" />

          {/* Text panel */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
              <div className={`max-w-xl ${slide.textSide === 'right' ? 'ml-auto text-right' : ''}`}>

                {/* Tag pill */}
                <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold rounded-full px-3 py-1 mb-3">
                  {slide.tag}
                </div>

                {/* Headline */}
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] tracking-tight drop-shadow-md whitespace-pre-line">
                  {slide.headline}
                </h1>

                {/* Subtext */}
                <p className="mt-3 text-sm sm:text-base text-white/85 leading-relaxed max-w-sm drop-shadow-sm">
                  {slide.subtext}
                </p>

                {/* CTAs */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link href={slide.ctaHref}>
                    <button className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white text-sm font-bold px-6 py-3 rounded-full transition-all shadow-lg shadow-amber-500/30">
                      <ShoppingBag className="w-4 h-4" />
                      {slide.cta}
                    </button>
                  </Link>
                  <span className={`text-xs font-bold text-white ${slide.badgeColor} px-3 py-1.5 rounded-full shadow`}>
                    {slide.badge}
                  </span>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════
          SPLIT slide (slides 2 & 3)
      ════════════════════════════════════════════════ */}
      {slide.type === 'split' && (
        <section className={`relative overflow-hidden bg-gradient-to-br ${slide.bgFrom} ${slide.bgTo}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center min-h-[320px] lg:min-h-[380px] py-8 lg:py-0 gap-6 lg:gap-12">

              {/* Left: Text */}
              <div className="flex-1 lg:py-12 order-2 lg:order-1 text-center lg:text-left">
                <div className={`inline-flex items-center gap-1.5 text-xs font-semibold ${slide.accent} bg-white/70 border border-current/25 rounded-full px-3 py-1 mb-3`}>
                  {slide.tag}
                </div>
                <h1 className="font-display text-3xl sm:text-4xl xl:text-[2.75rem] font-bold text-gray-900 leading-[1.15] tracking-tight whitespace-pre-line">
                  {slide.headline}
                </h1>
                <p className="mt-3 text-sm sm:text-[0.95rem] text-gray-600 leading-relaxed max-w-sm mx-auto lg:mx-0">
                  {slide.subtext}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                  <Link href={slide.ctaHref}>
                    <button className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 active:scale-95 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm">
                      {slide.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                  <span className={`text-xs font-bold text-white ${slide.badgeColor} px-3 py-1.5 rounded-full shadow-sm`}>
                    {slide.badge}
                  </span>
                </div>
              </div>

              {/* Right: Image */}
              <div className="flex-shrink-0 order-1 lg:order-2 w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[440px] mx-auto lg:mx-0">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                  <Image
                    key={slide.id}
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 440px"
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ── Carousel dots ── */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? `w-5 h-2 ${dotActive}`
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all z-20"
      >
        <ChevronLeft className="w-4 h-4 text-gray-700" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all z-20"
      >
        <ChevronRight className="w-4 h-4 text-gray-700" />
      </button>

    </div>
  )
}
