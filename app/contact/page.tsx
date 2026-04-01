'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import PageLayout from '@/components/layout/PageLayout'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}>

      {/* Header */}
      <div className="bg-white border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-2">We&apos;re Here to Help</p>
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-stone-900">Contact Us</h1>
          <p className="text-stone-500 text-sm mt-2">
            Questions, feedback, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-semibold text-stone-800 text-lg mb-5">Get in Touch</h2>
              <div className="space-y-4">
                {[
                  { Icon: MapPin, label: 'Address',   value: 'Berliner Str. 42, 60311 Frankfurt am Main, Deutschland' },
                  { Icon: Phone,  label: 'Phone',     value: '+49 69 1234 5678' },
                  { Icon: Mail,   label: 'Email',     value: 'hello@aa-supermarkt.de' },
                  { Icon: Clock,  label: 'Hours',     value: 'Mon–Fri 9:00–18:00 · Sat 10:00–15:00' },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4.5 h-4.5 w-4 h-4 text-forest-700" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 font-medium">{label}</p>
                      <p className="text-sm text-stone-700 font-medium mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative rounded-2xl overflow-hidden bg-stone-100 h-56 lg:h-72 flex items-center justify-center border border-warm-200">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-stone-300 mx-auto mb-2" />
                <p className="text-sm text-stone-400">Map — Frankfurt am Main</p>
                <p className="text-xs text-stone-300 mt-0.5">Berliner Str. 42, 60311</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-semibold text-stone-800 text-lg mb-5">Send Us a Message</h2>
            {!sent ? (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-card p-6 lg:p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">First Name *</label>
                    <input required type="text" placeholder="Max"
                      className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-forest-500/25 focus:border-forest-500 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">Last Name *</label>
                    <input required type="text" placeholder="Müller"
                      className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-forest-500/25 focus:border-forest-500 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5">Email *</label>
                  <input required type="email" placeholder="max@example.de"
                    className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-forest-500/25 focus:border-forest-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm text-stone-600 focus:outline-none focus:ring-2 focus:ring-forest-500/25 focus:border-forest-500 transition-all bg-white">
                    <option>Order enquiry</option>
                    <option>Delivery issue</option>
                    <option>Product question</option>
                    <option>Returns & refunds</option>
                    <option>Wholesale</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5">Message *</label>
                  <textarea required rows={5} placeholder="Tell us how we can help…"
                    className="w-full px-4 py-3 rounded-xl border border-warm-300 text-sm placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-forest-500/25 focus:border-forest-500 transition-all resize-none" />
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-800 text-white font-bold py-3.5 rounded-full text-sm transition-all hover:shadow-md active:scale-[0.98]">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
                <p className="text-xs text-stone-400 text-center">
                  We usually respond within 1 business day. Datenschutz: your data is processed per our privacy policy.
                </p>
              </form>
            ) : (
              <div className="bg-white rounded-2xl shadow-card p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-forest-50 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-forest-700" />
                </div>
                <h3 className="font-display text-xl font-bold text-stone-900 mb-2">Message Sent!</h3>
                <p className="text-sm text-stone-500">
                  Thanks for reaching out. We&apos;ll get back to you within 1 business day.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
