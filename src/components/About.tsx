import Image from 'next/image'

export default function About({ dictionary }: { dictionary: any }) {
  return (
    <section id="about" className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAssw9g5tTPQKkRvLTxojgpA1-708Ed4GaEsyrJaaZhXHJjsVO_D1n-PLO14Vumg3rh8sbph3Ed4a-8RtDdOJbmi3RjYtAcV7wqN3QqRvN6fMk4LbwiuxwroGVkkuvQSMChWb0aKVOXoJRMwDUahfVHDJf2dJZotkDWWqpXcKsDoKU8wUXgk9E3MlUNr6Y4_Es2iCdxRWw_kg8DcKOrE_20q1P9ELuYYAXHK6Bn3skthA6XiMuZo-pA6cKQfS8k7-ki8LHyRp9HV4s"
          alt="Background Pattern"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6f6f8] via-[#f6f6f8]/90 to-[#f6f6f8] dark:from-[#101622] dark:via-[#101622]/90 dark:to-[#101622]"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#111318] dark:text-white mb-4">
            {dictionary.about.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {dictionary.about.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { key: 'mission', icon: 'auto_awesome' },
            { key: 'vision', icon: 'visibility' },
            { key: 'values', icon: 'shield' }
          ].map(({ key, icon }) => (
            <div
              key={key}
              className="flex flex-col gap-6 p-8 rounded-xl bg-white/50 dark:bg-[#101622]/50 backdrop-blur-lg border border-white/10 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 size-48 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-300"></div>
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/20 text-primary border border-primary/20">
                  <span className="material-symbols-outlined text-3xl">{icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#111318] dark:text-white">
                  {dictionary.about[key].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {dictionary.about[key].description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
