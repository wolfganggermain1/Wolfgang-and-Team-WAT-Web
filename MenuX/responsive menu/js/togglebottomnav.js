var pagetop, menu, yPos;

function yScroll(){
pagetop = document.getElementById('pagetop');
menu = document.getElementById('menu');
yPos = window.pageYOffset;
if(yPos > 150){
pagetop.style.height = "30px";
pagetop.style.paddingTop = "20px";
pagetop.style.paddingBottom = "20px";
menu.style.height = "0px";

}else{
pagetop.style.height = "85px";
pagetop.style.paddingTop = "10px";
pagetop.style.paddingBottom = "10px";
pagetop.style.boxShadow = "inset 0 1px rgba(255,255,255, 0.3), inset 0 10px 5px rgba(255,255,255, 0.2), inset 0 10px 8px rgba(255,255,255, 0.25),inset 0 -5px 2.5px rgba(0,0,0, 0.3);/*1st, very top one, 2nd bigger*/" ;
menu.style.height = "50px";
}



}



window.addEventListener("scroll", yScroll);
