
const burger = document.querySelector('.controls__burger');
const menu__mobile = document.querySelector('.menu__mobile');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu__mobile.classList.toggle('active');
});

