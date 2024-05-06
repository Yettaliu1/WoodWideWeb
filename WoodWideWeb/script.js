var content = [
    "Nature changes everyday.",
    "It's hard to see the same views in nature.",
    "Things in the Internet and nature all rely on each other.",
];

function displayRandomContent() {
        var randomIndex = Math.floor(Math.random() * content.length);
        var contentElement = document.getElementById("random-content");
        contentElement.innerHTML = content[randomIndex];
    }
displayRandomContent();