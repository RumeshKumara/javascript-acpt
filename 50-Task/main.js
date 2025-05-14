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

// ! Task 9:
function updateTicker() {
    const headlinesInput = document.getElementById('headlines').value.trim();
    const newsTicker = document.getElementById('newsTicker');

    if (!headlinesInput) {
        alert('Please enter at least one headline.');
        return;
    }

    const headlines = headlinesInput.split('\n').map(line => line.trim()).filter(line => line);

    newsTicker.innerHTML = '';
    newsTicker.style.display = 'block';

    headlines.forEach((headline, index) => {
        const tickerItem = document.createElement('div');
        tickerItem.className = 'ticker-item';
        tickerItem.textContent = headline;
        tickerItem.style.animationDelay = `${index * 10}s`;
        newsTicker.appendChild(tickerItem);
        newsTicker.style.color = 'yellow';
        newsTicker.style.border = '1px solid #882dff';
        newsTicker.style.padding = '10px';
        newsTicker.style.borderRadius = '5px';
    });

    document.getElementById('headlines').value = '';
}

// ! Task 10:
function submitRSVP() {
    const name1 = document.getElementById('name1').value.trim();
    const email1 = document.getElementById('email1').value.trim();
    const attendance = document.getElementById('attendance').checked;
    const confirmationDiv = document.getElementById('rsvpConfirmation');

    if (!name1 || !email1) {
        alert('Please fill in both name and email fields.');
        return;
    }
    /*This uses a ternary operator (?:) to choose the message:
    If attendance is true (checkbox checked, user is attending):
    Message: "Thank you, ${name1}! Your attendance is confirmed for the event. A confirmation has been sent to ${email1}."
    Example: For name1 = "John", email1 = "john@example.com", the message is:
    "Thank you, John! Your attendance is confirmed for the event. A confirmation has been sent to john@example.com."
    If attendance is false (checkbox unchecked, user is not attending):
    Message: "Thank you, ${name1}. We have noted that you will not attend the event. Details have been sent to ${email1}."
    Example: For name1 = "John", email1 = "john@example.com", the message is:
    "Thank you, John. We have noted that you will not attend the event. Details have been sent to john@example.com."
    The message is stored in the message variable.
 */
    const message = attendance
        ? `Thank you, ${name1}! Your attendance is confirmed for the event. A confirmation has been sent to ${email1}.`
        : `Thank you, ${name1}. We have noted that you will not attend the event. Details have been sent to ${email1}.`;

    confirmationDiv.textContent = message;
    confirmationDiv.style.display = 'block';

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('attendance').checked = true;
    confirmationDiv.style.color = 'white';
    confirmationDiv.style.border = '1px solid #882dff';
    confirmationDiv.style.padding = '10px';
    confirmationDiv.style.borderRadius = '5px';
}

// ! Task 11:
let balance = 10000;

function processTransaction() {
    const amount2 = parseFloat(document.getElementById('amount2').value);
    const transactionType = document.querySelector('input[name="transactionType"]:checked').value;
    const balanceDisplay = document.getElementById('balanceDisplay');
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.style.display = 'none';

    if (isNaN(amount2) || amount2 <= 0) {
        errorMessage.textContent = 'Please enter a valid positive amount.';
        errorMessage.style.display = 'block';
        errorMessage.style.color = 'red';
        return;
    }

    if (transactionType === 'Withdrawal' && amount2 > balance) {
        errorMessage.textContent = 'Insufficient funds for withdrawal.';
        errorMessage.style.display = 'block';
        errorMessage.style.color = 'red';
        return;
    }

    if (transactionType === 'Deposit') {
        balance += amount2;
    } else {
        balance -= amount2;
    }

    balanceDisplay.textContent = `Current Balance: LKR ${balance.toFixed(2)}`;
    balanceDisplay.style.color = 'green'; // Set text color to green

    document.getElementById('amount2').value = '';
    document.querySelector('input[name="transactionType"][value="Deposit"]').checked = true;
}

// ! Task 12:
const greetings = {
    Sinhala: name => `ආයුබෝවන්, ${name}! ඔබට සුබ දවසක්!`,
    Tamil: name => `வணக்கம், ${name}! உங்களுக்கு ஒரு நல்ல நாள்!`,
    English: name => `Hello, ${name}! Have a great day!`
};

function generateGreeting() {
    const name = document.getElementById('name12').value.trim();
    const language = document.querySelector('input[name="language"]:checked').value;
    const greetingMessage = document.getElementById('greetingMessage');

    if (!name) {
        alert('Please enter your name.');
        return;
    }

    greetingMessage.textContent = greetings[language](name);
    greetingMessage.style.display = 'block';
    greetingMessage.style.color = 'green';
    greetingMessage.style.border = '1px solid #882dff';
    greetingMessage.style.padding = '10px';
    greetingMessage.style.borderRadius = '5px';
    greetingMessage.style.alignItems = 'center';

    document.getElementById('name').value = '';
    document.querySelector('input[name="language"][value="Sinhala"]').checked = true;
}

// ! Task 13:
function calculateCountdown() {
    const festivalDate = document.getElementById('festivalDate13').value;
    const resultDiv13 = document.getElementById('countdownResult');

    if (!festivalDate) {
        alert('Please select a festival date.');
        return;
    }

    const today = new Date();
    const targetDate = new Date(festivalDate);
    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    const timeDiff = targetDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    resultDiv13.style.display = 'block';

    if (daysLeft > 0) {
        resultDiv13.textContent = `${daysLeft} day${daysLeft === 1 ? '' : 's'} left until the festival on ${festivalDate}.`;
        resultDiv13.style.color = 'green';
    } else if (daysLeft === 0) {
        resultDiv13.textContent = 'The festival is today!';
        resultDiv13.style.color = 'blue';
    } else {
        resultDiv13.textContent = 'The festival date has already passed.';
        resultDiv13.style.color = 'red';
    }

    document.getElementById('festivalDate13').value = '';
}

// ! Task 14:
function submitActivities() {
    const activities = Array.from(document.querySelectorAll('input[name="activity"]:checked')).map(checkbox => checkbox.value);
    const additionalActivity = document.getElementById('additionalActivity').value.trim();
    const summaryDiv = document.getElementById('activitySummary');
    const selectedActivities = document.getElementById('selectedActivities');
    const additional = document.getElementById('additional');

    if (activities.length === 0 && !additionalActivity) {
        alert('Please select at least one activity or enter an additional activity.');
        return;
    }

    selectedActivities.textContent = activities.length > 0
        ? `Activities: ${activities.join(', ')}`
        : 'Activities: None selected';

    additional.textContent = additionalActivity
        ? `Additional Activity: ${additionalActivity}`
        : 'Additional Activity: None';

    summaryDiv.style.display = 'block';
    summaryDiv.style.color = 'green'; // Set text color to white
    summaryDiv.style.border = '1px solid #882dff';
    summaryDiv.style.padding = '10px';
    summaryDiv.style.borderRadius = '5px';

    document.getElementById('additionalActivity').value = '';
    document.querySelectorAll('input[name="activity"]').forEach(checkbox => checkbox.checked = false);
}

// ! Task 15:
function submitReservation() {
    const name = document.getElementById('name15').value.trim();
    const date = document.getElementById('date15').value;
    const time = document.getElementById('time15').value;
    const people = document.getElementById('people15').value;
    const preferences = Array.from(document.querySelectorAll('input[name="mealPreference"]:checked')).map(cb => cb.value);

    const summaryDiv = document.getElementById('reservationSummary');
    const summaryName = document.getElementById('summaryName');
    const summaryDate = document.getElementById('summaryDate');
    const summaryTime = document.getElementById('summaryTime');
    const summaryPeople = document.getElementById('summaryPeople');
    const summaryPreferences = document.getElementById('summaryPreferences');

    if (!name || !date || !time || !people) {
        alert('Please fill in all required fields.');
        return;
    }

    summaryName.textContent = `Name: ${name}`;
    summaryDate.textContent = `Date: ${date}`;
    summaryTime.textContent = `Time: ${time}`;
    summaryPeople.textContent = `Number of People: ${people}`;
    summaryPreferences.textContent = preferences.length > 0
        ? `Meal Preferences: ${preferences.join(', ')}`
        : 'Meal Preferences: None';

    summaryDiv.style.display = 'block';
    summaryDiv.style.color = 'white'; // Set text color to white
    summaryDiv.style.border = '1px solid #882dff';
    summaryDiv.style.padding = '10px';
    summaryDiv.style.borderRadius = '5px';

    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('people').value = '';
    document.querySelectorAll('input[name="mealPreference"]').forEach(cb => cb.checked = false);
}

// ! Task 16:
const roomAvailability = {
    Standard: { totalRooms: 20, bookedDates: ["2025-05-15", "2025-05-16", "2025-06-01"] },
    Deluxe: { totalRooms: 10, bookedDates: ["2025-05-20", "2025-05-21"] },
    Suite: { totalRooms: 5, bookedDates: ["2025-05-25"] }
};

function checkAvailability() {
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const roomType = document.getElementById('roomType').value;
    const resultDiv = document.getElementById('availabilityResult');

    if (!checkIn || !checkOut || !roomType) {
        alert('Please fill in all fields.');
        return;
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkOutDate <= checkInDate) {
        resultDiv.textContent = 'Check-out date must be after check-in date.';
        resultDiv.style.color = 'red';
        resultDiv.style.display = 'block';
        return;
    }

    const bookedDates = roomAvailability[roomType].bookedDates;
    let isAvailable = true;

    for (let d = new Date(checkIn); d <= checkOutDate; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toISOString().split('T')[0];
        if (bookedDates.includes(dateStr)) {
            isAvailable = false;
            break;
        }
    }

    resultDiv.style.display = 'block';
    if (isAvailable) {
        resultDiv.textContent = `${roomType} room is available from ${checkIn} to ${checkOut}.`;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = `${roomType} room is not available for the selected dates.`;
        resultDiv.style.color = 'red';
    }

    document.getElementById('checkIn').value = '';
    document.getElementById('checkOut').value = '';
    document.getElementById('roomType').value = '';
}

// ! Task 17:
let totalRuns = 0;
let wickets = 0;
let balls = 0;

function updateScoreboard() {
    const runs = parseInt(document.getElementById('runs').value);
    const wicket = document.getElementById('wicket').checked;
    const scoreboard = document.getElementById('scoreboard');
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.style.display = 'none';

    if (isNaN(runs) || runs < 0) {
        errorMessage.textContent = 'Please enter a valid number of runs.';
        errorMessage.style.display = 'block';
        return;
    }

    totalRuns += runs;
    balls += 1;
    if (wicket && wickets < 10) {
        wickets += 1;
    }

    const overs = Math.floor(balls / 6) + (balls % 6) / 10;
    scoreboard.textContent = `Score: ${totalRuns}/${wickets} (${overs.toFixed(1)} overs)`;
    scoreboard.style.color = 'green';

    document.getElementById('runs').value = '';
    document.getElementById('wicket').checked = false;
}

// ! Task 18:
const fareRates = {
    Normal: 2.5, // LKR per km
    AC: 4.0,     // LKR per km
    Luxury: 6.0  // LKR per km
};

function calculateFare() {
    const distance = parseFloat(document.getElementById('distance').value);
    const busType = document.querySelector('input[name="busType"]:checked').value;
    const resultDiv = document.getElementById('fareResult');

    if (isNaN(distance) || distance <= 0) {
        resultDiv.textContent = 'Please enter a valid distance.';
        resultDiv.style.color = 'red';
        resultDiv.style.display = 'block';
        return;
    }

    const fare = (distance * fareRates[busType]).toFixed(2);

    resultDiv.textContent = `Bus Fare for ${distance} km (${busType}): LKR ${fare}`;
    resultDiv.style.color = 'green';
    resultDiv.style.display = 'block';

    document.getElementById('distance').value = '';
    document.querySelector('input[name="busType"][value="Normal"]').checked = true;
}

// ! Task 19:
function submitBooking() {
    const shows = Array.from(document.querySelectorAll('input[name="show"]:checked')).map(checkbox => checkbox.value);
    const tickets = document.getElementById('tickets').value;
    const summaryDiv = document.getElementById('bookingSummary');
    const selectedShows = document.getElementById('selectedShows');
    const ticketCount = document.getElementById('ticketCount');

    if (shows.length === 0) {
        alert('Please select at least one cultural show.');
        return;
    }

    if (!tickets || tickets < 1) {
        alert('Please enter a valid number of tickets.');
        return;
    }

    selectedShows.textContent = `Selected Shows: ${shows.join(', ')}`;
    ticketCount.textContent = `Number of Tickets: ${tickets}`;

    summaryDiv.style.display = 'block';
    summaryDiv.style.color = 'green';

    document.getElementById('tickets').value = '';
    document.querySelectorAll('input[name="show"]').forEach(checkbox => checkbox.checked = false);
}

// ! Task 20:
function calculateBudget() {
    const venue = parseFloat(document.getElementById('venue').value) || 0;
    const catering = parseFloat(document.getElementById('catering').value) || 0;
    const decoration = parseFloat(document.getElementById('decoration').value) || 0;
    const summaryDiv = document.getElementById('budgetSummary');
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.style.display = 'none';

    if (venue < 0 || catering < 0 || decoration < 0) {
        errorMessage.textContent = 'Please enter valid non-negative amounts.';
        errorMessage.style.display = 'block';
        return;
    }

    if (venue === 0 && catering === 0 && decoration === 0) {
        errorMessage.textContent = 'Please enter at least one expense amount.';
        errorMessage.style.display = 'block';
        return;
    }

    const totalBudget = (venue + catering + decoration).toFixed(2);

    summaryDiv.textContent = `Total Festival Budget: LKR ${totalBudget}`;
    summaryDiv.style.display = 'block';

    document.getElementById('venue').value = '';
    document.getElementById('catering').value = '';
    document.getElementById('decoration').value = '';
}

// ! Task 21:
let incidents = [];

function reportIncident() {
    const description = document.getElementById('description').value.trim();
    const incidentTypes = Array.from(document.querySelectorAll('input[name="incidentType"]:checked')).map(cb => cb.value);
    const incidentList = document.getElementById('incidentList');
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.style.display = 'none';

    if (!description && incidentTypes.length === 0) {
        errorMessage.textContent = 'Please provide a description or select at least one incident type.';
        errorMessage.style.display = 'block';
        return;
    }

    const incident = {
        description: description || 'No description provided',
        types: incidentTypes.length > 0 ? incidentTypes : ['None'],
        timestamp: new Date().toLocaleString()
    };

    incidents.push(incident);
    updateIncidentList();

    document.getElementById('description').value = '';
    document.querySelectorAll('input[name="incidentType"]').forEach(cb => cb.checked = false);
}

function updateIncidentList() {
    const incidentList = document.getElementById('incidentList');
    incidentList.innerHTML = '';

    if (incidents.length === 0) {
        incidentList.innerHTML = '<p>No incidents reported yet.</p>';
        return;
    }

    incidents.forEach(incident => {
        const incidentItem = document.createElement('div');
        incidentItem.className = 'incident-item';
        incidentItem.innerHTML = `
                    <strong>Time:</strong> ${incident.timestamp}<br>
                    <strong>Description:</strong> ${incident.description}<br>
                    <strong>Types:</strong> ${incident.types.join(', ')}
                `;
        incidentList.appendChild(incidentItem);
    });
}

// ! Task 22:
const destinationPlans = {
    "ella": {
        hiking: "Explore the scenic trails of Ella Rock and Little Adam's Peak for breathtaking views.",
        sightseeing: "Visit the Nine Arch Bridge and Ravana Falls for iconic landmarks.",
        beachRelaxation: "Note: Ella is inland, but you can visit nearby beaches in Mirissa or Tangalle with a day trip."
    },
    "galle": {
        hiking: "Take a coastal walk along the Galle Fort ramparts or explore nearby jungle trails.",
        sightseeing: "Tour the historic Galle Fort, a UNESCO World Heritage Site, and visit the Dutch Reformed Church.",
        beachRelaxation: "Relax at Unawatuna Beach or Jungle Beach, just a short distance from Galle."
    }
};

function generateTravelPlan() {
    const destination = document.getElementById('destination').value.trim().toLowerCase();
    const activities = Array.from(document.querySelectorAll('input[name="activity"]:checked')).map(cb => cb.value);
    const travelPlan = document.getElementById('travelPlan');
    const planDestination = document.getElementById('planDestination');
    const planActivities = document.getElementById('planActivities');
    const planDetails = document.getElementById('planDetails');

    if (!destination) {
        alert('Please enter a destination.');
        return;
    }

    if (activities.length === 0) {
        alert('Please select at least one activity.');
        return;
    }

    planDestination.textContent = `Destination: ${destination.charAt(0).toUpperCase() + destination.slice(1)}`;
    planActivities.textContent = `Activities: ${activities.join(', ')}`;

    const plans = destinationPlans[destination];
    if (plans) {
        const details = activities.map(activity => {
            const key = activity.toLowerCase().replace(' ', '');
            return plans[key] || `No specific ${activity} details available for ${destination}.`;
        }).join(' ');
        planDetails.textContent = `Details: ${details}`;
    } else {
        planDetails.textContent = `Details: No specific plans available for ${destination}. Enjoy ${activities.join(', ').toLowerCase()} at your own pace!`;
    }

    travelPlan.style.display = 'block';

    document.getElementById('destination').value = '';
    document.querySelectorAll('input[name="activity"]').forEach(cb => cb.checked = false);
}

// ! Task 23:
let inventory = [];

function addBook() {
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const quantity = parseInt(document.getElementById('quantity').value);
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.style.display = 'none';

    if (!title || !author) {
        errorMessage.textContent = 'Please enter both title and author.';
        errorMessage.style.display = 'block';
        return;
    }

    if (isNaN(quantity) || quantity < 1) {
        errorMessage.textContent = 'Please enter a valid quantity.';
        errorMessage.style.display = 'block';
        return;
    }

    const book = { title, author, quantity };
    inventory.push(book);
    updateInventoryList();

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('quantity').value = '';
}

function updateInventoryList() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = '';

    if (inventory.length === 0) {
        inventoryList.innerHTML = '<p>No books in inventory.</p>';
        return;
    }

    inventory.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.textContent = `${book.title} by ${book.author} - Quantity: ${book.quantity}`;
        inventoryList.appendChild(bookItem);
        inventoryList.style.color = 'green';
    });
}

// ! Task 24:
const prices = {
    "Wooden Mask": 1500,
    "Batik Fabric": 2000,
    "Clay Pot": 800
};

document.querySelectorAll('input[name="item"]').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const quantityInput = document.querySelector(`input[name="quantity_${this.value}"]`);
        quantityInput.disabled = !this.checked;
        if (!this.checked) quantityInput.value = 0;
    });
});

function submitOrder() {
    const items = Array.from(document.querySelectorAll('input[name="item"]:checked')).map(cb => cb.value);
    const quantities = {};
    items.forEach(item => {
        const quantity = parseInt(document.querySelector(`input[name="quantity_${item}"]`).value) || 0;
        quantities[item] = quantity;
    });

    const errorMessage = document.getElementById('errorMessage');
    const summaryDiv = document.getElementById('orderSummary');
    const orderedItems = document.getElementById('orderedItems');
    const totalPrice = document.getElementById('totalPrice');

    errorMessage.style.display = 'none';

    if (items.length === 0) {
        errorMessage.textContent = 'Please select at least one item.';
        errorMessage.style.display = 'block';
        return;
    }

    if (items.some(item => quantities[item] <= 0)) {
        errorMessage.textContent = 'Please specify a valid quantity for all selected items.';
        errorMessage.style.display = 'block';
        return;
    }

    let total = 0;
    const itemSummary = items.map(item => {
        const cost = quantities[item] * prices[item];
        total += cost;
        return `${item}: ${quantities[item]} x LKR ${prices[item]} = LKR ${cost}`;
    }).join('<br>');

    orderedItems.innerHTML = `Items:<br>${itemSummary}`;
    totalPrice.textContent = `Total Price: LKR ${total.toFixed(2)}`;

    summaryDiv.style.display = 'block';

    document.querySelectorAll('input[name="item"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.value = 0;
        input.disabled = true;
    });
}

// ! Task 25:
function generateTicketNumber() {
    return 'TICKET-' + Math.random().toString(36).substr(2, 8).toUpperCase();
}

function generateTicket() {
    const passengerName = document.getElementById('passengerName').value.trim();
    const journey = document.getElementById('journey').value;
    const ticketResult = document.getElementById('ticketResult');
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.style.display = 'none';

    if (!passengerName || !journey) {
        errorMessage.textContent = 'Please enter a name and select a journey.';
        errorMessage.style.display = 'block';
        errorMessage.style.color = 'red';
        return;
    }

    const ticketNumber = generateTicketNumber();

    ticketResult.innerHTML = `
        <strong>Ticket Generated!</strong><br><br>
        Passenger: ${passengerName}<br><br>
        Journey: ${journey}<br><br>
        Ticket Number: ${ticketNumber}
    `;
    ticketResult.style.display = 'block';
    ticketResult.style.color = 'blue'; // Set text color to white
    ticketResult.style.border = '1px solid #882dff';
    ticketResult.style.padding = '10px';
    ticketResult.style.borderRadius = '5px';


    document.getElementById('passengerName').value = '';
    document.getElementById('journey').value = '';
}