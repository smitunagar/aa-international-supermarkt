import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-warm-50 flex flex-col">

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        {/* Decorative spice dots */}
        <div className="flex gap-2 mb-8">
          {['bg-saffron-400', 'bg-spice-400', 'bg-forest-500', 'bg-saffron-300', 'bg-warm-400'].map((c, i) => (
            <span key={i} className={`w-2.5 h-2.5 rounded-full ${c} opacity-70`} />
          ))}
        </div>

        <p className="text-8xl lg:text-9xl font-display font-black text-forest-700 leading-none">404</p>
        <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mt-3">Page Not Found</p>

        <h1 className="font-display text-2xl lg:text-3xl font-bold text-stone-900 mt-5 max-w-md">
          Looks like this page went out of stock!
        </h1>
        <p className="text-stone-500 text-sm max-w-sm mt-3 leading-relaxed">
          The page you&apos;re looking for has either been moved, renamed, or never existed. Don&apos;t worry — our shelves are still full of great products.
        </p>

        {/* Quick links */}
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          <Link
            href="/"
            className="bg-forest-700 hover:bg-forest-800 text-white font-bold px-6 py-3 rounded-full text-sm transition-all hover:shadow-md"
          >
            Back to Home
          </Link>
          <Link
            href="/shop"
            className="border-2 border-forest-700 text-forest-700 hover:bg-forest-700 hover:text-white font-bold px-6 py-3 rounded-full text-sm transition-all"
          >
            Browse Shop
          </Link>
          <Link
            href="/categories"
            className="bg-warm-100 hover:bg-warm-200 text-stone-700 font-semibold px-6 py-3 rounded-full text-sm transition-all"
          >
            All Categories
          </Link>
        </div>

        {/* Popular links */}
        <div className="mt-10 text-xs text-stone-400">
          <span className="mr-2">Popular:</span>
          {[
            { label: 'Iranstar Rice', href: '/products/iranstar-extra-long-rice-5kg' },
            { label: 'Spices', href: '/categories/spices-masalas' },
            { label: 'Offers', href: '/offers' },
            { label: 'New Arrivals', href: '/new' },
          ].map((l, i) => (
            <span key={l.href}>
              <Link href={l.href} className="text-forest-600 hover:underline">{l.label}</Link>
              {i < 3 && <span className="mx-1.5 text-stone-200">·</span>}
            </span>
          ))}
        </div>
      </main>
    </div>
  )
}
