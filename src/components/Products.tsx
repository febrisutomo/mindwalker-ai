import Link from 'next/link'
import type { Locale } from '@/i18n-config'

export default function Products({ dictionary, lang }: { dictionary: any; lang: Locale }) {
  const products = ['aura', 'neuralytics', 'vision-craft'] as const
  const icons: Record<string, string> = {
    aura: 'neurology',
    neuralytics: 'dataset',
    'vision-craft': 'visibility'
  }

  return (
    <section id="products" className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#111318] dark:text-white mb-4">
            {dictionary.products.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {dictionary.products.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((key) => {
            const product = dictionary.products[key]
            return (
              <Link
                key={key}
                href={`/${lang}/products/${key}`}
                className="flex flex-col gap-5 p-8 bg-white dark:bg-[#1a202c]/50 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-3xl">{icons[key]}</span>
                  </div>
                  <div>
                    <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                      {product.title}
                    </h3>
                    <p className="text-primary text-sm font-medium">{product.subtitle}</p>
                  </div>
                </div>
                <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-relaxed">
                  {product.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.tags.map((tag: string) => (
                    <div
                      key={tag}
                      className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f0f2f4] dark:bg-gray-700/50 px-3"
                    >
                      <p className="text-[#111318] dark:text-gray-300 text-xs font-medium leading-normal">
                        {tag}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary mt-auto pt-2 group/link hover:gap-3 transition-all"
                >
                  {dictionary.products.learnMore} 
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
