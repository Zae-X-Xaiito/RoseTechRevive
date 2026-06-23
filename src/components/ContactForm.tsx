import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { FormEvent, useState } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#f5f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f]">
              Schedule your repair.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#68686d]">
              Tell us what happened and when you would like to come in. We will
              confirm availability and final pricing after diagnostics.
            </p>
            <div className="mt-10 grid gap-4 text-sm text-[#68686d]">
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#0071e3]" />
                1-876-555-0198
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#0071e3]" />
                hello@rosetechrevive.example
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#0071e3]" />
                Kingston, Jamaica
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/70 bg-white/90 p-5 sm:p-8 shadow-soft backdrop-blur"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                Name
                <input
                  required
                  className="h-12 rounded-2xl border border-gray-200 px-4 font-normal outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-sky-100"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                Phone
                <input
                  required
                  type="tel"
                  className="h-12 rounded-2xl border border-gray-200 px-4 font-normal outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-sky-100"
                  placeholder="876-555-0123"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                Device
                <select className="h-12 rounded-2xl border border-gray-200 px-4 font-normal outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-sky-100">
                  <option>iPhone</option>
                  <option>iPad</option>
                  <option>MacBook</option>
                  <option>Other Apple device</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                Preferred time
                <input
                  type="datetime-local"
                  className="h-12 rounded-2xl border border-gray-200 px-4 font-normal outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-sky-100"
                />
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-sm font-semibold text-gray-700">
              What needs fixing?
              <textarea
                required
                rows={5}
                className="resize-none rounded-2xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-sky-100"
                placeholder="Screen cracked, battery draining, water damage..."
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-full bg-black px-8 text-base font-semibold text-white hover:bg-gray-800 transition-colors"
            >
              Request appointment
            </button>

            {submitted && (
              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-sm font-medium text-emerald-800">
                <CheckCircle2 className="h-5 w-5" />
                Request received. We will confirm your repair window shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
