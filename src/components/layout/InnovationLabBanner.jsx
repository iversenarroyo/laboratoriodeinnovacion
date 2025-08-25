import React from "react";

export default function InnovationLabBanner() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-10 bg-white rounded-xl shadow-md">
            {/* Imagen principal */}
            <div className="md:w-1/2 flex justify-center">
                <img
                    src="/home/team.png"
                    alt="Innovation Lab UNI"
                    className="rounded-xl w-full max-w-md object-cover"
                />
            </div>

            {/* Contenido principal */}
            <div className="md:w-1/2 text-center md:text-left">
                <h4 className="uppercase text-md tracking-widest text-gray-500 mb-2">
                    Sé parte del <span className="text-black">laboratorio de innovación</span>
                </h4>
                <h1 className="uppercase text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
                    Innova, Conecta y Transforma
                </h1>
                <p className="mt-4 text-gray-600 text-sm md:text-base">
                    Forma parte de un entorno dinámico que impulsa ideas con impacto. Explora desafíos del mundo real y lleva tu talento al siguiente nivel.
                </p>
                <div className="flex justify-center md:justify-start">
                    <button className="mt-8 bg-[#0054b5] hover:bg-[#024085] uppercase text-white px-8 py-3 rounded-full transition-colors">
                        Aplica ahora
                    </button>
                </div>
            </div>

            {/* Llamado lateral */}
            <div className="w-full md:w-1/4 p-6 rounded-xl text-center shadow-inner animate-color-cycle border border-black">
                <div className="flex justify-center mb-3">
                    <div className="p-3">
                        <img alt="GUIA" className="w-14 h-14 object-contain" src="/home/guide.svg" />
                    </div>
                </div>
                <h3 className="text-4xl font-semibold mb-2 uppercase quicksand">Aplica</h3>
                <p className="text-md quicksand font-extralight">
                    Participa en una comunidad que fomenta la innovación colaborativa, con el respaldo de aliados estratégicos y una red activa de expertos.
                </p>
            </div>
        </div>
    );
}
