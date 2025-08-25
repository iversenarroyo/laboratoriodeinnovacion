import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "GUIA",
    icon: "/home/guide.svg",
    description:
      "Mentoría experta y orientación estratégica de nuestra red de profesionales y lideres de la industria para alcanzar tus metas.",
    bg: "bg-transparent",
    text: "text-black",
    border: "border border-gray-300",
  },
  {
    title: "RECURSOS",
    icon: "/home/equip.svg",
    description:
      "Ponemos a tu disposición equipamiento de prototipado para que transformes tus ideas en realidad en IoT, VR/AR y mobile.",
    bg: "bg-[#024085]",
    text: "text-white",
  },
  {
    title: "EDUCATE",
    icon: "/home/educate.svg",
    description:
      "Ambiente vibrante con desafíos estimulantes, charlas, historias de éxito de la comunidad UNI y la energía para pensar en grande.",
    bg: "bg-[#258CFF]",
    text: "text-white",
  },
  {
    title: "INSPIRACION",
    icon: "/home/inspire.svg",
    description:
      "Ambiente vibrante con desafíos estimulantes, charlas, historias de éxito de la comunidad UNI y la energía para pensar en grande.",
    bg: "bg-[#024085]",
    text: "text-white",
  },
  {
    title: "NETWORKING",
    icon: "/home/networking.svg",
    description:
      "Conecta con una comunidad activa de estudiantes, académicos, mentores, emprendedores, empresas clave e inversionistas a través de nuestros eventos.",
    bg: "bg-[#258CFF]",
    text: "text-black",
  },
  {
    title: "CONEXION",
    icon: "/home/conection.svg",
    description:
      "Facilitamos tu vinculación con desafíos concretos de la industria, oportunidades de financiamiento, y acceso estratégico al mercado.",
    bg: "bg-transparent",
    text: "text-black",
    border: "border border-gray-300",
  },
];

export default function ProgramFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start px-4 md:px-0 mt-12">
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-light text-[#258CFF]">
          QUÉ PODRÁS
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          ENCONTRAR
        </h2>
        <p className="text-gray-500 mb-10 text-base md:text-lg max-w-lg mx-auto md:mx-0">
          Un ecosistema dinámico diseñado para catalizar tu ingenio. Descubre la
          inspiración y las conexiones estratégicas para transformar tus ideas
          en soluciones tecnológicas de impacto real.
        </p>

        {/* 🚀 Astronauta animado */}
        <motion.img
          src="/home/astronauta.png"
          alt="Astronauta"
          className="mx-auto md:mx-0 w-96 drop-shadow-lg"
          animate={{
            y: [0, -15, 0], // flota arriba y abajo
            rotate: [-2, 2, -2], // ligera rotación
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="md:col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`rounded text-center p-6 shadow-sm ${feature.bg} ${
                feature.text
              } ${feature.border ?? ""}`}
            >
              <div className="mb-4 flex justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
