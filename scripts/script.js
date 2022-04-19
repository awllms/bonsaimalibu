const menuButton = document.getElementById("hamburger-menu");
const purchaseButton = document.getElementById("purchase-button");
const navOptions = document.querySelector(".nav-options");

menuButton.onclick = navDropDownButtonClick;

if (purchaseButton) {
    purchaseButton.onclick = purchaseButtonClick;
}

// For mobile browsers
function navDropDownButtonClick() {
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

function purchaseButtonClick() {
    location.href = '../contact';
}
