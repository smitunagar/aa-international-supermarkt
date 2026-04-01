import Link from 'next/link'
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, Leaf } from 'lucide-react'

const footerLinks = {
  shop: [
    { label: 'All Products',    href: '/shop' },
    { label: 'New Arrivals',    href: '/new' },
    { label: 'Best Sellers',    href: '/bestsellers' },
    { label: 'Offers & Deals',  href: '/offers' },
    { label: 'Gift Hampers',    href: '/gifts' },
  ],
  categories: [
    { label: 'Spices & Masalas',    href: '/categories/spices-masalas' },
    { label: 'Rice & Grains',        href: '/categories/rice-grains' },
    { label: 'Canned Goods',         href: '/categories/canned-goods' },
    { label: 'Tea & Coffee',         href: '/categories/tea-coffee' },
    { label: 'Snacks & Sweets',      href: '/categories/snacks-sweets' },
    { label: 'Fresh Produce',        href: '/categories/fresh-produce' },
    { label: 'Dairy & Refrigerated', href: '/categories/dairy-refrigerated' },
    { label: 'Beverages & Juices',   href: '/categories/beverages' },
  ],
  help: [
    { label: 'FAQ',              href: '/faq' },
    { label: 'Delivery Info',    href: '/delivery' },
    { label: 'Returns Policy',   href: '/returns' },
    { label: 'Track Your Order', href: '/track' },
    { label: 'Contact Us',       href: '/contact' },
  ],
  legal: [
    { label: 'Impressum',        href: '/impressum' },
    { label: 'Datenschutz',      href: '/datenschutz' },
    { label: 'AGB',              href: '/agb' },
    { label: 'Widerrufsrecht',   href: '/widerrufsrecht' },
    { label: 'Cookie-Richtlinie',href: '/cookies' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-forest-700 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-saffron-400 absolute opacity-30" />
                <span className="text-white text-[11px] font-bold tracking-tight relative z-10">A&A</span>
              </div>
              <div>
                <div className="font-display text-base font-bold text-white leading-tight">
                  A&A International
                </div>
                <div className="text-[10px] text-stone-400 tracking-[0.18em] uppercase font-medium">
                  Supermarkt
                </div>
              </div>
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
              Your trusted source for authentic Indian and international groceries in Germany.
              Bringing the flavours of home to your kitchen since 2015.
            </p>

            {/* Contact */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 text-sm text-stone-400">
                <MapPin className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                <span>Berliner Str. 42, 60311 Frankfurt am Main</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-400">
                <Phone className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                <span>+49 69 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-400">
                <Mail className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                <span>hello@aa-supermarkt.de</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Facebook,  href: '#', label: 'Facebook' },
                { Icon: Youtube,   href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-stone-800 hover:bg-saffron-500 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-widest mb-5">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-stone-400 hover:text-saffron-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-widest mb-5">Categories</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-stone-400 hover:text-saffron-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-widest mb-5">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-stone-400 hover:text-saffron-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-stone-500 text-center sm:text-left">
              © {new Date().getFullYear()} A&A International Supermarkt GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {footerLinks.legal.map(link => (
                <Link key={link.label} href={link.href} className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
