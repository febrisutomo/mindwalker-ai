import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config' // Using strict import path as seen in other files
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CTAButton from '@/components/CTAButton'

export default async function ServicePage({
    params,
}: {
    params: Promise<{ lang: Locale; slug: string }>
}) {
    const { lang, slug } = await params
    const dictionary = await getDictionary(lang)

    // Validate slug and get service data
    // Using explicit type assertion or checking if key exists
    const serviceDetail = dictionary.services_detail?.[slug as keyof typeof dictionary.services_detail]

    if (!serviceDetail) {
        notFound()
    }

    // Define all services to determine "other services"
    const allServices = [
        { key: 'modelforge', icon: 'code_blocks' },
        { key: 'dataforge', icon: 'analytics' },
        { key: 'agentforge', icon: 'settings_ethernet' }
    ]

    const otherServices = allServices.filter(s => s.key !== slug)

    return (
        <main className="min-h-screen bg-white dark:bg-[#101622]">
            {/* HERO SECTION - ENHANCED */}
            <section className="relative px-6 sm:px-10 lg:px-20 pt-24 pb-24 lg:pt-36 lg:pb-36 overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-[#101622] z-0"></div>
                <div className="absolute inset-0 hero-animated-bg opacity-30 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

                <div className="container mx-auto relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
                        {dictionary.services_detail?.[slug as keyof typeof dictionary.services_detail]?.subtitle}
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tighter drop-shadow-lg">
                        {serviceDetail.hero.title}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                        {serviceDetail.hero.description}
                    </p>
                    <CTAButton
                        className="cta-button cta-pulse cta-shine inline-flex items-center justify-center h-14 px-8 rounded-lg bg-[#ffffff] text-primary text-lg font-bold hover:bg-white hover:scale-105 transition-all shadow-2xl"
                    >
                        {lang === 'id' ? 'Mulai Sekarang' : 'Start Now'}
                    </CTAButton>
                </div>
            </section>

            {/* MAIN SECTION - 2 COLUMNS WITH ILLUSTRATION */}
            <section className="px-6 sm:px-10 lg:px-20 py-20 lg:py-32 bg-gray-50 dark:bg-[#0c121e]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#111318] dark:text-white mb-6 leading-tight">
                                {serviceDetail.main.title}
                            </h2>
                            <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                {serviceDetail.main.description}
                            </p>
                        </div>
                        <div className="relative order-2 lg:order-1 h-full min-h-[400px]">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-900 to-[#1e293b] overflow-hidden shadow-2xl border border-blue-900/30">
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                                    <span className="material-symbols-outlined text-blue-200/50 !text-9xl drop-shadow-lg animate-pulse">
                                        {allServices.find(s => s.key === slug)?.icon}
                                    </span>
                                </div>
                                {/* Decorative Elements */}
                                <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA & OTHER SERVICES SECTION - SPLIT COLUMNS */}
            <section className="px-6 sm:px-10 lg:px-20 py-20 lg:py-32 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#101622]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* CTA Column (Left) */}
                        <div className="flex flex-col justify-center items-start">
                            <h3 className="text-3xl font-bold text-[#111318] dark:text-white mb-6">
                                {serviceDetail.cta.title}
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                                {serviceDetail.cta.description}
                            </p>
                            <CTAButton
                                className="cta-button cta-shine btn-neon-hover inline-flex items-center justify-center h-14 px-8 rounded-lg bg-primary text-white font-bold transition-all text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40"
                            >
                                {lang === 'id' ? 'Mulai Sekarang' : 'Start Now'}
                            </CTAButton>
                        </div>

                        {/* Other Services Column (Right) */}
                        <div className="flex flex-col justify-center">
                            <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
                                {dictionary.services.exploreOther}
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {otherServices.map((service, index) => (
                                    <div key={service.key} className="group h-full">
                                        <Link
                                            href={`/${lang}/services/${service.key}`}
                                            className="flex flex-col h-full p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
                                        >
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                                <span className="material-symbols-outlined !text-2xl">
                                                    {service.icon}
                                                </span>
                                            </div>
                                            <h4 className="text-xl font-bold text-[#111318] dark:text-white mb-2 group-hover:text-primary transition-colors">
                                                {dictionary.services_detail?.[service.key as keyof typeof dictionary.services_detail]?.title}
                                            </h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-grow">
                                                {dictionary.services[service.key as keyof typeof dictionary.services] instanceof Object
                                                    ? (dictionary.services[service.key as keyof typeof dictionary.services] as any).description
                                                    : ""}
                                            </p>
                                            <span className="flex items-center gap-2 text-sm font-bold text-primary opacity-100 transition-all duration-300 mt-auto">
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
