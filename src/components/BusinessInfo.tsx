import { motion } from 'framer-motion'
import { Clock, Cpu, ShieldCheck, Wrench } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description:
      'Most iPhone screen and battery repairs are completed in under an hour.',
  },
  {
    icon: ShieldCheck,
    title: '30-Day Warranty',
    description:
      'Every repair is backed by a 30-day workmanship guarantee.',
  },
  {
    icon: Cpu,
    title: 'Premium Parts',
    description:
      'We source high-quality components tuned for reliable everyday performance.',
  },
  {
    icon: Wrench,
    title: 'Skilled Techs',
    description:
      'Our technicians are trained in Apple device diagnostics and repair workflows.',
  },
]

export function BusinessInfo() {
  return (
    <section id="about" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
              The repair standard your devices deserve.
            </h2>
            <p className="text-lg text-[#68686d] leading-relaxed mb-8">
              A broken device should not put your day on hold. RoseTechRevive
              provides transparent, high-quality repair services that restore
              your technology without hidden fees or vague timelines.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-6 text-base font-medium text-black border border-black rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Start a repair
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#fbfbfd] p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center mb-4 text-[#0071e3]">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#68686d] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
