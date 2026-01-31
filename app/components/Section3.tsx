'use client'

import { useScrollReveal } from './useScrollReveal'

export default function Section3() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative px-6 py-20 overflow-hidden"
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
            Interact the way it&apos;s meant to feel
          </h2>
          <p className="text-white text-lg mb-2 italic">
            Experience gesture control.
          </p>
          <p className="text-gray-400 text-base mb-8">
            Simulated using computer vision.
          </p>
          
          <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wider">
            Try the Demo
          </button>
          <p className="text-gray-500 text-xs mt-3">
            (This demo uses computer vision locally — no video is recorded or uploaded.)
          </p>
        </div>

        {/* Right side - Hand Image */}
        <div
          className={`transition-all duration-1000 delay-300 ease-out ${
            isVisible
              ? 'opacity-100 translate-x-0 scale-100'
              : 'opacity-0 translate-x-[150%] scale-150'
          }`}
          style={{
            transformOrigin: 'right center',
          }}
        >
          <img
            src="/assets/hand-from-angle.png"
            alt="Hand gesture control"
            className="w-full scale-[1.6] origin-center"
          />
        </div>
      </div>
    </section>
  )
}