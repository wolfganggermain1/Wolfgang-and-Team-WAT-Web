// This simple function returns object reference for elements by ID
function _(x){return document.getElementById(x);}
// Variables for bubble array, bubble index, and the setInterval() variable
var ba, bi=0, intrvl;
// bca - Bubble Content Array. Put your content here.
var bca = [
    	'<img src="img/img3.jpg" width="720px"/><p>Wait no longer and drop-us a booking</p>',
	'<img src="img/img4.jpg" width="720px"/><p>A place that\'s Stressfree all day long</p>',
	'<img src="img/img2.jpg" width="720px"/><p>A place the whole family is welcome</p>',
	'<img src="img/pirogue.jpg" width="720px"/><p>A place that everyone will remember.</p>',
];
// This function is triggered by the bubbleSlide() function below
function bubbles(bi){
	// Fade-out the content
	_("bubblecontent").style.opacity = 0;
	// Loop over the bubbles and change all of their background color
	for(var i=0; i < ba.length; i++){
		ba[i].style.background = "#ff8a3b";
		ba[i].style.opacity = "0.5";
	}
	// Change the target bubble background to be darker than the rest
	ba[bi].style.background = "#321b0b";
	// Stall the bubble and content changing for just 300ms
	setTimeout(function(){
		// Change the content
		_("bubblecontent").innerHTML = bca[bi];
		// Fade-in the content
		_("bubblecontent").style.opacity = 1;
	}, 300);
}
// This function is set to run every 5 seconds(5000ms)
function bubbleSlide(){
	bi++; // Increment the bubble index number
	// If bubble index number is equal to the amount of total bubbles
	if(bi == ba.length){
		bi = 0; // Reset the bubble index to 0 so it loops back at the beginning
	}
	// Make the bubbles() function above run
	bubbles(bi);
}
// Start the application up when document is ready
window.addEventListener("load", function(){
	// Get the bubbles array
	ba = _("bubbles").children;
	// Set the interval timing for the slideshow speed
	intrvl = setInterval(bubbleSlide, 5000);
});
