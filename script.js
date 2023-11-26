// const burgerIcon = document.getElementById("mobile-nav-icon");

// const mobileNav = document.querySelector(".mobile-nav");

// burgerIcon.addEventListener("click", () => {
//     mobileNav.style.display = "inline-block";
// });

// const closeIcon = document.querySelector(".close-icon");

// closeIcon.addEventListener("click", () => {
//     mobileNav.style.display = "none";
// });

const burgerIcon = document.getElementById("mobile-nav-icon");

const mobileNav = document.querySelector(".mobile-nav");

burgerIcon.addEventListener("click", () => {
    mobileNav.classList.add("show-menu");
});

const closeIcon = document.querySelector(".close-icon");

closeIcon.addEventListener("click", () => {
    mobileNav.classList.remove("show-menu");
});
