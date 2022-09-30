import React from "react";
import { NavLink } from "react-router-dom";

const CustomLinks = ({ to, children }) => {
   return (
      <NavLink
         to={to}
         className={({ isActive }) => (isActive ? "navlink-active" : "navlink")}
         end
      >
         {children}
         <div className="line"></div>
         <div className="active-line"></div>
      </NavLink>
   );
};

export default CustomLinks;
