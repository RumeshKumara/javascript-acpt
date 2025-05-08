// Create a "Go to Top" button dynamically
const goToTopButton = document.createElement('div');
goToTopButton.className = 'upArrow hidden'; // Add 'hidden' class initially
goToTopButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
document.body.appendChild(goToTopButton);

// Ensure the "hidden" class is defined in CSS to hide the button
// Example: .hidden { display: none; }

// Show/hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Adjust threshold as needed
        goToTopButton.classList.remove('hidden');
    } else {
        goToTopButton.classList.add('hidden');
    }
});

// Smooth scroll to the top when the button is clicked
goToTopButton.addEventListener('click', () => {
    console.log('Go to Top button clicked'); // Debugging log
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// ! Task 1: Create a form to search for attractions in Colombo

const attractions = {
    "galle face green": {
        name: "Galle Face Green",
        description: "A popular urban park and promenade along the coast, perfect for evening walks and street food.",
        location: "Colombo 3, Sri Lanka",
        hours: "Open 24 hours"
    },
    "venerable gangaramaya temple": {
        name: "Venerable Gangaramaya Temple",
        description: "A historic Buddhist temple with a mix of modern and traditional architecture, featuring a museum and library.",
        location: "61 Sri Jinarathana Rd, Colombo 2, Sri Lanka",
        hours: "6:00 AM - 10:00 PM"
    },
    "national museum of colombo": {
        name: "National Museum of Colombo",
        description: "The largest museum in Sri Lanka, showcasing the country's cultural and historical artifacts.",
        location: "Sir Marcus Fernando Mawatha, Colombo 7, Sri Lanka",
        hours: "9:00 AM - 5:00 PM, closed on Fridays"
    },
    "independence square": {
        name: "Independence Square",
        description: "A landmark commemorating Sri Lanka's independence, surrounded by lush gardens and colonial-era architecture.",
        location: "Independence Ave, Colombo 7, Sri Lanka",
        hours: "Open 24 hours"
    }
};

function searchAttraction() {
    const input = document.getElementById('attractionName').value.trim().toLowerCase();
    const detailsDiv = document.getElementById('attractionDetails');
    const title = document.getElementById('attractionTitle');
    const description = document.getElementById('attractionDescription');
    const location = document.getElementById('attractionLocation');
    const hours = document.getElementById('attractionHours');

    if (!input) {
        alert('Please enter an attraction name.');
        return;
    }

    const attraction = attractions[input];

    if (attraction) {
        title.textContent = attraction.name;
        description.textContent = `Description: ${attraction.description}`;
        location.textContent = `Location: ${attraction.location}`;
        hours.textContent = `Hours: ${attraction.hours}`;
        detailsDiv.style.display = 'block';
        detailsDiv.style.color = 'white'; // Set background color to light blue
    } else {
        detailsDiv.style.display = 'block';
        title.textContent = 'Not Found';
        description.textContent = `Sorry, no details available for "${input}". Try "Galle Face Green", "Venerable Gangaramaya Temple", "National Museum of Colombo", or "Independence Square".`;
        location.textContent = '';
        hours.textContent = '';
        detailsDiv.style.color = 'white';
        detailsDiv.style.border = '1px solid #882dff';
        detailsDiv.style.padding = '10px';
        detailsDiv.style.borderRadius = '5px';

    }

    document.getElementById('attractionName').value = '';
}

// ! Task 2: 
function submitForm() {
    const email = document.getElementById('email').value;
    const monsoonAlerts = document.getElementById('monsoonAlerts').checked;
    const confirmationDiv = document.getElementById('confirmation');

    if (!email) {
        alert('Please enter a valid email address.');
        return;
    }

    confirmationDiv.style.display = 'block';
    confirmationDiv.textContent = monsoonAlerts
        ? `Thank you! You have subscribed to Monsoon Alerts with email: ${email}.`
        : `Thank you! Your email ${email} has been recorded.`;

    confirmationDiv.style.color = 'white'; // Set text color to white
}

// ! Task 3:
let plantations = [];

function addPlantation() {
    const name = document.getElementById('name').value;
    const region = document.getElementById('region').value;
    const production = document.getElementById('production').value;

    if (!name || !region || !production) {
        alert('Please fill in all fields.');
        return;
    }

    const plantation = {
        name: name,
        region: region,
        production: parseInt(production)
    };

    plantations.push(plantation);
    updatePlantationList();

    document.getElementById('name').value = '';
    document.getElementById('region').value = '';
    document.getElementById('production').value = '';
}

function updatePlantationList() {
    const listDiv = document.getElementById('plantationList');
    listDiv.innerHTML = '';

    plantations.forEach(plantation => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'plantation-item';
        itemDiv.textContent = `${plantation.name} - ${plantation.region}, Production: ${plantation.production} kg`;
        listDiv.appendChild(itemDiv);
        itemDiv.style.color = 'white'; // Set text color to black
    });
}

// ! Task 4:
const festivalDates = {
    "Vesak": "2025-05-12",
    "Sinhala New Year": "2025-04-14"
};

function checkFestivalDate() {
    const selectedDate = document.getElementById('festivalDate').value;
    const selectedFestival = document.querySelector('input[name="festival"]:checked');
    const resultDiv = document.getElementById('result');

    if (!selectedDate || !selectedFestival) {
        resultDiv.textContent = "Please select a date and a festival.";
        return;
    }

    const correctDate = festivalDates[selectedFestival.value];

    if (selectedDate === correctDate) {
        resultDiv.textContent = `Correct! ${selectedFestival.value} is on ${correctDate}.`;
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = `Incorrect. ${selectedFestival.value} is on ${correctDate}, not ${selectedDate}.`;
        resultDiv.style.color = "red";
    }
}

// ! Task 5:
function submitOrder() {
    const dishes = Array.from(document.querySelectorAll('input[name="dish"]:checked')).map(checkbox => checkbox.value);
    const specialRequests = document.getElementById('specialRequests').value;
    const orderSummary = document.getElementById('orderSummary');
    const selectedDishes = document.getElementById('selectedDishes');
    const requests = document.getElementById('requests');

    if (dishes.length === 0) {
        alert('Please select at least one dish.');
        return;
    }

    selectedDishes.textContent = `Selected Dishes: ${dishes.join(', ')}`;
    requests.textContent = specialRequests ? `Special Requests: ${specialRequests}` : 'Special Requests: None';

    orderSummary.style.display = 'block';

    document.getElementById('specialRequests').value = '';
    document.querySelectorAll('input[name="dish"]').forEach(checkbox => checkbox.checked = false);
}

// ! Task 6:
const exchangeRates = {
    LKRtoUSD: 0.0033, // 1 LKR = 0.0033 USD (approx, as of May 2025)
    USDtoLKR: 303.03   // 1 USD = 303.03 LKR (approx, inverse)
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const conversionType = document.querySelector('input[name="conversion"]:checked').value;
    const resultDiv = document.getElementById('currencyResult');

    if (isNaN(amount) || amount < 0) {
        resultDiv.textContent = 'Please enter a valid amount.';
        resultDiv.style.color = 'red';
        return;
    }

    let convertedAmount;
    if (conversionType === 'LKRtoUSD') {
        convertedAmount = (amount * exchangeRates.LKRtoUSD).toFixed(2);
        resultDiv.textContent = `${amount} LKR = ${convertedAmount} USD`;
    } else {
        convertedAmount = (amount * exchangeRates.USDtoLKR).toFixed(2);
        resultDiv.textContent = `${amount} USD = ${convertedAmount} LKR`;
    }

    resultDiv.style.color = 'green';
}