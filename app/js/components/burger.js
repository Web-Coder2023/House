const burger = () => {
    let burgerIcon = document.querySelector('.menu__icon'),
    menuBody = document.querySelector('.menu__body'),
    menuList = document.querySelector('.menu__list'),
    menuListHeight = document.querySelector('.menu__list').scrollHeight;

    burgerIcon.addEventListener('click', () => {
        burgerIcon.classList.toggle('_active');
        if (burgerIcon.classList.contains('_active')) {
            menuBody.style.maxHeight = menuListHeight + 'px';
        } else {
            menuBody.style.maxHeight = 0;
        }
    })
}
burger();