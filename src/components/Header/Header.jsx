import React from "react";
import CustomLinks from "./CustomLinks";
import circle from "../../assets/images/circle.svg";
import Hamburger from "../Hamburger";
import { useEffect } from "react";

const Header = () => {
   const isReady = () => {
      const hamburger = document.querySelector(".hamburger");
      const menu = document.querySelector(".links-container");
      const body = document.getElementsByTagName("body")[0];
      const link = document.querySelectorAll("a");
      const links = document.querySelectorAll(".links-container a");

      links.forEach((x) => {
         x.addEventListener("mouseenter", (e) => {
            e.target.querySelector(".line").style.width = "100%";

            // line.style.opacity = 1;
         });
         x.addEventListener("mouseleave", (e) => {
            e.target.querySelector(".line").style.width = "0%";

            // line.style.opacity = 1;
         });
      });
      const toggleClass = () => {
         if (hamburger.classList.contains("open")) {
            hamburger.classList.remove("open");
            menu.classList.remove("open");
            body.style.overflowY = "auto";
         } else {
            hamburger.classList.add("open");
            menu.classList.add("open");
            body.style.overflowY = "hidden";
         }
      };

      hamburger.addEventListener("click", toggleClass);

      link.forEach((a) => {
         a.addEventListener("click", () => {
            menu.classList.remove("open");
            hamburger.classList.remove("open");
            body.style.overflowY = "auto";
         });
      });
   };

   useEffect(() => {
      isReady();
   }, []);

   return (
      <nav>
         <div className="title nav-title">JS</div>
         <div className="links-container ">
            <div className="links">
               <CustomLinks to="/">HOME</CustomLinks>
               <CustomLinks to="/about">ABOUT</CustomLinks>
               <CustomLinks to="/projects">PROJECTS</CustomLinks>
               <CustomLinks to="/contact">CONTACT</CustomLinks>
            </div>
            <img src={circle} alt="circle" className="circle"></img>
         </div>
         <Hamburger className={"hamburger"} />
      </nav>
   );
};

export default Header;
