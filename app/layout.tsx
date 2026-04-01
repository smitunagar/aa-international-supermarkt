import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: 'A&A International Supermarkt | Indian & International Groceries in Germany',
    template: '%s | A&A International Supermarkt',
  },
  description:
    'Shop authentic Indian and international groceries online. Spices, rice, lentils, snacks, dairy and more — delivered across Germany with free shipping over €49.',
  keywords: [
    'Indian groceries Germany',
    'Indian supermarket online',
    'Basmati rice Germany',
    'Indian spices Germany',
    'Online Indian grocery store',
    'Halal groceries Germany',
  ],
  openGraph: {
    title: 'A&A International Supermarkt',
    description: 'Authentic Indian & International Groceries delivered across Germany',
    siteName: 'A&A International Supermarkt',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-warm-50 text-stone-900">
        {children}
      </body>
    </html>
  )
}
