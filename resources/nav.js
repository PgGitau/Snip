const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.burger');
const menuText = document.querySelector('.menu-text');
const closeText = document.querySelector('.close-text');

navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('primary-navigation-visible');
    navToggle.classList.toggle('close-nav');

    const visibility = menuText.getAttribute('data-visible');
    if (visibility === "false"){
        menuText.setAttribute('data-visible', true);
        closeText.setAttribute('data-visible', true); 
    } else {
        menuText.setAttribute('data-visible', false);
        closeText.setAttribute('data-visible', false);
    }
})





