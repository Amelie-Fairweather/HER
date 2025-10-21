'use client'

import { useState, useRef } from 'react'

export default function HeroTitle() {
  const [emojis, setEmojis] = useState<Array<{id: number, type: 'heart' | 'star', x: number, y: number}>>([])
  const titleRef = useRef<HTMLHeadingElement>(null)

  const handleMouseEnter = () => {
    if (!titleRef.current) return

    const rect = titleRef.current.getBoundingClientRect()
    const containerRect = titleRef.current.parentElement?.getBoundingClientRect()
    
    if (!containerRect) return

    // Calculate center of the HER text relative to the container
    const textCenterX = (rect.left - containerRect.left) + (rect.width / 2)
    const textCenterY = (rect.top - containerRect.top) + (rect.height / 2)

    // Create hearts and stars starting from the center of HER text and spreading across the header
    const newEmojis = []
    
    // Create many emojis from the center of the text
    for (let i = 0; i < 25; i++) {
      const angle = (i * 14.4) * (Math.PI / 180) // 14.4 degrees apart for full circle (360/25)
      const distance = 60 + Math.random() * 120 // Much larger distance to spread across header
      const x = textCenterX + Math.cos(angle) * distance
      const y = textCenterY + Math.sin(angle) * distance
      const type = Math.random() > 0.5 ? 'heart' : 'star'
      
      // Only add if it's within reasonable bounds of the header area
      if (x >= -50 && x <= containerRect.width + 50 && y >= -50 && y <= containerRect.height + 50) {
        newEmojis.push({
          id: Date.now() + i,
          type,
          x,
          y
        })
      }
    }

    setEmojis(prev => [...prev, ...newEmojis])

    // Remove emojis after animation completes
    setTimeout(() => {
      setEmojis(prev => prev.filter(emoji => !newEmojis.some(newEmoji => newEmoji.id === emoji.id)))
    }, 2000)
  }

  return (
    <div className="relative">
      <h1 
        ref={titleRef}
        className="hero-title text-7xl md:text-8xl font-bold mb-4 text-white drop-shadow-lg"
        onMouseEnter={handleMouseEnter}
      >
        HER
      </h1>
      
      {/* Floating shapes */}
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          className={`hero-emoji ${emoji.type === 'heart' ? 'heart' : 'star'}`}
          style={{
            left: emoji.x,
            top: emoji.y,
          }}
        >
          {emoji.type === 'heart' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          )}
        </div>
      ))}

      {/* Sparkle effects */}
      {emojis.length > 0 && (
        <>
          <div className="sparkle-effect" style={{ left: '20%', top: '20%' }}></div>
          <div className="sparkle-effect" style={{ left: '80%', top: '30%' }}></div>
          <div className="sparkle-effect" style={{ left: '60%', top: '70%' }}></div>
          <div className="sparkle-effect" style={{ left: '30%', top: '80%' }}></div>
          <div className="sparkle-effect" style={{ left: '70%', top: '10%' }}></div>
        </>
      )}
    </div>
  )
}
