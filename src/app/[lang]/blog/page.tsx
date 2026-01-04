import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import BlogHeader from '@/components/blog/BlogHeader'
import BlogCard from '@/components/blog/BlogCard'
import { blogPosts } from '@/data/blog'

export default async function BlogPage({
    params,
}: {
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params
    const dictionary = await getDictionary(lang)

    return (
        <div className="min-h-screen bg-white dark:bg-[#0c121e]">
            <BlogHeader dictionary={dictionary} />
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} lang={lang} dictionary={dictionary} />
                    ))}
                </div>
            </div>
        </div>
    )
}
