window.onload = draw;

function draw(){
	//assign our canvas element to a variable
	var canvas = document.getElementById("canvas1");
	//Create html5 element to a variable
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(100,50);
	ctx.moveTo(130,100);
	ctx.moveTo(70, 100);
	ctx.fill();

}