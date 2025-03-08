document.addEventListener("DOMContentLoaded", () => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const navListRef = document.querySelector(".navigation__list");
  const headerRef = document.querySelector(".header");
  const navigationRef = document.querySelector(".navigation");

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
    navListRef.classList.toggle("is-open");
    headerRef.classList.toggle("is-open");
    navigationRef.classList.toggle("is-open");
  });

  document.querySelectorAll(".navigation__link").forEach((n) =>
    n.addEventListener("click", () => {
      navListRef.classList.remove("is-open");
      menuBtnRef.classList.remove("is-open");
      headerRef.classList.remove("is-open");
      navigationRef.classList.remove("is-open");
    })
  );
});
function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const buttonImg = element.querySelector(".toggle-button img");

  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    buttonImg.src = "/img/Vector (1).png";
  } else {
    answer.style.display = "none";
    buttonImg.src = "/img/Vector.png";
  }
}

const galleryItems = document.querySelectorAll(".gallery__item img");
const overlay = document.querySelector(".overlay");
const overlayImage = document.querySelector(".overlay-image");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function openOverlay(index) {
  overlayImage.src = galleryItems[index].src;
  currentIndex = index;
  overlay.classList.add("active");
}

function changeImage(step) {
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = galleryItems.length - 1;
  } else if (currentIndex >= galleryItems.length) {
    currentIndex = 0;
  }

  overlayImage.src = galleryItems[currentIndex].src;
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => openOverlay(index));
});

prevBtn.addEventListener("click", () => changeImage(-1));
nextBtn.addEventListener("click", () => changeImage(1));

overlay.addEventListener("click", (event) => {
  if (
    !event.target.closest(".overlay-content") &&
    !event.target.closest("button")
  ) {
    overlay.classList.remove("active");
  }
});
document.querySelectorAll(".gallery__item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("cookie-popup");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");
  const closeButton = document.getElementById("close-popup");

  if (!localStorage.getItem("cookiesAccepted")) {
    popup.style.display = "block";
  }
  acceptButton.onclick = function () {
    localStorage.setItem("cookiesAccepted", "true");
    popup.style.display = "none";
  };
  declineButton.onclick = function () {
    localStorage.setItem("cookiesAccepted", "false");
    popup.style.display = "none";
  };
  closeButton.onclick = function () {
    popup.style.display = "none";
  };
});
