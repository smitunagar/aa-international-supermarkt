'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Category } from '@/data/categories'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
  category: Category
  className?: string
  index?: number
}

export default function CategoryCard({ category, className, index = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <Link
        href={`/categories/${category.slug}`}
        className={cn(
          'group relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer',
          className
        )}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-warm-100">
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 50vw, 20vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* Badge */}
          {category.badge && (
            <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-saffron-500 text-white">
              {category.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-stone-800 group-hover:text-forest-700 transition-colors">
              {category.name}
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">{category.count} products</p>
          </div>
          <div className="w-7 h-7 rounded-full bg-warm-100 group-hover:bg-forest-700 flex items-center justify-center transition-all duration-200 flex-shrink-0">
            <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-white transition-colors" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
