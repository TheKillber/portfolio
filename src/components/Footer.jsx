import React from "react";
import { useLocation, Link } from "react-router-dom";
const Footer = () => {
   const location = useLocation();
   return (
      <div className="footer">
         <div className="mobile-title">
            <div className="title">
               Juan <span>Sevillano</span>
            </div>
            <div className="subtitle">
               Full Stack <span className="accented-text ">Web developer</span>
            </div>
            <div className="line"></div>
         </div>
         {location.pathname !== "/contact" && (
            <Link className="btn-call accented-text" to="/contact">
               CONTACT ME
            </Link>
         )}

         <div className="separator">
            <div className="text">
               <div className="title">
                  Juan <span>Sevillano</span>
               </div>
               <div className="subtitle">
                  Full Stack{" "}
                  <span className="accented-text ">Web developer</span>
               </div>
               <div className="line"></div>
            </div>
            <div className="links">
               <a
                  href="https://github.com/TheKillber"
                  target="_blank"
                  rel="noreferrer"
               >
                  <i className="fa-brands fa-github"></i>
               </a>
               <a
                  href="https://www.linkedin.com/in/juan-sevillano/"
                  target="_blank"
                  rel="noreferrer"
               >
                  <i className="fa-brands fa-linkedin-in"></i>
               </a>
            </div>
         </div>
      </div>
   );
};

export default Footer;
