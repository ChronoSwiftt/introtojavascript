// this is a self-invoking anonymous function
// also called an IIFE
// also called a module (it's a pattern)

(() => {
  console.log('hello from JS!');

  // find the elements in the document
  let toggleButton = document.querySelector(".switch-text"),
      myHeading = document.querySelector('h1'),
      svgImg = document.querySelector("#badge");

  // this function should change the heading text
  function changeText() {
    myHeading.textContent = "What is up? I am script!";
  }

  // this function should log the ID for each SVG to the console
  function logSVG() {
    console.log(this.id);
  }

  toggleButton.addEventListener("click", changeText);
  svgImg.addEventListener("mouseover", logSVG);

  //document.querySelector('h1').textContent = "What is up? I am script!";
})();
