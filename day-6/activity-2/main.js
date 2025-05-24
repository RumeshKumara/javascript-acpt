document
    .getElementById("getDataBtn")
    .addEventListener("click", async function () {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await res.json();
        const dataDiv = document.getElementById("data");
        dataDiv.innerHTML = `
          <h2 class="text-xl font-bold mb-4 text-blue-700">Posts</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${posts
                .map(
                    post => `
                  <div class="bg-blue-50 rounded-xl p-4 shadow">
                    <ul class="space-y-2">
                      ${Object.entries(post)
                            .filter(([key]) => key !== "userId")
                            .map(
                                ([key, value]) =>
                                    `<li class="flex border-b pb-1">
                              <span class="font-semibold capitalize">${key}:</span>
                              <span class="text-gray-700">${value}</span>
                            </li>`
                            )
                            .join("")}
                    </ul>
                  </div>
                `
                )
                .join("")}
          </div>
        `;
        dataDiv.classList.remove("hidden");
    });