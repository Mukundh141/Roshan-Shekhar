$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let home = document.querySelector('.mobile-nav-home');
let about = document.querySelector('.mobile-nav-about');
let services = document.querySelector('.mobile-nav-services');
let projects = document.querySelector('.mobile-nav-projects');
let blog = document.querySelector('.mobile-nav-blog');

hamberger.addEventListener('click',function(){
    mobileNav.classList.add('open');
});

times.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

home.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

about.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

services.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

projects.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

blog.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});




});


