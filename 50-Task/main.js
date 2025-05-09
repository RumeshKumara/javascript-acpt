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

// ! Task 7:
const trainSchedules = {
    "colombo-kandy": [
        {
            train: "Intercity Express",
            departureTime: "07:00 AM",
            arrivalTime: "09:30 AM",
            classes: ["First Class", "Second Class"],
            duration: "2h 30m"
        },
        {
            train: "Podi Menike",
            departureTime: "08:30 AM",
            arrivalTime: "11:15 AM",
            classes: ["First Class", "Second Class", "Third Class"],
            duration: "2h 45m"
        },
        {
            train: "Local Train",
            departureTime: "12:00 PM",
            arrivalTime: "03:00 PM",
            classes: ["Second Class", "Third Class"],
            duration: "3h 00m"
        }
    ],
    "kandy-colombo": [
        {
            train: "Intercity Express",
            departureTime: "06:00 AM",
            arrivalTime: "08:30 AM",
            classes: ["First Class", "Second Class"],
            duration: "2h 30m"
        },
        {
            train: "Podi Menike",
            departureTime: "09:45 AM",
            arrivalTime: "12:30 PM",
            classes: ["First Class", "Second Class", "Third Class"],
            duration: "2h 45m"
        }
    ]
};

function lookupSchedule() {
    const departure = document.getElementById('departure').value.trim().toLowerCase();
    const destination = document.getElementById('destination').value.trim().toLowerCase();
    const selectedClasses = Array.from(document.querySelectorAll('input[name="travelClass"]:checked')).map(cb => cb.value);
    const resultsDiv = document.getElementById('scheduleResults');

    if (!departure || !destination) {
        alert('Please enter both departure and destination stations.');
        return;
    }

    const routeKey = `${departure}-${destination}`;
    const schedules = trainSchedules[routeKey];

    resultsDiv.innerHTML = '';
    resultsDiv.style.display = 'none';

    if (!schedules) {
        resultsDiv.innerHTML = `<p>No schedules found for ${departure} to ${destination}. Try "Colombo" to "Kandy" or vice versa.</p>`;
        resultsDiv.style.display = 'block';
        return;
    }

    let matchingSchedules = schedules;

    if (selectedClasses.length > 0) {
        matchingSchedules = schedules.filter(schedule =>
            selectedClasses.some(cls => schedule.classes.includes(cls))
        );
    }

    if (matchingSchedules.length === 0) {
        resultsDiv.innerHTML = `<p>No schedules match the selected travel classes.</p>`;
        resultsDiv.style.display = 'block';
        return;
    }

    matchingSchedules.forEach(schedule => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule-item';
        scheduleItem.innerHTML = `
            <strong>${schedule.train}</strong><br>
            Departure: ${schedule.departureTime}<br>
            Arrival: ${schedule.arrivalTime}<br>
            Duration: ${schedule.duration}<br>
            Classes: ${schedule.classes.join(', ')}
        `;
        resultsDiv.appendChild(scheduleItem);
        resultsDiv.style.color = 'white';
        resultsDiv.style.border = '1px solid #882dff';
        resultsDiv.style.padding = '10px';
        resultsDiv.style.borderRadius = '5px';
    });

    resultsDiv.style.display = 'block';

    document.getElementById('departure').value = '';
    document.getElementById('destination').value = '';
    document.querySelectorAll('input[name="travelClass"]').forEach(cb => cb.checked = false);
}

// ! Task 8:
const properties = [
    {
        name: "Ocean View Apartment",
        type: "Apartment",
        location: "Colombo 3",
        price: 15000000,
        bedrooms: 2,
        description: "Modern apartment with sea view."
    },
    {
        name: "Green Valley House",
        type: "House",
        location: "Nugegoda",
        price: 25000000,
        bedrooms: 4,
        description: "Spacious house with large garden."
    },
    {
        name: "Luxury Villa",
        type: "Villa",
        location: "Battaramulla",
        price: 40000000,
        bedrooms: 5,
        description: "Elegant villa with private pool."
    },
    {
        name: "City Loft Apartment",
        type: "Apartment",
        location: "Colombo 7",
        price: 8000000,
        bedrooms: 1,
        description: "Cozy apartment in city center."
    },
    {
        name: "Suburban Retreat House",
        type: "House",
        location: "Homagama",
        price: 12000000,
        bedrooms: 3,
        description: "Comfortable house in quiet neighborhood."
    }
];

function filterProperties() {
    const selectedTypes = Array.from(document.querySelectorAll('input[name="propertyType"]:checked')).map(cb => cb.value);
    const minBudget = parseFloat(document.getElementById('minBudget').value) || 0;
    const maxBudget = parseFloat(document.getElementById('maxBudget').value) || Infinity;
    const propertyList = document.getElementById('propertyList');

    if (selectedTypes.length === 0 && !minBudget && !maxBudget) {
        alert('Please select at least one property type or specify a budget range.');
        return;
    }

    const filteredProperties = properties.filter(property => {
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(property.type);
        const priceMatch = property.price >= minBudget && property.price <= maxBudget;
        return typeMatch && priceMatch;
    });

    propertyList.innerHTML = '';
    propertyList.style.display = 'none';

    if (filteredProperties.length === 0) {
        propertyList.innerHTML = '<p>No properties match your criteria.</p>';
        propertyList.style.display = 'block';
        return;
    }

    filteredProperties.forEach(property => {
        const propertyItem = document.createElement('div');
        propertyItem.className = 'property-item';
        propertyItem.innerHTML = `
            <strong>${property.name}</strong><br>
            Type: ${property.type}<br>
            Location: ${property.location}<br>
            Price: LKR ${property.price.toLocaleString()}<br>
            Bedrooms: ${property.bedrooms}<br>
            Description: ${property.description}
        `;
        propertyList.appendChild(propertyItem);
        propertyList.style.color = 'white';
        propertyList.style.border = '1px solid #882dff';
        propertyList.style.padding = '10px';
        propertyList.style.borderRadius = '5px';
    });

    propertyList.style.display = 'block';

    document.getElementById('minBudget').value = '';
    document.getElementById('maxBudget').value = '';
    document.querySelectorAll('input[name="propertyType"]').forEach(cb => cb.checked = false);
}