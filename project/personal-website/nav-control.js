const navBar = document.querySelector(".nav");
const navItem = document.querySelectorAll(".nav__content__link ");
var currentPage = "#home";
var previousPage = "";

navStickyDetection = () => {
  window.pageYOffset > 30 ? navBar.classList.add("nav-sticky") : navBar.classList.remove("nav-sticky");
}

window.onscroll = navStickyDetection;

navItem.forEach(element => {
  element.onclick = (evt) => {
    evt.preventDefault();
    var newPage = evt.target.getAttribute("href");

    push(newPage);
  }
});


function push(to) {
  if (to !== currentPage) {
    previousPage = currentPage;
    currentPage = to;
    changePage();
  }
}

function changePage() {
  var className = "nav__content__link--selected";
  var animationActivation = "skill__bar--mask--activated";
  document.querySelector(`[href='${previousPage}']`).classList.remove(className);
  var selectedItem = document.querySelector(`[href='${currentPage}']`);
  selectedItem.classList.add(className);

  switch (selectedItem.getAttribute("href")) {
    case '#home':
      document.querySelector('[aria-label="Go to slide 1"]').click();
      document.querySelector(".swiper-container").style.height="704px";
      document.querySelectorAll(".skill__bar--mask").forEach(element => {
        element.classList.remove(animationActivation)}
        );
      break;
    case '#resume':
      document.querySelector('[aria-label="Go to slide 2"]').click();
      document.querySelector(".swiper-container").style.height = "1080px";
      document.querySelectorAll(".skill__bar--mask").forEach(element => {

        element.classList.add(animationActivation);
      });
      break;
    case '#contact':
      document.querySelector('[aria-label="Go to slide 3"]').click();
      document.querySelector(".swiper-container").style.height = "781px";
      document.querySelectorAll(".skill__bar--mask").forEach(element => {
        element.classList.remove(animationActivation);
        }
        );
      break;
  }
}