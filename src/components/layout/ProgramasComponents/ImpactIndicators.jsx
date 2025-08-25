export default function ImpactIndicators() {
  const indicators = [
    { number: '12,000+', label: 'expertos' },
    { number: '20+', label: 'países' },
    { number: '3+', label: 'industrias' },
    { number: '1', label: 'objetivo' },
  ];

  return (
    <section className="py-12 bg-white">
      <h2 className="text-5xl font-semibold text-center text-gray-700 pb-10">
        INDICADORES DE <span className="text-blue-400 font-bold">IMPACTO</span>
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-16">
        {indicators.map((item, index) => (
          <div
            key={index}
            className="text-center md:border-l border-gray-200 first:md:border-l-0 px-4"
          >
            {/* Icono L invertida */}
            <div className="flex justify-start mb-4">
              <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-8 h-8">
                <div className="bg-gray-700 col-span-1 row-span-1" />
                <div className="bg-gray-400 col-span-1 row-span-1" />
                <div className="bg-gray-300 col-span-1 row-span-1" />
              </div>
            </div>

            <h3 className="text-5xl font-extralight text-black text-start fuente mt-8">{item.number}</h3>
            <p className="text-lg font-medium text-gray-700 text-start ">{item.label}</p>
            <p className="text-sm mt-2 text-gray-500 text-start ">
              Our resident Hack fellows are on hand to offer expert advice.
              They’ve all walked in your shoes, so are perfectly placed to help you.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
