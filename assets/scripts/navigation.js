const navigation = document.querySelector(".navigation");

function toggleMenu() {
  if (navigation.classList.contains("isOpen")) {
    navigation.classList.remove("isOpen");
  } else {
    navigation.classList.add("isOpen");
  }
}

navigation.addEventListener("click", toggleMenu);
