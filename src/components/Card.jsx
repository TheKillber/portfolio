import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

const Card = ({ data }) => {
   const { title, description, links, img } = data;
   const { github, link } = links;
   return (
      <div id="card">
         <img src={`${process.env.PUBLIC_URL}/${img}`} alt="" />
         <div className="description">
            <Scrollbars
               style={{ width: "100%" }}
               autoHeight
               autoHeightMin={"4rem"}
               autoHeightMax={"6rem"}
               renderThumbVertical={(props) => (
                  <div {...props} className="track-horizontal" />
               )}
            >
               <div className="text">
                  <div className="subtitle">{title}</div>

                  <p>{description}</p>
               </div>
            </Scrollbars>
            <div className="links">
               {github && (
                  <a href={github} target="_blank" rel="noreferrer">
                     <i className="fa-brands fa-github"></i>
                  </a>
               )}
               {link && (
                  <a href={link} target="_blank" rel="noreferrer">
                     <i className="fa-solid fa-link"></i>
                  </a>
               )}
            </div>
         </div>
      </div>
   );
};

export default Card;
