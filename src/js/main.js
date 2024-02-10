import '../css/main.css';

const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    header.classList.toggle('is-menu-opened');
    if (body.style.overflow === '') {
        body.style.overflow = 'hidden';
        return
    }
    body.style.overflow = '';
})