'use client'

import { useScrollReveal } from './useScrollReveal'

export default function Section4() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - VR Headset Image */}
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10'
          }`}
        >
          <img
            src="/assets/goggles.png"
            alt="VR Headset"
            className="w-full max-w-lg mx-auto"
          />
        </div>

        {/* Right side - Text */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
            Designed for the next era of spatial devices.
          </h2>
          <p className="text-gray-400 text-lg">
            Gesture is the native interface of next-generation XR.
          </p>
        </div>
      </div>
    </section>
  )
}
