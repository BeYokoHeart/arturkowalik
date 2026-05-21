let isNight = false;
let isAnimating = false;

function initTheme() {

    const hour = new Date().getHours();

    // noc: 20–6
    isNight = (hour >= 20 || hour < 4);

    document.body.classList.toggle("night", isNight);

    if (isNight) {
        launchStar();
    }
}

const sunContainer = document.getElementById("sun-container");

sunContainer.addEventListener("click", () => {

    if (isAnimating) return;

    isAnimating = true;

    isNight = !isNight;

    document.body.classList.toggle("night", isNight);

    if (isNight) {
        launchStar();
    }

    isAnimating = false;
});

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 150; i++) {

    const star = document.createElement("div");

    const r = Math.random();

    star.classList.add("star");

    if (r > 0.85) star.classList.add("big");
    else if (r < 0.3) star.classList.add("small");

    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";

    starsContainer.appendChild(star);
}

const buttons = document.querySelectorAll(".toggle-offer");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const clickedOffer = button.closest(".offer");
        const isAlreadyOpen = clickedOffer.classList.contains("expanded");

        // zamknij wszystkie
        document.querySelectorAll(".offer").forEach(offer => {

            offer.classList.remove("expanded");

            const btn = offer.querySelector(".toggle-offer");
            if (btn) btn.textContent = "Więcej";
        });

        // jeśli kliknięta NIE była otwarta → otwórz ją
        if (!isAlreadyOpen) {

            clickedOffer.classList.add("expanded");

            button.textContent = "Mniej";
        }
    });
});

function launchStar() {

    if (!document.body.classList.contains("night")) return;

    const star = document.getElementById("shooting-star");

    // SEKCJE
    const hero = document.getElementById("hero");
    const questions = document.getElementById("questions");

    const heroRect = hero.getBoundingClientRect();
    const questionsRect = questions.getBoundingClientRect();

    let progress = 0;
    let speed = 0.0035;

    // START (hero)
    const startX = window.innerWidth * 0.05;
    const startY = heroRect.top + 120;

    // STOP
    const stopPoint = 0.75;

    // KONIEC (questions)
    const endX = window.innerWidth * 0.95;
    const endY = questionsRect.top + 20;

    let paused = false;
    let pauseTriggered = false;

    star.style.opacity = 1;
    star.style.pointerEvents = "auto";

    // KLIK
    star.onclick = () => {
        window.open(
            "https://sites.google.com/view/beyokoheart",
            "_blank",
            "noopener,noreferrer"
        );
    };

    function animate() {

        // wyjście z night mode
        if (!document.body.classList.contains("night")) {
            star.style.opacity = 0;
            return;
        }

        // =========================
        // FAZA 1
        // =========================
        //if (progress < stopPoint && !paused) {
        //    progress += 0.0035;
        //}

        // =========================
        // FAZA 1 + WYHAMOWANIE
        // =========================

        if (progress < stopPoint && !paused) {

            // im bliżej stopPoint tym wolniej
            const distanceToStop =
                stopPoint - progress;

            // cinematic slowdown
            speed =
                0.001 +
                distanceToStop * 0.02;

            progress += speed;
        }

        // =========================
        // PAUZA
        // =========================
        else if (progress >= stopPoint && !pauseTriggered) {

            paused = true;
            pauseTriggered = true;

            setTimeout(() => {
                paused = false;
                star.classList.add("star-pulse");
            }, 2500);
        }

        // =========================
        // FAZA 2
        // =========================
        //else if (!paused) {
        //    progress += 0.0035;
        //}

        // =========================
        // PRZYSPIESZENIE PO STOPOWANIU
        // =========================

        else if (!paused) {

            // acceleration
            speed += 0.00015;

            // limit max speed
            speed = Math.min(speed, 0.0065);

            progress += speed;
        }

        // =========================
        // KONIEC
        // =========================
        if (progress >= 1) {

            star.style.opacity = 0;

            setTimeout(() => {
                launchStar();
            }, 50000); // czestotliwość przelotu 10 sec.

            return;
        }

        // =========================
        // TRAJEKTORIA
        // =========================

        let x =
            startX +
            (endX - startX) * progress;

        let y =
            startY +
            (endY - startY) * progress -
            Math.sin(progress * Math.PI) * 180 -
            20;

        // =========================
        // OGRANICZENIE EKRANU
        // =========================

        if (
            x > window.innerWidth + 100 ||
            y > window.innerHeight + 100
        ) {

            star.style.opacity = 0;

            setTimeout(() => {
                launchStar();
            }, 10000);

            return;
        }

        // =========================
        // RYSOWANIE
        // =========================

        star.style.left = x + "px";
        star.style.top = y + "px";

        requestAnimationFrame(animate);
    }

    animate();
}


function sortOffers(containerId) {
    const container = document.getElementById(containerId);

    const offers = Array.from(container.querySelectorAll(".offer"));

    offers.sort((a, b) => {
        return a.dataset.order - b.dataset.order;
    });

    offers.forEach(el => container.appendChild(el));
}


function filterActiveOffers(containerId) {

    const container = document.getElementById(containerId);

    const offers = container.querySelectorAll(".offer");

    offers.forEach(offer => {

        const isActive =
            offer.dataset.active === "true";

        if (isActive) {
            offer.style.display = "";
        } else {
            offer.style.display = "none";
        }
    });
}
sortOffers("day-offers");
sortOffers("night-offers");

filterActiveOffers("day-offers");
filterActiveOffers("night-offers");
initTheme();
