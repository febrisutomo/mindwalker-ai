import Link from 'next/link';
import { BlogPost } from '@/data/blog';
import { Locale } from '@/i18n-config';

interface BlogCardProps {
    post: BlogPost;
    lang: Locale;
    dictionary: any;
}

export default function BlogCard({ post, lang, dictionary }: BlogCardProps) {
    return (
        <Link
            href={`/${lang}/blog/${post.slug}`}
            className="flex flex-col bg-white dark:bg-[#101622] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1 group"
        >
            <div className="relative h-48 w-full overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Tags removed as requested */}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="material-symbols-outlined text-base">calendar_today</span>
                    <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
                            {post.author.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {post.author}
                        </span>
                    </div>
                    <span className="text-blue-600 text-sm font-bold flex items-center gap-1 group/btn">
                        {dictionary.blog.readMore}
                        <span className="material-symbols-outlined text-lg transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                    </span>
                </div>
            </div>
        </Link>
    );
}
