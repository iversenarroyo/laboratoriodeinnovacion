
import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUp, X } from 'lucide-react';

const editionsData = [
    {
        title: 'GANADORES MAKE IT HAPPEN PRIMERA EDICIÓN',
        experienceTitle: 'NUESTRA',
        experienceText: `Our resident Hack fellows are on hand to offer expert advice. They've all walked in your shoes, so are perfectly placed to help you.`,
        buttonText: 'PRIMERA EDICIÓN',
        dato: 'SIGUIENTE',
        winners: [
            {
                title: 'BIOES',
                image: 'programas/fotosmake.png',
                description: 'Bioes is a project that focuses on sustainable agriculture using AI and IoT technologies.',
            },
            {
                title: 'ROBO SKILLS',
                image: 'programas/fotosmake.png',
                description: 'Robo Skills is an educational platform that uses robotics to enhance learning experiences.',
            },
            {
                title: 'MITOLOGÍA PERUANA VR',
                image: 'programas/fotosmake.png',
                description: 'Mitos VR is a virtual reality project that brings Peruvian mythology to life through immersive experiences.',
            },
        ],
        panelContent: {
            title: 'MAKE IT HAPPEN PRIMERA EDICIÓN',
            description: 'El lDigital Innovation Lab de Barcelona reúne bajo un mismo techo toda la experiencia de nuestros equipos internacionales para que puedas experimentar con demos y prototipos que simulan escenarios de la vida real.',
            images: [
                '/programas/prim1.png',
                '/programas/prim2.png',
                '/programas/prim3.png',
                '/programas/prim4.png',
            ]
        }





    },
    {
        title: 'GANADORES MAKE IT HAPPEN SEGUNDA EDICIÓN',
        experienceTitle: 'NUESTRA',
        experienceText: `blalbalbal resident Hack fellows are on hand to offer expert advice. They've all walked in your shoes, so are perfectly placed to help you.`,
        buttonText: 'SEGUNDA EDICIÓN',
        dato: 'VOLVER',
        winners: [
            {
                title: 'AI FARM',
                image: '/programas/programa1.png',
                description: 'AI Farm is a project that integrates artificial intelligence into agricultural practices to optimize crop yields.',
            },
            {
                title: 'DRONE MAPPER',
                image: '/programas/programa1.png',
                description: 'Drone Mapper is a technology that uses drones for mapping and surveying land, providing accurate data for various applications.',
            },
            {
                title: 'CULTURA INMERSIVA VR',
                image: '/programas/programa1.png',
                description: 'Cultura Inmersiva VR is a virtual reality initiative that aims to immerse users in different cultural experiences from around the world.',
            },
        ],
        panelContent: {
            title: 'MAKE IT HAPPEN SEGUNDA EDICIÓN',
            description: 'El lDigital Innovation Lab de Barcelona reúne bajo un mismo techo toda la experiencia de nuestros equipos internacionales para que puedas experimentar con demos y prototipos que simulan escenarios de la vida real.',
             images: [
                '/programas/seg1.png',
                '/programas/seg2.png',
                '/programas/seg3.png',
                '/programas/seg4.png',
            ]
        }
    },
];



export default function MakeItHappenWinners() {
    const [currentEdition, setCurrentEdition] = useState(0);
    const [showPanel, setShowPanel] = useState(false);

    const handleToggleEdition = () => {
        setCurrentEdition((prev) => (prev + 1) % editionsData.length);
    };

    const togglePanel = () => {
        setShowPanel(!showPanel);
    };
    useEffect(() => {
        if (showPanel) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Limpieza en caso de que el componente se desmonte con el panel abierto
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showPanel]);

    const edition = editionsData[currentEdition];

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start py-10 px-4 relative overflow-hidden">

            {/* Sección principal */}
            <div className="flex items-start gap-2  px-72 text-center pt-15 ml-[-40px]">
                <div>
                    <img src="/programas/makeithappen.png" alt="" className=' mt-[-50px] pr-8' />
                </div>
                <div className="flex flex-col gap-0.5 mt-1 scale-150">
                    <div className="flex gap-0.5">
                        <div className="w-2.5 h-2.5 bg-[#2F80ED]"></div>
                        <div className="w-2.5 h-2.5 bg-[#2F80ED]"></div>
                    </div>
                    <div className="w-2.5 h-2.5 bg-[#2F80ED]"></div>
                </div>

                <h1 className="text-2xl md:text-5xl leading-12 font-semibold bg-gradient-to-r from-[#2781ff] via-[#D84EDC] to-[#7DD3FC] text-transparent bg-clip-text mb-24">
                    {edition.title}
                </h1>
            </div>

            <div className="flex flex-row gap-6 justify-center items-start w-full max-w-7xl">
                {edition.winners.map((winner, index) => (
                    <div
                        key={index}
                        className="bg-white text-black rounded-xl p-4 shadow-md w-72 relative"
                    >
                        <img
                            src={winner.image}
                            alt={winner.title}
                            className="w-full h-40 object-cover rounded"
                        />
                        <h2 className="text-lg mt-2 font-semibold text-blue-600">
                            {winner.title}
                        </h2>
                        <p className="text-sm text-gray-700 h-24">
                            {winner.description}
                        </p>
                    </div>
                ))}

                <div className='border-[#fffc] border-l-2 h-96'></div>

                <div className="text-left max-w-sm ml-6 quicksand">
                    <h2 className="text-5xl font-bold mb-4 text-center">
                        {edition.experienceTitle} <span className="text-[#98D3FF]">EXPERIENCIA</span>
                    </h2>
                    <p className="text-sm text-gray-300 mb-4">{edition.experienceText}</p>
                    <button
                        onClick={handleToggleEdition}
                        className="flex bg-[#074C98] text-white font-bold pr-8 hover:bg-[#074d98c1] transition-colors duration-200 ease-in-out"
                    >
                        <img src="/programas/aea.png" alt="" className="w-32 h-20 object-cover object-center" />
                        <div className='flex flex-col justify-center'>
                            <p className='pl-4 font-extralight'>{edition.buttonText}</p>
                            <p>{edition.dato}</p>
                        </div>
                    </button>
                </div>
            </div>
            {/* Fondo oscuro cuando el panel está abierto */}
            {showPanel && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-[#00000089] bg-opacity-50 z-40 transition-opacity duration-500"
                    onClick={togglePanel} // Opcional: cerrar al hacer clic fuera
                />
            )}

            {/* Botón Flecha */}
            <div className="mt-10 z-10">
                <div
                    onClick={togglePanel}
                    className="w-14 h-14 rounded-full border-2 border-white hover:border-[#2781ff] hover:bg-[#2781ff] flex items-center justify-center animate-bounce cursor-pointer"
                >
                    {showPanel ? (
                        <ArrowDown className="text-white" size={24} />
                    ) : (
                        <ArrowUp className="text-white" size={24} />
                    )}
                </div>
            </div>

            {/* Panel deslizante inferior */}
            <div
                className={`fixed bottom-0 left-0 w-full bg-[#111] text-white transition-transform duration-500 ease-in-out z-50 shadow-lg
    ${showPanel ? 'translate-y-0' : 'translate-y-full'}`}
                style={{ height: '70vh' }}
            >
                <div className="flex justify-end p-4">
                    <button onClick={togglePanel}>
                        <X size={28} className="text-white hover:text-red-400" />
                    </button>
                </div>
                <div className="px-12">
                    <h2 className="text-5xl font-bold mb-2 quicksand">
                        {edition.panelContent.title && edition.panelContent.title.split(' ').slice(0, -2).join(' ')}{' '}
                        <span className="text-[#98D3FF]">
                            {edition.panelContent.title && edition.panelContent.title.split(' ').slice(-2).join(' ')}
                        </span>
                    </h2>
                    <p className="text-sm text-gray-300 pr-96">
                        {edition.panelContent.description}
                    </p>
                    <div className="grid grid-cols-4 md:gap-5 gap-1 mt-10 ">
                        {edition.panelContent.images.map((src, i) => (
                            <div key={i}><img src={src} alt={`panel-${i}`} /></div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
