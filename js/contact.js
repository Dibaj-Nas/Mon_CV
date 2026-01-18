const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const success = document.createElement("p");
        success.textContent = "Message envoyé avec succès ✅";
        success.style.color = "green";
        success.style.marginTop = "15px";
        success.style.opacity = "0";

        form.appendChild(success);

        setTimeout(() => {
            success.style.transition = "0.6s";
            success.style.opacity = "1";
        }, 100);

        form.reset();
    });
}
