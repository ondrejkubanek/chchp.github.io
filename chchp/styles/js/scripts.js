var nav = document.querySelector('nav');
var ico = document.getElementById('ico');

if ($(window).width() < 992) {
    if (document.documentElement.lang === "cs") {
        ico.src = "./img/logos/logo-black.png";
    } else {
        ico.src = "../img/logos/logo-black.png";
    }
    nav.classList.add('bg-light', 'shadow');
}
window.addEventListener("resize", myFunction);

function myFunction() {
    if ($(window).width() < 992) {
        nav.classList.add('bg-light', 'shadow');
        if (document.documentElement.lang === "cs") {
            ico.src = "./img/logos/logo-black.png";
        } else {
            ico.src = "../img/logos/logo-black.png";
        }
    } else {
        nav.classList.remove('bg-light', 'shadow');
        if (document.documentElement.lang === "cs") {
            ico.src = "./img/logos/logo-white.png";
        } else {
            ico.src = "../img/logos/logo-white.png";
        }


    }
};

var mybutton = document.getElementById("buttonUp");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 980 || document.documentElement.scrollTop > 980) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    $('html, body').animate({
        scrollTop: $("#page-top").offset().top
    }, 200);
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})