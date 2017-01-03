function changeBG(el, clr){
	var elem = document.getElementById(el);
	elem.style.transition = "background 1.0s linear 0s"; /*prop, timing, type, offet delay.After get elelment id you change change anything like css*/
	elem.style.background = clr; 
	


}

function clear(){
	var main = document.getElementById('main');
	//var book = document.getElementById('book');
	var contactus = document.getElementById('contact-us');
	main.style.transition = "opacity 1.0s linear 0s";	
	main.style.opacity=0;
	main.style.zindex="0";
	main.style.visibility="hidden";
	book.style.transition = "opacity 1.0s linear 0s";	
	book.style.opacity=0;
	book.style.zindex="0";
	book.style.visibility="hidden";
	contactus.style.transition = "opacity 1.0s linear 0s";	
	contactus.style.opacity=0;
	contactus.style.zindex="0";
	contactus.style.visibility="hidden";

}	

function fadeOut(el){
	var elem = document.getElementById(el).childNodes[2].text;
	elem.style.transition = "opacity 1.0s linear 0s"; 
	elem.style.opacity = 0; 
}


function fadeIn(el){
	clear();
	var elem = document.getElementById(el);//.childNodes[2];
	elem.style.transition = "opacity 1.0s linear 0s"; 
	elem.style.opacity = 1; 
	elem.style.zindex="5";
	elem.style.visibility="visible";
}

function slideOpen(el){
	var elem = document.getElementById(el);
	elem.style.transition = "height 1.0s linear 0s"; 
	elem.style.height = "200px"; 
}


function slideClosed(el){
	var elem = document.getElementById(el);
	elem.style.transition = "height 1.0s linear 0s"; 
	elem.style.height = "0px"; 
	elem.style.overflow = "hidden";
}

function slideIn(el){
	var elem = document.getElementById(el);
	elem.style.transition = "left 0.5s ease-in 0s"; 
	elem.style.left = "0px"; 
}


function slideOut(el){
	var elem = document.getElementById(el);
	elem.style.transition = "left 0.5s ease-out 0s"; 
	elem.style.left = "-400px";
}
