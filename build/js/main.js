function initApp(){
    const hamburgerBtn = document.querySelector('#hamburger-button');
    const mobileMenu = document.querySelector('#mobile-menu');

    function toggleMenu(){
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        console.log('click')
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);