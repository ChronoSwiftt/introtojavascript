(() => {
	// this is a module pattern, also called iife
const mySpan = document.querySelector('main span');
	  theSVG = document.querySelector('.svg-image');
	// to add an indicator that someone clicked it
	// (functions only happen when the event listener goes off)
function toggleSelected() {

	this.classList.toggle('selected');
}
	//set up our triggers here
mySpan.addEventListener("click", toggleSelected);
theSVG.addEventListener("click", toggleSelected);

})();