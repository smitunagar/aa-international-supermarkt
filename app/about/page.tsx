import Image from 'next/image'
import { CheckCircle2, Users, Package, Truck, Star } from 'lucide-react'
import PageLayout from '@/components/layout/PageLayout'

export const metadata = {
  title: 'About Us | A&A International Supermarkt',
  description: 'The story behind A&A International Supermarkt — authentic Indian groceries in Germany since 2015.',
}

const values = [
  { icon: CheckCircle2, title: 'Authenticity First',    desc: 'We stock only genuine products from trusted brands. No substitutes, ever.' },
  { icon: Package,      title: 'Carefully Curated',     desc: 'Every product is personally selected for quality, freshness, and authenticity.' },
  { icon: Truck,        title: 'Reliable Delivery',     desc: 'Fast, tracked DHL delivery to every corner of Germany.' },
  { icon: Users,        title: 'Community Driven',      desc: 'Built for the Indian community in Germany — and anyone who loves authentic food.' },
]

const milestones = [
  { year: '2015', event: 'A&A opens its first physical store in Frankfurt' },
  { year: '2018', event: 'Expanded to over 500 products and 3,000 customers' },
  { year: '2021', event: 'Launched online store for all of Germany' },
  { year: '2023', event: 'Reached 50,000 happy customers across the country' },
  { year: '2025', event: 'Expanded catalogue to 2,000+ products from 15 countries' },
  { year: '2026', event: 'Launched new website with express same-day dispatch' },
]

const team = [
  { name: 'Arjun Mehta',      role: 'Founder & CEO',         avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop&crop=face' },
  { name: 'Ananya Sharma',    role: 'Co-Founder & Head of Buying', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop&crop=face' },
  { name: 'Ravi Krishnamurthy', role: 'Operations Manager',   avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop&crop=face' },
  { name: 'Priya Nair',       role: 'Customer Experience',   avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop&crop=face' },
]

export default function AboutPage() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}>

      {/* Hero */}
      <div className="relative overflow-hidden bg-forest-900 min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80&auto=format&fit=crop"
            alt="Spices and produce"
            fill sizes="100vw"
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 to-forest-900/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <p className="text-saffron-400 text-xs font-bold tracking-widest uppercase mb-4">Our Story</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
            Bringing the Taste of Home to Germany
          </h1>
          <p className="mt-5 text-white/65 text-base leading-relaxed max-w-xl">
            A&A International Supermarkt was born from a simple belief: everyone deserves access to the authentic flavours of their homeland,
            no matter where they live.
          </p>
        </div>
      </div>

      {/* Story section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-3">How It Started</p>
            <h2 className="font-display text-3xl font-bold text-stone-900 mb-5">A Family Project, A Community Mission</h2>
            <div className="space-y-4 text-stone-500 text-sm leading-relaxed">
              <p>
                In 2015, Arjun and Ananya Mehta moved from Mumbai to Frankfurt. Like thousands of Indians in Germany, they struggled
                to find the right brands — the exact atta their mother used, the MDH masala that made their dal taste right.
              </p>
              <p>
                So they opened a small store on Berliner Strasse. Word spread quickly. By 2018 they had over 3,000 loyal customers
                driving from across the region just to shop with them.
              </p>
              <p>
                In 2021 they launched online, making it possible for any Indian family in Germany — from Berlin to Munich — to get
                their favourite groceries delivered to their door.
              </p>
              <p>
                Today A&A carries over 2,000 products from India, Sri Lanka, Pakistan, Bangladesh, the Caribbean and beyond.
                But the mission remains the same: authentic food, reliably delivered, with care.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&q=80&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80&auto=format&fit=crop',
            ].map((src, i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden shadow-card ${i % 2 === 1 ? 'mt-6' : ''}`}
                style={{ aspectRatio: i === 0 || i === 3 ? '3/4' : '1/1' }}
              >
                <Image src={src} alt="" fill sizes="25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-forest-800 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '2,000+', label: 'Products' },
              { value: '50,000+', label: 'Happy Customers' },
              { value: '15', label: 'Countries Sourced' },
              { value: '4.9★', label: 'Average Rating' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-saffron-400">{stat.value}</div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-2 text-center">What We Stand For</p>
        <h2 className="font-display text-3xl font-bold text-stone-900 text-center mb-10">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-card text-center">
              <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-forest-700" />
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">{title}</h3>
              <p className="text-sm text-stone-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-warm-100 py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-2 text-center">Our Journey</p>
          <h2 className="font-display text-3xl font-bold text-stone-900 text-center mb-10">Milestones</h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-5 relative">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-forest-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Star className="w-4 h-4 text-saffron-400" />
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-forest-200 my-1" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-xs font-bold text-saffron-600 mb-1">{m.year}</p>
                  <p className="text-sm text-stone-600">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-2 text-center">The People Behind A&A</p>
        <h2 className="font-display text-3xl font-bold text-stone-900 text-center mb-10">Meet the Team</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(member => (
            <div key={member.name} className="text-center group">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 shadow-card group-hover:shadow-card-hover transition-shadow">
                <Image src={member.avatar} alt={member.name} fill sizes="96px" className="object-cover" />
              </div>
              <h3 className="font-semibold text-stone-800 text-sm">{member.name}</h3>
              <p className="text-xs text-stone-400 mt-0.5">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    </PageLayout>
  )
}
