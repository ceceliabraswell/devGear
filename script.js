const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "bx bx-x" : "bx bx-menu");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "bx bx-menu");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

// header container

ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-content .header-btn", {
    ...scrollRevealOption,
    delay: 1000,
});

// about us container

ScrollReveal().reveal(".about-container .section-header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".about-container .section-description", {
    ...scrollRevealOption,
    delay: 500,
});

// blog container

ScrollReveal().reveal(".blog-card", {
    ...scrollRevealOption,
    interval: 500,
});

const instagram = document.querySelector(".instagram_flex");

const instagramContent = Array.find(instagram.children);

instagramContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidder", true);
    instagram.appendChild(duplicateNode);
})