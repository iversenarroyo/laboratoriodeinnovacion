import React, { useState, useEffect } from "react";

const SlidesData = [
  {
    title: "PREMIOS EN SOLES",
    amount: "62,OOO",
    caracteristica: "OTORGADOS",
    description:
      "Premios otorgados como capital semilla y entrega de materiales a emprendimientos ganadores de los programas Make IT Happen y Hachathon, para impulsar sus emprendimientos.",
    styles: {
      background: "#000000",
      titleColor: "#FFFFFF",
      amountColor: "#98D3FF",
      featureColor: "#FFFFFF",
      descriptionColor: "#787878",
    },
  },
  {
    title: "VISITAS HASTA MARZO 2025",
    amount: "+7OO",
    caracteristica: "IMPACTADOS",
    description:
      "Hemos recibido desde delegación de escolares, estudiantes universitarios, profesionales hasta delegaciones internacionales de Canada, Suiza, Singapur, China, Brasil, Chile Colombia, Taiwan e India.",
    styles: {
      background: "#024085",
      titleColor: "#FFFFFF",
      amountColor: "#98D3FF",
      featureColor: "#FFFFFF",
      descriptionColor: "#ccc",
    },
  },
  {
    title: "ENTRENAMIENTO TECNOLÓGICO",
    amount: "+1OO",
    caracteristica: "PROYECTOS",
    description:
      "Recibieron capacitación especializada en desarrollo tecnológico, con enfoque en diseño de soluciones con alto impacto e investigación científica.",
    styles: {
      background: "#258CFF",
      titleColor: "#FFFFFF",
      amountColor: "#024085",
      featureColor: "#FFFFFF",
      descriptionColor: "#024085",
    },
  },
];

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) =>
          prev === SlidesData.length - 1 ? 0 : prev + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="mx-auto md:px-1 sm:px-4  xl:px-6">
      <div className="relative overflow-hidden rounded-3xl shadow-xl text-white h-[420px] md:h-[500px]">
        {SlidesData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            } p-12 sm:p-2 md:px-6 xl:px-12`}
            style={{ backgroundColor: slide.styles.background }}
          >
            <div className="flex flex-col items-start justify-center h-full max-w-4xl mx-auto text-left">
              <h4
                className="text-2xl sm:text-base md:text-lg xl:text-xl font-light mb-2"
                style={{ color: slide.styles.titleColor }}
              >
                {slide.title}
              </h4>
              <p
                className="text-8xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold mb-2 tracking-tight"
                style={{ color: slide.styles.amountColor }}
              >
                {slide.amount}
              </p>
              <p
                className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: slide.styles.featureColor }}
              >
                {slide.caracteristica}
              </p>
              <p
                className="text-md sm:text-sm md:text-sm lg:text-md leading-snug md:leading-tight max-w-xl"
                style={{ color: slide.styles.descriptionColor }}
              >
                {slide.description}
              </p>
            </div>
          </div>
        ))}

        {/* Controles */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center gap-3 bg-[#85858533] backdrop-blur-sm px-5 py-2 rounded-full z-20">
          {SlidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-[#98D3FF]" : "bg-gray-300"
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
