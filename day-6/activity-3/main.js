// Fetch companies and render cards
const API_URL = "https://student-api.acpt.lk/api/companies";
const cards = document.getElementById("companyCards");

async function loadCompanies() {
  const res = await fetch(API_URL, { method: "GET" });
  const data = await res.json();
  // data should be an array of companies
  cards.innerHTML = data.map((company, idx) => `
    <div class="bg-sky-700 rounded-lg shadow w-[26rem] p-5 flex flex-col">
    <div class="flex items-center justify-between">
    <div class="flex items-center">
    
    <div>
    <h3 class="text-lg font-bold text-sky-200">${company.company || "Unknown Company"}</h3>
    
    </div>
    </div>
    <div></div>
    </div>
    <div class="flex items-center justify-between bg-yellow-500 rounded-lg p-3 mt-3">
    <div>
    <h1>Departments</h1>
    </div>
    <button
          class="ml-4 focus:outline-none dept-dropdown-btn"
          data-target="dept-list-${idx}"
          type="button"
        >
          <svg
            class="w-6 h-6 text-yellow-800 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
    </div>
    
      <div
        id="dept-list-${idx}"
        class="mt-3 ml-8 list-none text-gray-700 text-sm overflow-hidden transition-all duration-500 ease-in-out bg-green-600 rounded-lg p-3"
        style="max-height: 0; opacity: 0"
      >
        ${(company.departments || []).map((dept, dIdx) => `
          <div class="mb-2">
            <div class="flex items-center justify-between">
              <span class="font-semibold">${typeof dept === "object" ? dept.name : dept}</span>
              <button
                class="ml-2 focus:outline-none skill-dropdown-btn"
                data-target="skill-list-${idx}-${dIdx}"
                type="button"
              >
                <svg
                  class="w-5 h-5 text-pink-500 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <div
              id="skill-list-${idx}-${dIdx}"
              class="ml-8 mt-1 list-disc text-gray-600 text-xs overflow-hidden transition-all duration-500 ease-in-out"
              style="max-height: 0; opacity: 0"
            >
              ${(typeof dept === "object" && Array.isArray(dept.skills))
      ? dept.skills.map(skill => `<div>${skill}</div>`).join("")
      : ""
    }
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");

  // Main dropdown logic
  const dropdownBtn = document.getElementById("dropdownBtn");
  const icon = document.getElementById("dropdownIcon");
  let expanded = false;

  dropdownBtn.onclick = function () {
    expanded = !expanded;
    if (expanded) {
      cards.style.maxHeight = cards.scrollHeight + "px";
      cards.style.opacity = "1";
      icon.classList.add("rotate-180");
    } else {
      cards.style.maxHeight = "0";
      cards.style.opacity = "0";
      icon.classList.remove("rotate-180");
    }
  };

  cards.addEventListener("transitionend", function () {
    if (expanded) {
      cards.style.maxHeight = "none";
    }
  });

  // Department dropdown logic
  document.querySelectorAll(".dept-dropdown-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const targetId = btn.getAttribute("data-target");
      const ul = document.getElementById(targetId); // now a div
      const svg = btn.querySelector("svg");
      const isOpen = ul.style.maxHeight && ul.style.maxHeight !== "0px";
      if (!isOpen) {
        ul.style.maxHeight = ul.scrollHeight + "px";
        ul.style.opacity = "1";
        svg.classList.add("rotate-180");
      } else {
        ul.style.maxHeight = "0";
        ul.style.opacity = "0";
        svg.classList.remove("rotate-180");
      }
    });
  });

  // Skill dropdown logic
  document.querySelectorAll(".skill-dropdown-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const targetId = btn.getAttribute("data-target");
      const ul = document.getElementById(targetId); // now a div
      const svg = btn.querySelector("svg");
      const isOpen = ul.style.maxHeight && ul.style.maxHeight !== "0px";
      if (!isOpen) {
        ul.style.maxHeight = ul.scrollHeight + "px";
        ul.style.opacity = "1";
        svg.classList.add("rotate-180");
      } else {
        ul.style.maxHeight = "0";
        ul.style.opacity = "0";
        svg.classList.remove("rotate-180");
      }
    });
  });
}

loadCompanies();
