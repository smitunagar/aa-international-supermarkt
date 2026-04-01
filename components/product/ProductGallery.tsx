'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Product } from '@/data/products'

interface Props {
  product: Product
}

export default function ProductGallery({ product }: Props) {
  const images: string[] = product.images?.length
    ? product.images
    : [product.image, product.image, product.image, product.image]

  const [selected, setSelected] = useState(0)

  const prev = () => setSelected(s => (s - 1 + images.length) % images.length)
  const next = () => setSelected(s => (s + 1) % images.length)

  return (
    <div className="flex gap-3 lg:gap-4">

      {/* ── Thumbnail Strip ── */}
      <div className="flex flex-col gap-2 flex-shrink-0">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`relative w-[68px] h-[68px] rounded-xl overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
              selected === i
                ? 'border-forest-700 shadow-sm scale-[1.03]'
                : 'border-stone-200 opacity-55 hover:opacity-90 hover:border-stone-400'
            }`}
          >
            <Image
              src={img}
              alt={`${product.name} – view ${i + 1}`}
              fill
              sizes="68px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* ── Main Image ── */}
      <div className="relative flex-1 aspect-square rounded-2xl overflow-hidden bg-stone-100">
        <Image
          src={images[selected]}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-opacity duration-300"
        />

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 shadow-md flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-150"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-stone-700" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 shadow-md flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-150"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-stone-700" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`rounded-full transition-all duration-200 ${
                selected === i ? 'w-5 h-1.5 bg-forest-700' : 'w-1.5 h-1.5 bg-white/70 hover:bg-white'
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
