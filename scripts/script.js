const menuButton = document.getElementById('hamburger-menu');
const documentBody = document.getElementById('document-body');
const navOptions = document.querySelector('.nav-options');

menuButton.onclick = buttonClick;

// For mobile browsers
function buttonClick() {
    if (navOptions.style.display === "block") {
        navOptions.style.display = "none";
    } else {
        navOptions.style.display = "block";
    }

    if (navOptions.style.visibility === "visible") {
        navOptions.style.display = "hidden";
    } else {
        navOptions.style.visibility = "visible";
    }
}
