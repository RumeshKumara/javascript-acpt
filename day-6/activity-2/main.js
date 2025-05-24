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
                  <div class="bg-blue-50 rounded-xl p-4 shadow" data-post-id="${post.id}" data-title="${encodeURIComponent(post.title)}" data-body="${encodeURIComponent(post.body)}">
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
                    <button class="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 delete-btn">Delete</button>
                    <button class="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 edit-btn">Edit</button>
                  </div>
                `
                )
                .join("")}
          </div>
        `;
        dataDiv.classList.remove("hidden");

        // Delete button logic
        dataDiv.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async function () {
                const card = btn.closest('[data-post-id]');
                const postId = card.getAttribute('data-post-id');
                await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                    method: 'DELETE'
                });
                card.remove();
            });
        });

        // Edit button logic
        dataDiv.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', function handleEditClick() {
                const card = btn.closest('[data-post-id]');
                const postId = card.getAttribute('data-post-id');
                const title = decodeURIComponent(card.getAttribute('data-title'));
                const body = decodeURIComponent(card.getAttribute('data-body'));
                const editForm = document.createElement('form');
                editForm.innerHTML = `
                  <h3 class="text-lg font-semibold mb-2">Edit Post #${postId}</h3>
                  <label class="block mb-2">
                    Title:
                    <input type="text" name="title" value="${title}" class="border rounded w-full p-2">
                  </label>
                  <label class="block mb-2">
                    Body:
                    <textarea name="body" class="border rounded w-full p-2">${body}</textarea>
                  </label>
                  <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
                `;
                card.innerHTML = '';
                card.appendChild(editForm);

                editForm.addEventListener('submit', async function (e) {
                    e.preventDefault();
                    const formData = new FormData(editForm);
                    const updatedPost = {
                        title: formData.get('title'),
                        body: formData.get('body')
                    };
                    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedPost)
                    });
                    card.setAttribute('data-title', encodeURIComponent(updatedPost.title));
                    card.setAttribute('data-body', encodeURIComponent(updatedPost.body));
                    card.innerHTML = `
                      <ul class="space-y-2">
                        <li class="flex border-b pb-1">
                          <span class="font-semibold capitalize">id:</span>
                          <span class="text-gray-700">${postId}</span>
                        </li>
                        <li class="flex border-b pb-1">
                          <span class="font-semibold capitalize">title:</span>
                          <span class="text-gray-700">${updatedPost.title}</span>
                        </li>
                        <li class="flex border-b pb-1">
                          <span class="font-semibold capitalize">body:</span>
                          <span class="text-gray-700">${updatedPost.body}</span>
                        </li>
                      </ul>
                      <button class="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 delete-btn">Delete</button>
                      <button class="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 edit-btn">Edit</button>
                    `;
                    // Re-attach event listeners for new buttons
                    card.querySelector('.delete-btn').addEventListener('click', async function () {
                        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                            method: 'DELETE'
                        });
                        card.remove();
                    });
                    card.querySelector('.edit-btn').addEventListener('click', handleEditClick);
                });
            });
        });
    });