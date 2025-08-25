import { useState } from 'react';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import './App.css';
import { Rutas } from './routing/Rutas';
import { Header } from './components/layout/Header';

function App() {
 

  return (
    <>
    
      <Rutas/>
    </>
  );
}

export default App;