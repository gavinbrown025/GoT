(() => {
// variables at the top -. elements on the page we need to work with

let sigilButtons = document.querySelectorAll('.sigilContainer'),
	lightBox = document.querySelector(".lightBox"),
	gotVideo = document.querySelector(".lightBox video"),
	closeLightBox = lightBox.querySelector(".lightBox-close");


//events go in the middle
function showLightBox() {
	// pop open a lightbox here and show some content
	//start with video

	//need to get the class name from the element 
	//to match the video source and load it in
	this.className.split()[1];

	let targetName = this.className.split(" ")[1];
	let targetSource = targetName.charAt(0).toUpperCase() + targetName.slice(1);
	let newVideoSource = `video/House-${targetSource}.mp4`;

	lightBox.classList.add("showLightBox");

	gotVideo.src = newVideoSource;

	gotVideo.load();
	gotVideo.play();
}

function hideLightBox() {
	lightBox.classList.remove('showLightBox');

	gotVideo.pause();
	gotVideo.currentTime = 0;
}

//add event to the sigil buttons
sigilButtons.forEach(button => button.addEventListener('click', showLightBox));

// add event listener to close
closeLightBox.addEventListener('click', hideLightBox);

})();