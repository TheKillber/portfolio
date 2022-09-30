import React, { useEffect } from "react";
import img from "../assets/images/home-img.png";
import Animation from "../components/Animation";
import Footer from "../components/Footer";

const Home = () => {
   useEffect(() => {
      document.title = "Home | Juan Sevillano";
   }, []);

   return (
      <Animation>
         <div className="home-container">
            <div className="main-img-container">
               <img src={img} alt="me" />
            </div>
            <Footer />
         </div>
      </Animation>
   );
};

export default Home;
