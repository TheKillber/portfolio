import React, { useEffect } from "react";
import Animation from "../components/Animation";

const Contact = () => {
   useEffect(() => {
      document.title = "Contact | Juan Sevillano";
   }, []);
   return (
      <Animation>
         <div id="contact">
            <div className="title">
               Contact me<div className="line"></div>
            </div>

            <div className="contact-container">
               <div className="contact-link">
                  <i className="fa-solid fa-envelope"></i>
                  <div className="link-cont">
                     <a
                        href="mailto:sevillanojuanmanuel@gmail.com"
                        target={"_blank"}
                        rel="noreferrer"
                     >
                        MAIL
                     </a>
                     <div className="line"></div>
                  </div>
               </div>
               <div className="contact-link">
                  <i className="fa-brands fa-instagram-square"></i>
                  <div className="link-cont">
                     <a
                        href="https://www.instagram.com/juansevillano_/?theme=dark"
                        target={"_blank"}
                        rel="noreferrer"
                     >
                        INSTAGRAM
                     </a>
                     <div className="line"></div>
                  </div>
               </div>
               <div className="contact-link">
                  <i className="fa-brands fa-linkedin"></i>
                  <div className="link-cont">
                     <a
                        href="https://www.linkedin.com/in/juan-sevillano/"
                        target={"_blank"}
                        rel="noreferrer"
                     >
                        LINKEDIN
                     </a>
                     <div className="line"></div>
                  </div>
               </div>
            </div>
         </div>
      </Animation>
   );
};

export default Contact;
