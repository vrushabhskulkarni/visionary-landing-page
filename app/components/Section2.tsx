"use client";

import { useScrollReveal } from "./useScrollReveal";

export default function Section2() {
  const { ref, isVisible } = useScrollReveal();

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
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Unlock the most instinctive interface
          </h2>
          <p className="text-gray-400 text-lg">
            Gesture Recognition for wearables
          </p>
        </div>

        {/* Right side - Ring Image */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <img
            src="/assets/orbital-ring.png"
            alt="Orbital Ring"
            className="w-full max-w-md mx-auto"
            style={{
              transform: "rotateY(-18deg) rotateZ(-50deg)",
              transformStyle: "preserve-3d",
            }}
          />
        </div>
      </div>
    </section>
  );
}
