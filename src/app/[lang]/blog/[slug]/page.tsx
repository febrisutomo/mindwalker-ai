import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { blogPosts } from '@/data/blog'
import { notFound } from 'next/navigation'
import BlogCard from '@/components/blog/BlogCard'

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ lang: Locale; slug: string }>
}) {
    const { lang, slug } = await params
    const dictionary = await getDictionary(lang)

    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    const relatedPosts = blogPosts
        .filter(p => p.slug !== slug)
        .slice(0, 3); // Take up to 3 related posts

    return (
        <article className="min-h-screen bg-white dark:bg-[#101622]">
            {/* Hero Section with Thumbnail Background */}
            <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black/60 z-10 transition-opacity"></div> {/* Dark Overlay */}

                <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl pt-20">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-gray-200 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">person</span>
                            <span className="font-medium">{post.author}</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">calendar_today</span>
                            <span>{post.date}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 max-w-3xl py-20 md:py-24">
                <div
                    className="blog-content max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>

            {/* Related Articles Section */}
            <div className="bg-gray-50 dark:bg-[#0c121e] py-16 border-t border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111318] dark:text-white mb-8 text-center">
                        {dictionary.blog.relatedArticles}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedPosts.map(relatedPost => (
                            <BlogCard key={relatedPost.slug} post={relatedPost} lang={lang} dictionary={dictionary} />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}
