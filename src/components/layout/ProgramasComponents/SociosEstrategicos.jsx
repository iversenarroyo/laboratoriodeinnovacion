import React, { useState, useEffect } from "react";

export const SociosEstrategicos = () => {
  const [activeStars, setActiveStars] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const savedStars = localStorage.getItem("activeStars");
    if (savedStars) {
      setActiveStars(JSON.parse(savedStars));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activeStars", JSON.stringify(activeStars));
  }, [activeStars]);

  const toggleStar = (index) => {
    const newActiveStars = [...activeStars];
    newActiveStars[index] = !newActiveStars[index];
    setActiveStars(newActiveStars);
  };

  const slides = [
    [
      {
        img: "/home/ruicolor2.png",
        title: "Red Universitaria de",
        highlight: "Innovación",
        bg: "bg-white",
        text: "text-gray-500",
        index: 0,
      },
      {
        img: "/home/koikacolor.png",
        title: "Koika",
        highlight: "Perú",
        bg: "bg-[#98D3FF]",
        text: "text-gray-500",
        index: 1,
      },
      {
        img: "/home/inhacolor.png",
        title: "Inha ",
        highlight: "University",
        bg: "bg-[#D9D9D9]",
        text: "text-gray-500",
        index: 2,
      },
    ],
    [
      {
        img: "/home/senati.png",
        title: "Programa",
        highlight: "Innovate Perú",
        bg: "bg-[#024085]",
        text: "text-[#eaeaea]",
        index: 3,
      },
      {
        img: "/home/hub.png",
        title: "Hub Minero",
        highlight: "Uno",
        bg: "bg-[#000000]",
        text: "text-[#eaeaea]",
        index: 4,
      },
      {
        img: "/home/startupuni.png",
        title: "Startup ",
        highlight: "UNI",
        bg: "bg-[#7b7b7b]",
        text: "text-[#eaeaea]",
        index: 5,
      },
    ],
  ];

  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-8 bg-white overflow-hidden  ">
      <h2 className="text-2xl md:text-3xl font-light text-gray-500  ml-2 md:ml-10 text-center md:text-left ">
        SOCIOS <span className="font-semibold text-black">ESTRATÉGICOS</span>
      </h2>

      {/* Vista móvil: todas las tarjetas una debajo de otra */}
      <div className="flex flex-col gap-4 items-center justify-center px-4 pt-6 pb-10 md:hidden">
        {slides.flat().map((item, idx) => (
          <div
            key={idx}
            className={`${item.bg} shadow-md p-4 flex flex-col items-start w-full min-w-[280px] relative`}
          >
            <div className="flex">
              <img
                src={item.img}
                alt={`Logo ${item.title}`}
                className="h-24 w-24"
              />
              <div className="flex flex-col items-start justify-end ml-4">
                <p className="text-lg text-gray-500 mb-1">SOCIO</p>
                <p
                  className={`text-lg font-light ${
                    item.bg !== "bg-white" ? "text-white" : "text-black"
                  }`}
                >
                  {item.title}{" "}
                  <span className="font-semibold text-[#ccc]">
                    {item.highlight}
                  </span>
                </p>
              </div>
            </div>
            <button
              onClick={() => toggleStar(item.index)}
              className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
            >
              {activeStars[item.index] ? (
                <i className="bi bi-star-fill text-2xl text-amber-300"></i>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#868686"
                  strokeWidth="1"
                  className="w-6 h-6"
                >
                  <path d="M12 2l2.9 6.9L22 9.8l-5.5 5 1.4 7.2L12 18l-5.9 4 1.4-7.2L2 9.8l7.1-0.9L12 2z" />
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Vista desktop: slider */}
      <div className="relative overflow-hidden hidden md:block">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-4 items-center justify-center w-full shrink-0 pt-6 pb-20"
            >
              {slide.map((item, idx) => (
                <div
                  key={idx}
                  className={`${item.bg} shadow-md p-6 flex flex-col items-start w-full md:basis-1/3 relative`}
                >
                  <div className="flex">
                    <img
                      src={item.img}
                      alt={`Logo ${item.title}`}
                      className="h-20 w-20"
                    />
                    <div className="flex flex-col items-start justify-end ml-4">
                      <p className={`text-lg  ${item.text} mb-1`}>SOCIO</p>
                      <p
                        className={`text-lg font-light ${
                          item.bg !== "bg-white" ? "text-white" : "text-black"
                        }`}
                      >
                        {item.title}{" "}
                        <span className="font-semibold text-black">
                          {item.highlight}
                        </span>
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleStar(item.index)}
                    className="absolute top-2 right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
                  >
                    {activeStars[item.index] ? (
                      <i className="bi bi-star-fill text-2xl text-amber-300"></i>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="#868686"
                        strokeWidth="1"
                        className="w-6 h-6"
                      >
                        <path d="M12 2l2.9 6.9L22 9.8l-5.5 5 1.4 7.2L12 18l-5.9 4 1.4-7.2L2 9.8l7.1-0.9L12 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Flechas */}
        {currentSlide === 0 ? (
          <div className="absolute bottom-3 right-12 z-10 hidden md:flex">
            <button
              onClick={handleNext}
              className="w-14 h-14 rounded-full flex items-center justify-center pulse-effect"
            >
              <i className="bi bi-arrow-right-circle-fill text-[#024085] hover:text-[#98D3FF] text-4xl"></i>
            </button>
          </div>
        ) : (
          <div className="absolute bottom-3 left-12 z-10 hidden md:flex">
            <button
              onClick={handlePrev}
              className="w-14 h-14 rounded-full flex items-center justify-center pulse-effect"
            >
              <i className="bi bi-arrow-left-circle-fill text-[#024085] hover:text-[#98D3FF] text-4xl"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
