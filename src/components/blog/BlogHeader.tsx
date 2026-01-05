export default function BlogHeader({ dictionary }: { dictionary: any }) {
    return (
        <div className="bg-[#101622] pt-24 pb-16 lg:pt-32 lg:pb-24 text-center px-4">
            <div className="container mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    {dictionary.blog.title}
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    {dictionary.blog.subtitle}
                </p>
            </div>
        </div>
    );
}
