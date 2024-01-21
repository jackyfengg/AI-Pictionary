// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Get reference to the button element.
    var navigateButton = document.getElementById('navigateButton');

    // Add an event listener to the button.
    navigateButton.addEventListener('click', function () {
        // Navigate to another webpage when the button is clicked.
        window.location.href = 'anotherPage.html';
    });
});