const menuSlide = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu-links');
    const menuLinks = document.querySelectorAll('.menu-links li');
    const menuLinksA = document.querySelector('.menu-links li a');
    const menuLinksAA = document.querySelectorAll('.menu-links li a');


    burger.addEventListener('click', () => {
        menu.classList.toggle('menu-active');

        menuLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `menuLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
            }
        });
        burger.classList.toggle('toggle');
    });

    menuLinksAA.forEach((link) => {
        link.addEventListener('click', () => {
            burger.click();
        })
    });
}

menuSlide();