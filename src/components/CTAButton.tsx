'use client'

import { ReactNode } from 'react'

interface CTAButtonProps {
  children: ReactNode
  className?: string
}

export default function CTAButton({ children, className = '' }: CTAButtonProps) {
  return (
    <button
      className={className}
      onClick={() => window.dispatchEvent(new Event('open-lead-modal'))}
    >
      {children}
    </button>
  )
}
