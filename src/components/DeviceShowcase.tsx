import { motion } from 'framer-motion'

const devices = [
  {
    id: 'iphone',
    name: 'iPhone',
    description: 'Screen, battery, camera, speaker, and water-damage repair.',
    image:
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'ipad',
    name: 'iPad',
    description: 'Glass replacement, charging port fixes, and diagnostics.',
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'macbook',
    name: 'MacBook',
    description: 'Keyboard, display, battery, SSD, and logic board service.',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
  },
]

export function DeviceShowcase() {
  return (
    <section id="devices" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f]">
            Which device can we fix for you?
          </h2>
          <p className="mt-4 text-lg text-[#68686d]">
            Professional repair services for the Apple devices you use every
            day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {devices.map((device, index) => (
            <motion.a
              href="#estimator"
              key={device.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 mb-6">
                <img
                  src={device.image}
                  alt={`${device.name} repair`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                {device.name}
              </h3>
              <p className="text-[#68686d]">{device.description}</p>
              <span className="mt-4 inline-flex items-center text-[#0071e3] font-medium group-hover:underline underline-offset-4">
                Estimate repair
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
