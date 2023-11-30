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
const styles = `
    .menu-list {
      list-style: none;
      padding: 0;
    }
    .menu-list li {
      margin-bottom: 10px;
    }
    .menu-list li a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
      font-size: 18px;
    }
    .menu-list li a:hover {
      color: #ff0000;
    }
  `;
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = ["Home", "About", "Services", "Contact"];
    const menuList = document.querySelector(".menu-list");

    menuItems.forEach((itemText) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = itemText;
        listItem.appendChild(link);
        menuList.appendChild(listItem);
    });

    const burgerMenu = document.querySelector(".burger-menu");
    const menuListContainer = document.querySelector(".navbar");

    burgerMenu.addEventListener("click", function () {
        menuListContainer.classList.toggle("show-menu");
    });
});
