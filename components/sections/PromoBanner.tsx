'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Tag, ArrowRight, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function PromoBanner() {
  return (
    <section className="py-12 lg:py-16 bg-warm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-5">

          {/* ── Primary Banner ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-forest-800 p-8 lg:p-10 flex flex-col justify-between min-h-[260px] lg:min-h-[300px]"
          >
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-forest-700/60" />
            <div className="absolute -bottom-16 -right-4 w-64 h-64 rounded-full bg-forest-600/25" />
            <div className="absolute top-4 right-6 w-20 h-20 rounded-full bg-saffron-500/15" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-saffron-500/20 border border-saffron-500/30 rounded-full px-3.5 py-1 mb-4">
                <Tag className="w-3.5 h-3.5 text-saffron-400" />
                <span className="text-xs font-semibold text-saffron-300 tracking-wide">Welcome Offer</span>
              </div>

              <h3 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight">
                10% Off Your{' '}
                <span className="text-saffron-400">First Order</span>
              </h3>
              <p className="mt-3 text-sm text-white/65 max-w-xs leading-relaxed">
                Use code{' '}
                <code className="bg-white/15 text-white px-2 py-0.5 rounded-md font-mono font-semibold">
                  WELCOME10
                </code>{' '}
                at checkout. No minimum order required.
              </p>
            </div>

            <div className="relative z-10 mt-6">
              <Link href="/shop">
                <Button variant="saffron" size="md" className="gap-2">
                  Claim Offer
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* ── Secondary Banner ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-saffron-600 to-spice-600 p-8 lg:p-10 flex flex-col justify-between min-h-[260px] lg:min-h-[300px]"
          >
            {/* Decorative circles */}
            <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-white/10" />
            <div className="absolute -bottom-10 right-0 w-56 h-56 rounded-full bg-black/10" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-3.5 py-1 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-semibold text-white tracking-wide">Weekly Special</span>
              </div>

              <h3 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight">
                Festival{' '}
                <span className="opacity-90">Hamper</span>
                <br />
                <span className="text-2xl lg:text-3xl opacity-80 font-semibold">From €24.99</span>
              </h3>
              <p className="mt-3 text-sm text-white/75 max-w-xs leading-relaxed">
                Curated Indian festival essentials — spices, sweets, and staples in one beautiful gift box.
              </p>
            </div>

            <div className="relative z-10 mt-6">
              <Link href="/gifts">
                <Button
                  variant="ghost"
                  size="md"
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 gap-2"
                >
                  Shop Hampers
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
