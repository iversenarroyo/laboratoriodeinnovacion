import React from 'react'
import First from '../sections/First.jsx'
import { SociosEstrategicos } from '../layout/ProgramasComponents/SociosEstrategicos.jsx'
import ImpactIndicators from '../layout/ProgramasComponents/ImpactIndicators.jsx'
import MakeItHappenWinners from '../layout/ProgramasComponents/MakeItHappenWinners.jsx'
import TestimonialSlider from '../layout/SubComponents/TestimonialSlider.jsx'
import Footer from '../layout/Footer.jsx'
export const Programas = () => {
  return (
    <>

      <First
      title0='Programas de Innovation Lab'
        title1="Make it"
        title2='Happen'
        subtitle="¿Qué es Make it Happen?"
        description={`El Digital Innovation Lab de Barcelona reúne bajo un mismo techo toda la experiencia de nuestros equipos internacionales para que puedas experimentar con demos y prototipos que simulan escenarios de la vida real. En este banco de pruebas podrás ver cómo se comportan las nuevas tecnologías en escenarios empresariales reales.\nEn la era digital tienes que colaborar para innovar. Una transformación digital exitosa requiere una mezcla perfecta entre negocio, tecnología y cultura corporativa. En GFT apostamos por la co-creación y te ofrecemos el dream-team ideal para cada proyecto a partir de la colaboración entre clientes, especialistas, socios y expertos de GFT.`}
        image="/nosotros/nosotros1.png"
        background="bg-[#024085]"
        textColor="text-white"
        reverse={false}
        slides={[
          { imageUrl: '/programas/programa1.png', altText: 'Imagen 1' },
          { imageUrl: '/programas/programa2.png', altText: 'Imagen 2' },
          { imageUrl: '/programas/programa3.png', altText: 'Imagen 3' },
        ]}
      >
      </First>

      <SociosEstrategicos />
      <ImpactIndicators />
      <MakeItHappenWinners />
      <TestimonialSlider/>
      <Footer/>

    </>

  )
}
