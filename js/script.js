const menuSlide = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu-links');
    const menuLinks = document.querySelectorAll('.menu-links li');
    
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
    
}

menuSlide();