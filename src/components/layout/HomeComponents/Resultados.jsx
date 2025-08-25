export default function Resultados() {
  const data = [
    { number: "12,OOO+", label: "expertos" },
    { number: "12,OOO+", label: "expertos" },
    { number: "12,OOO+", label: "expertos" },
    { number: "12,OOO+", label: "expertos" },
  ];

  return (
    <section className="px-8 md:px-16 lg:px-32 py-12 text-center">
      {/* Título */}
      <h2 className="text-2xl md:text-5xl font-extrabold">
        <span className="text-[#877D7F]">PRINCIPALES </span>
        <span className="text-[#258CFF]">RESULTADOS</span>
      </h2>

      {/* Bloque de resultados */}
      <div className="mt-8 bg-[#003C80] text-white rounded-2xl flex flex-col md:flex-row items-center justify-around py-8 px-4 md:px-12">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center w-full md:w-auto ${
              index < data.length - 1 ? "md:border-r md:border-white" : ""
            } md:px-6`}
          >
            <span className="text-3xl md:text-4xl font-light">
              {item.number}
            </span>
            <span className="text-sm mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
