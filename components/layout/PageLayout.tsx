import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

interface Crumb { label: string; href?: string }

interface Props {
  children: React.ReactNode
  breadcrumbs?: Crumb[]
  hero?: React.ReactNode
}

export default function PageLayout({ children, breadcrumbs, hero }: Props) {
  return (
    <>
      <Header />
      {hero}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="bg-warm-50 border-b border-warm-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <nav className="flex items-center gap-1.5 text-sm text-stone-400 flex-wrap">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-stone-300">›</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-forest-700 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-stone-600 font-medium">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </div>
      )}
      <main className="bg-warm-50 min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
