'use client'

import { useEffect, useState } from 'react'

export default function StarField() {
  const [stars, setStars] = useState<Array<{ x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const starArray = []
    for (let i = 0; i < 100; i++) {
      starArray.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
      })
    }
    setStars(starArray)
  }, [])

  return (
    <div className="stars">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
