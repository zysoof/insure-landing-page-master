const toggler = document.querySelector(".nav-toggler");
const navList = document.querySelector(".nav-list");
const iconList = document.querySelector(".icon-hamburger")
const menuBtn = document.querySelector(".menu-button");
let menuOpen = false;
toggler.addEventListener("click", () => {
    navList.classList.toggle("nav-expanded");


    // if(iconList.getAttribute("src")=== "images/icon-hamburger.svg"){
    //     iconList.setAttribute("src", "images/icon-close.svg");
    // }else{s
    //     iconList.setAttribute("src", "images/icon-hamburger.svg"); 
    // } normal icon toggle


    if(!menuOpen){ // animated icon toggle
        menuBtn.classList.add("open");
        menuOpen = true;
    }else{
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
});