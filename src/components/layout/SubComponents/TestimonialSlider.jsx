import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Luis Francisco Lévano Puma",
    role: "CEO y fundador de BioES",
    image: "/testimonios/tesmimonio1.jpeg",
    text: `Ser parte de este proceso fue una experiencia  transformadora. El acompañamiento de expertos en innovación nos permitió replantear nuestra propuesta de valor, perfeccionar el enfoque técnico del proyecto e implementar nuestra idea con mayor claridad y solidez. Además, validamos nuevas oportunidades de mercado que antes no habíamos considerado. Agradecemos sinceramente el espacio, el tiempo y la confianza depositada en nosotros.`,
  },
  {
    name: "Brayan Laura Ordoñez",
    role: "Co-Founder y CEO de RoboSkills",
    image: "/testimonios/tesmimonio2.jpeg",
    text: `Participar en el programa de desarrollo tecnológico Make It Happen! fue un punto de inflexión para RoboSkills. Durante esta experiencia aprendimos lo que significa llevar una startup al siguiente nivel, fortalecimos nuestras bases, ampliamos nuestra red de contactos y obtuvimos valioso feedback de expertos. Además, gracias a los recursos tecnológicos y al hardware proporcionado por el Laboratorio de Innovación`,
  },
  {
    name: "Jhonnatan Huapaya",
    role: "Artista/Modelador 3D",
    image: "/testimonios/testimonio3.JPG",
    text: `Participar en el programa Make It Happen fue una experiencia transformadora que me permitió aplicar mis habilidades como modelador 3D en un proyecto con impacto real. Trabajar en equipo con personas de diferentes disciplinas me impulsó a crecer profesional y creativamente. Ver cómo nuestras ideas tomaban forma en prototipos tangibles fue increíblemente gratificante.`,
  },
  {
    name: "Jair Vasquez Torres",
    role: "Cofundador de SmartPainter",
    image: "/testimonios/testimonio4.jpeg",
    text: `Gracias a la incubadora Startup UNI, en nuestro proceso de preincubación con SmartPainter, logramos comprender mejor las necesidades reales de nuestros clientes, validar con mayor precisión el problema que abordamos y explorar distintas estrategias para acceder a financiamiento. También valoramos mucho el acompañamiento de los mentores, quienes nos guiaron con ejemplos reales y recomendaciones aplicables. `,
  },
  {
    name: "José Claudio Aldonate Rivas ",
    role: "Participante Make It Happen",
    image: "/testimonios/testimonio5.jpeg",
    text: `Gracias al programa pude conocer a un mentor con el cual mi equipo está llevando el proyecto al siguiente nivel. Es vital la colaboración entre estudiantes dedicados con ganas de aprender y profesionales con experiencia y ganas de generar un cambio, así avanza el país.`,
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prevIndex) =>
      newDirection === 1
        ? (prevIndex + 1) % testimonials.length
        : (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full  py-16 flex flex-col items-center relative bg-white overflow-x-hidden">
      <h2 className="text-2xl md:text-5xl font-extrabold">
        <span className="text-[#877D7F]">NUESTROS </span>
        <span className="text-[#258CFF] ">TESTIMONIOS</span>
        <span className="sm:text-9xl font-normal mb-[-80px] sm:block hidden text-[#258CFF] leading-none text-center ">
          ”
        </span>
      </h2>
      <div className="relative w-full flex items-center justify-center sm:min-h-[400px] min-h-[500px] ">
        <div className="relative w-full max-w-8xl  flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.6 }}
              className="w-full text-center px-4 text-gray-800 absolute"
            >
              <p className="sm:text-lg text-sm leading-relaxed max-w-3xl mx-auto px-8">
                “{testimonials[index].text}”
              </p>
              <div className="flex flex-col items-center mt-6">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
                <p className="mt-4 font-medium">{testimonials[index].name}</p>
                <p className="text-sm text-gray-500">
                  {testimonials[index].role}
                </p>
                <p className="text-sm text-gray-500">2025</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Botones flecha */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-900 hover:bg-blue-950 text-white p-3 md:p-4 rounded-l-none rounded-r-xl shadow"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-900 hover:bg-blue-950 text-white p-3 md:p-4 rounded-r-none rounded-l-xl shadow"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-8">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-black scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
