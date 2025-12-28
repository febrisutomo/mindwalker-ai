export default function Services({ dictionary }: { dictionary: any }) {
  const services = [
    { key: 'modelforge', icon: 'code_blocks' },
    { key: 'dataforge', icon: 'analytics' },
    { key: 'agentforge', icon: 'settings_ethernet' }
  ]

  const standouts = [
    { key: 'efficiency', icon: 'rocket_launch' },
    { key: 'decisions', icon: 'data_thresholding' },
    { key: 'competitive', icon: 'trending_up' }
  ]

  return (
    <section id="services" className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#111318] dark:text-white mb-4">
            {dictionary.services.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {dictionary.services.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map(({ key, icon }) => (
            <div
              key={key}
              className="flex flex-1 flex-col gap-4 rounded-xl border border-[#E5E7EB] dark:border-gray-700 bg-white dark:bg-[#101622] p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-primary !text-3xl">{icon}</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#0A2540] dark:text-white text-lg font-bold">
                  {dictionary.services[key].title}
                </h3>
                <p className="text-[#1F2937] dark:text-gray-300 text-sm">
                  {dictionary.services[key].description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-[#111318] dark:text-white mb-6 text-center">
            {dictionary.services.standout.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {standouts.map(({ key, icon }) => (
              <div key={key} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-2xl mt-1">{icon}</span>
                <div className="flex flex-col">
                  <p className="text-[#0A2540] dark:text-white text-base font-medium">
                    {dictionary.services.standout[key].title}
                  </p>
                  <p className="text-[#1F2937] dark:text-gray-300 text-sm">
                    {dictionary.services.standout[key].description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
