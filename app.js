const primaryNav = document.querySelector('.Primary-navigation');
const navToggole = document.querySelector('.mobile-nav-toggle');

navToggole.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible")

    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', true);
        navToggole.setAttribute("aria-expanded", true);
    }else if(visibility === "true"){
        primaryNav.setAttribute('data-visible', false);
        navToggole.setAttribute("aria-expanded", false);
    }

});