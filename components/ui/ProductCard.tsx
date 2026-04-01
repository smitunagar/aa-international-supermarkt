'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Heart, Star, Plus, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import { Product } from '@/data/products'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  className?: string
}

const badgeConfig = {
  bestseller: { label: 'Bestseller', class: 'bg-forest-700 text-white' },
  new:        { label: 'New',        class: 'bg-saffron-500 text-white' },
  offer:      { label: 'Sale',       class: 'bg-spice-500 text-white' },
  organic:    { label: 'Organic',    class: 'bg-forest-500 text-white' },
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const [qty, setQty] = useState(0)
  const [wishlisted, setWishlisted] = useState(false)

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAdd = () => setQty(1)
  const handleIncrease = () => setQty(q => q + 1)
  const handleDecrease = () => setQty(q => Math.max(0, q - 1))

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className={cn(
        'group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col',
        className
      )}
    >
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="relative aspect-[4/3] overflow-hidden bg-warm-50 block">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className={cn('text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide', badgeConfig[product.badge as keyof typeof badgeConfig].class)}>
              {badgeConfig[product.badge as keyof typeof badgeConfig].label}
            </span>
          )}
          {discount > 0 && (
            <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-spice-500 text-white tracking-wide">
              -{discount}%
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => setWishlisted(w => !w)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
          aria-label="Add to wishlist"
        >
          <Heart
            className={cn('w-4 h-4 transition-colors', wishlisted ? 'fill-spice-500 text-spice-500' : 'text-stone-400')}
          />
        </button>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        {/* Brand */}
        <span className="text-[11px] font-semibold text-saffron-600 uppercase tracking-wider">
          {product.brand}
        </span>

        {/* Name */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-sm font-semibold text-stone-800 hover:text-forest-700 transition-colors leading-snug line-clamp-2 flex-1">
            {product.name}
          </h3>
        </Link>

        {/* Description + Unit */}
        <p className="text-xs text-stone-400">{product.description} · {product.unit}</p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn('w-3 h-3', i < Math.floor(product.rating) ? 'fill-saffron-400 text-saffron-400' : 'fill-warm-200 text-warm-200')}
              />
            ))}
          </div>
          <span className="text-[11px] text-stone-400">({product.reviews})</span>
        </div>

        {/* Price & Cart */}
        <div className="flex items-center justify-between mt-1 pt-3 border-t border-warm-100">
          <div>
            <span className="text-base font-bold text-forest-700">€{product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="ml-1.5 text-xs text-stone-400 line-through">€{product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          {qty === 0 ? (
            <button
              onClick={handleAdd}
              className="flex items-center gap-1.5 bg-forest-700 hover:bg-forest-800 text-white text-xs font-semibold px-3.5 py-2 rounded-full transition-all duration-200 hover:shadow-md active:scale-95"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              Add
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-forest-700 text-white rounded-full px-1 py-0.5">
              <button onClick={handleDecrease} className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors">
                <Minus className="w-3 h-3" />
              </button>
              <span className="text-xs font-semibold min-w-[16px] text-center">{qty}</span>
              <button onClick={handleIncrease} className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors">
                <Plus className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
