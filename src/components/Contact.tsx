'use client'

import { useState } from 'react'

export default function Contact({ dictionary }: { dictionary: any }) {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('sending')
    setTimeout(() => {
      alert(dictionary.contact.form.success)
      setFormState('idle')
      ;(e.target as HTMLFormElement).reset()
    }, 1500)
  }

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simple alert for now
    alert(dictionary.contact.newsletter.success)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10 dark:opacity-20"
         style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAssw9g5tTPQKkRvLTxojgpA1-708Ed4GaEsyrJaaZhXHJjsVO_D1n-PLO14Vumg3rh8sbph3Ed4a-8RtDdOJbmi3RjYtAcV7wqN3QqRvN6fMk4LbwiuxwroGVkkuvQSMChWb0aKVOXoJRMwDUahfVHDJf2dJZotkDWWqpXcKsDoKU8wUXgk9E3MlUNr6Y4_Es2iCdxRWw_kg8DcKOrE_20q1P9ELuYYAXHK6Bn3skthA6XiMuZo-pA6cKQfS8k7-ki8LHyRp9HV4s')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6f6f8] via-[#f6f6f8]/90 to-[#f6f6f8] dark:from-[#101622] dark:via-[#101622]/90 dark:to-[#101622]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#111318] dark:text-white">
            {dictionary.contact.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {dictionary.contact.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 rounded-xl bg-white/50 dark:bg-[#101622]/50 backdrop-blur-lg border border-white/10">
              <h3 className="text-2xl font-bold text-[#111318] dark:text-white">
                {dictionary.contact.form.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block" htmlFor="first-name">
                    {dictionary.contact.form.firstName}
                  </label>
                  <input className="input-neon-focus w-full bg-white/50 dark:bg-[#101622]/50 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 text-sm transition-colors" id="first-name" name="firstName" placeholder={dictionary.contact.form.placeholders.firstName} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block" htmlFor="last-name">
                    {dictionary.contact.form.lastName}
                  </label>
                  <input className="input-neon-focus w-full bg-white/50 dark:bg-[#101622]/50 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 text-sm transition-colors" id="last-name" name="lastName" placeholder={dictionary.contact.form.placeholders.lastName} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block" htmlFor="email">
                  {dictionary.contact.form.email}
                </label>
                <input className="input-neon-focus w-full bg-white/50 dark:bg-[#101622]/50 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 text-sm transition-colors" id="email" name="email" placeholder={dictionary.contact.form.placeholders.email} type="email" required />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block" htmlFor="company">
                  {dictionary.contact.form.company}
                </label>
                <input className="input-neon-focus w-full bg-white/50 dark:bg-[#101622]/50 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 text-sm transition-colors" id="company" name="company" placeholder={dictionary.contact.form.placeholders.company} />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block" htmlFor="message">
                  {dictionary.contact.form.message}
                </label>
                <textarea className="input-neon-focus w-full bg-white/50 dark:bg-[#101622]/50 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 text-sm transition-colors" id="message" name="message" placeholder={dictionary.contact.form.placeholders.message} rows={4} required></textarea>
              </div>
               <button
                className="cta-button cta-shine btn-neon-hover flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                type="submit"
                disabled={formState === 'sending'}
              >
                  <span className="truncate">{formState === 'sending' ? dictionary.contact.form.sending : dictionary.contact.form.submit}</span>
              </button>
            </form>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="p-8 rounded-xl bg-white/50 dark:bg-[#101622]/50 backdrop-blur-lg border border-white/10">
              <h3 className="text-2xl font-bold text-[#111318] dark:text-white mb-4">
                {dictionary.contact.getStarted.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {dictionary.contact.getStarted.description}
              </p>
              <button
                className="cta-button cta-pulse cta-shine flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-gradient-to-r from-primary to-primary/80 text-white text-base font-bold leading-normal tracking-[0.015em] hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:-translate-y-1"
                data-book-demo
                 onClick={() => window.dispatchEvent(new Event('open-lead-modal'))}
              >
                <span className="truncate">{dictionary.contact.getStarted.button}</span>
              </button>
              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-400">{dictionary.contact.getStarted.emailText}</p>
                <a href="mailto:marketing@mindwalker.ai" className="text-primary font-bold text-lg hover:underline">
                  marketing@mindwalker.ai
                </a>
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-white/50 dark:bg-[#101622]/50 backdrop-blur-lg border border-white/10">
              <h3 className="text-2xl font-bold text-[#111318] dark:text-white mb-4">
                {dictionary.contact.newsletter.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {dictionary.contact.newsletter.description}
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  className="input-neon-focus flex-grow w-full bg-white/50 dark:bg-[#101622]/50 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 text-sm transition-colors"
                  placeholder={dictionary.contact.newsletter.placeholder}
                  type="email"
                  name="email"
                  required
                />
                <button
                  className="cta-button cta-shine btn-neon-hover flex-shrink-0 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                  type="submit"
                >
                  <span className="truncate">{dictionary.contact.newsletter.button}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
