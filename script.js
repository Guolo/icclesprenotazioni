// Animazione per il testo "Prenotazioni IC Cles"
const prenotazioniElement = document.getElementById("prenotazioni");
const icClesElement = document.getElementById("ic-cles");

// Funzione per animare il testo
function animateText() {
    const text = prenotazioniElement.innerText.split('');
    prenotazioniElement.innerHTML = ''; // Pulisce il contenuto esistente
    text.forEach((letter, index) => {
        const span = document.createElement('span');
        span.innerText = letter;
        span.classList.add('letter-container'); // Aggiunge la classe letter-container
        prenotazioniElement.appendChild(span);

        // Aggiungi un'animazione per ogni lettera
        setTimeout(() => {
            span.style.opacity = 1;
            span.style.transform = 'translateY(0)';
            span.classList.add('oscillate'); // Aggiunge l'animazione di oscillazione a ciascuna lettera
        }, index * 100); // Ritardo basato sull'indice
    });

    // Mostra IC Cles con animazione di oscillazione orizzontale
    setTimeout(() => {
        icClesElement.classList.remove("hidden");
        const icClesText = icClesElement.innerText.split('');
        icClesElement.innerHTML = ''; // Pulisce il contenuto esistente
        icClesText.forEach((letter, index) => {
            const span = document.createElement('span');
            span.innerText = letter;
            span.classList.add('letter-container'); // Aggiunge la classe letter-container
            icClesElement.appendChild(span);

            // Aggiungi un'animazione per ogni lettera
            setTimeout(() => {
                span.style.opacity = 1;
                span.style.transform = 'translateY(0)';
                span.classList.add('oscillate'); // Aggiunge l'animazione di oscillazione a ciascuna lettera
            }, index * 100); // Ritardo basato sull'indice
        });
    }, text.length * 100 + 500); // Tempo totale per l'animazione + un piccolo ritardo
}

// Avvia l'animazione
animateText();
