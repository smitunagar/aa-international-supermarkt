import { Truck, ShieldCheck, Leaf, Clock, Globe } from 'lucide-react'

const highlights = [
  {
    Icon: Truck,
    title: 'Germany-wide Delivery',
    description: 'Free shipping on orders over €49',
    color: 'text-forest-600',
    bg: 'bg-forest-50',
  },
  {
    Icon: Leaf,
    title: 'Fresh & Quality',
    description: 'Carefully sourced, freshness guaranteed',
    color: 'text-saffron-600',
    bg: 'bg-saffron-50',
  },
  {
    Icon: Globe,
    title: 'Authentic Brands',
    description: '2,000+ products from India & beyond',
    color: 'text-spice-600',
    bg: 'bg-spice-50',
  },
  {
    Icon: ShieldCheck,
    title: 'Secure Checkout',
    description: 'SSL-encrypted, GDPR-compliant payment',
    color: 'text-forest-600',
    bg: 'bg-forest-50',
  },
  {
    Icon: Clock,
    title: 'Express Dispatch',
    description: 'Same-day dispatch on orders before 12:00',
    color: 'text-saffron-600',
    bg: 'bg-saffron-50',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-warm-50 border-b border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {highlights.map(({ Icon, title, description, color, bg }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl hover:bg-white hover:shadow-card transition-all duration-200"
            >
              <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-stone-800">{title}</p>
                <p className="text-[11px] text-stone-400 mt-0.5 leading-snug">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
