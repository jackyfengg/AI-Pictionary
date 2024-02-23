document.addEventListener('DOMContentLoaded', function () {
    var textField = document.getElementById('textField');
    var submitButton = document.getElementById('submitButton');
    
    console.log(window.newImage);
    console.log(parseInt(localStorage.imgNum, 10));

    sampleImage.src = "https://www.researchgate.net/publication/2442068/figure/fig1/AS:669445533999110@1536619661371/The-original-Lena-image-at-256-256-pixels-8-bits-per-pixel.ppm";

    var retrievedResponse = localStorage.getItem('globalResponse');
    if (retrievedResponse !== null) {
        try {
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

    submitButton.addEventListener('click', function () {
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

        var num = localStorage.getItem('imgNum');
        var num2 = parseInt(num, 10) + 1;
        console.log(parseInt(localStorage.imgNum, 10));
        localStorage.setItem('imgNum', num2.toString());

        setTimeout(function() {
            if (parseInt(localStorage.imgNum, 10) == 4) {
                window.location.href = 'endscreen.html';
            } else {
                window.location.href = 'imagewait.html';
            }
        }, 3000);

    });
});