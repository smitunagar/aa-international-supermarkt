'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const pillars = [
  {
    title: 'Authentic Indian Groceries',
    description:
      'We stock the brands you grew up with — MDH, Haldiram\'s, Everest, Amul, Daawat and many more. No substitutes, no compromises.',
  },
  {
    title: 'International Selection',
    description:
      'Beyond India, we carry Sri Lankan, Pakistani, Bangladeshi, and Caribbean groceries, plus a curated selection of international staples.',
  },
  {
    title: 'Reliable Germany-wide Delivery',
    description:
      'We ship nationwide via tracked DHL. Orders placed before 12:00 are dispatched the same day. Free delivery over €49.',
  },
  {
    title: 'Family-run, Community-focused',
    description:
      'A&A was founded by a family for families. We understand what it means to cook authentic food away from home.',
  },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80&auto=format&fit=crop',
]

export default function WhyShopWithUs() {
  return (
    <section className="py-16 lg:py-28 bg-warm-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Image collage ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.map((src, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl shadow-card ${
                    i === 0 ? 'aspect-[3/4]' :
                    i === 1 ? 'aspect-square mt-8' :
                    i === 2 ? 'aspect-square' :
                    'aspect-[3/4] -mt-8'
                  }`}
                >
                  <Image
                    src={src}
                    alt="Store product"
                    fill
                    sizes="25vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-white rounded-2xl shadow-product p-4 flex items-center gap-3 max-w-[190px]">
              <div className="w-10 h-10 rounded-full bg-saffron-50 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">⭐</span>
              </div>
              <div>
                <div className="text-base font-bold text-stone-800">4.9 / 5</div>
                <div className="text-xs text-stone-400">50,000+ Reviews</div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-stone-900 leading-tight mb-4">
              Why Thousands of Families Shop with A&A
            </h2>
            <p className="text-stone-500 text-base leading-relaxed mb-8">
              We know how important it is to find the right ingredients — the exact brand of atta your mother uses,
              the masala that makes your biryani taste like home. That&apos;s why we built A&A International Supermarkt.
            </p>

            <ul className="space-y-5">
              {pillars.map(({ title, description }) => (
                <li key={title} className="flex gap-4">
                  <CheckCircle2 className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-stone-800 mb-1">{title}</h4>
                    <p className="text-sm text-stone-500 leading-relaxed">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
