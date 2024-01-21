// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get references to the image and text field elements.
    var mainImage = document.getElementById('mainImage');
    var textField = document.getElementById('textField');

    // Add an event listener to the text field to update the image source.
    textField.addEventListener('input', function () {
        // Update the image source with the text field value.
        mainImage.src = 'https://via.placeholder.com/300?text=' + encodeURIComponent(textField.value);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Simulate receiving a signal from the backend after a delay (replace with actual backend logic).
    setTimeout(function () {
        // Navigate to the new webpage.
        window.location.href = 'newPage.html';
    }, 3000); // Replace 3000 with the actual time it takes for the backend to process and send a signal.
});