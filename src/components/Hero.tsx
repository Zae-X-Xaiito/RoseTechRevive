import { motion } from 'framer-motion'
import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Smartphone,
  Sparkles,
} from 'lucide-react'

const trackerSteps = ['Checked in', 'Diagnosed', 'Repairing', 'Quality test']

export function Hero() {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden bg-[#fbfbfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Apple device repairs in Jamaica
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1d1d1f] leading-[1.08]">
              Expert repair for your essential devices.
            </h1>
            <p className="mt-6 text-xl text-[#68686d] leading-relaxed max-w-xl">
              Screen replacements, battery upgrades, diagnostics, and board
              repairs for iPhone, iPad, and MacBook. Fast, transparent, and
              backed by a 30-day warranty.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium text-white bg-[#0071e3] rounded-full hover:bg-[#0077ed] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:ring-offset-2"
              >
                Schedule Repair
              </a>
              <a
                href="#estimator"
                className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors group"
              >
                Estimate Cost
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm font-medium text-[#68686d]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#0071e3]" />
                <span>Premium Parts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#0071e3]" />
                <span>30-Day Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#0071e3]" />
                <span>Clear Quotes</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto lg:ml-auto lg:mr-0 flex justify-center"
          >
            <div className="absolute inset-8 rounded-[4rem] bg-sky-100 blur-3xl opacity-70" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-[310px] sm:w-[340px] h-[650px] bg-black rounded-[3rem] p-3 shadow-2xl ring-1 ring-gray-900/5"
            >
              <div className="relative w-full h-full bg-[#f4f7fb] rounded-[2.25rem] overflow-hidden flex flex-col">
                <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
                  <div className="w-24 h-6 bg-black rounded-b-3xl" />
                </div>

                <div className="pt-12 px-5 pb-4 bg-white border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                        Live Repair
                      </p>
                      <h2 className="text-xl font-bold text-black">
                        RoseTechRevive
                      </h2>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center">
                      <Smartphone className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-5 flex flex-col gap-4">
                  <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          iPhone 15 Pro
                        </p>
                        <h3 className="mt-1 text-lg font-bold text-gray-950">
                          Screen replacement
                        </h3>
                      </div>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                        80%
                      </span>
                    </div>
                    <div className="mt-5 h-2 rounded-full bg-gray-100">
                      <motion.div
                        initial={{ width: '20%' }}
                        animate={{ width: '80%' }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        className="h-full rounded-full bg-[#0071e3]"
                      />
                    </div>
                    <div className="mt-5 grid gap-3">
                      {trackerSteps.map((step, index) => (
                        <div
                          key={step}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="flex items-center gap-2 font-medium text-gray-700">
                            <span
                              className={`h-2.5 w-2.5 rounded-full ${
                                index < 3 ? 'bg-[#0071e3]' : 'bg-gray-300'
                              }`}
                            />
                            {step}
                          </span>
                          {index < 3 && (
                            <CheckCircle2 className="h-4 w-4 text-[#0071e3]" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
                      <BatteryCharging className="h-5 w-5 text-emerald-600" />
                      <p className="mt-4 text-2xl font-bold">96%</p>
                      <p className="text-xs font-medium text-gray-500">
                        Battery health
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
                      <Cpu className="h-5 w-5 text-violet-600" />
                      <p className="mt-4 text-2xl font-bold">Pass</p>
                      <p className="text-xs font-medium text-gray-500">
                        Diagnostics
                      </p>
                    </div>
                  </div>

                  <button className="mt-auto flex h-14 items-center justify-between rounded-2xl bg-black px-5 text-left text-white">
                    <span>
                      <span className="block text-sm font-semibold">
                        Book next visit
                      </span>
                      <span className="block text-xs text-white/70">
                        Tomorrow, 10:30 AM
                      </span>
                    </span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="h-8 w-full bg-[#f4f7fb] flex items-center justify-center pb-2">
                  <div className="w-32 h-1 bg-black/20 rounded-full" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
