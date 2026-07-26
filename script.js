    const openQuote = document.getElementById("openQuote");
    const quoteModal = document.getElementById("quoteModal");
    const closeQuote = document.getElementById("closeQuote");

    if (openQuote && quoteModal && closeQuote) {

    openQuote.addEventListener("click", function(event) {
        event.preventDefault();
        quoteModal.style.display = "flex";
    });

    closeQuote.addEventListener("click", function() {
        quoteModal.style.display = "none";
    });

    quoteModal.addEventListener("click", function(event) {
        if (event.target === quoteModal) {
            quoteModal.style.display = "none";
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            quoteModal.style.display = "none";
            openQuote.blur();
        }
    });
}

    const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });
}
