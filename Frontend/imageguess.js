document.addEventListener('DOMContentLoaded', function () {
    // Get references to the text field and button elements.
    var textField = document.getElementById('textField');
    var submitButton = document.getElementById('submitButton');
    
    console.log(window.newImage);
    console.log(parseInt(localStorage.imgNum, 10));

    sampleImage.src = "https://www.researchgate.net/publication/2442068/figure/fig1/AS:669445533999110@1536619661371/The-original-Lena-image-at-256-256-pixels-8-bits-per-pixel.ppm";

    // Retrieve and parse globalResponse from localStorage
    var retrievedResponse = localStorage.getItem('globalResponse');
    if (retrievedResponse !== null) {
        try {
            // Update the image source with the received URL from the globalResponse
            sampleImage.src = retrievedResponse;
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    }

    function updateFeedback(correct) {
        var feedbackElement = document.getElementById('feedback');
        if (correct) {
            feedbackElement.textContent = 'Correct!';
            feedbackElement.style.color = '#90EE90';
        } else {
            feedbackElement.textContent = 'Not Correct!';
            feedbackElement.style.color = '#8B0000';
        }
}

    // Add an event listener to the button.
    submitButton.addEventListener('click', function () {
        // Get the value from the text field.
        var enteredText = textField.value;

        if (enteredText === localStorage.prompt) {
           var updatedScore = parseInt(localStorage.score, 10) + 1;
           console.log(updatedScore);
           localStorage.setItem('score', updatedScore.toString());
           updateFeedback(true);
        } else {
           updateFeedback(false);
        }

        if (enteredText === window.curr) {
            window.score++;
            console.log("score: " + score.toString());//!!!
        }

        setTimeout(function() {window.location.href = 'imagewait.html';}, 3000);

    });
});