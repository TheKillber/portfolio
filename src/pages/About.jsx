import React, { useEffect } from "react";
import Animation from "../components/Animation";
import img from "../assets/images/about-img.png";

const About = () => {
   useEffect(() => {
      document.title = "About | Juan Sevillano";
   }, []);
   return (
      <Animation>
         <div id="about">
            <img src={img} alt="me" className="img" />
            <div className="title">
               About me
               <div className="line"></div>
            </div>
            <p>
               Hi there! I'm Juan Sevillano, a fullstack web developer from
               Argentina. I've been working with NodeJs and React for the last
               few years and I specialize in MERN stack (MongoDB as Database,
               Express as backend framework for NodeJs and React). My favorite
               part of programming is when you see that your work makes a
               difference. <br />
               The most crucial aspect of a page is that the user enjoys using
               it and gets the most out of it, which is why one of my objectives
               is to create beautiful and helpful pages. I am motivated by the
               desire to learn and contribute to my knowledge and expertise in
               programming. If you want to discuss my work, please contact me.
               😁.
            </p>
            <a
               className="dl accented-text"
               href="/resume.pdf"
               target={"_blank"}
            >
               <i
                  className="fa-solid fa-download"
                  style={{ marginRight: "1rem" }}
               ></i>
               Download Resume
            </a>
         </div>
      </Animation>
   );
};

export default About;
