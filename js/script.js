// Add custom JavaScript here
const userScroll = function () {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
      navbar.classList.add("bg-dark");
    } else {
      navbar.classList.remove("bg-dark");
    }
  });
};

document.addEventListener("DOMContentLoaded", userScroll);
