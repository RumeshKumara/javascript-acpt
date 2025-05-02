function handleClick() {
    console.log('clicked me')
    document.getElementById('demo').innerHTML = 'Rumesh kumara'
}

document.querySelector('.red').addEventListener('click', function () {
    document.querySelector('.color-change').style.backgroundColor = 'red';
});
document.querySelector('.green').addEventListener('click', function () {
    document.querySelector('.color-change').style.backgroundColor = 'green';
});

document.querySelector('.blue').addEventListener('click', function () {
    document.querySelector('.color-change').style.backgroundColor = 'blue';
});
document.querySelector('.clear').addEventListener('click', function () {
    document.querySelector('.color-change').style.backgroundColor = 'transparent';
});

document.querySelector('.copyableText').addEventListener("copy", () => {
    console.log("Content copied!");
});


function hoverImage() {
    document.getElementById("myImage").src = "events-js/chat-c-1-(1).png";
}

function unhoverImage() {
    document.getElementById("myImage").src = "events-js/chat-c-(1).png";
}



function showAlert() {
    alert("This is an alert message!");
}