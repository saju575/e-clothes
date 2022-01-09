const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.close');
const navBar = document.querySelector('.nav');

const navLeft = menu.getBoundingClientRect().left;

navOpen.addEventListener('click', () => {
    if (navLeft < 0) {
        menu.classList.add('show');
        document.body.classList.add('show');
        navBar.classList.add("show");
    }
});
navClose.addEventListener('click', () => {
    if (navLeft < 0) {
        menu.classList.remove('show');
        document.body.classList.remove('show');
        navBar.classList.remove("show");
    }
})

//fix nav

const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
    }
    else {
        navBar.classList.remove("fix-nav");
    }
})

// scroll to

const links = [...document.querySelectorAll('scroll-link')]

links.map(links => {
    if (!link) return;
    link.addEventListener("click", e => {
        e.preventDefault();
        const id = e.target.getAttribute("href").slice(1);

        const el = document.getElementById(id);
        let position = el.offsetTop - navHeight;

        window.scrollTo({
            top: position,
            left: 0,
        });
        menu.classList.remove('show');
        document.body.classList.remove('show');
        navBar.classList.remove("show");
    });
});

gsap.form(".logo", { opacity: 0, duration: 1, delay: .5, y: -10 });
gsap.form(".hamburger", { opacity: 0, duration: 1, delay: 1, y: 20 });
gsap.form(".hero-pic", { opacity: 0, duration: 1, delay: 1.5, y: 200 });
gsap.form(".hero-content h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.form(".hero-content h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.form(".hero-content a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
