'use client'

import { useEffect, useRef, useState } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Footer from './components/Footer'
import StarField from './components/StarField'

export default function Home() {
  return (
    <main className="relative">
      <StarField />
     
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </main>
  )
}
