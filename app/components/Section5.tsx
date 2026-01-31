'use client'

import { useScrollReveal } from './useScrollReveal'

export default function Section5() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text */}
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
            Your hands are the most natural interface.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            By removing intermediary devices, interaction becomes faster, more intuitive, and more immersive.
          </p>
        </div>

        {/* Right side - Hand image */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible
              ? 'opacity-100 translate-x-0 scale-100'
              : 'opacity-0 translate-x-10 scale-95'
          }`}
        >
          <img
            src="/assets/wrist-hand.png"
            alt="Hand Gesture"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  )
}
