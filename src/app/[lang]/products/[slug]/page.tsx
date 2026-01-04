import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CTAButton from '@/components/CTAButton'

export default async function ProductPage({
    params,
}: {
    params: Promise<{ lang: Locale; slug: string }>
}) {
    const { lang, slug } = await params
    const dictionary = await getDictionary(lang as Locale)

    const productDetail = dictionary.products_detail?.[slug as keyof typeof dictionary.products_detail]

    if (!productDetail) {
        notFound()
    }

    const allProducts = [
        { key: 'aura', icon: 'neurology' },
        { key: 'neuralytics', icon: 'dataset' },
        { key: 'vision-craft', icon: 'visibility' }
    ]

    const otherProducts = allProducts.filter(p => p.key !== slug)

    return (
        <main className="min-h-screen bg-white dark:bg-[#101622]">
            {/* HERO SECTION - Brand Colors (Blue/Dark) */}
            <section className="relative px-6 sm:px-10 lg:px-20 pt-24 pb-24 lg:pt-36 lg:pb-36 overflow-hidden">
                {/* Dynamic Background - Blue/Dark Theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-[#0B0F19] z-0 animate-gradient-xy"></div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-shine opacity-30"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-125 contrast-150 mix-blend-overlay"></div>

                <div className="container mx-auto relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-sm font-bold mb-6 backdrop-blur-md shadow-lg">
                        {productDetail.hero.subtitle}
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tighter drop-shadow-2xl">
                        {productDetail.hero.title}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md font-medium">
                        {productDetail.hero.description}
                    </p>
                    <CTAButton
                        className="cta-button cta-pulse cta-shine inline-flex items-center justify-center h-14 px-8 rounded-lg bg-primary text-white text-lg font-bold hover:bg-white hover:text-primary transition-all hover:-translate-y-1 shadow-2xl border border-transparent hover:border-white/50"
                    >
                        {lang === 'id' ? 'Mulai Sekarang' : 'Start Now'}
                    </CTAButton>
                </div>
            </section>

            {/* ... (Why and Main sections remain similar, might need minor icon update in Main illustration if using key placeholder) */}
            {/* Skipping straight to Other Products changes by including surrounding context if needed, but ReplaceFileContent works on blocks. */}
            {/* I'll use separate chunks for Hero and Other Products to be safe */}

            {/* WHY SECTION - "Why Our Services Stand Out" Style */}
            <section className="px-6 sm:px-10 lg:px-20 py-20 lg:py-24 bg-white dark:bg-[#101622]">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#111318] dark:text-white mb-4">
                            {productDetail.why.title}
                        </h2>
                        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {productDetail.why.items.map((item, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-gray-50 dark:bg-[#151b2b] border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#111318] dark:text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MAIN SECTION */}
            <section className="px-6 sm:px-10 lg:px-20 py-20 lg:py-32 bg-gray-50 dark:bg-[#0c121e]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1 relative">
                            {/* Illustration Placeholder */}
                            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-900 to-[#0B0F19] overflow-hidden shadow-2xl relative border border-blue-900/50">
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] flex items-center justify-center">
                                    <span className="material-symbols-outlined text-blue-200/50 !text-9xl drop-shadow-lg animate-pulse">
                                        {allProducts.find(p => p.key === slug)?.icon}
                                    </span>
                                </div>
                                {/* Decorative Elements */}
                                <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#111318] dark:text-white mb-6 leading-tight">
                                {productDetail.main.title}
                            </h2>
                            <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                {productDetail.main.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA & OTHER PRODUCTS */}
            <section className="px-6 sm:px-10 lg:px-20 py-20 lg:py-32 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#101622]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* CTA Column */}
                        <div className="flex flex-col justify-center items-start">
                            <h3 className="text-3xl font-bold text-[#111318] dark:text-white mb-6">
                                {productDetail.cta.title}
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                                {productDetail.cta.description}
                            </p>
                            <CTAButton
                                className="cta-button cta-shine btn-neon-hover inline-flex items-center justify-center h-14 px-8 rounded-lg bg-primary text-white font-bold transition-all text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40"
                            >
                                {lang === 'id' ? 'Mulai Sekarang' : 'Start Now'}
                            </CTAButton>
                        </div>

                        {/* Other Products Column */}
                        <div className="flex flex-col justify-center">
                            <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
                                {dictionary.products.exploreOther}
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {otherProducts.map((product) => (
                                    <div key={product.key} className="group h-full">
                                        <Link
                                            href={`/${lang}/products/${product.key}`}
                                            className="flex flex-col h-full p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
                                        >
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-3xl">
                                                <span className="material-symbols-outlined">
                                                    {product.icon}
                                                </span>
                                            </div>
                                            <h4 className="text-xl font-bold text-[#111318] dark:text-white mb-2 group-hover:text-primary transition-colors">
                                                {dictionary.products_detail?.[product.key as keyof typeof dictionary.products_detail]?.hero?.title}
                                            </h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                                                {dictionary.products_detail?.[product.key as keyof typeof dictionary.products_detail]?.hero?.description}
                                            </p>
                                            <span className="flex items-center gap-2 text-sm font-bold text-primary opacity-100 translate-x-0 transition-all duration-300 mt-auto">
                                                {dictionary.hero.learnMore} <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                                            </span>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
