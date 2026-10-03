const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


// Open / close mobile menu

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});