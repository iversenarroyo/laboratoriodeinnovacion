import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true; // Asegura que esté silenciado
      video.volume = 0;   // Refuerzo adicional (aunque no se oiga nada)
      video.playsInline = true;
      video.setAttribute('muted', ''); // Para navegadores como Safari

      video.play().catch(() => {
        // Si el navegador lo bloquea, no hacemos nada. No se mostrará ningún botón.
      });
    }

    return () => {
      if (video) {
        video.pause();
        video.removeAttribute('src');
        video.load();
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* Fondo de video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className="absolute min-w-full min-h-full w-auto h-auto object-cover"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          src="/home/videohome2.mp4"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between w-full max-w-7xl mx-auto">
          {/* Título */}
          <div className="space-y-4 text-center md:text-left md:w-1/3">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight">
              <span className="block">INNO</span>
              <span className="block">VATION</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl">
              Hi there! Welcome to <br />
              <span className="font-bold">
                Innovation <span className="text-blue-300 font-extrabold">Lab</span>
              </span>
            </p>
          </div>

          {/* Logo */}
          <div className="flex justify-center md:w-1/3">
            <img
              src="/home/LabColor.png"
              alt="Lab Logo"
              className="w-56 sm:w-72 md:w-80 lg:w-96"
            />
          </div>

          {/* Texto derecho */}
          <div className="md:w-1/3 text-right hidden md:block">
            <p className="text-blue-300 text-6xl lg:text-8xl font-light leading-tight">
              LAB
            </p>
            <p className="mt-6 text-base lg:text-lg text-white">
              Where ideas ignite,<br />and innovation begins
            </p>
          </div>
        </div>

        {/* Astronauta */}
        <div className="absolute bottom-0 md:bottom-[-30px] flex justify-center w-full">
          <motion.img
            src="/home/astronauta2.png"
            alt="Astronaut"
            className="w-44 sm:w-56 md:w-72 lg:w-96"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
