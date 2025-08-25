import React, { useState, useEffect } from "react";
import clsx from "clsx";

const First = ({
  title0 = "Título por defecto",
  title1 = "Título por defecto",
  title2 = "Título por defecto",
  subtitle = "Subtítulo por defecto",
  description = "Texto largo con saltos de línea aquí.",
  background = "bg-black",
  textColor = "text-black",
  reverse = false,
  bolean = true,
  slides = [],
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [slides]);

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-9 h-auto  ${textColor} mb-28 lg:mb-0`}
    >
      <div
        className={`col-span-6 p-6 md:pl-15 md:pt-15 ${background} lg:pb-32 `}
      >
        <div className="text-lg font-extralight letra">
          <i className="bi bi-house-door-fill text-2xl"></i>
          <i className="bi bi-chevron-right mx-6"></i>
          <span>{title0}</span>
        </div>

        <div className="text-4xl md:text-7xl font-extrabold mt-10 letra">
          <div className={clsx("flex", bolean ? "items-start" : "flex-col")}>
            <div className="mr-2 lg:pr-36">
              <p>{title1} </p>
              <p className="text-[#98D3FF]">{title2}</p>
            </div>
            {bolean && (
              <div>
                <img
                  src="/programas/makeithappen.png"
                  className="w-48 md:w-60 my-[-40px] md:my-[-30px] ml-[10px] "
                  alt=""
                />
              </div>
            )}
          </div>
        </div>

        <p className="mt-6 md:mt-10 text-xl mb-4 text-[#98D3FF]">{subtitle}</p>
        <p className="letra font-extralight pr-4  md:pr-20 lg:pr-40">
          {description}
        </p>
      </div>

      {/* Slider dinámico y responsivo */}
      <div
        className={`col-span-3 relative w-full h-64 lg:h-[90vh] flex items-center justify-center lg:bg-white bg-black lg:pr-12 `}
      >
        {slides.length > 0 && (
          <div className="relative w-full h-full">
            <img
              src={slides[currentSlide].imageUrl}
              alt={slides[currentSlide].altText || `Slide ${currentSlide + 1}`}
              className="lg:absolute bottom-0 lg:right-16 object-contain w-full lg:h-[95vh] h-96 px-4 md:px-0 z-1 lg:scale-125 pointer-events-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default First;
