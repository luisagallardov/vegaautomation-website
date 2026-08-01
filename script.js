    const openQuote = document.getElementById("openQuote");
    const quoteModal = document.getElementById("quoteModal");
    const closeQuote = document.getElementById("closeQuote");
    const quoteForm = document.getElementById("quoteForm");
    const quoteSuccess = document.getElementById("quoteSuccess");
    const quoteHeader = document.getElementById("quoteHeader");

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

if (quoteForm) {
    quoteForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const formData = new FormData(quoteForm);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                quoteForm.reset();
                quoteHeader.style.display = "none";
                quoteForm.style.display = "none";
                quoteSuccess.style.display = "block";

                if (window.innerWidth <= 768) {  
            window.scrollTo({ 
                top: quoteSuccess.offsetTop - 145,
                behavior: "smooth"
            }); 
        }
            
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Something went wrong. Please try again.");
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

const automationVideo = document.querySelector(".video-section video");

const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

if (automationVideo && isIOS) {
    automationVideo.loop = false;

    function smoothVideoLoop() {
        if (
            !automationVideo.paused &&
            automationVideo.duration &&
            automationVideo.duration - automationVideo.currentTime < 0.10
        ) {
            automationVideo.currentTime = 0;
            automationVideo.play().catch(() => {});
        }

        requestAnimationFrame(smoothVideoLoop);
    }

    automationVideo.addEventListener("play", smoothVideoLoop, { once: true });
}