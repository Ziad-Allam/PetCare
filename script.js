window.addEventListener('scroll', function () {
    const header = this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});



// logIn Btn


let login = document.querySelector('.login');
let loginBtn = document.querySelector('#login-btn');

loginBtn.onclick = () => {
    login.classList.toggle('active');
    navbar.classList.remove('active');
}



// menu Btn

let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    login.classList.remove('active');
}

window.onscroll = () => {
    login.classList.remove('active');
    navbar.classList.remove('active');
}