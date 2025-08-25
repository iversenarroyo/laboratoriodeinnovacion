import React, { useState, useEffect } from "react";

export const TypewriterText = () => {
  const text = "Tu Plataforma para la Innovación y el Emprendimiento";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0); // posición actual de la letra
  const [isTyping, setIsTyping] = useState(true); // si está escribiendo o esperando

  useEffect(() => {
    let timer;

    if (isTyping) {
      if (index < text.length) {
        // escribe una letra más
        timer = setTimeout(() => setIndex(index + 1), 50);
      } else {
        // texto completo → espera 2s y reinicia
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // reinicia y vuelve a escribir
      setDisplayedText("");
      setIndex(0);
      setIsTyping(true);
    }

    return () => clearTimeout(timer);
  }, [index, isTyping, text]);

  useEffect(() => {
    setDisplayedText(text.slice(0, index));
  }, [index, text]);

  return (
    <h1 className="text-xl md:text-3xl font-semibold text-white aea mb-[-80px] inline-block w-full">
      {displayedText}
      <span className="animate-pulse text-sky-400">|</span>
    </h1>
  );
};
