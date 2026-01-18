const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // animation une seule fois
        }
    });
}, observerOptions);

document.querySelectorAll(".animate").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});
