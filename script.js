function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".popup-btn");
    const popups = document.querySelectorAll(".popup");
    const closeButtons = document.querySelectorAll(".close");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const popupId = "popup-" + this.getAttribute("data-popup");
            document.getElementById(popupId).style.display = "block";
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", function() {
            this.closest(".popup").style.display = "none";
        });
    });

    window.addEventListener("click", function(event) {
        popups.forEach(popup => {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        });
    });
});
