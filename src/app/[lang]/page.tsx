import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Services from '@/components/Services'
import Partners from '@/components/Partners'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LeadModal from '@/components/LeadModal'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col w-full">
            <main className="flex-grow">
              <Hero dictionary={dictionary} />
              <About dictionary={dictionary} />
              <Products dictionary={dictionary} lang={lang} />
              <Services dictionary={dictionary} lang={lang} />
              <Partners dictionary={dictionary} />
              <Contact dictionary={dictionary} />
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
