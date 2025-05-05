// Create a "Go to Top" button dynamically
const goToTopButton = document.createElement('div');
goToTopButton.className = 'upArrow hidden'; // Add 'hidden' class initially
goToTopButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
document.body.appendChild(goToTopButton);

// Show/hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        goToTopButton.classList.remove('hidden');
    } else {
        goToTopButton.classList.add('hidden');
    }
});

// Smooth scroll to the top when the button is clicked
goToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.getElementById("attraction-form").onsubmit = function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const attractionInput = document.getElementById("attraction-input").value.trim();
    const attractionDetails = document.getElementById("attraction-details");

    // Clear previous details
    attractionDetails.innerHTML = "";

    if (attractionInput === "") {
        attractionDetails.textContent = "Please enter an attraction name.";
        return;
    }

    // Example data for attractions
    const attractions = {
        "Galle Face Green": "A popular ocean-side urban park in Colombo.",
        "Independence Square": "A historic landmark commemorating Sri Lanka's independence.",
        "Gangaramaya Temple": "A beautiful Buddhist temple known for its architecture and museum.",
    };

    // Display details or show a not-found message
    if (attractions[attractionInput]) {
        attractionDetails.textContent = attractions[attractionInput];
    } else {
        attractionDetails.textContent = "Attraction not found. Please try another name.";
    }
};