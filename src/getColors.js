// Use this script in the browser to scrape the colors
(function() {
  "use strict";

  const elements = document.getElementsByClassName("color");

  const colors = [...elements].map(element => {
    const name = element.childNodes[2].innerText;
    const color = element.style["background-color"];
    return {
      name,
      color
    };
  });

  console.log(colors);
})();
