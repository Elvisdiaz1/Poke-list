const box = new Set();
const buttonContainer = document.getElementById("buttonContainer");
let prevButton = document.createElement("button");
prevButton.classList.add("button");
prevButton.innerText = "Previous";
let nextButton = document.createElement("button");
nextButton.classList.add("button");
nextButton.innerText = "Next";
let firstButton = document.createElement("button");
firstButton.classList.add("button");
firstButton.innerText = "First Page";
let lastButton = document.createElement("button");
lastButton.classList.add("button");
lastButton.innerText = "Last Page";

let currentPage = 0;
let maxPage = 10;
prevButton.addEventListener("click", function () {
  if (currentPage > 0) {
    currentPage--;

    placeData();
  }
});
// nextButton.addEventListener("click", function () {
//   if (currentPage < maxPage - 1) {
//     currentPage++;

//     console.log("apple");
//     placeData();
//   }
// });
let showPokeData = async (i) => {
  const api = `https://pokeapi.co/api/v2/pokemon/${i}`;
  try {
    const res = await fetch(api);
    const data = await res.json();
    console.log(data);
    //   showData(box);
    box.add(data);
    placeData();
  } catch (error) {
    console.log(error);
  }

  i++;
};
let currentIndex = 1;

const fetchPokeData = async (startIndex, endIndex) => {
  for (let index = startIndex; index <= endIndex; index++) {
    await showPokeData(index);
  }
};

const initalStartIndex = 1;
const initalEndIndex = initalStartIndex + 44;

let startIndex = initalEndIndex + 1;
let endIndex = startIndex + 44;

fetchPokeData(initalStartIndex, initalEndIndex);

nextButton.addEventListener("click", function () {
  fetchPokeData(startIndex, endIndex);
  startIndex = endIndex + 1;

  endIndex = startIndex + 44;

  console.log(startIndex);
  console.log(endIndex);
});

function placeData() {
  // Need to find a way to only place one copy of each pokemon without
  // having to do document.body.innerHTML for efficieny
  // because the console still places dupes of the pokemon

  const flexContainer = document.getElementById("flexContainer");
  flexContainer.innerHTML = ""; // Clear the content of the flexContainer div

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
        type2.style.backgroundColor = "#7038f8";
      } else type2.src = "assets/fairy-type.png";
      //   CHANGE THE SINGLE TYPING FROM HTML TO IMAGE
    } else typing = types[0].split(" ");
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
      type1.style.backgroundColor = "#7038f8";
    } else type1.src = "./assets/fairy-type.png";

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
    } else type1Color = "#f0b6bc";

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
    } else type2Color = "#f0b6bc";

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
  buttonContainer.appendChild(firstButton);
  buttonContainer.appendChild(prevButton);
  buttonContainer.appendChild(nextButton);
  buttonContainer.appendChild(lastButton);
  document.body.appendChild(buttonContainer);
}

fetchPokeData();
console.log(box);
