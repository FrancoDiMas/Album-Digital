
// Album Dad
const albumPoint2 = document.querySelector(".div__container-dad");
let documentFragment2 = document.createDocumentFragment();

let listDadPicCompressed = ["https://i.ibb.co/CBmxFdw/1.jpg","https://i.ibb.co/3k4tsQy/2.jpg","https://i.ibb.co/fnZ7KrN/3.jpg","https://i.ibb.co/R9hMg7P/4.jpg","https://i.ibb.co/hZPp6gR/5.jpg","https://i.ibb.co/Bfkbqhy/6.jpg","https://i.ibb.co/S3MQv1W/7.jpg","https://i.ibb.co/X3cWxC5/8.jpg","https://i.ibb.co/YLhCbmH/9.jpg","https://i.ibb.co/x8Pz4RP/10.jpg","https://i.ibb.co/JrhkhX9/11.jpg","https://i.ibb.co/4P6L51z/12.jpg","https://i.ibb.co/jJkjnXB/13.jpg","https://i.ibb.co/0qr5jw6/14.jpg","https://i.ibb.co/1QGDTtp/15.jpg","https://i.ibb.co/7zbGvBC/16.jpg","https://i.ibb.co/X5CMnkK/17.jpg","https://i.ibb.co/gT1hV4q/18.jpg","https://i.ibb.co/gtW02SW/20.jpg","https://i.ibb.co/TR23VVz/19.jpg","https://i.ibb.co/TKrkx5j/21.jpg","https://i.ibb.co/y49G5zZ/22.jpg","https://i.ibb.co/Th17wk6/23.jpg","https://i.ibb.co/vVmRjSb/24.jpg","https://i.ibb.co/fdShWjN/25.jpg"];


for (var i = 0; i <= 23; i++) {
    let plusDivDad = document.createElement("DIV");
    plusDivDad.classList.add("div-responsive-ag");

    let plusDivDad2 = document.createElement("DIV");
    plusDivDad2.classList.add("div-gallery");

    let plusDadA = document.createElement("A");

    let plusImgDad = document.createElement("IMG");

    plusDadA.setAttribute("href", listDadPicCompressed[i]);
    plusDadA.setAttribute("target", "_blank");
    plusImgDad.setAttribute("src", listDadPicCompressed[i]);

    plusDivDad.appendChild(plusDivDad2);
    plusDivDad2.appendChild(plusDadA);
    plusDadA.appendChild(plusImgDad);
    documentFragment2.appendChild(plusDivDad);
}

albumPoint2.appendChild(documentFragment2);


// Menu Responsive Design
const menuIcon = document.querySelector('.icon-menu');
const navLinks = document.querySelector('.navbar-responsive');
const divMobile = document.querySelector('.div__mobile-version');

menuIcon.addEventListener('click',() => {
    navLinks.classList.toggle('active')
    divMobile.classList.toggle('active-2')
})

// Pre-load Design / configuration for the papa album page /
window.onload = function(){
    $('#onloadPreLoader').fadeOut();
    $('body').removeClass('hidden');
    $('.header').removeClass('hidden-1');
    $('.justDad').removeClass('hidden-1');
}