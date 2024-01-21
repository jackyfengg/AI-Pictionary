
let test = 0;
let mark = 0;
let images = [];
const prompts = ["Hidden forest door with glowing symbols nearby",
"Future city has floating boards and holograms",
"Underwater scene features fish in tiny hats",
"Dancing robots in a colorful, bright club",
"Cloud library holds books revealing universe's secrets",
"Enchanted garden has moonlit flowers playing soft music",
"Steampunk balloon race features imaginative creatures",
"Universe where gravity changes and things float",
"Big turtle carries a city on its back",
"Time-travel train station goes to different times"];

document.addEventListener('DOMContentLoaded', function () {
    // Assuming your backend signal endpoint is '/api/signal'.
    const signalEndpoint = '/data';
    
    $.ajax({ 
                url: 'http://127.0.0.1:5000/data', 
                type: 'POST', 
                data: { 'data': "reet"}, 
                success: function(response) { 
                    console.log(response);
                }, 
                error: function(error) { 
                    console.log(error); 
                } 
                }); 

    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         // Swap array[i] and array[j]
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }

    const navigateToImageGuess = async () => {
        // randomInteger = Math.floor(Math.random() * 10); 
        window.curr = prompts[test]; //!!!
        console.log(curr);
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
