import React, { useEffect } from "react";
import Home from "../pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import About from "../pages/About";

import { AnimatePresence } from "framer-motion";
import Projects from "../pages/Projects";
import Footer from "./Footer";
import Contact from "../pages/Contact";

const AnimateRoutes = () => {
   const location = useLocation();

   useEffect(() => {
      window.mouse();
   }, [location]);

   return (
      <AnimatePresence initial={false}>
         <Header />
         <div className="rest-nav" key={location.pathname}>
            <Routes location={location}>
               <Route element={<Home />} path="/" exact />
               <Route element={<About />} path="/about" exact />
               <Route element={<Projects />} path="/projects" exact />
               <Route element={<Contact />} path="/contact" exact />
            </Routes>
            {location.pathname !== "/" && <Footer />}
         </div>
      </AnimatePresence>
   );
};

export default AnimateRoutes;
