import '../css/main.css';

const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const navItems = document.querySelectorAll('.nav__item');

const questionOpenButtons = document.querySelectorAll('.question__open-button');

const signatureYear = document.querySelector('.signature__year');

burger.addEventListener('click', () => {
    header.classList.toggle('is-menu-opened');
    if (body.style.overflow === '') {
        body.style.overflow = 'hidden';
        return
    }
    body.style.overflow = '';
})

navItems.forEach(item => {
    item.addEventListener('click', () => {
        header.classList.remove('is-menu-opened');
        body.style.overflow = '';
    })
})

questionOpenButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.parentNode.parentNode.querySelector('.question__answer');
        answer.classList.toggle('opened');
    })
});

signatureYear.innerHTML = `${new Date().getFullYear()}`