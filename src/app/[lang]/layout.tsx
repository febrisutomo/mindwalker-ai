import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import '../globals.css'
import { i18n } from '@/i18n-config'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Mindwalker.ai - Pioneering the Future of Intelligence',
  description: 'Transforming industries through cutting-edge AI research, innovative solutions, and applied intelligence.',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadModal from '@/components/LeadModal'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = lang as Locale
  const dictionary = await getDictionary(locale)

  return (
    <html lang={lang} className={spaceGrotesk.variable}>
      <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" />
      </head>
      <body className="antialiased font-display bg-[#f6f6f8] dark:bg-[#101622] text-[#111318] dark:text-white">
        <Header dictionary={dictionary} lang={locale} />
        {children}
        <Footer dictionary={dictionary} />
        <LeadModal dictionary={dictionary} />
      </body>
    </html>
  )
}
