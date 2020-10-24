let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function(event){
    event.preventDefault();//отменяет стандартный клик по ссылке
    menu.classList.toggle('visible');
})