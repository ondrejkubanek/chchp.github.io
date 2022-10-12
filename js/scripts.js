var nav = document.querySelector('nav');
var ico = document.getElementById('ico');
if($(window).width() < 992){
  ico.src="./img/logos/logo-black.png";
  nav.classList.add('bg-light','shadow');}
window.addEventListener("resize", myFunction);
function myFunction() {
  if($(window).width() < 992){
  nav.classList.add('bg-light', 'shadow');
  ico.src="./img/logos/logo-black.png";
}else{
  nav.classList.remove('bg-light', 'shadow');
  ico.src="./img/logos/logo-white.png";

}};

