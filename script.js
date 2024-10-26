const header = document.querySelector("header");

window.addEventListener("scroll" , function() {
    header.classList.toggle("sticky" , this.window.scrollY > 150);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("i");
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove("i");
    navlist.classList.remove('open');
}