let test = 0;
let playernum = 3;
let images = [];

document.addEventListener('DOMContentLoaded', function () {
    // Assuming your backend signal endpoint is '/api/signal'.
    const signalEndpoint = '/data';

    // Function to handle navigation to a new webpage.
    const navigateToImageGuess = async () => {
        try {
            // Fetch the backend signal.
            const response = await fetch(signalEndpoint);

            if (!response.ok) {//!!! fetch api needed???
                throw new Error('Failed to fetch signal');
            }

            // Assuming the backend responds with a JSON object.
            const data = await response.json(); //!!!

            // Check if there is new information (modify this condition based on your backend response).
            if (data && data.newInformation) {
                // Navigate to the new webpage.

                window.globalVar = data; //!!!
                images[test] = data; //!!!
                test = test + 1;
                if (test == playernum) {
                    window.location.href = 'endscreen.html';
                } else {
                    window.location.href = 'imageguess.html';
                }
            }
        } catch (error) {
            console.error('Error fetching signal:', error);
        }
    };

    // Call the function to check for the signal and navigate.
    navigateToImageGuess();
});
