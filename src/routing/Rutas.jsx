import React, { use } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Nosotros } from "../components/pages/Nosotros";
import { Programas } from "../components/pages/Programas";
import { Recursos } from "../components/pages/Recursos";
import { Eventos } from "../components/pages/Eventos";
import Entrada from "../components/pages/Entrada";
import { Header } from "../components/layout/Header";
import { Inicio } from "../components/pages/Inicio";
import BlankLayout from "../components/plantillas/BlankLayout";
import MainLayout from "../components/plantillas/MainLayout";
import { Contacto } from "../components/pages/Contacto";

import { AnimatePresence } from "framer-motion";
import { PageTransition } from "../components/layout/SubComponents/PageTransition";
import { Formacion } from "../components/pages/Formacion";
import { Hub } from "../components/pages/Hub";
export const Rutas = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Rutas con layout vacío */}
        <Route element={<BlankLayout />}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Entrada />
              </PageTransition>
            }
          />
          <Route
            path="/entrada"
            element={
              <PageTransition>
                <Entrada />
              </PageTransition>
            }
          />
          <Route
            path="/404"
            element={
              <PageTransition>
                <Entrada />
              </PageTransition>
            }
          />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>

        {/* Rutas con layout principal */}
        <Route element={<MainLayout />}>
          <Route
            path="/inicio"
            element={
              <PageTransition>
                <Inicio />
              </PageTransition>
            }
          />
          <Route
            path="/programas"
            element={
              <PageTransition>
                <Programas />
              </PageTransition>
            }
          />
          <Route
            path="/eventos"
            element={
              <PageTransition>
                <Eventos />
              </PageTransition>
            }
          />
          <Route
            path="/nosotros"
            element={
              <PageTransition>
                <Nosotros />
              </PageTransition>
            }
          />
          <Route
            path="/recursos"
            element={
              <PageTransition>
                <Recursos />
              </PageTransition>
            }
          />
          <Route
            path="/hub"
            element={
              <PageTransition>
                <Hub />
              </PageTransition>
            }
          />
          <Route
            path="/formacion"
            element={
              <PageTransition>
                <Formacion />
              </PageTransition>
            }
          />
          <Route
            path="/contacto"
            element={
              <PageTransition>
                <Contacto />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
