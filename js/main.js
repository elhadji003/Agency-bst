// Header scroll
let nav = document.querySelector(".navbar")
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("navbar-nav");
    }else{
        nav.classList.remove("navbar-nav");
    }
}

// Nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show")
    })
});
