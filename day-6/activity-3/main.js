document.addEventListener("DOMContentLoaded", function () {
    // Fetch companies and populate the select dropdown
    fetch("https://student-api.acpt.lk/api/companies")
        .then((response) => response.json())
        .then((data) => {
            const select = document.getElementById("posts");
            data.forEach((company) => {
                const option = document.createElement("option");
                option.value = company.id;
                option.textContent = company.name;
                // Add style to option
                option.style.backgroundColor = "#fce7f3"; // light pink
                option.style.color = "#191521"; // deep pink text
                select.appendChild(option);
            });
        })
        .catch((error) => {
            // Optionally handle errors
            console.error("Error fetching companies:", error);
        });
});