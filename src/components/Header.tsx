'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams, usePathname } from 'next/navigation'
import type { Locale } from '@/i18n-config'

type Dictionary = {
  navigation: {
    home: string
    about: string
    products: string
    productsTitle?: string // Handles potential missing key in type if inconsistent
    services: string
    contact: string
    bookDemo: string
  }
  services_detail?: {
      [key: string]: {
          title: string
          description?: string
      }
  }
  products_detail?: {
      [key: string]: {
          hero: {
              title: string
          }
      }
  }
}

export default function Header({ dictionary, lang }: { dictionary: Dictionary; lang: Locale }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = document.getElementById('home')?.offsetHeight ?? 800
      // 80 is roughly header height, but logic from original script was:
      // if (window.scrollY > homeHeight - 80)
      
      // Let's simplify: if scrolled more than 50px, add background
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          isScrolled ? 'bg-white/80 dark:bg-[#101622]/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}></div>
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20 flex items-center justify-between whitespace-nowrap relative z-10">
          <div className="logo-text-container">
            <Link href={`/${lang}`} className="logo-wrapper">
              <Image
                src="/mindwalker-logo.png"
                alt="Mindwalker.ai Logo"
                width={200}
                height={48}
                className="mindwalker-logo h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link
                  className={`text-sm font-medium leading-normal transition-colors cursor-pointer ${
                    isScrolled ? 'text-[#111318] hover:text-primary' : 'text-gray-200 hover:text-white'
                  }`}
                  href={`/${lang}#home`}
              >
                  {dictionary.navigation.home}
              </Link>
              <Link
                  className={`text-sm font-medium leading-normal transition-colors cursor-pointer ${
                    isScrolled ? 'text-[#111318] hover:text-primary' : 'text-gray-200 hover:text-white'
                  }`}
                  href={`/${lang}#about`}
              >
                  {dictionary.navigation.about}
              </Link>

              {/* Products Dropdown */}
               <div className="relative group">
                <button
                  className={`flex items-center gap-1 text-sm font-medium leading-normal transition-colors cursor-pointer ${
                     isScrolled ? 'text-[#111318] hover:text-primary' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {dictionary.navigation.products}
                  <span className="material-symbols-outlined text-lg">expand_more</span>
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-xl shadow-xl w-[280px] p-2 border border-gray-100 overflow-hidden">
                     {[
                        { key: 'aura', icon: 'neurology' },
                        { key: 'neuralitics', icon: 'dataset' },
                        { key: 'vision-craft', icon: 'visibility' }
                     ].map((product) => (
                        <Link 
                            key={product.key} 
                            href={`/${lang}/products/${product.key}`}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                        >
                            <span className="material-symbols-outlined text-primary group-hover/item:scale-110 transition-transform">{product.icon}</span>
                            <span className="text-gray-700 text-sm font-medium">{dictionary.products_detail?.[product.key as keyof typeof dictionary.products_detail]?.hero?.title || product.key}</span>
                        </Link>
                     ))}
                  </div>
                </div>
              </div>

               {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center gap-1 text-sm font-medium leading-normal transition-colors cursor-pointer ${
                     isScrolled ? 'text-[#111318] hover:text-primary' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {dictionary.navigation.services}
                  <span className="material-symbols-outlined text-lg">expand_more</span>
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-xl shadow-xl w-[280px] p-2 border border-gray-100 overflow-hidden">
                     {[
                        { key: 'modelforge', icon: 'code_blocks' },
                        { key: 'dataforge', icon: 'analytics' },
                        { key: 'agentforge', icon: 'settings_ethernet' }
                     ].map((service) => (
                        <Link 
                            key={service.key} 
                            href={`/${lang}/services/${service.key}`}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                        >
                            <span className="material-symbols-outlined text-primary group-hover/item:scale-110 transition-transform">{service.icon}</span>
                            <span className="text-gray-700 text-sm font-medium">{dictionary.services_detail?.[service.key as keyof typeof dictionary.services_detail]?.title || service.key}</span>
                        </Link>
                     ))}
                  </div>
                </div>
              </div>

              <Link
                  className={`text-sm font-medium leading-normal transition-colors cursor-pointer ${
                    isScrolled ? 'text-[#111318] hover:text-primary' : 'text-gray-200 hover:text-white'
                  }`}
                  href={`/${lang}#contact`}
              >
                  {dictionary.navigation.contact}
              </Link>
              
              <div className={`flex items-center rounded-full p-1 border transition-colors ${
                isScrolled ? 'bg-gray-100 border-gray-200' : 'bg-white/10 border-white/20'
              }`}>
                <Link
                  href="/id"
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    lang === 'id' 
                      ? 'bg-primary text-white font-bold' 
                      : isScrolled ? 'text-[#111318] hover:bg-gray-200' : 'text-white hover:bg-white/10'
                  }`}
                >
                  ID
                </Link>
                <Link
                  href="/en"
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    lang === 'en' 
                      ? 'bg-primary text-white font-bold' 
                      : isScrolled ? 'text-[#111318] hover:bg-gray-200' : 'text-white hover:bg-white/10'
                  }`}
                >
                  EN
                </Link>
              </div>
              <button
                className="book-demo-btn bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold leading-normal transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                data-book-demo
                onClick={() => window.dispatchEvent(new Event('open-lead-modal'))}
              >
                {dictionary.navigation.bookDemo}
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              id="mobileMenuButton"
              className={`mobile-menu-button p-2 ${ isScrolled ? 'text-[#111318] dark:text-white' : 'text-white'}`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className={`mobile-menu md:hidden fixed inset-0 bg-white dark:bg-[#101622] z-[60] flex flex-col items-center justify-center transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`}
      >
        <button 
            className="mobile-menu-close absolute top-8 right-8 text-2xl p-2"
            onClick={() => setMobileMenuOpen(false)}
        >
            &times;
        </button>
        <nav className="px-6 py-4 w-full max-w-sm text-center">
            <div className="flex flex-col space-y-6">
            {['home', 'about', 'products', 'services', 'contact'].map((item) => (
              <a
                key={item}
                className="text-[#111318] dark:text-white text-xl font-medium leading-normal hover:text-primary transition-colors py-2"
                href={`#${item}`}
                onClick={(e) => scrollToSection(e, item)}
              >
                {dictionary.navigation[item as keyof typeof dictionary.navigation]}
              </a>
            ))}
            <button
              className="book-demo-btn bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-bold leading-normal transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-4"
              data-book-demo
               onClick={() => {
                   setMobileMenuOpen(false);
                   window.dispatchEvent(new Event('open-lead-modal'));
               }}
            >
              {dictionary.navigation.bookDemo}
            </button>
            
            <div className="flex justify-center gap-4 mt-6">
                <Link
                    href="/id"
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    lang === 'id' ? 'bg-primary text-white border-primary' : 'text-[#111318] dark:text-white border-gray-300 dark:border-gray-700'
                    }`}
                >
                    Bahasa Indonesia
                </Link>
                <Link
                    href="/en"
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    lang === 'en' ? 'bg-primary text-white border-primary' : 'text-[#111318] dark:text-white border-gray-300 dark:border-gray-700'
                    }`}
                >
                    English
                </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
