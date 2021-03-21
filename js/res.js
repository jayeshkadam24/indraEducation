burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.navlist');
rightNav = document.querySelector('.rightNav');


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('vclassres');
    navlist.classList.toggle('vclassres');
    navbar.classList.toggle('hnavres');

})