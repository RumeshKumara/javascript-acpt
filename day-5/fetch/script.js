const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

const postData = () => {
    const data = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => console.error('Error posting data:', error));
}

const putData = () => {
    const data = {
        id: 1,
        title: 'food',
        body: 'bar',
        userId: 1,
    };

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => console.error('Error putting data:', error));
}
const deleteData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    })
        .then(response => {
            if (response.ok) {
                console.log('Post deleted successfully');
            } else {
                console.error('Error deleting post:', response.statusText);
            }
        })
        .catch(error => console.error('Error deleting data:', error));
}