import React from "react";

const cards = [
  {
    title: "Our resident Hack fellows",
    description:
      "Our resident Hack fellows are on hand to offer expert advice. They've all walked in your shoes, so are perfectly placed to help you.",
    image: "/eventos/talleres.png",
  },
  {
    title: "Our resident Hack fellows",
    description:
      "Our resident Hack fellows are on hand to offer expert advice. They've all walked in your shoes, so are perfectly placed to help you.",
    image: "/eventos/talleres.png",
  },
  {
    title: "Our resident Hack fellows",
    description:
      "Our resident Hack fellows are on hand to offer expert advice. They've all walked in your shoes, so are perfectly placed to help you.",
    image: "/eventos/talleres.png",
  },
  {
    title: "Our resident Hack fellows",
    description:
      "Our resident Hack fellows are on hand to offer expert advice. They've all walked in your shoes, so are perfectly placed to help you.",
    image: "/eventos/talleres.png",
  },
];

export default function TalleresEventos() {
  return (
    <section className="px-6 sm:px-12 py-12 bg-white  scale-95">
      {/* Título */}
      <div className="text-start mb-10 relative">
        {/* Cuadraditos en forma de L */}
        <div className="absolute top-0 left-0 flex flex-col scale-200">
          <div className="flex">
            <div className="w-2 h-2 bg-blue-900" />
            <div className="w-2 h-2 bg-blue-900" />
          </div>
          <div className="w-2 h-2 bg-blue-900" />
        </div>

        {/* Texto con gradiente */}
        <h2 className="text-3xl sm:text-5xl font-bold leading-tight ml-5 pt-5">
          <div className="bg-gradient-to-r from-[#3184FF] via-[#EE2CF1] to-blue-300 bg-clip-text text-transparent block">
            TALLERES Y EVENTOS
          </div>
          <div className="bg-gradient-to-r from-[#3184FF] via-[#EE2CF1] to-blue-300 bg-clip-text text-transparent block">
            EN INNOVATION LAB
          </div>
        </h2>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white hover:bg-[#98D3FF] shadow-lg rounded-2xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Imagen cuadrada */}
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img
                src={card.image}
                alt={card.title}
                className="object-cover px-8 h-full mx-auto pt-10"
              />
            </div>

            {/* Contenido */}
            <div className="py-4 flex-grow px-8">
              <h3 className="text-sm text-purple-600 font-semibold mb-2 ">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>

            {/* Botón */}
            <div className="p-4 mx-auto">
              <button className=" w-48 text-center bg-blue-900 hover:bg-white hover:text-blue-900 hover:font-bold text-white text-sm py-4 rounded-lg  transition">
                VER MÁS
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
