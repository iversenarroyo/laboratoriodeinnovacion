import React from "react";
import { NavLink } from "react-router-dom";
export const Formacion = () => {
  const formacionItems = [
    {
      title: "Talleres",
      description:
        "Our resident Hack fellows are on hand to offer expert advice. They've all walked in your shoes, so are perfectly placed to help you.",
      enlace: "/eventos",
    },
    {
      title: "Make it Happen",
      description:
        "Our resident Hack fellows are on hand to offer expert advice. They've all walked in your shoes, so are perfectly placed to help you.",
      enlace: "/programas",
    },
  ];
  return (
    <div className="min-h-screen bg-black text-white md:px-32 px-12 py-20 flex flex-col lg:flex-row gap-8">
      {/* Título principal a la izquierda */}
      <div className="lg:w-1/3 flex items-start justify-center lg:justify-start">
        <h1 className="text-6xl font-light tracking-wide">Formación</h1>
      </div>

      {/* Lista de ítems a la derecha */}
      <div className="lg:w-2/3 flex flex-col gap-12">
        {formacionItems.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <NavLink
              className="flex items-center gap-2 text-lg font-semibold hover:text-[#258CFF] hover:scale-105"
              to={item.enlace}
            >
              <span className="text-[#ffffff]">&rsaquo;</span> {item.title}
            </NavLink>
            <p className="text-sm font-light text-gray-300 lg:pr-64">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
