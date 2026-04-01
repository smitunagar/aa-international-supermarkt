'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ShoppingCart, User, Menu, X, ChevronDown, MapPin, ChevronRight, Tag, Sparkles, Star, Package, Gift } from 'lucide-react'
import { categories, type Category } from '@/data/categories'

const categoryIcons: Record<string, string> = {
  'spices-masalas':       '🌶️',
  'rice-grains':          '🍚',
  'canned-goods':         '🥫',
  'tea-coffee':           '☕',
  'snacks-sweets':        '🍬',
  'fresh-produce':        '🥬',
  'dairy-refrigerated':   '🧈',
  'beverages':            '🧃',
}

const quickLinks = [
  { label: 'Bestsellers',  href: '/bestsellers', icon: Star,     color: 'text-amber-600' },
  { label: 'New Arrivals', href: '/new',          icon: Sparkles, color: 'text-forest-600' },
  { label: 'On Sale',      href: '/offers',       icon: Tag,      color: 'text-spice-600' },
  { label: 'Bundles',      href: '/shop',         icon: Package,  color: 'text-blue-600' },
  { label: 'Gift Hampers', href: '/gifts',        icon: Gift,     color: 'text-pink-500' },
  { label: 'April Offers', href: '/offers',       icon: Tag,      color: 'text-saffron-600',  badge: 'Hot' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [catOpen,    setCatOpen]    = useState(false)
  const [searchQ,    setSearchQ]    = useState('')
  const cartCount = 3
  const catRef = useRef<HTMLDivElement>(null)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      {/* ── ROW 1: Logo | Search | Location | Auth | Cart ── */}
      <div className="border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 h-16 lg:h-[70px]">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="A&A International Supermarkt"
                width={160}
                height={56}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* Search bar */}
            <div className="flex-1 hidden md:flex max-w-2xl">
              <div className="flex w-full rounded-lg border-2 border-forest-700 overflow-hidden">
                <input
                  type="search"
                  value={searchQ}
                  onChange={e => setSearchQ(e.target.value)}
                  placeholder="Search for products you want"
                  className="flex-1 px-4 py-2.5 text-sm text-stone-700 placeholder:text-stone-400 outline-none bg-white"
                />
                <button className="px-5 bg-forest-700 hover:bg-forest-800 text-white font-semibold text-sm flex items-center gap-2 transition-colors flex-shrink-0">
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>
            </div>

            {/* Delivery location */}
            <div className="hidden xl:flex items-center gap-2 text-stone-600 border-l border-stone-100 pl-4 flex-shrink-0">
              <MapPin className="w-4 h-4 text-forest-600 flex-shrink-0" />
              <div>
                <p className="text-[10px] text-stone-400 leading-none">Delivering to</p>
                <p className="text-sm font-semibold text-stone-800 leading-none mt-0.5">Frankfurt, DE</p>
              </div>
            </div>

            {/* Auth */}
            <div className="hidden lg:flex items-center gap-1 flex-shrink-0">
              <User className="w-4 h-4 text-stone-500" />
              <Link href="/about" className="text-sm font-medium text-stone-700 hover:text-forest-700 whitespace-nowrap transition-colors">
                Log In / Sign Up
              </Link>
            </div>

            {/* Cart */}
            <Link
              href="/shop"
              className="relative flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white rounded-lg px-3.5 py-2 transition-colors ml-auto lg:ml-0 flex-shrink-0"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-semibold">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-saffron-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-warm-100 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── ROW 2: Categories dropdown + quick nav ── */}
      <div className="hidden lg:block bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-0">

            {/* Categories mega-button */}
            <div className="relative" ref={catRef}>
              <button
                onMouseEnter={() => setCatOpen(true)}
                onMouseLeave={() => setCatOpen(false)}
                onClick={() => setCatOpen(o => !o)}
                className="flex items-center gap-2 px-4 py-3 bg-forest-700 text-white font-semibold text-sm hover:bg-forest-800 transition-colors h-full"
              >
                <Menu className="w-4 h-4" />
                Categories
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${catOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              {catOpen && (
                <div
                  className="absolute top-full left-0 w-64 bg-white shadow-xl border border-stone-100 rounded-b-xl z-50"
                  onMouseEnter={() => setCatOpen(true)}
                  onMouseLeave={() => setCatOpen(false)}
                >
                  {categories.map(cat => (
                    <Link
                      key={cat.id}
                      href={`/categories/${cat.slug}`}
                      className="flex items-center justify-between px-4 py-3 text-sm text-stone-700 hover:bg-forest-50 hover:text-forest-700 transition-colors border-b border-stone-50 last:border-0"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-lg">{categoryIcons[cat.slug] ?? '🛍️'}</span>
                        {cat.name}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-stone-300" />
                    </Link>
                  ))}
                  <Link
                    href="/categories"
                    className="flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold text-forest-700 hover:bg-forest-50 transition-colors rounded-b-xl"
                  >
                    View all categories →
                  </Link>
                </div>
              )}
            </div>

            {/* Quick links */}
            <nav className="flex items-center">
              {quickLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-stone-700 hover:text-forest-700 hover:bg-forest-50 transition-colors whitespace-nowrap relative"
                >
                  <link.icon className={`w-3.5 h-3.5 ${link.color}`} />
                  {link.label}
                  {link.badge && (
                    <span className="ml-1 px-1.5 py-0.5 bg-spice-500 text-white text-[9px] font-bold rounded uppercase">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* ── ROW 3: Category icon strip ── */}
      <div className="hidden lg:block bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-0 overflow-x-auto scrollbar-hide py-2">
            {categories.map(cat => (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="flex flex-col items-center gap-1.5 px-4 py-1.5 group flex-shrink-0 hover:bg-forest-50 rounded-lg transition-colors"
              >
                <span className="text-2xl">{categoryIcons[cat.slug] ?? '🛍️'}</span>
                <span className="text-[11px] font-medium text-stone-600 group-hover:text-forest-700 text-center leading-tight whitespace-nowrap transition-colors">
                  {cat.name.replace(' & ', '\n& ')}
                </span>
              </Link>
            ))}
            <Link
              href="/categories"
              className="flex flex-col items-center gap-1.5 px-4 py-1.5 group flex-shrink-0 hover:bg-forest-50 rounded-lg transition-colors"
            >
              <span className="text-2xl">🔍</span>
              <span className="text-[11px] font-medium text-stone-600 group-hover:text-forest-700 text-center leading-tight whitespace-nowrap transition-colors">
                All<br/>Categories
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 shadow-lg">
          {/* Mobile search */}
          <div className="px-4 py-3 border-b border-stone-100">
            <div className="flex rounded-lg border-2 border-forest-700 overflow-hidden">
              <input
                type="search"
                placeholder="Search products…"
                className="flex-1 px-3 py-2.5 text-sm outline-none"
              />
              <button className="px-4 bg-forest-700 text-white">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Mobile category icons */}
          <div className="px-4 py-3 border-b border-stone-100">
            <div className="grid grid-cols-4 gap-2">
              {categories.slice(0, 8).map(cat => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-forest-50 transition-colors"
                >
                  <span className="text-2xl">{categoryIcons[cat.slug] ?? '🛍️'}</span>
                  <span className="text-[10px] text-stone-500 text-center leading-tight">{cat.name.split(' ')[0]}</span>
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile quick links */}
          <nav className="divide-y divide-stone-50">
            {[
              { label: 'Home',          href: '/' },
              { label: 'Shop All',      href: '/shop' },
              { label: 'Bestsellers',   href: '/bestsellers' },
              { label: 'New Arrivals',  href: '/new' },
              { label: 'On Sale',       href: '/offers' },
              { label: 'Gift Hampers',  href: '/gifts' },
              { label: 'About',         href: '/about' },
            ].map(link => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-4 py-3.5 text-sm font-medium text-stone-700 hover:text-forest-700"
              >
                {link.label}
                <ChevronRight className="w-4 h-4 text-stone-300" />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
