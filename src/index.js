import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/main.scss";
import reportWebVitals from "./reportWebVitals";
import AnimateRoutes from "./components/AnimateRoutes";
import { BrowserRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <Scrollbars
      autoHeight
      autoHeightMin={"100vh"}
      autoHeightMax={200}
      autoHide
      renderThumbVertical={(props) => <div {...props} className="scroll" />}
   >
      <div className="container-fluid">
         <BrowserRouter>
            <AnimateRoutes />
         </BrowserRouter>
      </div>
   </Scrollbars>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
