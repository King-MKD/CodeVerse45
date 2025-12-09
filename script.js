// Smooth fade-in effect for product cards
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".product-card");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 150 * index);
    });
});
