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
    const signalEndpoint = '/data';

    var randPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    prompts.filter(c => !(c === randPrompt));
    
    $.ajax({ 
                url: 'http://127.0.0.1:5000/data', 
                type: 'POST', 
                data: {'data': randPrompt}, 
                success: function(response) { 

                    if (localStorage.getItem('images')) {
                        images = JSON.parse(localStorage.getItem('images'));
                    }

                    images.push(response);
                    localStorage.setItem('images', JSON.stringify(images));

                    localStorage.setItem('globalResponse', response);
                    localStorage.setItem('prompt', randPrompt);
                    

                    window.location.href = 'imageguess.html';
                }, 
                error: function(error) { 
                    console.log(error); 
                } 
                }); 

});
