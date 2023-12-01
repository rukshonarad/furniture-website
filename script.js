const burgerIcon = document.getElementById("mobile-nav-icon");

const mobileNav = document.querySelector(".mobile-nav");
mobileNav.style.padding = "4rem 2.8rem";
mobileNav.style.textAlign = "center";

burgerIcon.addEventListener("click", () => {
    mobileNav.classList.add("show-menu");
});

const closeIcon = document.querySelector(".close-icon");

closeIcon.addEventListener("click", () => {
    mobileNav.classList.remove("show-menu");
});

const logoMobileNav = mobileNav.querySelector(".mobile-nav_link");
logoMobileNav.style.width = "10rem";
logoMobileNav.style.marginBottom = "3rem";

const linksInsideMobileNav = mobileNav.querySelectorAll("a");

linksInsideMobileNav.forEach((link) => {
    link.style.fontSize = "5rem";
    link.style.lineHeight = "4rem";
    link.style.marginBottom = "15rem";
});
