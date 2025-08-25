import React from 'react'
import First from '../sections/First'
import ConsultaFormulario from '../layout/ContactComponents/ConsultaFormulario'
export const Contacto = () => {
  return (
   <>
     <First
      title0='Conecta con Innovation Lab'
        title1="Conecta con"
        title2='Innovation Lab'
        subtitle="¿Cómo podemos ayudarte?"
        description={`El lDigital Innovation Lab de Barcelona reúne bajo un mismo techo toda la experiencia de nuestros equipos internacionales para que puedas experimentar con demos y prototipos que simulan escenarios de la vida real. En este banco de pruebas podrás ver cómo se comportan las nuevas tecnologías en escenarios empresariales reales. En la era digital tienes que colaborar para innovar. Una transformación digital exitosa requiere una mezcla perfecta entre negocio, tecnología y cultura corporativa. En GFT apostamos por la co-creación y te ofrecemos el dream-team ideal para cada proyecto a partir de la colaboración entre clientes, especialistas, socios y expertos de GFT.`}
        image="/nosotros/nosotros1.png"
        background="bg-black"
        textColor="text-white"
        reverse={false}
        bolean={false}
        slides={[
          { imageUrl: '/contacto/contacto.png', altText: 'Imagen 1' },

        ]}>
      </First>

      <ConsultaFormulario/>
   </>
    
  )
}
