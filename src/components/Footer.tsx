import { Wrench } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-black text-white p-1 rounded-md">
                <Wrench className="w-4 h-4" />
              </div>
              <span className="font-semibold text-black">RoseTechRevive</span>
            </div>
            <p className="text-sm text-[#68686d] max-w-xs">
              Premium repair services for essential Apple devices in Jamaica.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#1d1d1f] mb-4 text-sm">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-[#68686d]">
              {['iPhone Repair', 'iPad Repair', 'MacBook Repair', 'Data Recovery'].map(
                (item) => (
                  <li key={item}>
                    <a href="#estimator" className="hover:text-black transition-colors">
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1d1d1f] mb-4 text-sm">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-[#68686d]">
              {['About Us', 'Contact', 'Reviews', 'Warranty Info'].map((item) => (
                <li key={item}>
                  <a href="#about" className="hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1d1d1f] mb-4 text-sm">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#68686d]">
              <li>1-876-555-0198</li>
              <li>hello@rosetechrevive.example</li>
              <li>Kingston, Jamaica</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#68686d]">
            &copy; {new Date().getFullYear()} RoseTechRevive. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#68686d]">
            <a href="#" className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
