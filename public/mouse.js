window.mouse = () => {
   if (!document.querySelector(".cursor")) {
      const cursor = document.createElement("div");
      cursor.setAttribute("class", "cursor");
      document.body.appendChild(cursor);

      const dot = document.createElement("div");
      dot.setAttribute("class", "dot");
      document.body.append(dot);
   }

   const cursor = document.querySelector(".cursor");
   const dot = document.querySelector(".dot");

   document.addEventListener("mousemove", (e) => {
      dot.style.display = "block";

      setTimeout(() => {
         cursor.style.left = e.clientX + "px";
         cursor.style.top = e.clientY + "px";
      }, 30);
      setTimeout(() => {
         dot.style.left = e.clientX + "px";
         dot.style.top = e.clientY + "px";
      }, 50);

      cursor.style.display = "block";
   });

   document.addEventListener("mouseout", () => {
      dot.style.display = "none";
      cursor.style.display = "none";
   });

   const links = document.querySelectorAll("a");

   links.forEach((x) => {
      x.addEventListener("mouseenter", () => {
         cursor.style.border = "none";
         cursor.classList.add("active");
         dot.classList.add("active");
      });
   });
   links.forEach((x) => {
      x.addEventListener("mouseleave", () => {
         cursor.style.border = "1px solid";
         cursor.classList.remove("active");
         cursor.style.transform = "translate (-50%, -50%)";

         dot.classList.remove("active");
      });
   });

   const hamburger = document.querySelector(".hamburger");

   hamburger.addEventListener("mouseenter", () => {
      cursor.style.border = "none";
      cursor.classList.add("active");
      dot.classList.add("active");
   });
   hamburger.addEventListener("mouseleave", () => {
      cursor.style.border = "1px solid";
      cursor.classList.remove("active");
      cursor.style.transform = "translate (-50%, -50%)";

      dot.classList.remove("active");
   });
};
