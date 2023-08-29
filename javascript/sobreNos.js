const btn = document.getElementById("btnTop")
btn.addEventListener("click", function(){
	window.scrollTo(0,0)
})
document.addEventListener("scroll", ocultar)
function ocultar(){
	if(window.scrollY > 150){
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