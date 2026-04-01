'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, Heart, User, Menu, X, Leaf } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home',        href: '/' },
  { label: 'Shop',        href: '/shop' },
  { label: 'Categories',  href: '/categories' },
  { label: 'Offers',      href: '/offers' },
  { label: 'New Arrivals',href: '/new' },
  { label: 'About',       href: '/about' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [scrolled, setScrolled]       = useState(false)
  const [searchOpen, setSearchOpen]   = useState(false)
  const cartCount = 3

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Announcement Bar – scrolling marquee */}
      <div className="bg-stone-900 text-white py-2.5 overflow-hidden select-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1].map(copy => (
            <div key={copy} className="flex items-center flex-shrink-0" aria-hidden={copy === 1}>
              {[
                '🚚 Kostenloser Versand ab €49',
                '🌿 Frische & authentische Produkte',
                '🇩🇪 Lieferung deutschlandweit',
                '⭐ Über 50.000 zufriedene Kunden',
                '📦 Expressversand verfügbar',
                '🛒 Über 2.000 Produkte aus aller Welt',
              ].map((text, i) => (
                <span key={i} className="inline-flex items-center gap-2 mx-10 text-xs font-medium tracking-wide text-white/90">
                  <span className="text-saffron-400 font-bold">✦</span>
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-sm'
            : 'bg-white border-b border-stone-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20 gap-4">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-9 h-9 rounded-xl bg-forest-700 flex items-center justify-center shadow-sm">
                <Leaf className="w-5 h-5 text-saffron-400 absolute opacity-30" />
                <span className="text-white text-[11px] font-bold tracking-tight relative z-10">A&A</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-display text-[17px] font-bold text-stone-900 leading-tight">
                  A&A International
                </div>
                <div className="text-[10px] text-stone-400 tracking-[0.18em] uppercase font-medium">
                  Supermarkt
                </div>
              </div>
            </Link>

            {/* ── Search – Desktop ── */}
            <div className="hidden md:flex flex-1 max-w-md xl:max-w-lg">
              <div className="relative w-full group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 group-focus-within:text-forest-600 transition-colors" />
                <input
                  type="search"
                  placeholder="Search spices, rice, lentils, snacks…"
                  className="w-full pl-11 pr-5 py-2.5 bg-warm-100 border border-warm-200 rounded-full text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-500/25 focus:border-forest-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* ── Actions ── */}
            <div className="flex items-center gap-1 flex-shrink-0">
              {/* Search – Mobile */}
              <button
                onClick={() => setSearchOpen(o => !o)}
                className="md:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-warm-100 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-stone-600" />
              </button>

              {/* Wishlist */}
              <button
                className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center hover:bg-warm-100 transition-colors"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5 text-stone-600" />
              </button>

              {/* Account */}
              <button
                className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center hover:bg-warm-100 transition-colors"
                aria-label="Account"
              >
                <User className="w-5 h-5 text-stone-600" />
              </button>

              {/* Cart */}
              <button className="relative flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white rounded-full pl-3.5 pr-4 py-2 transition-all duration-200 hover:shadow-md ml-1">
                <ShoppingCart className="w-4.5 h-4.5 w-4 h-4" />
                <span className="text-sm font-semibold hidden sm:inline">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-saffron-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(o => !o)}
                className="lg:hidden ml-1 w-10 h-10 rounded-full flex items-center justify-center hover:bg-warm-100 transition-colors"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-7 pb-3.5">
            {navLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-500 hover:text-forest-700 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-saffron-500 rounded-full group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </nav>
        </div>

        {/* ── Mobile Search Bar ── */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-warm-200 overflow-hidden"
            >
              <div className="px-4 py-3 bg-white">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="search"
                    placeholder="Search products…"
                    autoFocus
                    className="w-full pl-11 pr-5 py-3 bg-warm-50 border border-warm-200 rounded-full text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-500/25 focus:border-forest-500"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-warm-200 shadow-lg"
            >
              <nav className="max-w-7xl mx-auto px-4 py-3 divide-y divide-warm-100">
                {navLinks.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3.5 text-sm font-medium text-stone-700 hover:text-forest-700 transition-colors"
                  >
                    {link.label}
                    <span className="text-stone-300">›</span>
                  </Link>
                ))}
              </nav>
              <div className="px-4 py-4 bg-warm-50 border-t border-warm-200 flex items-center gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-warm-300 rounded-full text-sm font-medium text-stone-700 hover:bg-warm-100 transition-colors">
                  <User className="w-4 h-4" /> Account
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-warm-300 rounded-full text-sm font-medium text-stone-700 hover:bg-warm-100 transition-colors">
                  <Heart className="w-4 h-4" /> Wishlist
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
