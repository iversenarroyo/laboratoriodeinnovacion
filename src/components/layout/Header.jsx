import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { MiniHeader } from "../layout/HomeComponents/MiniHeader";
// Componente reutilizable para los items de navegación
const NavItem = ({ to, children, onClick, mobile = false }) => {
  const activeStyle = {
    color: "#024085",
    fontWeight: "bold",
  };

  if (mobile) {
    return (
      <li>
        <NavLink
          to={to}
          className="block py-2 hover:text-white"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={onClick}
        >
          {children}
        </NavLink>
      </li>
    );
  }

  return (
    <li className="transition-colors hover:text-[#024085] h-full">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "nav-link active text-[#024085] bg-white"
            : "nav-link hover:text-[#ff5a5a]"
        }
        end
      >
        {children}
      </NavLink>
    </li>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  mobile: PropTypes.bool,
};

// Componente reutilizable para el botón de contacto
const ContactButton = ({ mobile = false }) => (
  <NavLink
    to="/contacto"
    className={`${
      mobile
        ? "bg-white text-black w-full py-2 rounded-md hover:bg-[#258CFF]"
        : "bg-white hover:bg-[#024085] hover:text-white text-[#024085] px-8 py-3 rounded-full font-extralight"
    } transition-colors font-medium block text-center`}
  >
    CONTACTO
  </NavLink>
);

ContactButton.propTypes = {
  mobile: PropTypes.bool,
};

// Componente para la barra de degradado
const GradientBar = () => (
  <div className="relative h-[6px] w-full overflow-hidden bg-transparent z-0">
    <div className="absolute inset-0 animate-slide bg-gradient-to-r from-[#0000ff6a] via-fuchsia-500 w-[100%] to-white h-full"></div>
    <div className="absolute inset-0 animate-slide2 bg-gradient-to-r from-[#ffffff] via-[#4976FF] w-[120%] to-white h-full"></div>
  </div>
);

// Componente principal Header
export const Header = ({ showHero, setShowHero }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Datos de navegación para hacerlo más mantenible
  const navItems = [
    { to: "/inicio", text: "INICIO" },
    { to: "/nosotros", text: "SOBRE NOSOTROS" },
    { to: "/hub", text: "HUB" },
    { to: "/formacion", text: "FORMACIÓN" },
    { to: "/recursos", text: "RECURSOS" },
  ];

  return (
    <>
      {" "}
      <MiniHeader />
      <header className="header bg-black text-white px-6 md:px-12 lg:px-24 z-100">
        <div className="container mx-auto flex items-center justify-between h-[80px]">
          {/* Logo */}
          <div className="flex items-center">
            <h3 className="logo sm:text-2xl text-sm md:text-3xl font-bold">
              <NavLink to="/inicio" className="text-3xl">
                Hub de Innovación <span className="text-[#258CFF] ">UNI </span>
              </NavLink>
            </h3>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center h-[80px] gap-x-8">
            <ul className="flex text-[#98D3FF] h-full">
              {navItems.map((item) => (
                <NavItem key={item.to} to={item.to}>
                  {item.text}
                </NavItem>
              ))}
            </ul>
            <ContactButton />
          </nav>

          {/* Menú móvil */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#258CFF] focus:outline-none"
              aria-label="Menú"
              aria-expanded={isMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {isMenuOpen && (
              <div className="fixed top-20 left-0 right-0 bg-black z-50 py-4 px-6 shadow-lg max-h-[80vh] overflow-y-auto">
                <ul className="flex flex-col gap-4 text-[#258CFF]">
                  {navItems.map((item) => (
                    <NavItem
                      key={item.to}
                      to={item.to}
                      mobile
                      onClick={toggleMenu}
                    >
                      {item.text}
                    </NavItem>
                  ))}
                  <li>
                    <ContactButton mobile />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
      <GradientBar />
    </>
  );
};

Header.propTypes = {
  showHero: PropTypes.bool,
  setShowHero: PropTypes.func,
};
