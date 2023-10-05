// ScrollReveal Design
// window.sr = ScrollReveal();

//     sr.reveal('.div__mobile-version', {
//         duration: 3000,
//         delay: 150
//     });

//     sr.reveal('.div-responsive1', {
//         duration: 3000,
//         delay: 800
//     });

//     sr.reveal('.div-responsive2', {
//         duration: 3000,
//         delay: 2800
//     });

//     sr.reveal('.div-responsive3', {
//         duration: 3000,
//         delay: 4800
//     });

//     sr.reveal('.div-responsive4', {
//         duration: 3000,
//         delay: 3800
//     });

//     sr.reveal('.div-responsive5', {
//         duration: 3000,
//         delay: 1800
//     });

// Menu Responsive Design
const menuIcon = document.querySelector('.icon-menu');
const navLinks = document.querySelector('.navbar-responsive');
const divMobile = document.querySelector('.div__mobile-version');

menuIcon.addEventListener('click',() => {
    navLinks.classList.toggle('active')
    divMobile.classList.toggle('active-2')
})

// Pre-load Design / configuration for the index page /
window.onload = function(){
    $('#onloadPreLoader').fadeOut();
    $('body').removeClass('hidden');
    $('.header').removeClass('hidden-1');
    $('.principal').removeClass('hidden-1');
}

