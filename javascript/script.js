var contador = 1; //variável pública criada fora da function
var img1="imagens/banner1.png";
var img2="imagens/banner2.png";
var img3="imagens/banner3.png";
var tempo=4000; //2000(milessegundos) : 1000 (milessegundo) = 2s
var exibir=setInterval("Exibindo()",tempo);
	  
function Exibindo()
{
	document.images["slide"].src=eval("img"+contador);
	if (contador<3)
	contador++;
	else
	contador=1;
}
	  
function Anterior()
{
		
	if (contador == 3)
	contador=2;
	else if (contador == 2)
	contador=1;
	else
	contador=3;
	document.images["slide"].src=eval("img"+contador);	
	clearInterval(exibir);//interrompe o looping
	exibir=setInterval("Exibindo()",tempo);
}
	 
function Proximo()
{	
	document.images["slide"].src=eval("img"+contador);
	if (contador<3)
	contador++;
	else
	contador=1;
	clearInterval(exibir);//interrompe o looping 
	exibir=setInterval("Exibindo()",tempo);
}

var swiper = new Swiper('.swiper', {
	slidesPerView: getSlidesPerView(),
	direction: getDirection(),
	loop: true, // Adicione esta opção para ativar o loop
	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
},	
on: {
	resize: function () {
	swiper.changeDirection(getDirection());
	swiper.params.slidesPerView = getSlidesPerView();
	swiper.update();
},
},
});
	
function getDirection() {
	var windowWidth = window.innerWidth;
	var direction = windowWidth = 1000 ? 'horizontal' : 'horizontal';
	return direction;
}

function getSlidesPerView() {
	var windowWidth = window.innerWidth;
	var slidesPerView;
  
	if (windowWidth <= 640) {
	slidesPerView = 1;
} 
	else if (windowWidth <= 910) {
	slidesPerView = 3;
} 
	else {
	slidesPerView = 4;
}
	return slidesPerView;
}

const btn = document.getElementById("btnTop")
btn.addEventListener("click", function(){
	window.scrollTo(0,0)
})
document.addEventListener("scroll", ocultar)
function ocultar(){
	if(window.scrollY > 550){
	btn.style.display = "flex"		
}	
	else{
	btn.style.display = "none"
}
}

ocultar()

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let iconElement = document.querySelector('.icon');

    if (menuMobile.classList.contains('open')) {
	menuMobile.classList.remove('open');
	iconElement.src = "imagens/menu_white_36dp.svg";
} 
	else {
	menuMobile.classList.add('open');
	iconElement.src = "imagens/close_white_36dp.svg";
}
}

function fecharMenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    let iconElement = document.querySelector('.icon');
    menuMobile.classList.remove('open');
    iconElement.src = "imagens/menu_white_36dp.svg";
}
  // Adicionar eventos de clique aos elementos do menu
  	let menuItems = document.querySelectorAll('.nav-link');
	menuItems.forEach(function(item) {
	item.addEventListener('click', fecharMenu);
});
