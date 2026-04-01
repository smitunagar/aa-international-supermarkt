'use client'

import { useState } from 'react'
import { Star, ShoppingCart, Minus, Plus, ShieldCheck, Leaf, Zap, ChevronDown, Heart } from 'lucide-react'
import { Product } from '@/data/products'

interface Props {
  product: Product
}

const trustBadges = [
  { icon: ShieldCheck, title: 'Quality Guaranteed',  subtitle: 'Every product inspected' },
  { icon: Leaf,        title: 'Authentic Brands',    subtitle: 'Direct from source' },
  { icon: Zap,         title: 'Express Dispatch',    subtitle: 'Same-day on orders <12:00' },
]

const paymentMethods = ['Visa', 'Mastercard', 'PayPal', 'Klarna', 'SEPA']

export default function ProductInfo({ product }: Props) {
  const variants = product.variants ?? []
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0]?.id ?? null)
  const [qty, setQty]                             = useState(1)
  const [shippingOpen, setShippingOpen]           = useState(false)
  const [added, setAdded]                         = useState(false)
  const [wishlisted, setWishlisted]               = useState(false)

  const activeVariant = variants.find((v: { id: string }) => v.id === selectedVariantId) ?? variants[0]
  const price         = activeVariant?.price         ?? product.price
  const origPrice     = activeVariant?.originalPrice ?? product.originalPrice
  const discount      = origPrice ? Math.round(((origPrice - price) / origPrice) * 100) : 0

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="flex flex-col gap-6">

      {/* ── Product name ── */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-stone-900 uppercase tracking-wide leading-tight">
          {product.name}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-2.5 mt-2.5">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map(i => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i <= Math.floor(product.rating)
                    ? 'fill-saffron-400 text-saffron-400'
                    : i - 0.5 <= product.rating
                    ? 'fill-saffron-200 text-saffron-300'
                    : 'fill-stone-200 text-stone-200'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-stone-500 underline underline-offset-2 cursor-pointer hover:text-forest-700 transition-colors">
            {product.reviews} Reviews
          </span>
        </div>
      </div>

      {/* ── Description ── */}
      <p className="text-sm text-stone-500 leading-relaxed">{product.description}</p>

      {/* ── Divider ── */}
      <div className="border-t border-warm-200" />

      {/* ── Price ── */}
      <div>
        <div className="flex items-baseline gap-3 flex-wrap">
          <span className="text-2xl font-bold text-stone-900">€{price.toFixed(2)}</span>
          {origPrice && (
            <span className="text-base text-stone-400 line-through">€{origPrice.toFixed(2)}</span>
          )}
          {discount > 0 && (
            <span className="text-sm font-bold text-spice-500 bg-spice-50 px-2 py-0.5 rounded-full">
              -{discount}%
            </span>
          )}
        </div>
        <p className="text-xs text-stone-400 mt-1.5">Inkl. MwSt. · Versandkostenfrei ab €49</p>
      </div>

      {/* ── Variant selector ── */}
      {variants.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-stone-700 mb-2.5">Weight</p>
          <div className="flex flex-wrap gap-2">
            {variants.map((v: { id: string; label: string; price: number; originalPrice?: number; inStock: boolean }) => (
              <button
                key={v.id}
                onClick={() => { if (v.inStock) setSelectedVariantId(v.id) }}
                disabled={!v.inStock}
                className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-150 ${
                  selectedVariantId === v.id
                    ? 'bg-stone-900 text-white border-stone-900 scale-[1.03]'
                    : v.inStock
                    ? 'bg-white text-stone-700 border-stone-300 hover:border-stone-700'
                    : 'bg-white text-stone-300 border-stone-200 cursor-not-allowed line-through'
                }`}
              >
                {v.label}
                {!v.inStock && <span className="ml-1 text-[10px]">(OOS)</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Quantity + Add to Cart ── */}
      <div>
        <p className="text-sm font-semibold text-stone-700 mb-2.5">Select Quantity</p>
        <div className="flex gap-3 items-center">

          {/* Stepper */}
          <div className="flex items-center border-2 border-stone-300 rounded-full overflow-hidden flex-shrink-0">
            <button
              onClick={() => setQty(q => Math.max(1, q - 1))}
              className="w-11 h-11 flex items-center justify-center text-stone-700 hover:bg-stone-100 transition-colors text-xl font-light"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center text-sm font-bold text-stone-900 select-none">{qty}</span>
            <button
              onClick={() => setQty(q => q + 1)}
              className="w-11 h-11 flex items-center justify-center text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 border-2 border-stone-900 text-stone-900 font-bold rounded-full py-3 hover:bg-stone-900 hover:text-white active:scale-[0.98] transition-all duration-200 text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            {added ? 'Added!' : 'Add To Cart'}
          </button>

          {/* Wishlist */}
          <button
            onClick={() => setWishlisted(w => !w)}
            className="w-11 h-11 rounded-full border-2 border-stone-300 flex items-center justify-center hover:border-spice-400 transition-colors flex-shrink-0"
            aria-label="Add to wishlist"
          >
            <Heart className={`w-4 h-4 transition-colors ${wishlisted ? 'fill-spice-500 text-spice-500' : 'text-stone-400'}`} />
          </button>
        </div>
      </div>

      {/* ── Buy It Now ── */}
      <button className="w-full bg-saffron-500 hover:bg-saffron-600 active:scale-[0.99] text-white font-bold rounded-full py-3.5 text-sm tracking-widest uppercase transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-3">
        <span className="text-white/60">✦</span>
        Buy It Now
        <span className="text-white/60">✦</span>
      </button>

      {/* ── Trust Badges ── */}
      <div className="grid grid-cols-3 gap-3 py-5 border-t border-b border-warm-200">
        {trustBadges.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="flex flex-col items-center text-center gap-2">
            <div className="w-11 h-11 rounded-full bg-forest-50 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-forest-600" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-stone-800 leading-tight">{title}</p>
              <p className="text-[10px] text-stone-400 leading-tight mt-0.5 hidden sm:block">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Payment Methods ── */}
      <div className="flex items-center gap-2.5 flex-wrap">
        <span className="text-xs text-stone-400 font-medium mr-1">Payment Methods</span>
        <span className="text-stone-200">|</span>
        {paymentMethods.map(pm => (
          <span
            key={pm}
            className="text-[10px] font-bold px-2.5 py-1 border border-stone-200 rounded-md text-stone-500 bg-stone-50"
          >
            {pm}
          </span>
        ))}
      </div>

      {/* ── Shipping Accordion ── */}
      <div className="border-t border-warm-200">
        <button
          onClick={() => setShippingOpen(o => !o)}
          className="w-full flex items-center justify-between py-4 text-sm font-semibold text-stone-700 hover:text-forest-700 transition-colors group"
        >
          <span>Shipping And Return Policy</span>
          <ChevronDown
            className={`w-4 h-4 text-stone-400 group-hover:text-forest-700 transition-all duration-200 ${shippingOpen ? 'rotate-180' : ''}`}
          />
        </button>
        {shippingOpen && (
          <div className="pb-5 text-sm text-stone-500 space-y-2.5 leading-relaxed">
            <p className="flex gap-2"><span className="text-forest-600">•</span> Kostenloser Versand auf Bestellungen über €49 in ganz Deutschland</p>
            <p className="flex gap-2"><span className="text-forest-600">•</span> Standardlieferung: 2–4 Werktage per DHL</p>
            <p className="flex gap-2"><span className="text-forest-600">•</span> Expresslieferung (1–2 Werktage) an der Kasse buchbar</p>
            <p className="flex gap-2"><span className="text-forest-600">•</span> Rückgabe innerhalb von 14 Tagen möglich (ungeöffnete Artikel)</p>
            <p className="flex gap-2"><span className="text-forest-600">•</span> Kontakt: hello@aa-supermarkt.de | +49 69 1234 5678</p>
          </div>
        )}
      </div>

    </div>
  )
}
