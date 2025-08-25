import React from "react";

const events = [
  { year: "2025", imageOnLeft: true },
  { year: "2024", imageOnLeft: false },
  { year: "2023", imageOnLeft: true },
  { year: "2022", imageOnLeft: false },
  { year: "2021", imageOnLeft: true },
];

const InnovationTimeline = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20 max-w-8xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-gray-500 text-start">
        CRONOLOGÍA HISTORIA DEL
        <br />
        <span className="font-semibold text-[#024085] uppercase">
          Laboratorio de Innovación
        </span>
      </h2>

      <div className="relative mt-20">
        {/* Línea vertical */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0" />

        <div className="space-y-28">
          {events.map(({ year, imageOnLeft }) => {
            const yearTop = year.slice(0, 2);
            const yearBottom = year.slice(2);
            return (
              <div
                key={year}
                className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6"
              >
                {/* Punto azul */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-5 h-5 bg-[#024085] rounded-full"></div>
                </div>

                {/* Imagen + año */}
                <div
                  className={`w-full md:w-[48%] flex ${
                    imageOnLeft ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Caja azul del año */}
                  <div className="bg-blue-900 text-white w-32 h-32 flex flex-col items-center justify-center text-5xl font-extralight leading-none quicksand">
                    <div>{yearTop}</div>
                    <div>{yearBottom}</div>
                  </div>

                  {/* Imagen */}
                  <img
                    src="/programas/cronologia.png"
                    alt={`Imagen del año ${year}`}
                    className="h-32 w-auto max-w-[calc(100%-8rem)] object-cover"
                  />
                </div>

                {/* Texto */}
                <div
                  className={`w-full md:w-[48%] flex items-center ${
                    imageOnLeft ? 'md:pl-8' : 'md:pr-8 md:order-first'
                  }`}
                >
                  <p className="text-gray-700 text-justify leading-relaxed">
                    El Digital Innovation Lab de Barcelona reúne bajo un mismo techo toda la
                    experiencia de nuestros equipos internacionales para que puedas experimentar
                    con demos y prototipos que simulan escenarios de la vida real. En este banco
                    de pruebas podrás ver cómo se comportan las nuevas tecnologías en escenarios
                    empresariales reales.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InnovationTimeline;
