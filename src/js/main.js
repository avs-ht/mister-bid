import '../css/main.css';

const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const body = document.querySelector('body');

const questionOpenButtons = document.querySelectorAll('.question__open-button');

burger.addEventListener('click', () => {
    header.classList.toggle('is-menu-opened');
    if (body.style.overflow === '') {
        body.style.overflow = 'hidden';
        return
    }
    body.style.overflow = '';
})

questionOpenButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.parentNode.parentNode.querySelector('.question__answer');
        answer.classList.toggle('opened');
    })
});


