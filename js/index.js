const hamburgerButton = document.querySelector(".hamburger-button");
const nav2 = document.querySelector(".nav2");
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("#accueil, #about, #contact");

hamburgerButton.addEventListener("click", () => {
    const isOpen = nav2.classList.toggle("open");
    hamburgerButton.setAttribute("aria-expanded", isOpen);
});

function setActive(id) {
    links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
        });
    },
    { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav2.classList.remove("open");
        hamburgerButton.setAttribute("aria-expanded", "false");
    });
});

window.addEventListener("scroll", () => {
    const enBas = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
    if (enBas) setActive("contact");
});



