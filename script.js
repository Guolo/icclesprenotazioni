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

    // Caricamento dinamico dello sfondo
    const imageUrl = 'img/sfondo.png';
    
    function bgImgLoaded() {
        document.querySelector('.header').style.backgroundImage = `url(${imageUrl})`;
    }
    
    if (imageUrl) {
        const img = new Image();
        img.src = imageUrl;
        img.onload = bgImgLoaded;
    }
});
