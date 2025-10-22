const navbar = document.querySelector(".navbar");
const eventDetails = document.querySelector(".event-details");

// Funktion zum Anzeigen von Event-Dokumentation
function displayEventDocumentation(event) {
    eventDetails.innerHTML = `<iframe src="documentation/${event.name}.html" frameborder="0" width="100%" height="100%"></iframe>`;
}

// Funktion zum Laden und Hinzufügen von Event-Links
function loadEventLinks() {
    fetch("events.json")
        .then(response => response.json())
        .then(events => {
            events.forEach(event => {
                const eventLink = document.createElement("div");
                eventLink.classList.add("event-link");
                eventLink.innerHTML = `
                    <div class="event-title">${event.name}</div>
                    <div class="event-subtitle">${event.subtitle}</div>
                    <div class="event-date">${event.date}</div>
                `;
                eventLink.addEventListener("click", () => displayEventDocumentation(event));
                navbar.appendChild(eventLink);
            });
        });
}

// Lade Event-Links beim Laden der Seite
document.addEventListener("DOMContentLoaded", loadEventLinks);
