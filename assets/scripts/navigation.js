const navigation = document.querySelector(".navigation");
const hamburgerContainer = document.querySelector(".navigation__hamburger-lines");

function toggleMenu() {
  navigation.classList.toggle("isOpen");
}

hamburgerContainer.addEventListener("click", toggleMenu);
