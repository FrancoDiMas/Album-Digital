// Menu Responsive Design
const menuIcon = document.querySelector('.icon-menu');
const navLinks = document.querySelector('.navbar-responsive');

menuIcon.addEventListener('click',() => {
    navLinks.classList.toggle('active')
})