// MENU BURGER
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// SCROLL FLUIDE
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
        navMenu.classList.remove('active');
    });
});

// PHOTO DE PROFIL INTERACTIVE
const profileImg = document.querySelector('.section-img img');

if (profileImg) {
    profileImg.addEventListener('mouseenter', () => {
        profileImg.style.transform = "scale(1.05)";
        profileImg.style.transition = "0.4s ease";
    });

    profileImg.addEventListener('mouseleave', () => {
        profileImg.style.transform = "scale(1)";
    });
}
