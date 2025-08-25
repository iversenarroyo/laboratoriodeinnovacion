import React, { useState } from "react";
import { Slider } from "../layout/SubComponents/Slider";
import { ImageSlider } from "../layout/SubComponents/ImageSlides";
import { TimelineCarousel } from "../layout/SubComponents/TimelineCarousel ";
import ProgramFeatures from "../layout/SubComponents/ProgramFeatures";
import PartnersGrid from "../layout/SubComponents/PartnersGrid";
import TestimonialSlider from "../layout/SubComponents/TestimonialSlider";
import InnovationLabBanner from "../layout/InnovationLabBanner";
import Footer from "../layout/Footer";
import HeroSection from "../layout/SubComponents/HeroSection";
import { SociosHome } from "../layout/HomeComponents/SociosHome";
import { Beneficios } from "../layout/HomeComponents/Beneficios";
import { MiniHeader } from "../layout/HomeComponents/MiniHeader";
import { Dependencias } from "../layout/HomeComponents/Dependencias";
import Resultados from "../layout/HomeComponents/Resultados";
import { TypewriterText } from "../layout/HomeComponents/TypewriterText ";
export const Inicio = () => {
  return (
    <>
      <div>
        <div className="homeComponent grid grid-flow-row auto-rows-auto gap-x-4 justify-center p-8 bg-amber-400">
          <div className="flex justify-center">
            <img
              src="/home/logoHub.svg"
              alt="Logo Innovation Lab"
              className="max-h-96 object-contain mb-[-150px] mt-[-80px] pointer-events-none"
            />
          </div>
          <div className="flex justify-center text-center px-2 md:px-0">
            <TypewriterText />
          </div>
          <div className="flex justify-center text-center px-2 md:px-0">
            <h2 className="sm:text-xl text-sm md:text-2xl text-gray-300 max-w-2xl font-light mb-[-80px] mt-[-20px]">
              Desde la idea al mercado, accede a formación, mentoría, espacios y
              conexiones, todo en un solo lugar.
            </h2>
          </div>
          <div className=" mx-auto">
            <button className="bg-white text-[#024085] mx-auto boton hover:bg-[#024085] hover:text-white font-medium hover:font-bold  h-12 scale-120 px-8 rounded-full transition-colors">
              APLICA AHORA
            </button>
          </div>
        </div>
        <Dependencias />
        <Resultados />
        <Beneficios />

        <div className="md:mt-40 mt-10 px-4 md:px-15">
          <div className="relative pl-8 md:pl-12 before:absolute before:left-0 before:top-1/2 before:h-24 md:before:h-32 before:w-2 md:before:w-8 before:-translate-y-1/2 before:bg-[#024085]">
            <h2 className="text-2xl md:text-5xl font-extrabold">
              <span className="text-[#877D7F]">RED DE SOCIOS DEL </span>
              <span className="text-[#258CFF]">LABORATORIO</span>
            </h2>
          </div>
          <PartnersGrid />
        </div>

        <TestimonialSlider />
        <InnovationLabBanner />
        <Footer />
      </div>
    </>
  );
};
