'use client'

import { useScrollReveal } from './useScrollReveal'

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20 md:pt-24 lg:pt-60"
    >
      <div
        className={`transition-all duration-1000 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mb-6">
          <img 
            src="/assets/logo.png" 
            alt="VISIONARY Logo"
            className="w-64 h-auto mx-auto md:w-80 lg:w-96"
          />
        </div>
        <p className="text-lg md:text-xl tracking-widest uppercase text-center">
          Unlock the most instinctive interface
        </p>
      </div>

      {/* Orbital Ring Image */}
      <div
        className={`mt-20 transition-all duration-1500 delay-300 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <img 
          src="/assets/orbital-ring.png" 
          alt="Orbital Ring"
          className="w-full max-w-2xl mx-auto"
        />
      </div>
    </section>
  )
}
