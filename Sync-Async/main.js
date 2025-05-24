function getAllData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => console.log(json));
}

getAllData();


async function getAndDelete() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const res = await response.json();
        const deleteData = await fetch('https://jsonplaceholder.typicode.com/posts/30' + res.id, {
            method: 'DELETE'
        })
        const resD = await deleteData.json();
        console.log('Data fetched:', res);
        console.log('Data deleted:', resD);
    } catch (error) {
        console.error('Error:', error);
    }
}
getAndDelete();

getAllData();