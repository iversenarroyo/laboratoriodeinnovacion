import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const TimelineData = [
  {
    year: "MISIÓN",
    content:
      "Impulsamos la innovación y el emprendimiento mediante tecnologías emergentes y colaboración estratégica, fortaleciendo el desarrollo del país."
  },
  {
    year: "VALORES",
    content:
      "Innovación, excelencia, trabajo interdisciplinario, responsabilidad social, ética profesional y aprendizaje continuo."
  },
  {
    year: "EQUIPO",
    content:
      "El Innovation Lab es una unidad de la DITT-UNI, liderada por la Ing. Margarita Mondragón, con un equipo multidisciplinario dedicado a la tecnología e innovación."
  }
];

export const TimelineCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TimelineData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TimelineData.length - 1 : prev - 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {/* VISIÓN fija */}
        <div className='border-l-2 border-[#225894] pl-8'>
          <p className='text-4xl text-[#024085] font-extralight mt-8 md:mt-20'>VISIÓN</p>
          <ul className="pl-1 mt-6">
            <li className="relative pl-4 text-sm before:content-['■'] before:absolute before:left-0 before:top-0 before:text-[#024085] pr-10">
              Convertirnos en referente regional de investigación, innovación y emprendimiento tecnológico, inspirando soluciones creativas con alto impacto.
            </li>
          </ul>
        </div>

        {/* Carrusel animado */}
        <div className='border-l-2 border-[#225894] pl-8 relative min-h-[300px]'>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p className='text-4xl text-[#9FD5FF] font-extralight mt-8 md:mt-20'>
                {TimelineData[currentIndex].year}
              </p>
              <ul className="pl-1 mt-6">
                <li className="relative pl-4 text-sm before:content-['■'] before:absolute before:left-0 before:top-0 before:text-[#9FD5FF] pr-10">
                  {TimelineData[currentIndex].content}
                </li>
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Controles */}
          <div className="absolute bottom-0 right-0 flex space-x-2 mt-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-[#024085] text-white hover:bg-[#012a5e] transition"
              aria-label="Año anterior"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-[#024085] text-white hover:bg-[#012a5e] transition"
              aria-label="Siguiente año"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-6 space-x-2">
        {TimelineData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#024085]' : 'bg-gray-300'}`}
            aria-label={`Ir a ${TimelineData[index].year}`}
          />
        ))}
      </div>
    </div>
  );
};
