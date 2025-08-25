import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const StackedCards = ({ cards }) => {
    const [stack, setStack] = useState(cards);
    const [selectedCard, setSelectedCard] = useState(null);
    const [showPanel, setShowPanel] = useState(false);
    const [likedCards, setLikedCards] = useState(() => {
        // Leer del localStorage al iniciar
        const saved = localStorage.getItem('likedCards');
        return saved ? JSON.parse(saved) : Array(cards.length).fill(false);
    });

    // Guardar en localStorage cada vez que cambie likedCards
    useEffect(() => {
        localStorage.setItem('likedCards', JSON.stringify(likedCards));
    }, [likedCards]);

    // Si cambia la cantidad de tarjetas (cards), ajustar el array de likes
    useEffect(() => {
        if (likedCards.length !== cards.length) {
            setLikedCards(Array(cards.length).fill(false));
        }
    }, [cards.length]);

    const toggleLike = (index, e) => {
        e.stopPropagation();
        const newLikedCards = [...likedCards];
        newLikedCards[index] = !newLikedCards[index];
        setLikedCards(newLikedCards);
    };

    const handleSwipe = (index) => {
        if (stack.length > 1) {
            const newStack = [...stack];
            newStack.splice(index, 1);
            setStack(newStack);

            const newLikedCards = [...likedCards];
            newLikedCards.splice(index, 1);
            setLikedCards(newLikedCards);
        }
    };

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setShowPanel(true);
    };

    return (
        <div className="w-full h-screen bg-[#98D3FF] flex items-center justify-center sm:px-28">
            {/* Columna izquierda */}
            <div className="lg:w-1/3 w-1 hidden lg:block">
                <h2 className="text-5xl font-normal text-[#FFFFFF] leading-snug quicksand">
                    CONOCE LOS <br />
                    <span className="text-[#024085] font-extrabold">EVENTOS PASADOS</span> <br />
                    EN EL LABORATORIO DE <br />
                    <span className="">INNOVACIÓN</span>
                </h2>
            </div>

            <div className="w-2/3 flex items-center justify-center">
                {stack.map((card, index) => {
                    const isTop = index === stack.length - 1;
                    const offsetX = window.innerWidth < 768 ? index * 1 : index * 35;
                    const offsetY = index * 15;
                    const scale = 1 - (stack.length - 1 - index) * 0.03;
                    const blur = isTop ? 'blur-0' : 'blur-xs';
                    const draggable = isTop && stack.length > 1;

                    return (
                        <div
                            key={index}
                            onClick={() => handleCardClick(card)}
                            onDragEnd={() => isTop && handleSwipe(index)}
                            draggable={draggable}
                            className={` absolute md:mt-15 md:w-[500px] w-[400px] rounded-4xl bg-[#2d2d2d] transition-all duration-300 ease-in-out cursor-pointer ${blur} ${isTop ? 'z-50' : `z-${index}`}`}
                            style={{
                                transform: `translate(${offsetX}px, -${offsetY}px) scale(${scale})`,
                            }}
                        >
                            <button
                                onClick={(e) => toggleLike(index, e)}
                                className="absolute top-3/5 right-2 md:w-16 md:h-16 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-110 z-10"
                            >
                                {likedCards[index] ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ff0000" className="w-6 h-6">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#868686" strokeWidth="1.5" className="w-6 h-6">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                    </svg>
                                )}
                            </button>
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-[300px] md:h-[400px] object-cover mb-3 rounded-t-4xl"
                            />
                            <div className='px-12 py-6'>
                                <h3 className="text-sm text-white font-semibold">FECHA</h3>
                                <h2 className="text-lg font-bold text-white">{card.title}</h2>
                                <p className="text-sm text-white mt-1">{card.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Panel desplegable inferior */}
            <div
                className={`fixed bottom-0 left-0 w-full bg-[#111] text-white z-50 shadow-lg transition-transform duration-500 ease-in-out ${showPanel ? 'translate-y-0' : 'translate-y-full'}`}
                style={{ height: '65vh' }}
            >
                {selectedCard && (
                    <>
                        <div className="flex justify-end p-4">
                            <button onClick={() => setShowPanel(false)}>
                                <X size={28} className="text-white hover:text-red-400" />
                            </button>
                        </div>
                        <div className="px-8">
                            <h2 className="text-3xl font-bold mb-2">
                                {selectedCard.panelTitle}{' '}
                                <span className="text-[#98D3FF]">{selectedCard.panelSubtitle}</span>
                            </h2>
                            <p className="text-sm text-gray-300 mb-4">{selectedCard.panelDescription}</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {selectedCard.panelImages.map((img, i) => (
                                    <img key={i} src={img} alt={`img-${i}`} className="rounded-xl" />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default StackedCards;