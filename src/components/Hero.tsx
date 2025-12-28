'use client'

import { useState, useEffect } from 'react'

export default function Hero({ dictionary }: { dictionary: any }) {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const texts = dictionary.hero.typingTexts

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % texts.length
      const fullText = texts[i]

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 150)

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(500)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed, texts])

  return (
    <section id="home" className="w-full min-h-screen relative p-0">
      <div className="@container w-full h-full">
        <div className="flex min-h-screen flex-col gap-8 items-center justify-center p-8 text-center relative overflow-hidden w-full">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="hero-animated-bg absolute inset-0 w-full h-full"></div>
            <video
              id="hero-ai-video"
              className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-1000"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23101622;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231a202c;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23bg)' /%3E%3C/svg%3E"
            >
              <source
                src="https://www.mindwalker.ai/videos/02176209018368100000000000000000000ffffc0a8582d750940.mp4"
                type="video/mp4"
              />
               <source
                src="https://www.mindwalker.ai/videos/02176209018718400000000000000000000ffffc0a8582db682ca.mp4"
                type="video/mp4"
              />
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30 rounded-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-xl"></div>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl relative z-10">
            <h1 className="text-white text-4xl font-black leading-tight tracking-tighter @[480px]:text-6xl @[768px]:text-7xl min-h-[1.2em]">
              {dictionary.hero.titlePrefix} <span className="gradient-text">{displayText}</span>
              <span className="animate-pulse text-primary inline-block ml-1">|</span>
            </h1>
            <h2 className="text-gray-300 text-lg font-normal leading-normal @[480px]:text-xl max-w-3xl mx-auto">
              {dictionary.hero.subtitle}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <button
                className="cta-button cta-pulse cta-shine flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
                data-book-demo
                 onClick={() => window.dispatchEvent(new Event('open-lead-modal'))}
              >
                <span className="truncate">{dictionary.hero.getStarted}</span>
              </button>
              <a
                href="#products"
                className="cta-secondary flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 border-2 border-white text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-white hover:text-[#111318] transition-all duration-300"
              >
                <span className="truncate">{dictionary.hero.learnMore}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
