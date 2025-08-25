import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import HeroSection from '../layout/SubComponents/HeroSection';
import { Inicio } from './inicio';
import { Header } from '../layout/Header';

const heroExitAnimation = {
    opacity: 0,
    scale: 0.1,
    filter: 'blur(8px)',
    transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 0.2]
    }
};

const contentEntranceAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3,
            duration: 0.8,
            ease: [0.12, 0.23, 0.34, 1.01]
        }
    }
};

function Entrada() {
    const [assetsLoaded, setAssetsLoaded] = useState(false);
    const [showHero, setShowHero] = useState(true);
    const loadingProgress = useRef(0);




    useEffect(() => {
        const preloadAssets = async () => {
            try {
                const assets = [
                    { type: 'video', src: '/home/videohome2.mp4' },
                    { type: 'image', src: '/home/foto1.png' },
                    { type: 'image', src: '/home/LabColor.png' },
                    { type: 'image', src: '/home/astronauta2.png' }
                ];

                const loadPromises = assets.map(asset => {
                    return new Promise((resolve) => {
                        if (asset.type === 'video') {
                            const video = document.createElement('video');
                            video.src = asset.src;
                            video.preload = 'auto';
                            video.onloadeddata = () => {
                                loadingProgress.current += (100 / assets.length);
                                resolve();
                            };
                            video.load();
                        } else {
                            const img = new Image();
                            img.src = asset.src;
                            img.onload = () => {
                                loadingProgress.current += (100 / assets.length);
                                resolve();
                            };
                        }
                    });
                });

                await Promise.all(loadPromises);
                setAssetsLoaded(true);
            } catch (error) {
                console.error("Error loading assets:", error);
                setAssetsLoaded(true); // Fallback: continuar aunque falle la carga
            }
        };

        preloadAssets();
    }, []);

    useEffect(() => {
        if (assetsLoaded) {
            const timer = setTimeout(() => setShowHero(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [assetsLoaded]);

    return (
        <LazyMotion features={domAnimation}>
            <AnimatePresence>
                {!assetsLoaded && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-900"
                    >
                        <div className="relative w-64 h-1 mb-8 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${loadingProgress.current}%` }}
                                transition={{ duration: 0.3 }}
                                className="absolute h-full bg-gradient-to-r from-cyan-400 to-blue-600"
                            />
                        </div>

                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2.5,
                                ease: "easeInOut"
                            }}
                        >
                            <svg className="w-20 h-20 text-white" viewBox="0 0 24 24">
                                <motion.path
                                    d="M12 2L4 7v10l8 5 8-5V7l-8-5z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </svg>
                        </motion.div>

                        <motion.p
                            className="mt-6 text-white font-light tracking-wider"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            CARGANDO EXPERIENCIA {Math.round(loadingProgress.current)}%
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {assetsLoaded && (
                <AnimatePresence mode="wait">
                    {showHero ? (
                        <motion.div
                            key="hero"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={heroExitAnimation}
                        >
                            <HeroSection />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="content"
                            {...contentEntranceAnimation}
                        >
                          <Header />
                            <Inicio />
                      

                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </LazyMotion>
    );
}

export default Entrada;