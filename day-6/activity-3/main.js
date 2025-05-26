// Fetch companies and render cards
const API_URL = "https://student-api.acpt.lk/api/companies";
const cards = document.getElementById("companyCards");

async function loadCompanies() {
  const res = await fetch(API_URL, { method: "GET" });
  const data = await res.json();
  // data should be an array of companies
  cards.innerHTML = data.map((company, idx) => `
    <div class="bg-[#001b43] rounded-lg shadow w-[26rem] p-5 flex flex-col border-1 border-sky-400 border-solid">
    <div class="flex items-center justify-between">
    <div class="flex items-center">
    
    <div>
    <h3 class="text-xl font-bold text-sky-500">${company.company || "Unknown Company"}</h3>
    
    </div>
    </div>
    <div></div>
    </div>
    <div class="flex items-center justify-between bg-yellow-500 rounded-lg p-3 mt-3">
    <div>
    <h1 class="text-lg font-bold text-yellow-800"><span class="text-purple-100 pr-1">🔶</span>Departments</h1>
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
        class="mt-3 ml-4 list-none text-purple-500 text-sm overflow-hidden transition-all duration-500 ease-in-out bg-[#37006b] rounded-lg p-3 w-[22rem]"
        style="max-height: 0; opacity: 0"
      >
        ${(company.departments || []).map((dept, dIdx) => `
          <div class="">
            <div class="flex items-center justify-between border-[#e9e9e92a] border-b-2 pb-1">
              <span class="font-semibold text-lg"><span class="text-purple-100 pr-1">⚛️</span>${typeof dept === "object" ? dept.name : dept}</span>
              <button
                class="ml-2 focus:outline-none skill-dropdown-btn"
                data-target="skill-list-${idx}-${dIdx}"
                type="button"
              >
                <svg
                  class="w-5 h-5 text-purple-300 transition-transform duration-200"
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
              class=" mt-1 list-disc text-pink-600 text-xs overflow-hidden transition-all duration-500 ease-in-out"
              style="max-height: 0; opacity: 0"
            >
              ${(typeof dept === "object" && Array.isArray(dept.employees))
      ? dept.employees.map(emp =>
        `<div>
                        <span class="font-bold text-lg"><span class="text-purple-100 pr-1">🔻</span>${emp.name}</span>
                        <span class=" text-pink-400 bg-[#3a0041] p-1 px-2 rounded-lg">${emp.position}</span>
                        <div class="ml-4 font-bold text-sky-400">
                        Skills:
                          ${Array.isArray(emp.skills) && emp.skills.length > 0
          ? emp.skills.map(skill => `<div class="text-sky-300 bg-[#1e0046] p-2 m-2 rounded-lg "><span class="text-purple-100 pr-1">💠</span>${skill}</div>`).join("")
          : "<div>No skills</div>"
        }
                        </div>
                      </div>`
      ).join("")
      : "<div>No employees</div>"
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
