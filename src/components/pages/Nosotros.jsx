import React from "react";
import First from "../sections/First";
import InnovationTimeline from "../layout/NosotrosComponents/InnovationTimeline";
import InnovationLabSection from "../layout/NosotrosComponents/InnovationLabSection ";
import PhotoGallerySection from "../layout/NosotrosComponents/PhotoGallerySection";
import Footer from "../layout/Footer";
import { SociosEstrategicos } from "../layout/ProgramasComponents/SociosEstrategicos.jsx";
export const Nosotros = () => {
  return (
    <>
      <First
        title0="Conoce sobre Innovation Lab"
        title1="Conoce sobre"
        title2="Innovation Lab"
        subtitle="¿Como podemos ayudarte?"
        description={`El Digital Innovation Lab de Barcelona reúne bajo un mismo techo toda la experiencia de nuestros equipos internacionales para que puedas experimentar con demos y prototipos que simulan escenarios de la vida real. En este banco de pruebas podrás ver cómo se comportan las nuevas tecnologías en escenarios empresariales reales.\nEn la era digital tienes que colaborar para innovar. Una transformación digital exitosa requiere una mezcla perfecta entre negocio, tecnología y cultura corporativa. En GFT apostamos por la co-creación y te ofrecemos el dream-team ideal para cada proyecto a partir de la colaboración entre clientes, especialistas, socios y expertos de GFT.`}
        image="/nosotros/nosotros1.png"
        background="bg-black"
        textColor="text-white"
        reverse={false}
        bolean={false}
        slides={[
          { imageUrl: "/nosotros/nosotros1.png", altText: "Imagen 1" },
          { imageUrl: "/nosotros/nosotros2.png", altText: "Imagen 2" },
          { imageUrl: "/nosotros/nosotros3.png", altText: "Imagen 3" },
        ]}
      ></First>
      <SociosEstrategicos />
      <InnovationTimeline />
      <InnovationLabSection />
      <PhotoGallerySection />
      <Footer />
    </>
  );
};
