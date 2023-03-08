const cartButton = document.querySelector(".navigation__cart-icon");
const cartPreview = document.querySelector(".navigation__cart-preview");


function toggleMenu() {
  cartButton.classList.toggle("cartIsOpen");
}

cartButton.addEventListener("click", toggleMenu);
