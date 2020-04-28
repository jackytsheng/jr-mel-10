
const navBar = document.querySelector(".nav");
const navItem = document.querySelectorAll(".nav__content__link ");
var currentPage = "#home";
var previousPage = "";

navStickyDetection = () => {
    window.pageYOffset > 30 ? navBar.classList.add("nav-sticky") : navBar.classList.remove("nav-sticky");
}

window.onscroll = navStickyDetection;

navItem.forEach(element =>{
    element.onclick = (evt)=>{
        evt.preventDefault();
        var newPage = evt.target.getAttribute("href");

        push(newPage);
    }
});


function push(to){
    if (to !== currentPage){
        previousPage = currentPage;
       currentPage = to;  
       
       changePage();
    }
}

function changePage(){
    var className = "nav__content__link--selected";
    document.querySelector(`[href='${previousPage}']`).classList.remove(className);
    var selectedItem = document.querySelector(`[href='${currentPage}']`);
    selectedItem.classList.add(className);
}

