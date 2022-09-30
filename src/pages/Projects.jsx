import React, { useEffect } from "react";
import Animation from "../components/Animation";
import Card from "../components/Card";
import projects from "../assets/data.json";

const Projects = () => {
   useEffect(() => {
      document.title = "Projects | Juan Sevillano";
   }, []);

   return (
      <Animation>
         <div id="projects">
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
            <div className="card-container">
               {projects.map((e, i) => (
                  <Card key={i} data={e} />
               ))}
            </div>
         </div>
      </Animation>
   );
};

export default Projects;
