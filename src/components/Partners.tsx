export default function Partners({ dictionary }: { dictionary: any }) {
  const logos = [
    'logos/google-color.png',
    'logos/BytePlus_Company_Logo.png',
    'logos/clickhouse-logo_freelogovectors.net_.png',
    'logos/Apache_Software_Foundation_Logo_(2016).svg.png',
    'logos/trae-color.png',
    'logos/tml-bg.png'
  ]

  // Duplicate logos for smooth infinite scroll
  const scrollLogos = [...logos, ...logos]

  return (
    <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoYjnPIGQI2-Jz-FuSp7aydH8iWklEs7KdAjy0y56_T3cFkjGGySnuJty42QQ04M4fKf6XeIL93gCn2epC3L_6jTvIaay80AIG66Ykrn4IA0Crk3m3qWLRBXQtgB9cbEOKxIvExR5Drlc2ofBnGSFN9JY1AJO0MLuwlXJmDG6JISNj5BEDbgp7oaAyDc6ns6xeT07yGXLm7OdLd7IL7wkiXfJrizP6WjQkVN927YFNprU-OuSmndfemBzssMeGF1h2-nDGmLeUYsk')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'invert(0)',
        }}
      ></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#111318] dark:text-white">
            {dictionary.partners.title}
          </h2>
        </div>
        <div className="logos-marquee overflow-hidden relative w-full mb-16 hover:[&_.animate-scroll]:paused">
          <div className="logos-track flex gap-16 items-center animate-scroll w-max">
            {scrollLogos.map((src, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-32 h-20 transition-all duration-300 hover:scale-105"
              >
                <img src={src} alt="Partner Logo" className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
