const sunContainer = document.getElementById("sun-container");

let isNight = false;
let isAnimating = false;

sunContainer.addEventListener("click", () => {

    if (isAnimating) return;

    const body = document.body;

    isAnimating = true;

    isNight = !isNight;

    body.classList.toggle("night", isNight);

    // odpalanie / zatrzymanie efektów
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

function launchStar() {

    if (!document.body.classList.contains("night")) return;

    const star = document.getElementById("shooting-star");

    // SEKCJE
    const hero = document.getElementById("hero");
    const questions = document.getElementById("questions");

    const heroRect = hero.getBoundingClientRect();
    const questionsRect = questions.getBoundingClientRect();

    let progress = 0;

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
        if (progress < stopPoint && !paused) {
            progress += 0.0035;
        }

        // =========================
        // PAUZA
        // =========================
        else if (progress >= stopPoint && !pauseTriggered) {

            paused = true;
            pauseTriggered = true;

            setTimeout(() => {
                paused = false;
            }, 2500);
        }

        // =========================
        // FAZA 2
        // =========================
        else if (!paused) {
            progress += 0.0035;
        }

        // =========================
        // KONIEC
        // =========================
        if (progress >= 1) {

            star.style.opacity = 0;

            setTimeout(() => {
                launchStar();
            }, 10000); // czestotliwość przelotu 10 sec.

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