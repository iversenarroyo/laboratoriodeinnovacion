import React from 'react';

const InnovationLabSection = () => {
    return (
        <section className="bg-white py-12 px-6 md:px-16">
            <div className="max-w-8xl mx-auto">
                {/* Icono de esquina y título */}
                <div className="flex items-start space-x-4 mb-6">
                    <div className="relative w-6 h-6 scale-200">
                        <div className="absolute top-0 left-0 w-4 h-2 bg-blue-900"></div>
                        <div className="absolute top-0 left-0 w-2 h-4 bg-blue-900"></div>
                    </div>
                    <h2 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-blue-300 mt-4">
                        TALLERES Y EVENTOS EN INNOVATION LAB
                    </h2>
                </div>

                <div className=' md:px-12'>
                    {/* Cita */}
                    <p className="text-gray-700 text-md italic mb-6">
                        “Colaborar es el punto de partida para innovar. En el laboratorio de innovación digital de GFT fusionamos el know-how de nuestros expertos con el de nuestros socios
                        comerciales y tecnológicos. Juntos ideamos y construimos experiencias que ayudan a los clientes a visualizar de qué modo las nuevas tecnologías determinarán la forma
                        de hacer negocios en el futuro en todos los sectores.”
                    </p>

                    {/* Firma */}
                    <div>
                        <p className="text-black  font-bold">Sara Vallribera Gross–Melzer</p>
                        <p className="text-xs text-gray-600">
                            Digital Innovation Lab Manager, GFT Technologies SE
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InnovationLabSection;
