const menu = document.querySelector('.navigation-list');
const menuButton = document.querySelector('.navigation-button');

menuButton.addEventListener('click', function () {
    if (this.classList.contains('navigation-button__open')) {
        this.classList.remove('navigation-button__open');
        this.classList.add('navigation-button__close');
    } else {
        this.classList.add('navigation-button__open');
        this.classList.remove('navigation-button__close');
    }
    menu.classList.toggle('navigation-list__active');
});

window.onload = function () {
    document.querySelector('.navigation').classList.remove('navigation-nojs');
};
