'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div>
          <img 
            src="/assets/logo.png" 
            alt="VISIONARY Logo"
            className="w-24 h-auto"
          />
        </div>
        <div className="flex gap-8 text-sm">
          <a href="#home" className="hover:text-gray-400 transition-colors">
            Home
          </a>
          <a href="#product" className="hover:text-gray-400 transition-colors">
            Product
          </a>
          <a href="#company" className="hover:text-gray-400 transition-colors">
            Company
          </a>
        </div>
      </div>
    </nav>
  )
}
