import { Calculator, Clock, ShieldCheck } from 'lucide-react'
import { useMemo, useState } from 'react'

const devices = {
  iPhone: {
    'Screen replacement': { price: 18500, time: '45-90 min' },
    'Battery service': { price: 9500, time: '30-60 min' },
    'Charging port': { price: 12500, time: '1-2 hrs' },
    'Water diagnostic': { price: 6500, time: 'Same day' },
  },
  iPad: {
    'Glass replacement': { price: 22000, time: 'Same day' },
    'Battery service': { price: 16500, time: '2-3 hrs' },
    'Charging port': { price: 14500, time: 'Same day' },
    'Software restore': { price: 5500, time: '30-60 min' },
  },
  MacBook: {
    'Battery service': { price: 28500, time: 'Same day' },
    'Keyboard repair': { price: 32000, time: '1-2 days' },
    'Display service': { price: 58000, time: '2-4 days' },
    'Logic board diagnostic': { price: 8500, time: 'Same day' },
  },
}

type DeviceName = keyof typeof devices

const formatter = new Intl.NumberFormat('en-JM', {
  style: 'currency',
  currency: 'JMD',
  maximumFractionDigits: 0,
})

export function RepairEstimator() {
  const [device, setDevice] = useState<DeviceName>('iPhone')
  const [issue, setIssue] = useState('Screen replacement')

  const issues = Object.keys(devices[device])
  const estimate = useMemo(
    () => devices[device][issue as keyof (typeof devices)[DeviceName]],
    [device, issue],
  )

  function selectDevice(nextDevice: DeviceName) {
    setDevice(nextDevice)
    setIssue(Object.keys(devices[nextDevice])[0])
  }

  return (
    <section id="estimator" className="py-24 bg-[#f5f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0071e3] shadow-sm">
              <Calculator className="mr-2 h-4 w-4" />
              Instant estimate
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f]">
              Get a repair quote before you visit.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#68686d]">
              Select your device and issue to see a starting price and typical
              turnaround. Final pricing is confirmed after diagnostics.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                <Clock className="h-5 w-5 text-[#0071e3]" />
                <p className="mt-4 font-semibold text-[#1d1d1f]">
                  Same-day options
                </p>
                <p className="mt-1 text-sm text-[#68686d]">
                  Common repairs can often be finished while you run errands.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <p className="mt-4 font-semibold text-[#1d1d1f]">
                  Warranty included
                </p>
                <p className="mt-1 text-sm text-[#68686d]">
                  Repairs include our 30-day workmanship guarantee.
                </p>
              </div>
            </div>
          </div>

          <div id="services" className="rounded-[2rem] bg-white p-5 sm:p-8 shadow-soft border border-gray-100">
            <div className="grid gap-6">
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Device
                </label>
                <div className="mt-3 grid grid-cols-3 gap-2 rounded-2xl bg-gray-100 p-1">
                  {(Object.keys(devices) as DeviceName[]).map((name) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() => selectDevice(name)}
                      className={`h-12 rounded-xl text-sm font-semibold transition ${
                        device === name
                          ? 'bg-white text-black shadow-sm'
                          : 'text-gray-500 hover:text-black'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="issue" className="text-sm font-semibold text-gray-700">
                  Repair issue
                </label>
                <select
                  id="issue"
                  value={issue}
                  onChange={(event) => setIssue(event.target.value)}
                  className="mt-3 h-13 min-h-13 w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 text-base font-medium text-gray-900 outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-sky-100"
                >
                  {issues.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="rounded-3xl bg-black p-6 text-white">
                <p className="text-sm font-medium text-white/60">
                  Starting estimate
                </p>
                <p className="mt-2 text-4xl font-bold tracking-tight">
                  {formatter.format(estimate.price)}
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs text-white/50">Turnaround</p>
                    <p className="mt-1 font-semibold">{estimate.time}</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs text-white/50">Warranty</p>
                    <p className="mt-1 font-semibold">30 days</p>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#0071e3] px-8 text-base font-semibold text-white hover:bg-[#0077ed] transition-colors"
              >
                Schedule with this estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
