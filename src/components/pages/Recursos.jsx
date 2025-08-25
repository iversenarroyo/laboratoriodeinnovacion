import React from "react";

export const Recursos = () => {
  return (
    <div className="min-h-screen bg-black text-white px-10 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 sm:gap-16 gap-12 justify-between">
        <div>
          <h1 className="text-5xl font-semibold mb-12 mt-20">Recursos</h1>
        </div>

        {/* Columna 1 */}
        <div className="space-y-10">
          <div>
            <h2 className="flex items-center gap-2 text-lg font-normal">
              <span>&rsaquo;</span> Reservas
            </h2>
            <ul className="ml-6 mt-2 space-y-1 text-sm font-extralight quicksand">
              <li className=" hover:text-[#258CFF]">
                <a href="">Materiales y equipos</a>
              </li>
              <li className=" hover:text-[#258CFF]">
                <a href="">Sala de Videoconferencias</a>
              </li>
              <li className=" hover:text-[#258CFF]">
                <a href="">Sala de Co-working</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-lg font-normal">
              <span>&rsaquo;</span> Comunidad
            </h2>
            <ul className="ml-6 mt-2 space-y-1 text-sm font-extralight quicksand">
              <li className=" hover:text-[#258CFF]">
                <a
                  href="https://chat.whatsapp.com/DFphp3HxPGq8x11GJeuvFf"
                  target="_blank"
                >
                  WhatsApp Lab
                </a>
              </li>
              <li className=" hover:text-[#258CFF]">
                <a href="http://wa.me/51981359831" target="_blank">
                  WhatsApp Startup UNI
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Columna 2 */}
        <div className="space-y-10">
          <div>
            <h2 className="flex items-center gap-2 text-lg font-normal">
              <span>&rsaquo;</span> Plantillas
            </h2>
            <ul className="ml-6 mt-2 space-y-1 text-sm quicksand font-extralight">
              <li className=" hover:text-[#258CFF]">
                <a href="">Formatos de Reserva</a>
              </li>
              <li className=" hover:text-[#258CFF]">
                <a href="">Pitch Desk</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-lg font-normal">
              <span>&rsaquo;</span> Institucional
            </h2>
            <ul className="ml-6 mt-2 space-y-1 text-sm font-extralight quicksand">
              <li className=" hover:text-[#258CFF]">
                <a href="https://startup.uni.edu.pe/" target="_blank">
                  Startup UNI
                </a>
              </li>
              <li className=" hover:text-[#258CFF]">
                <a href="https://ditt.uni.edu.pe/" target="_blank">
                  DITT
                </a>
              </li>
              <li className=" hover:text-[#258CFF]">
                <a href="https://www.ruiperu.com/" target="_blank">
                  RUI
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Columna 3 - Tarjetas */}
        <div className="flex flex-col gap-4 ">
          {[
            {
              src: "/home/servicios1.png",
              label: "Ver",
              title: "Programas",
            },
            {
              src: "/home/servicios2.png",
              label: "Ver",
              title: "Eventos",
            },
          ].map((item, idx) => (
            <a key={idx} className="w-full overflow-hidden rounded-md group">
              <div className="flex bg-[#024085] hover:bg-[#258CFF] transition-colors duration-300 ease-in-out">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-28 h-20 object-cover transition-all duration-300 brightness-75 group-hover:brightness-100"
                />
                <div className="w-full h-20 flex flex-col justify-center">
                  <p className="text-sm font-extralight ml-5 text-[#ffffff67]">
                    {item.label}
                  </p>
                  <p className="text-md font-semibold ml-5 text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
