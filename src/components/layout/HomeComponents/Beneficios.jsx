import React from "react";
import { TimelineCarousel } from "../SubComponents/TimelineCarousel ";
import { ImageSlider } from "../SubComponents/ImageSlides";
import { Slider } from "../SubComponents/Slider";
import ProgramFeatures from "../SubComponents/ProgramFeatures";

export const Beneficios = () => {
  return (
    <section className="px-2 md:px-4 lg:px-8 space-y-24">
      {/* Título principal */}

      {/* Slider + Imagen */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div>
          <Slider />
        </div>
        <div className="md:col-span-2">
          <ImageSlider />
        </div>
      </div>

      {/* Sobre Nosotros */}
      {/*<div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-2">
          <img
            src="/home/foto4.png"
            alt="Descripción"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
        <div className="md:col-span-3 space-y-4">
          <p className="text-[#877D7F] text-xl">
            QUÉ ES INNOVATION <span className="text-black">LAB</span>
          </p>
          <p className="text-[#877D7F] text-4xl md:text-5xl">
            SOBRE <span className="text-[#024085] font-bold">NOSOTROS</span>
          </p>
          <TimelineCarousel />
        </div>
      </div>*/}

      {/* Beneficios */}
      <div className="md:space-y-6 space-y-2">
        <p className="text-[#877D7F] text-xl">
          QUÉ OFRECE EL <span className="text-black">LABORATORIO</span>
        </p>
        <h2 className="text-2xl md:text-5xl font-extrabold">
          <span className="text-[#877D7F]">NUESTROS </span>
          <span className="text-[#258CFF]">BENEFICIOS</span>
        </h2>
        <ProgramFeatures />
      </div>
    </section>
  );
};
