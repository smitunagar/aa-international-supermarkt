'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import PageLayout from '@/components/layout/PageLayout'

const sections = [
  {
    title: 'Orders & Delivery',
    items: [
      {
        q: 'How long does delivery take?',
        a: 'Standard delivery takes 2–4 business days. Express delivery (1–2 business days) is available at checkout for an additional fee. Free shipping on all orders over €49.',
      },
      {
        q: 'What are the delivery charges?',
        a: 'We offer free shipping on orders above €49. Below that, standard delivery is €3.99 and express delivery is €6.99 across Germany.',
      },
      {
        q: 'Can I track my order?',
        a: 'Yes! Once your order is dispatched you will receive a DHL tracking link by email. You can also find it in your account under "My Orders".',
      },
      {
        q: 'Do you deliver outside Germany?',
        a: 'Currently we deliver only within Germany. International shipping to Austria and Switzerland is planned for early 2025.',
      },
      {
        q: 'What if I am not home at the time of delivery?',
        a: 'Our DHL courier will leave a note and attempt redelivery. You can also redirect the parcel to a nearby DHL Packstation via the tracking link.',
      },
    ],
  },
  {
    title: 'Products & Brands',
    items: [
      {
        q: 'Are your products authentic / genuine?',
        a: 'Absolutely. We source directly from authorised distributors and well-known importers. Every product on our site is 100% authentic.',
      },
      {
        q: 'Do you sell organic products?',
        a: 'Yes, we stock a growing range of organic items. Look for the "Organic" badge on the product page, or browse the organic tag in our Shop.',
      },
      {
        q: 'Are the nutritional labels in German?',
        a: 'Most imported products carry their original packaging labels. However, many brands now include multilingual labels. We display full ingredient lists on each product page.',
      },
      {
        q: 'How do I request a product that is not listed?',
        a: 'Use the Contact page to send us your request. We evaluate new product requests regularly and try to source popular items within 4–6 weeks.',
      },
    ],
  },
  {
    title: 'Returns & Refunds',
    items: [
      {
        q: 'What is your return policy?',
        a: 'You may return most unopened, undamaged items within 14 days of delivery. Perishable goods and items with broken seals cannot be returned for food-safety reasons.',
      },
      {
        q: 'How do I initiate a return?',
        a: 'Email us at returns@aa-supermarkt.de with your order number and the reason. We will send you a prepaid DHL return label within 24 hours.',
      },
      {
        q: 'When will I receive my refund?',
        a: 'Refunds are processed within 3–5 business days of us receiving the returned parcel. The amount will be credited to your original payment method.',
      },
    ],
  },
  {
    title: 'Payment',
    items: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept Visa, Mastercard, American Express, PayPal, SEPA direct debit (Lastschrift), Klarna (Buy Now Pay Later), Apple Pay, and Google Pay.',
      },
      {
        q: 'Is my payment information secure?',
        a: 'Yes. We use SSL encryption and never store your card details. All payments are processed by certified PCI-DSS compliant providers.',
      },
      {
        q: 'Can I use multiple promo codes on one order?',
        a: 'Only one promo code can be applied per order. Codes cannot be combined with other ongoing promotions unless stated otherwise.',
      },
    ],
  },
  {
    title: 'My Account',
    items: [
      {
        q: 'How do I create an account?',
        a: 'Click "Sign In" in the top navigation and choose "Create Account". You can also register with your Google or Facebook account.',
      },
      {
        q: 'I forgot my password — what do I do?',
        a: 'Click "Forgot password?" on the sign-in page. We will email you a secure reset link that is valid for 24 hours.',
      },
      {
        q: 'Can I save products to a wishlist?',
        a: 'Yes! Click the heart icon on any product card or product page to add it to your wishlist. You must be signed in to save your wishlist across devices.',
      },
    ],
  },
]

function FAQAccordion({ items }: { items: typeof sections[0]['items'] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="divide-y divide-warm-200">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 py-4 text-left group"
          >
            <span className="text-sm font-semibold text-stone-800 group-hover:text-forest-700 transition-colors">
              {item.q}
            </span>
            {open === i
              ? <ChevronUp className="w-4 h-4 text-forest-600 flex-shrink-0 mt-0.5" />
              : <ChevronDown className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" />}
          </button>
          {open === i && (
            <p className="text-sm text-stone-500 leading-relaxed pb-4 pr-8">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default function FAQPage() {
  const [activeSection, setActiveSection] = useState(0)

  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}>

      {/* Header */}
      <div className="bg-white border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-2">Help Centre</p>
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-stone-900">Frequently Asked Questions</h1>
          <p className="text-stone-500 text-sm mt-2 max-w-xl">
            Can&apos;t find your answer here? Drop us a line on our Contact page.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="lg:grid lg:grid-cols-[220px_1fr] gap-10">

          {/* Sidebar tabs */}
          <nav className="hidden lg:block space-y-1 sticky top-28 self-start">
            {sections.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveSection(i)}
                className={`w-full text-left text-sm px-4 py-2.5 rounded-xl font-medium transition-all ${
                  activeSection === i
                    ? 'bg-forest-700 text-white'
                    : 'text-stone-600 hover:bg-warm-100 hover:text-stone-900'
                }`}
              >
                {s.title}
              </button>
            ))}
          </nav>

          {/* Mobile section tabs (horizontal scroll) */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6 lg:hidden">
            {sections.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveSection(i)}
                className={`flex-shrink-0 text-xs px-4 py-2 rounded-full font-semibold transition-all ${
                  activeSection === i
                    ? 'bg-forest-700 text-white'
                    : 'bg-warm-100 text-stone-600 hover:bg-warm-200'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div>
            {sections.map((section, i) => (
              <div
                key={i}
                className={activeSection === i ? 'block' : 'hidden'}
              >
                <h2 className="font-display text-xl font-bold text-stone-900 mb-4">{section.title}</h2>
                <div className="bg-white rounded-2xl shadow-card border border-warm-100 px-6">
                  <FAQAccordion items={section.items} />
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="mt-10 bg-forest-700 rounded-2xl p-6 lg:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-base">Still have questions?</p>
                <p className="text-sm text-forest-200 mt-0.5">Our team is happy to help — reach out anytime.</p>
              </div>
              <a
                href="/contact"
                className="flex-shrink-0 bg-saffron-500 hover:bg-saffron-600 text-stone-900 font-bold text-sm px-6 py-3 rounded-full transition-all hover:shadow-md"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
