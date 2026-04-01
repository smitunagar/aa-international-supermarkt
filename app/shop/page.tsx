'use client'

import { useState, useMemo } from 'react'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import PageLayout from '@/components/layout/PageLayout'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'
import { categories } from '@/data/categories'

const sortOptions = [
  { value: 'featured',    label: 'Featured' },
  { value: 'price-asc',   label: 'Price: Low to High' },
  { value: 'price-desc',  label: 'Price: High to Low' },
  { value: 'rating',      label: 'Top Rated' },
  { value: 'newest',      label: 'New Arrivals' },
]

export default function ShopPage() {
  const [sort, setSort]             = useState('featured')
  const [selectedCats, setSelectedCats] = useState<string[]>([])
  const [sidebarOpen, setSidebarOpen]   = useState(false)
  const [maxPrice, setMaxPrice]         = useState(50)

  const toggleCat = (slug: string) =>
    setSelectedCats(prev => prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug])

  const filtered = useMemo(() => {
    let list = [...products]
    if (selectedCats.length > 0)
      list = list.filter(p => selectedCats.includes(p.category))
    list = list.filter(p => p.price <= maxPrice)
    switch (sort) {
      case 'price-asc':  list.sort((a, b) => a.price - b.price); break
      case 'price-desc': list.sort((a, b) => b.price - a.price); break
      case 'rating':     list.sort((a, b) => b.rating - a.rating); break
      case 'newest':     list = list.filter(p => p.badge === 'new').concat(list.filter(p => p.badge !== 'new')); break
    }
    return list
  }, [sort, selectedCats, maxPrice])

  const FilterSidebar = () => (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="bg-white rounded-2xl shadow-card p-5 space-y-6">
        {/* Categories */}
        <div>
          <h3 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3">Categories</h3>
          <ul className="space-y-1.5">
            {categories.map(cat => (
              <li key={cat.id}>
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedCats.includes(cat.slug)}
                    onChange={() => toggleCat(cat.slug)}
                    className="w-4 h-4 accent-forest-700 rounded cursor-pointer"
                  />
                  <span className="text-sm text-stone-600 group-hover:text-forest-700 transition-colors flex-1">
                    {cat.name}
                  </span>
                  <span className="text-xs text-stone-400">{cat.count}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price range */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-widest">Max Price</h3>
            <span className="text-sm font-bold text-forest-700">€{maxPrice}</span>
          </div>
          <input
            type="range"
            min={1} max={50} step={1}
            value={maxPrice}
            onChange={e => setMaxPrice(Number(e.target.value))}
            className="w-full accent-forest-700 cursor-pointer"
          />
          <div className="flex justify-between text-xs text-stone-400 mt-1">
            <span>€0</span><span>€50</span>
          </div>
        </div>

        {/* Badges */}
        <div>
          <h3 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3">Filter</h3>
          <div className="flex flex-wrap gap-2">
            {['bestseller', 'new', 'offer', 'organic'].map(b => (
              <button
                key={b}
                className="text-xs px-3 py-1.5 rounded-full border border-warm-300 text-stone-600 hover:border-forest-700 hover:text-forest-700 transition-colors capitalize"
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Reset */}
        {(selectedCats.length > 0 || maxPrice < 50) && (
          <button
            onClick={() => { setSelectedCats([]); setMaxPrice(50) }}
            className="w-full text-sm text-spice-600 hover:text-spice-700 font-semibold flex items-center justify-center gap-1.5"
          >
            <X className="w-3.5 h-3.5" /> Clear filters
          </button>
        )}
      </div>
    </aside>
  )

  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Shop' }]}>

      {/* Page Header */}
      <div className="border-b border-warm-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-2">Everything in one place</p>
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-stone-900">All Products</h1>
          <p className="text-stone-500 text-sm mt-2">Over 2,000 authentic Indian &amp; international groceries</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(o => !o)}
              className="lg:hidden flex items-center gap-2 text-sm font-semibold border border-warm-300 bg-white px-4 py-2 rounded-full hover:border-forest-700 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
              {selectedCats.length > 0 && (
                <span className="w-5 h-5 bg-forest-700 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {selectedCats.length}
                </span>
              )}
            </button>
            <span className="text-sm text-stone-400">{filtered.length} products</span>
          </div>
          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none bg-white border border-warm-300 rounded-full pl-4 pr-9 py-2 text-sm text-stone-700 font-medium cursor-pointer focus:outline-none focus:border-forest-500 hover:border-stone-400 transition-colors"
            >
              {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-7">
          {/* Sidebar desktop */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Mobile sidebar */}
          {sidebarOpen && (
            <div className="lg:hidden fixed inset-0 z-40 bg-black/40" onClick={() => setSidebarOpen(false)}>
              <div className="absolute inset-y-0 left-0 w-72 bg-warm-50 p-4 overflow-y-auto shadow-xl" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-stone-800">Filters</h2>
                  <button onClick={() => setSidebarOpen(false)}><X className="w-5 h-5" /></button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-4xl mb-3">🫙</p>
                <h3 className="font-semibold text-stone-700 mb-1">No products found</h3>
                <p className="text-sm text-stone-400">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
                {filtered.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
