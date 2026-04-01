'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, Gift, Sparkles, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'

const perks = [
  { icon: Gift,      text: '5% off every order for members' },
  { icon: Sparkles,  text: 'Early access to new arrivals' },
  { icon: Mail,      text: 'Weekly recipes & cooking tips' },
]

export default function NewsletterSection() {
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-forest-800 px-6 py-12 lg:px-14 lg:py-16">

          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-forest-700/50 pointer-events-none" />
          <div className="absolute -bottom-24 -left-12 w-80 h-80 rounded-full bg-forest-900/40 pointer-events-none" />
          <div className="absolute top-6 right-24 w-24 h-24 rounded-full bg-saffron-500/15 pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* ── Left ── */}
            <div>
              <div className="inline-flex items-center gap-2 bg-saffron-500/20 border border-saffron-500/30 rounded-full px-4 py-1.5 mb-5">
                <Mail className="w-3.5 h-3.5 text-saffron-400" />
                <span className="text-xs font-semibold text-saffron-300 tracking-wide">A&A Insiders Club</span>
              </div>

              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight">
                Join Our Community &<br />
                <span className="text-saffron-400">Save on Every Order</span>
              </h2>
              <p className="mt-4 text-sm text-white/65 leading-relaxed max-w-sm">
                Subscribe to the A&A newsletter and unlock exclusive member benefits, recipes, and curated picks from our team.
              </p>

              {/* Perks */}
              <ul className="mt-6 space-y-3">
                {perks.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-white/75">
                    <Icon className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Right: Form ── */}
            <div>
              {!submitted ? (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20"
                >
                  <h3 className="font-semibold text-white text-lg mb-1">Subscribe & Save</h3>
                  <p className="text-sm text-white/60 mb-5">No spam. Unsubscribe anytime.</p>

                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your first name"
                      className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400/50 focus:border-saffron-400/50 transition-all"
                    />
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="flex-1 px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400/50 focus:border-saffron-400/50 transition-all"
                      />
                      <Button type="submit" variant="saffron" size="md" className="flex-shrink-0 px-5">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-[11px] text-white/40 mt-4">
                    By subscribing you agree to our Privacy Policy (Datenschutz). You can unsubscribe at any time.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-saffron-400 mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold text-white mb-2">You&apos;re In!</h3>
                  <p className="text-sm text-white/65">
                    Welcome to the A&A Insiders Club. Check your inbox for a special welcome discount.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
