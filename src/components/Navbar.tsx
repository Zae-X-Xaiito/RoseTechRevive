import { Menu, Wrench, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#devices', label: 'Devices' },
  { href: '#estimator', label: 'Estimator' },
  { href: '#about', label: 'About' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex-shrink-0 flex items-center gap-2">
            <span className="bg-black text-white p-1.5 rounded-lg">
              <Wrench className="w-5 h-5" />
            </span>
            <span className="font-semibold text-lg tracking-tight">
              RoseTechRevive
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#reviews"
              className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-black border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Contact
            </a>
          </div>

          <button
            className="inline-flex sm:hidden h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-black"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden border-t border-gray-100 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 grid gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-black px-5 text-sm font-medium text-white"
            >
              Schedule Repair
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
