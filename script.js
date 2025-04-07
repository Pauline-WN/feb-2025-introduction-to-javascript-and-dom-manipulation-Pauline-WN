// Function to change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('message').textContent = 'Whoops, did I just change that text? 🎉';
});

// Function to add or remove an element when the button is clicked
document.getElementById('toggleElementBtn').addEventListener('click', function() {
    const extraElement = document.getElementById('extraElement');
    if (extraElement.style.display === 'none') {
        extraElement.style.display = 'block';
    } else {
        extraElement.style.display = 'none';
    }
});

// Fun addition to the footer with JavaScript
document.getElementById('footerMessage').textContent = "Stay awesome, Pauline! 💖 is doing great!";
