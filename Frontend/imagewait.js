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
"Time-travel train station goes to different times",
"Mystical cave guarded by glowing crystals",
"Alien marketplace with bizarre, glowing fruits",
"Magical carnival with rides powered by spells",
"Astronaut exploring an abandoned space station",
"Secret laboratory hidden beneath an old mansion",
"Mechanical dragon protecting a treasure trove",
"Haunted graveyard filled with glowing spirits",
"Ice palace inhabited by snow creatures",
"Giant floating jellyfish drifting through the sky",
"Wizard's tower surrounded by swirling mists",
"Lost city in the heart of the jungle",
"Mermaid kingdom beneath the ocean waves",
"Space station orbiting a distant planet",
"Goblin market bustling with bizarre wares",
"Dragon's lair filled with glittering treasures",
"Fairy tale castle atop a misty mountain",
"Post-apocalyptic wasteland reclaimed by nature",
"Magician's workshop brewing potions and spells",
"Ancient temple hidden in the desert sands",
"Haunted mansion with creaking floorboards",
"Cyberpunk cityscape bustling with neon lights",
"Pirate ship sailing the stormy seas",
"Enchanted forest inhabited by mythical creatures",
"Time-traveling explorer encountering dinosaurs",
"Steampunk city powered by steam engines",
"Alien planet with strange, bioluminescent flora",
"Ghostly shipwreck beneath the moonlit waves",
"Village of fairies nestled in a sunlit meadow",
"Robot uprising in a futuristic metropolis",
"Magical realm accessed through an old wardrobe",
"Hidden cave behind a waterfall guarded by ancient spirits",
"Cybernetic jungle filled with mechanical wildlife",
"Forgotten temple hidden within a dense fog",
"Underworld city ruled by mythical creatures",
"Crystal palace atop a snow-capped mountain",
"Clockwork city powered by gears and steam",
"Celestial garden where stars bloom like flowers",
"Desert oasis inhabited by magical beings",
"Subterranean kingdom of the mole people",
"Floating islands inhabited by sky pirates",
"Fairy ring surrounded by enchanted mushrooms",
"Sunken ship graveyard haunted by ghostly sailors",
"Library of Alexandria rebuilt in a futuristic world",
"Tower of babel reaching into the clouds",
"Lunar colony thriving under a harsh environment",
"Haunted clock tower frozen in time",
"Underground bunker hiding alien technology",
"Crystal cavern reflecting rainbow light",
"Clockwork carnival with mechanical rides",
"Ethereal realm where dreams come to life",
"Ancient coliseum hosting mythical battles",
"Interdimensional portal hidden in plain sight",
"Space elevator connecting planets in the solar system",
"Cybernetic forest inhabited by sentient trees",
"Crystal clear lake hiding a submerged city",
"Time-traveling detective solving mysteries across history",
"Alchemist's laboratory brewing potions of power",
"Starship graveyard drifting through the void",
"Quantum realm where reality bends to the will of the observer",
"Astral plane inhabited by celestial beings"
];

document.addEventListener('DOMContentLoaded', function () {
    const signalEndpoint = '/data';

    var randPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    prompts.filter(c => !(c === randPrompt));
    
    $.ajax({ 
                url: 'http://127.0.0.1:5000/data', 
                type: 'POST', 
                data: {'data': randPrompt}, 
                success: function(response) { 

                    var images = JSON.parse(localStorage.getItem('images'));

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
