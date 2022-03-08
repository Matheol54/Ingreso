const navSlide = () => {
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burguer.addEventListener('click', () => {
        /* TOGGLE NAV */
        nav.classList.toggle('nav-active');

            /* ANIMATE LINKS */
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + .5}s`;
            }
        });
        /* BURGUER TO X ANIMATION */
        burguer.classList.toggle('toggle');

    });
}

    navSlide();
   