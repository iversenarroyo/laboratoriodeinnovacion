import React from "react";

export const Dependencias = () => {
  const cards = [
    {
      title: "Empresa y Gobierno",
      img: "/home/empresa.png",
      desc: "Our resident Hack fellows are on hand to offer expert advice. They’ve all walked in your shoes, so are perfectly placed to help you.",
      enlace: "https://www.uni.edu.pe/",
    },
    {
      title: "StartUp UNI",
      img: "/home/startupWeb.png",
      desc: "Our resident Hack fellows are on hand to offer expert advice. They’ve all walked in your shoes, so are perfectly placed to help you.",
      enlace: "https://startup.uni.edu.pe/",
    },
    {
      title: "Transferencia Tecnológica",
      img: "/home/transferencia.png",
      desc: "Our resident Hack fellows are on hand to offer expert advice. They’ve all walked in your shoes, so are perfectly placed to help you.",
      enlace: "https://www.uni.edu.pe/",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16 lg:px-32 py-12">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center shadow-lg p-10 bg-white hover:bg-[#258CFF] transition duration-300 rounded-lg space-y-4"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
          <p className="text-gray-600 mt-2">{card.desc}</p>
          <button className="mt-4 bg-[#0A3E80] text-white px-8 py-3.5  hover:bg-[#fff] hover:text-[#0A3E80] transition">
            <a href={card.enlace} target="_blank">
              VER MÁS
            </a>
          </button>
        </div>
      ))}
    </div>
  );
};
