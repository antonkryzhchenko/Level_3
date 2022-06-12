// background for header

let header = document.querySelector(".header");

document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1) {
    header.classList.add("header_has-bg");
    } else {
    header.classList.remove("header_has-bg");
    }
});

// promo modal window start
var modalWindow = document.getElementById('modal-window');
var button = document.getElementById('promo__modal-button');
var cross = document.getElementsByClassName("modal-close")[0];

button.onclick = function () {
    modalWindow.style.display = "block";
}
cross.onclick = function () {
    modalWindow.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == cross) {
        modalWindow.style.display = "none";
    }
}
// modal window end