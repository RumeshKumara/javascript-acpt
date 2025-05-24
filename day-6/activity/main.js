// Example: Fetch API usage for form submission

document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const userId = document.getElementById('userId').value;
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;


    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId,
                title,
                body
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // Check response data
        console.log('Success:', data);
        alert('Form submitted successfully!');
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    }
});
