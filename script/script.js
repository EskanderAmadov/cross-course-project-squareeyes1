const hamburgeMenu = () => {
  const burgerMenu = document.querySelector(".hamburger-menu");
  const navbar = document.querySelector(".nav-links");
  const navbarLinks = document.querySelectorAll(".nav-links li");

  [burgerMenu, navbar].forEach((item) => {
    item.addEventListener("click", () => {
      navbar.classList.toggle("navbar-active");

      navbarLinks.forEach((link, index) => {
        if (navbar.contains(document.querySelector(".navbar-active"))) {
          link.style.animation = `linkAnimateIn 0.4s ease forwards ${index / 7 + 0.7}s`;
        } else {
          link.style.animation = `linkAnimateOut 0.8s 1s ease forwards 1s`;
        }
      });
    });
  });
};

hamburgeMenu();

// To top button function:
let topButton = document.getElementById("toTopButton");

window.onscroll = function () {
  showButton();
};

function showButton() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Success message:

const form = document.querySelector(".contact-form form");
const submitButton = form.querySelector('button[type="submit"]');
const popup = document.querySelector("#popup");
const closeButton = popup.querySelector(".close");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (form.checkValidity()) {
    popup.style.display = "block";
  } else {
    // If some fields are empty, show the default validation error messages
    form.reportValidity();
  }
});

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
  form.reset(); // Reset the form fields
});
