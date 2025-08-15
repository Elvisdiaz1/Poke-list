const box = [];
let removedPokemon = [];
const buttonContainer = document.getElementById("buttonContainer");
let prevButton = document.createElement("button");
prevButton.classList.add("button");
prevButton.setAttribute("id", "remove");
prevButton.innerText = "Previous Pokemon";
let nextButton = document.createElement("button");
nextButton.classList.add("button");
nextButton.innerText = "Next Pokemon";

prevButton.disabled = true;

let currentPage = 0; //Current page. Ex: page 1, page 2,...
let maxPokemon = 45; // Max Pokemon to be seen on the page
let totalPokemon = 0 // Total Pokemon in the api


console.log(box);

async function getTotalPokemon(){
  const api ='https://pokeapi.co/api/v2/pokemon'
  const res = await fetch(api)
  const data = await res.json()
  totalPokemon = await data.count
}

// fetchPokemonPage to paginate pokemon to 45 per page
async function fetchPokemonPage(page) {
  const offset = page * maxPokemon
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemon}&offset=${offset}`

  const res = await fetch(apiUrl);
  const data = await res.json();
  return data.results
}

// Getting pokemon names and info from the api url
async function fetchPokemonDetails(results){
  const promise = results.map(pokemon => fetch(pokemon.url).then(res => res.json()))
  const pokeData = await Promise.all(promise)
  return pokeData
}

// Empty the page to showcase a different set of 45 pokemon
const clearPokemonData = () => {
  const flexContainer = document.getElementById("flexContainer");
  flexContainer.innerHTML = "";
};

async function loadPage(page) {
  clearPokemonData()
  const results = await fetchPokemonPage(page)
  const pokeDetails = await fetchPokemonDetails(results)

  box.length = 0 
  box.push(...pokeDetails)
  placeData()

// Activating or disabling buttons
  prevButton.disabled = page === 0
  nextButton.disabled = (page + 1) * maxPokemon >= totalPokemon;
}

// Previous Button
prevButton.addEventListener("click", function () {
  

  if (currentPage > 0) {
    currentPage--;
    loadPage(currentPage); // fetch + render
  }


 });

nextButton.addEventListener("click", async function () {
 
  currentPage ++
  loadPage(currentPage)
});

function placeData() {
  clearPokemonData();
  box.forEach((pokemon) => {
    const card = document.createElement("div");
    card.classList.add("card");
    flexContainer.appendChild(card);

    const pokeSprite = document.createElement("img");
    pokeSprite.classList.add("sprites");
    pokeSprite.src = pokemon.sprites.front_default;
    card.appendChild(pokeSprite);

    const name = document.createElement("p");
    name.classList.add("name");
    name.innerHTML = pokemon.name;
    card.appendChild(name);

    const typeContainer = document.createElement("div");
    const type1 = document.createElement("img");
    const type2 = document.createElement("img");
    typeContainer.classList.add("typeContainer");
    type1.classList.add("type");
    type2.classList.add("type");
    let types = pokemon.types.map((type) => type.type.name);

    if (types.length > 1) {
      typing = types[0].split(" ");
      type1.innerHTML = typing[0];
      typing2 = types[1].split(" ");
      type2.innerHTML = typing2[0];
      if (typing2[0].includes("grass")) {
        type2.src = "./assets/grass-type.png";
      } else if (typing2[0].includes("fire")) {
        type2.src = "./assets/fire-type.png";
      } else if (typing2[0].includes("water")) {
        type2.src = "./assets/water-type.png";
      } else if (typing2[0].includes("bug")) {
        type2.src = "./assets/bug-type.png";
      } else if (typing2[0].includes("dark")) {
        type2.src = "./assets/dark-type.png";
      } else if (typing2[0].includes("normal")) {
        type2.src = "./assets/normal-type.png";
      } else if (typing2[0].includes("flying")) {
        type2.src = "./assets/flying-type.png";
      } else if (typing2[0].includes("steel")) {
        type2.src = "./assets/steel-type.png";
      } else if (typing2[0].includes("ground")) {
        type2.src = "./assets/ground-type.png";
      } else if (typing2[0].includes("poison")) {
        type2.src = "assets/posion-type.png";
      } else if (typing2[0].includes("ice")) {
        type2.src = "assets/ice-type.png";
      } else if (typing2[0].includes("fighting")) {
        type2.src = "assets/fighting-type.png";
      } else if (typing2[0].includes("psychic")) {
        type2.src = "assets/psy-type.png";
      } else if (typing2[0].includes("ghost")) {
        type2.src = "assets/ghost-type.png";
      } else if (typing2[0].includes("dragon")) {
        type2.src = "assets/dragon-type.png";
      } else if (typing2[0].includes("fairy")) {
        type2.src = "assets/fairy-type.png";
      } else type2.src = "assets/electric-type.png";
      //   CHANGE THE SINGLE TYPING FROM HTML TO IMAGE
    } else {
      typing = types[0].split(" ");
      type2.style.visibility = "hidden";
    }
    type1.innerHTML = typing[0];

    if (typing[0].includes("grass")) {
      type1.src = "./assets/grass-type.png";
    } else if (typing[0].includes("fire")) {
      type1.src = "./assets/fire-type.png";
    } else if (typing[0].includes("water")) {
      type1.src = "./assets/water-type.png";
    } else if (typing[0].includes("bug")) {
      type1.src = "./assets/bug-type.png";
    } else if (typing[0].includes("dark")) {
      type1.src = "./assets/dark-type.png";
    } else if (typing[0].includes("normal")) {
      type1.src = "./assets/normal-type.png";
    } else if (typing[0].includes("flying")) {
      type1.src = "./assets/flying-type.png";
    } else if (typing[0].includes("steel")) {
      type1.src = "./assets/steel-type.png";
    } else if (typing[0].includes("ground")) {
      type1.src = "./assets/ground-type.png";
    } else if (typing[0].includes("poison")) {
      type1.src = "assets/posion-type.png";
    } else if (typing[0].includes("ice")) {
      type1.src = "./assets/ice-type.png";
    } else if (typing[0].includes("fighting")) {
      type1.src = "./assets/fighting-type.png";
    } else if (typing[0].includes("psychic")) {
      type1.src = "./assets/psy-type.png";
    } else if (typing[0].includes("ghost")) {
      type1.src = "./assets/ghost-type.png";
    } else if (typing[0].includes("rock")) {
      type1.src = "./assets/rock-type.png";
    } else if (typing[0].includes("dragon")) {
      type1.src = "assets/dragon-type.png";
    } else if (typing[0].includes("fairy")) {
      type1.src = "assets/fairy-type.png";
    } else type1.src = "assets/electric-type.png";
    let type1Color;
    if (typing[0].includes("grass")) {
      type1Color = "#78c850";
    } else if (typing[0].includes("fire")) {
      type1Color = "#f08030";
    } else if (typing[0].includes("water")) {
      type1Color = "#6890f0";
    } else if (typing[0].includes("bug")) {
      type1Color = "#a8b820";
    } else if (typing[0].includes("dark")) {
      type1Color = "#705848";
    } else if (typing[0].includes("normal")) {
      type1Color = "#a8a878";
    } else if (typing[0].includes("flying")) {
      type1Color = "#a890f0";
    } else if (typing[0].includes("steel")) {
      type1Color = "#b8b8d0";
    } else if (typing[0].includes("ground")) {
      type1Color = "#e0c068";
    } else if (typing[0].includes("poison")) {
      type1Color = "#a040a0";
    } else if (typing[0].includes("ice")) {
      type1Color = "#98d8d8";
    } else if (typing[0].includes("fighting")) {
      type1Color = "#c03028";
    } else if (typing[0].includes("psychic")) {
      type1Color = "#f85888";
    } else if (typing[0].includes("ghost")) {
      type1Color = "#705898";
    } else if (typing[0].includes("rock")) {
      type1Color = "#B8A038";
    } else if (typing[0].includes("dragon")) {
      type1Color = "#7038f8";
    } else if (typing[0].includes("fairy")) {
      type1Color = "#f0b6bc";
    } else type1Color = "#fac000";

    let type2Color;
    if (typing2[0].includes("grass")) {
      type2Color = "#78c850";
    } else if (typing2[0].includes("fire")) {
      type2Color = "#f08030";
    } else if (typing2[0].includes("water")) {
      type2Color = "#6890f0";
    } else if (typing2[0].includes("bug")) {
      type2Color = "#a8b820";
    } else if (typing2[0].includes("dark")) {
      type2Color = "#705848";
    } else if (typing2[0].includes("normal")) {
      type2Color = "#a8a878";
    } else if (typing2[0].includes("flying")) {
      type2Color = "#a890f0";
    } else if (typing2[0].includes("steel")) {
      type2Color = "#b8b8d0";
    } else if (typing2[0].includes("ground")) {
      type2Color = "#e0c068";
    } else if (typing2[0].includes("poison")) {
      type2Color = "#a040a0";
    } else if (typing2[0].includes("ice")) {
      type2Color = "#98d8d8";
    } else if (typing2[0].includes("fighting")) {
      type2Color = "#c03028";
    } else if (typing2[0].includes("psychic")) {
      type2Color = "#f85888";
    } else if (typing2[0].includes("ghost")) {
      type2Color = "#705898";
    } else if (typing[0].includes("rock")) {
      type1Color = "#B8A038";
    } else if (typing2[0].includes("dragon")) {
      type2Color = "#7038f8";
    } else if (typing2[0].includes("fairy")) {
      type2Color = "#f0b6bc";
    } else type2Color = "#fac000";

    if (types.length > 1) {
      card.style.backgroundImage = `linear-gradient(90deg, ${type1Color} 50%, ${type2Color} 50%)`;
    } else {
      card.style.backgroundColor = type1Color;
    }

    typeContainer.appendChild(type1);
    typeContainer.appendChild(type2);
    card.appendChild(typeContainer);

    const id = document.createElement("p");
    id.classList.add("id");
    id.innerHTML = `ID: ` + pokemon.id;
    card.appendChild(id);
  });

  document.body.appendChild(flexContainer);

  buttonContainer.appendChild(prevButton);
  buttonContainer.appendChild(nextButton);

  document.body.appendChild(buttonContainer);
  console.log(removedPokemon);
}

// Initalize the site
getTotalPokemon().then(() => {
  loadPage(currentPage);
});

// Tasks
// VERSION 1
// Fix the fighting type logo and solo pokemon empty box. Prevent it from reoccuring
// Remove first set and last set buttons
// VERSION 2
// Optimize the typing functionality
// Update the screen to load at the same time or cover it up with an animation
// Add buttons to filter out pokemon by legendaries and regions and types
// Add button to put shiny variants on
// VERSION 3
// Add a search bar to filter certain pokemon by id or name
// VERSION 4
// Potentially add a button to put back sprites on the cards
// Potentially add more functionality to the card by giving them more info when user clicks on them
