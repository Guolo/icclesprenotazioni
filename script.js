document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("prenotazioni");
    const text = textElement.textContent;
    textElement.textContent = ""; // Pulisce il testo originale

    // Aggiunge ogni lettera con l'animazione per "Prenotazioni"
    text.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.classList.add("letter");
        span.style.animationDelay = `${index * 0.1}s`; // Ritarda l'animazione per ogni lettera
        textElement.appendChild(span);
    });

    // Dopo che l'animazione di "Prenotazioni" è completata, anima "IC Cles"
    setTimeout(() => {
        const icClesElement = document.getElementById("ic-cles");
        icClesElement.classList.remove("hidden");
        const icClesText = icClesElement.textContent;
        icClesElement.textContent = ""; // Pulisce il testo originale

        // Aggiunge ogni lettera con l'animazione per "IC Cles"
        icClesText.split("").forEach((letter, index) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.classList.add("letter");
            span.style.animationDelay = `${index * 0.1}s`; // Ritarda l'animazione per ogni lettera
            icClesElement.appendChild(span);
        });
    }, text.length * 100 + 500); // Tempo totale per l'animazione + un piccolo ritardo

    // Effetto di scorrimento per lo sfondo
    window.addEventListener("scroll", () => {
        const background = document.querySelector('.header-background');
        const scrollY = window.scrollY;
        background.style.transform = `translateY(-${scrollY * 0.5}px)`; // Sposta verso l'alto con lo scroll
    });
});
