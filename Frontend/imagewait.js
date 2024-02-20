
let test = 0;
let mark = 0;
const rounds = 2;
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

    var randPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    prompts.filter(c => !(c === randPrompt));
    
    $.ajax({ 
                url: 'http://127.0.0.1:5000/data', 
                type: 'POST', 
                data: { 'data': randPrompt}, 
                success: function(response) { 
                    console.log(response);

                    window.newImage = response;
                    //images[test] = response; //!!!
                    
                    var num = localStorage.getItem('imgNum');
                    var num2 = parseInt(num, 10) + 1;
                    console.log(parseInt(localStorage.imgNum, 10));
                    localStorage.setItem('imgNum', num2.toString());

                    if (parseInt(localStorage.imgNum, 10) === rounds + 1) {
                    window.location.href = 'endscreen.html';
                    } else {
                    localStorage.setItem('globalResponse', response);
                    localStorage.setItem('prompt', randPrompt);

                    window.location.href = 'imageguess.html';
                }
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
    };

    // Call the function to check for the signal and navigate.
    navigateToImageGuess();
});
