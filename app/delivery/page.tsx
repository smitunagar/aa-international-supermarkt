import { Truck, Clock, Package, RefreshCw, Shield, CheckCircle2 } from 'lucide-react'
import PageLayout from '@/components/layout/PageLayout'

const zones = [
  { city: 'Frankfurt am Main', time: '1–2 business days', cost: 'Free over €49 / else €3.99' },
  { city: 'Berlin', time: '2–3 business days', cost: 'Free over €49 / else €3.99' },
  { city: 'Munich', time: '2–3 business days', cost: 'Free over €49 / else €3.99' },
  { city: 'Hamburg', time: '2–3 business days', cost: 'Free over €49 / else €3.99' },
  { city: 'Cologne', time: '1–2 business days', cost: 'Free over €49 / else €3.99' },
  { city: 'Stuttgart', time: '2–3 business days', cost: 'Free over €49 / else €3.99' },
  { city: 'Düsseldorf', time: '2–3 business days', cost: 'Free over €49 / else €3.99' },
  { city: 'All other regions', time: '3–4 business days', cost: 'Free over €49 / else €3.99' },
]

const options = [
  {
    Icon: Truck,
    title: 'Standard Delivery',
    subtitle: '2–4 business days',
    price: '€3.99',
    note: 'Free on orders over €49',
    accent: 'bg-forest-50 border-forest-200',
    iconColor: 'text-forest-700',
    iconBg: 'bg-forest-100',
  },
  {
    Icon: Clock,
    title: 'Express Delivery',
    subtitle: '1–2 business days',
    price: '€6.99',
    note: 'Order before 12:00 noon',
    accent: 'bg-saffron-50 border-saffron-200',
    iconColor: 'text-saffron-600',
    iconBg: 'bg-saffron-100',
  },
  {
    Icon: Package,
    title: 'Click & Collect',
    subtitle: 'Same day available',
    price: 'Free',
    note: 'Frankfurt store only',
    accent: 'bg-spice-50 border-spice-200',
    iconColor: 'text-spice-600',
    iconBg: 'bg-spice-100',
  },
]

export default function DeliveryPage() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Delivery & Returns' }]}>

      {/* Header */}
      <div className="bg-white border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-2">Shipping Information</p>
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-stone-900">Delivery &amp; Returns</h1>
          <p className="text-stone-500 text-sm mt-2">
            Fast, reliable delivery across Germany — partnered with DHL.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-14">

        {/* Delivery Options */}
        <section>
          <h2 className="font-display text-xl font-bold text-stone-900 mb-5">Delivery Options</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {options.map(({ Icon, title, subtitle, price, note, accent, iconColor, iconBg }) => (
              <div key={title} className={`rounded-2xl border p-6 ${accent}`}>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${iconBg}`}>
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>
                <h3 className="font-semibold text-stone-800 text-sm">{title}</h3>
                <p className="text-stone-500 text-xs mt-0.5">{subtitle}</p>
                <div className="mt-4 flex items-end justify-between">
                  <span className="text-xl font-bold text-stone-900">{price}</span>
                  <span className="text-xs text-stone-400 text-right">{note}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery Zone Table */}
        <section>
          <h2 className="font-display text-xl font-bold text-stone-900 mb-5">Estimated Delivery Times by Region</h2>
          <div className="overflow-x-auto rounded-2xl border border-warm-200 shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-forest-700 text-white">
                  <th className="text-left px-6 py-3.5 font-semibold">City / Region</th>
                  <th className="text-left px-6 py-3.5 font-semibold">Estimated Time</th>
                  <th className="text-left px-6 py-3.5 font-semibold">Shipping Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-100 bg-white">
                {zones.map((z, i) => (
                  <tr key={i} className="hover:bg-warm-50 transition-colors">
                    <td className="px-6 py-3.5 font-medium text-stone-800">{z.city}</td>
                    <td className="px-6 py-3.5 text-stone-600">{z.time}</td>
                    <td className="px-6 py-3.5 text-stone-600">{z.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-400 mt-3">
            * Times are estimates and may vary during public holidays or peak periods. Orders placed on weekends are processed the next business day.
          </p>
        </section>

        {/* DHL Partnership */}
        <section className="bg-stone-900 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:flex-1">
            <p className="text-xs font-semibold text-saffron-400 uppercase tracking-widest mb-2">Official Partner</p>
            <h2 className="font-display text-2xl font-bold text-white mb-3">Delivered by DHL Express</h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              All orders are fulfilled via DHL — Germany&apos;s most trusted courier network. You&apos;ll receive a tracking link by email as soon as your parcel is on its way. Missed a delivery? Redirect your parcel to any DHL Packstation via the tracking app.
            </p>
          </div>
          <div className="flex-shrink-0 w-24 h-24 bg-yellow-400 rounded-2xl flex items-center justify-center">
            <Truck className="w-12 h-12 text-stone-900" />
          </div>
        </section>

        {/* Returns Policy */}
        <section>
          <h2 className="font-display text-xl font-bold text-stone-900 mb-5">Returns Policy</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-card border border-warm-100 p-6 space-y-4">
              {[
                { Icon: RefreshCw, title: '14-Day Returns',       text: 'Return most unopened, undamaged items within 14 days of receiving your order — no questions asked.' },
                { Icon: Shield,   title: 'Food Safety',           text: 'For hygiene reasons, perishable goods and products with broken seals or tampered packaging cannot be returned.' },
                { Icon: Package,  title: 'Free Return Shipping',  text: 'We cover return shipping costs. Email us to receive a prepaid DHL return label within 24 hours.' },
                { Icon: CheckCircle2, title: 'Refund in 3–5 Days', text: 'Once we receive and inspect your return, your refund will be credited to the original payment method within 3–5 business days.' },
              ].map(({ Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-forest-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-forest-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">{title}</p>
                    <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-forest-50 rounded-2xl border border-forest-100 p-6 space-y-3">
              <h3 className="font-semibold text-forest-800 mb-4">How to Return an Item</h3>
              {[
                'Email returns@aa-supermarkt.de with your order number',
                'Describe the item and reason for return',
                'Receive your prepaid DHL return label within 24 h',
                'Pack item securely and drop off at any DHL point',
                'Receive your refund within 3–5 business days',
              ].map((step, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-forest-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-sm text-forest-800 leading-snug">{step}</p>
                </div>
              ))}
              <a
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all"
              >
                Start a Return
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
