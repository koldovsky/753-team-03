(function () {
  const elements = document.querySelectorAll(".news__content-read-more");

  elements.forEach(element => {
    element.addEventListener("mouseover", function () {
      element.style.transition = "color 0.4s, font-size 0.4s, letter-spacing 0.4s, text-decoration 2s";
      element.style.fontSize = "14px";
      element.style.textDecoration = "none";
      element.style.letterSpacing = "3px";
    });


    element.addEventListener("mouseout", function () {
      element.style.transition = "color 0.5s, font-size 0.4s, letter-spacing 0.4s, text-decoration 2s";
      element.style.fontSize = "11px";
      element.style.letterSpacing = "2.2px";
      element.style.textDecoration = "underline";
    });
  });

})();