
const navBar = document.querySelector(".nav");


navStickyDetection = () => {
    window.pageYOffset > 30 ? navBar.classList.add("nav-sticky") : navBar.classList.remove("nav-sticky");
}

window.onscroll = navStickyDetection;

