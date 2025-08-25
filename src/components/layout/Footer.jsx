import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-10">
      {/* Contenido principal */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Columna 1: Logo y descripción */}
        <div className="md:col-span-1">
          <h1 className="text-2xl">
            <img src="/logoHubColor.svg" alt="" />
          </h1>
          <p className="mt-2 text-sm text-[#98D3FF] hover:text-white">
            Tu Plataforma
            <br />
            para la Innovación y el Emprendimiento
          </p>
          <div className="mt-6">
            <p className="text-sm text-gray-400 mb-2">Contáctanos</p>
            <div className="flex gap-4 text-white text-xl">
              <a
                href="https://pe.linkedin.com/company/incubadora-startup-uni"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-400 hover:scale-110 transition-transform duration-200 cursor-pointer" />
              </a>
              <a
                href="https://www.facebook.com/startupunioficial/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-blue-400 hover:scale-110 transition-transform duration-200 cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/startup_uni/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-blue-400 hover:scale-110 transition-transform duration-200 cursor-pointer" />
              </a>
              <a
                href="https://www.youtube.com/@startupuni7194"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="hover:text-blue-400 hover:scale-110 transition-transform duration-200 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Columna 2: Reservas */}
        <div>
          <h4 className="mb-2 font-semibold text-gray-200">Reservas</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>
              <a
                className="hover:scale-105 hover:text-[#98D3FF] transition-transform duration-200 inline-block"
                href=""
              >
                Materiales y equipos
              </a>
            </li>
            <li>
              <a
                className="hover:scale-105 hover:text-[#98D3FF] transition-transform duration-200 inline-block"
                href=""
              >
                Sala de Videoconferencias
              </a>
            </li>
            <li>
              <a
                className="hover:scale-105 hover:text-[#98D3FF] transition-transform duration-200 inline-block"
                href=""
              >
                Sala de Co-working
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Plantillas */}
        <div>
          <h4 className="mb-2 font-semibold text-gray-200">Plantillas</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>
              <a
                className="hover:scale-105 hover:text-[#98D3FF] transition-transform duration-200 inline-block"
                href=""
              >
                Formatos de Reserva
              </a>
            </li>
            <li>
              <a
                className="hover:scale-105 hover:text-[#98D3FF] transition-transform duration-200 inline-block"
                href=""
              >
                Pitch Deck
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 4: Comunidad e Institucional */}
        <div>
          <h4 className="mb-2 font-semibold text-gray-200">Comunidad</h4>
          <ul className="text-sm text-gray-400 space-y-1 mb-4">
            <li>
              <a
                className="hover:scale-105 hover:text-[#98D3FF] transition-transform duration-200 inline-block"
                href="https://chat.whatsapp.com/DFphp3HxPGq8x11GJeuvFf"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Lab
              </a>
            </li>
            <li>
              <a
                className="hover:scale-105 hover:text-[#98D3FF] transition-transform duration-200 inline-block"
                href="http://wa.me/51981359831"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Startup UNI
              </a>
            </li>
          </ul>
          <h4 className="mb-2 font-semibold text-gray-200">Institucional</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>
              <a
                className="hover:scale-105 hover:text-[#98D3FF] transition-transform duration-200 inline-block"
                href="https://startup.uni.edu.pe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Startup UNI
              </a>
            </li>
            <li>
              <a
                className="hover:scale-105 hover:text-[#98D3FF] transition-transform duration-200 inline-block"
                href="https://ditt.uni.edu.pe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DITT
              </a>
            </li>
            <li>
              <a
                className="hover:scale-105 hover:text-[#98D3FF] transition-transform duration-200 inline-block"
                href="https://www.ruiperu.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RUI
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 5: Servicios visuales */}
        <div className="flex flex-col gap-4">
          <NavLink
            to="/programas"
            className="w-full overflow-hidden rounded-md group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="flex bg-[#024085] hover:bg-[#258CFF] transition-colors duration-300 ease-in-out">
              <img
                src="/home/servicios1.png"
                alt="Programas"
                className="w-28 h-20 object-cover transition-all duration-300 brightness-75 group-hover:brightness-100"
              />

              <div className="w-full h-20 flex flex-col justify-center">
                <p className="text-xs font-extralight ml-5 text-[#ffffff67]">
                  Ver
                </p>
                <p className="text-sm font-semibold ml-5 text-white">
                  Programas
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/eventos"
            className="w-full overflow-hidden rounded-md group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="flex bg-[#024085] hover:bg-[#258CFF] transition-colors duration-300 ease-in-out">
              <img
                src="/home/servicios2.png"
                alt="Eventos"
                className="w-28 h-20 object-cover transition-all duration-300 brightness-75 group-hover:brightness-100"
              />

              <div className="w-full h-20 flex flex-col justify-center">
                <p className="text-xs font-extralight ml-5 text-[#ffffff67]">
                  Ver
                </p>
                <p className="text-sm font-semibold ml-5 text-white">Eventos</p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>

      {/* Línea divisoria */}
      <hr className="my-6 border-gray-700" />

      {/* Footer inferior */}
      <div className="text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
        <p>© INNOVATION LAB 2025</p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          {[
            "Aviso de Privacidad",
            "Detalle de cookies",
            "Aviso Legal",
            "Políticas",
            "Términos y condiciones",
            "Libro de Reclamos",
          ].map((text, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:scale-105 hover:text-[#98D3FF] transition-transform duration-200 inline-block"
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
