import { Turtle } from "lucide-react";
import React, { useEffect } from "react";
import First from "../sections/First";
import TalleresEventos from "../layout/EventosComponents/TalleresEventos";
import StackedCards from "../layout/EventosComponents/StackedCards ";
import Footer from "../layout/Footer";
export const Eventos = ({ activador, setActivador }) => {
  const sampleCards = [
    {
      title: "MITOLOGÍA VR",
      image: "/programas/fotosmake.png",
      description:
        "ProyLorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde maiores obcaecati necessitatibus! Cumque quo fuga sequi dicta et maxime omnis nam vel dignissimos. Veritatis ipsam accusantium ipsa magnam et.",
      panelTitle: "MITOLOGÍA",
      panelSubtitle: "PERUANA VR",
      panelDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde maiores obcaecati necessitatibus! Cumque quo fuga sequi dicta et maxime omnis nam vel dignissimos. Veritatis ipsam accusantium ipsa magnam et.",
      panelImages: [
        "/programas/prim1.png",
        "/programas/prim2.png",
        "/programas/prim3.png",
        "/programas/prim4.png",
      ],
    },
    {
      title: "DRONE MAPPER",
      image: "/programas/programa1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde maiores obcaecati necessitatibus! Cumque quo fuga sequi dicta et maxime omnis nam vel dignissimos. Veritatis ipsam accusantium ipsa magnam et.",
      panelTitle: "DRONE",
      panelSubtitle: "MAPPER",
      panelDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde maiores obcaecati necessitatibus! Cumque quo fuga sequi dicta et maxime omnis nam vel dignissimos. Veritatis ipsam accusantium ipsa magnam et.",
      panelImages: [
        "/programas/seg1.png",
        "/programas/seg2.png",
        "/programas/seg3.png",
        "/programas/seg4.png",
      ],
    },
    {
      title: "DRONE MAPPER",
      image: "/programas/programa1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde maiores obcaecati necessitatibus! Cumque quo fuga sequi dicta et maxime omnis nam vel dignissimos. Veritatis ipsam accusantium ipsa magnam et.",
      panelTitle: "DRONE",
      panelSubtitle: "MAPPER",
      panelDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde maiores obcaecati necessitatibus! Cumque quo fuga sequi dicta et maxime omnis nam vel dignissimos. Veritatis ipsam accusantium ipsa magnam et.",
      panelImages: [
        "/programas/seg1.png",
        "/programas/seg2.png",
        "/programas/seg3.png",
        "/programas/seg4.png",
      ],
    },
    {
      title: "DRONE MAPPER",
      image: "/programas/programa1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde maiores obcaecati necessitatibus! Cumque quo fuga sequi dicta et maxime omnis nam vel dignissimos. Veritatis ipsam accusantium ipsa magnam et.",
      panelTitle: "DRONE",
      panelSubtitle: "MAPPER",
      panelDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde maiores obcaecati necessitatibus! Cumque quo fuga sequi dicta et maxime omnis nam vel dignissimos. Veritatis ipsam accusantium ipsa magnam et.",
      panelImages: [
        "/programas/seg1.png",
        "/programas/seg2.png",
        "/programas/seg3.png",
        "/programas/seg4.png",
      ],
    },
    {
      title: "DRONE MAPPER",
      image: "/programas/programa1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde maiores obcaecati necessitatibus! Cumque quo fuga sequi dicta et maxime omnis nam vel dignissimos. Veritatis ipsam accusantium ipsa magnam et.",
      panelTitle: "DRONE",
      panelSubtitle: "MAPPER",
      panelDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde maiores obcaecati necessitatibus! Cumque quo fuga sequi dicta et maxime omnis nam vel dignissimos. Veritatis ipsam accusantium ipsa magnam et.",
      panelImages: [
        "/programas/seg1.png",
        "/programas/seg2.png",
        "/programas/seg3.png",
        "/programas/seg4.png",
      ],
    },
    // agrega más...
  ];
  useEffect(() => {
    if (activador) {
      setActivador(true);
    }
  }, []); // Dependencias correctamente especificadas

  return (
    <>
      <First
        title0="Eventos de Innovation Lab"
        title1="WorkShop en"
        title2="el Hub de Innovación"
        subtitle="¿Qué es el evento del mes?"
        description={`El lDigital Innovation Lab de Barcelona reúne bajo un mismo techo toda la experiencia de nuestros equipos internacionales para que puedas experimentar con demos y prototipos que simulan escenarios de la vida real. En este banco de pruebas podrás ver cómo se comportan las nuevas tecnologías en escenarios empresariales reales. En la era digital tienes que colaborar para innovar. Una transformación digital exitosa requiere una mezcla perfecta entre negocio, tecnología y cultura corporativa. En GFT apostamos por la co-creación y te ofrecemos el dream-team ideal para cada proyecto a partir de la colaboración entre clientes, especialistas, socios y expertos de GFT.`}
        image="/nosotros/nosotros1.png"
        background="bg-black"
        textColor="text-white"
        reverse={false}
        bolean={false}
        slides={[{ imageUrl: "/eventos/kickoff.png", altText: "Imagen 1" }]}
      ></First>
      <TalleresEventos />
      <StackedCards cards={sampleCards} />
      <Footer />
    </>
  );
};
