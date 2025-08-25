import React, { useEffect, useState } from "react";

const galleryImages = [
    {
        images: ["/nosotros/nosotros1.png", "/nosotros/nosotros2.png"],
        alt: "Foto 1",
    },
    {
        images: ["/programas/programa1.png", "/programas/programa2.png"],
        alt: "Foto 2",
    },
    {
        images: ["/nosotros/nosotros1.png", "/nosotros/nosotros2.png"],
        alt: "Foto 3",
    },
    {
        images: ["/programas/programa1.png", "/programas/programa2.png"],
        alt: "Foto 4",
    },
];

const quote =
    "“Colaborar es el punto de partida para innovar. Juntos ideamos y construimos experiencias que ayudan a los clientes a visualizar de qué modo las nuevas tecnologías determinarán la forma de hacer negocios en el futuro en todos los sectores.”";

const ImageSlider = ({ images, alt }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000); // cambia cada 3 segundos

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-56 sm:h-64 md:h-96 overflow-hidden">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}
        </div>
    );
};

const PhotoGallerySection = () => {
    return (
        <section className="bg-white py-12 px-4 md:px-16 text-center">
            {/* Título */}
            <h2 className="text-3xl md:text-6xl font-normal mb-10 text-[#867D7F] quicksand">
                GALERÍA DE <span className="text-[#98D3FF] font-extrabold">FOTOS</span>
            </h2>

            {/* Galería */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
                {galleryImages.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md overflow-hidden"
                    >
                        <ImageSlider images={item.images} alt={item.alt} />
                        <div className="bg-blue-100 text-gray-800 text-xs md:text-sm px-4 py-4 italic text-left">
                            {quote}
                        </div>
                    </div>
                ))}
            </div>

            {/* Botón */}
            <button className="mt-4 px-8 py-4 text-md font-bold text-[#024085] border border-gray-200 rounded-full shadow-md hover:shadow-lg transition">
                EXPLORAR MÁS
            </button>
        </section>
    );
};

export default PhotoGallerySection;
