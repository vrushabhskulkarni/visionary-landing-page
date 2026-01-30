'use client'

import { useScrollReveal } from './useScrollReveal'

export default function Footer() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <footer
      id="company"
      ref={ref}
      className="py-20 px-6 border-t border-gray-800"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="pixel-text text-3xl font-bold mb-6">
              VISIONARY
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Pioneering the future of human-computer interaction through gesture recognition technology.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#home" className="text-lg hover:text-gray-400 transition-colors">
              Home
            </a>
            <a href="#product" className="text-lg hover:text-gray-400 transition-colors">
              Product
            </a>
            <a href="#company" className="text-lg hover:text-gray-400 transition-colors">
              Company
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © 2026 Visionary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
