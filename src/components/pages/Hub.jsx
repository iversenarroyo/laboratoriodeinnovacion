import React from "react";

export const Hub = () => {
  const columns = [
    ["Academia", "Incubadora Startup UNI", "Noticias"],
    ["Gobierno", "Laboratorio de Innovación", "Centros de Investigación"],
    ["Sector Privado", "Propiedad Intelectual", "Grupos Semilleros"],
  ];

  return (
    <div
      className="bg-black text-white px-32 py-20 flex flex-col lg:flex-row gap-8"
      style={{ minHeight: "calc(100vh - 110px)" }}
    >
      {/* Título */}
      <div className="flex-shrink-0 text-5xl font-light mr-12 lg:mx-0 mx-auto">
        Hub
      </div>

      {/* Columnas de enlaces */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 flex-1">
        {columns.map((col, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {col.map((item, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center gap-2 text-sm hover:text-[#258CFF] transition hover:scale-105"
              >
                <span>&#8250;</span> {/* Flecha similar a la imagen */}
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
