'use client'

import { useState, useEffect } from 'react'

export default function LeadModal({ dictionary }: { dictionary: any }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')

  useEffect(() => {
     // Event listener for opening modal
     const handleOpen = () => {
         setIsOpen(true)
     }
     
     window.addEventListener('open-lead-modal', handleOpen)
     return () => window.removeEventListener('open-lead-modal', handleOpen)
  }, [])
  
  const closeModal = () => {
      setIsOpen(false)
      setTimeout(() => setFormState('idle'), 300); // Reset after animation
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')
    
    setTimeout(() => {
      setFormState('success')
    }, 2000)
  }

  return (
    <div 
        id="leadModal" 
        className={`lead-modal-overlay fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-5 transition-all duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
    >
      <div 
        className={`lead-modal-container relative w-full max-w-[500px] max-h-[90vh] overflow-y-auto transition-all duration-300 ${
            isOpen ? 'translate-y-0 scale-100' : 'translate-y-[30px] scale-95'
        }`}
      >
        <div className="lead-modal-content bg-white rounded-2xl p-8 shadow-2xl relative border border-primary/10">
          <button
            type="button"
            className="lead-modal-close absolute top-4 right-4 w-11 h-11 border-none bg-gray-500/10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 text-gray-500 hover:bg-red-500/10 hover:text-red-500"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          {formState === 'success' ? (
             <div className="success-message text-center py-5">
                <div className="success-icon flex justify-center mb-4">
                    <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h3 className="success-title text-2xl font-bold text-green-600 mb-3">{dictionary.modal.success.title}</h3>
                <p className="success-text text-base text-gray-500 mb-6">{dictionary.modal.success.text}</p>
                <button type="button" className="success-btn px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all" onClick={closeModal}>
                    {dictionary.modal.success.close}
                </button>
            </div>
          ) : (
            <>
                <div className="lead-modal-header text-center mb-8">
                    <h2 className="lead-modal-title text-3xl font-bold text-[#111318] mb-3">
                        {dictionary.modal.title}
                    </h2>
                    <p className="lead-modal-subtitle text-base text-gray-500 mb-0">
                        {dictionary.modal.subtitle}
                    </p>
                </div>
                <form id="leadForm" className="lead-form flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="form-group flex flex-col gap-2">
                    <label htmlFor="fullName" className="form-label text-sm font-bold text-gray-700">
                        {dictionary.modal.fullName}
                    </label>
                    <input
                        id="fullName"
                        name="fullName"
                        className="form-input w-full p-4 border-2 border-gray-200 rounded-lg text-base bg-white text-[#111318] focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                        placeholder="Enter your full name"
                        required
                        autoComplete="name"
                    />
                    </div>
                    <div className="form-group flex flex-col gap-2">
                    <label htmlFor="email" className="form-label text-sm font-bold text-gray-700">
                         {dictionary.modal.email}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input w-full p-4 border-2 border-gray-200 rounded-lg text-base bg-white text-[#111318] focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                        placeholder="Enter your email address"
                        required
                        autoComplete="email"
                    />
                    </div>
                    <div className="form-group flex flex-col gap-2">
                    <label htmlFor="interest" className="form-label text-sm font-bold text-gray-700">
                         {dictionary.modal.interest}
                    </label>
                    <select
                        id="interest"
                        name="interest"
                        className="form-select w-full p-4 border-2 border-gray-200 rounded-lg text-base bg-white text-[#111318] focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                        required
                    >
                        <option value="">{dictionary.modal.interests.default}</option>
                        {['aura', 'neuralytics', 'visioncraft', 'modelforge', 'agentforge', 'dataforge', 'partnership', 'other'].map(val => (
                            <option key={val} value={val}>{dictionary.modal.interests[val as keyof typeof dictionary.modal.interests]}</option>
                        ))}
                    </select>
                    </div>
                    <button
                    type="submit"
                    className="submit-btn w-full p-4 bg-primary text-white text-base font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mt-2"
                    disabled={formState === 'submitting'}
                    >
                        {formState === 'submitting' ? (
                            <>
                                <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {dictionary.modal.submitting}
                            </>
                        ) : (
                            dictionary.modal.submit
                        )}
                    </button>
                </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
