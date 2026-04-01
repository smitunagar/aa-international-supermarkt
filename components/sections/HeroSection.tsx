'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    tag: '🌶️ Fresh Arrivals',
    headline: 'Authentic Indian\nSpices & Masalas',
    subtext: 'Hand-picked from India — over 200 varieties for every recipe',
    cta: 'Shop Spices',
    ctaHref: '/categories/spices-masalas',
    badge: 'Up to 20% off',
    badgeColor: 'bg-red-500',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'Colourful Indian spices and masalas',
    bgFrom: 'from-amber-50',
    bgTo:   'to-orange-50',
    accent:  'text-amber-700',
    dot:     'bg-amber-600',
  },
  {
    id: 2,
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
    accent:  'text-forest-700',
    dot:     'bg-forest-600',
  },
  {
    id: 3,
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
    accent:  'text-saffron-600',
    dot:     'bg-saffron-500',
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent(i => (i - 1 + slides.length) % slides.length)
  const next = () => setCurrent(i => (i + 1) % slides.length)
  const slide = slides[current]

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${slide.bgFrom} ${slide.bgTo} transition-all duration-700`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-[320px] lg:min-h-[380px] py-8 lg:py-0 gap-6 lg:gap-12">

          {/* ── Left: Text ── */}
          <div className="flex-1 lg:py-12 order-2 lg:order-1 text-center lg:text-left">

            {/* Tag pill */}
            <div className={`inline-flex items-center gap-1.5 text-xs font-semibold ${slide.accent} bg-white/70 border border-current/25 rounded-full px-3 py-1 mb-3`}>
              {slide.tag}
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl xl:text-[2.75rem] font-bold text-gray-900 leading-[1.15] tracking-tight whitespace-pre-line">
              {slide.headline}
            </h1>

            {/* Subtext */}
            <p className="mt-3 text-sm sm:text-[0.95rem] text-gray-600 leading-relaxed max-w-sm mx-auto lg:mx-0">
              {slide.subtext}
            </p>

            {/* CTA row */}
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

          {/* ── Right: Image ── */}
          <div className="flex-shrink-0 order-1 lg:order-2 w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[440px] mx-auto lg:mx-0">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                key={slide.id}
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── Carousel dots ── */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? `w-5 h-2 ${slide.dot}`
                : 'w-2 h-2 bg-gray-400/40 hover:bg-gray-500/60'
            }`}
          />
        ))}
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition-colors z-10"
      >
        <ChevronLeft className="w-4 h-4 text-gray-700" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition-colors z-10"
      >
        <ChevronRight className="w-4 h-4 text-gray-700" />
      </button>
    </section>
  )
}
