let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    navbar.classList.toggle('active');
};

window.onscroll = ()=>{
    navbar.classList.remove('active');
};



ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.home-content , .heading ', {origin:'top'});
ScrollReveal().reveal('.home-img , .services-container , .contact form ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 , .about-img ', {origin:'left'});
ScrollReveal().reveal('.home-content p ,.about-content', {origin:'right'});


const typed = new Typed('.multi-text' , {
    strings:['a Programmer','an IT Technician'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


let btn1 = document.querySelector('#btn1');
let Readmore1 = document.querySelector('.readmore1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let Readmore2 = document.querySelector('.readmore2');
let btn5 = document.querySelector('#btn5');
let btn6 = document.querySelector('#btn6');
let Readmore3 = document.querySelector('.readmore3');

btn1.onclick = ()=>{
    Readmore1.classList.add('active');
    btn1.classList.add('hide');
    btn2.classList.add('show');
};
btn2.onclick = ()=>{
    Readmore1.classList.remove('active');
    btn1.classList.remove('hide');
    btn2.classList.remove('show');
};

btn3.onclick = ()=>{
    Readmore2.classList.add('active');
    btn3.classList.add('hide');
    btn4.classList.add('show');
};
btn4.onclick = ()=>{
    Readmore2.classList.remove('active');
    btn3.classList.remove('hide');
    btn4.classList.remove('show');
};

btn5.onclick = ()=>{
    Readmore3.classList.add('active');
    btn5.classList.add('hide');
    btn6.classList.add('show');
};
btn6.onclick = ()=>{
    Readmore3.classList.remove('active');
    btn5.classList.remove('hide');
    btn6.classList.remove('show');
};
