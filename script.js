const box = new Set();
let showPokeData = async () => {
  for (let i = 0; i < 21; i++) {
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
  }
};

// function showData(apiData) {
//   //   let pokeSet = apiData.results.filter((pokemon, index) => {
//   //     return index < 21;
//   //   });

//   box.map((box) => {
//     const pokeList = document.createElement("div");
//     const pokeSprite = document.createElement("img");
//     pokeSprite.src = box.sprites.front_default;
//     pokeList.appendChild(pokeSprite);
//     document.body.appendChild(pokeList);
//   });
// }

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

    const type = document.createElement("p");
    type.classList.add("type");
    type.innerHTML = pokemon.types.map((type) => type.type.name);
    if (type.innerHTML.includes("grass")) {
      type.style.backgroundColor = "#78c850";
    } else if (type.innerHTML.includes("fire")) {
      type.style.backgroundColor = "#f08030";
    } else if (type.innerHTML.includes("water")) {
      type.style.backgroundColor = "#6890f0";
    } else if (type.innerHTML.includes("bug")) {
      type.style.backgroundColor = "#a8b820";
    } else if (type.innerHTML.includes("dark")) {
      type.style.backgroundColor = "#705848";
    } else if (type.innerHTML.includes("normal")) {
      type.style.backgroundColor = "#a8a878";
    } else if (type.innerHTML.includes("flying")) {
      type.style.backgroundColor = "#a890f0";
    } else if (type.innerHTML.includes("steel")) {
      type.style.backgroundColor = "#b8b8d0";
    } else if (type.innerHTML.includes("ground")) {
      type.style.backgroundColor = "#e0c068";
    } else if (type.innerHTML.includes("poison")) {
      type.style.backgroundColor = "#a040a0";
    } else if (type.innerHTML.includes("ice")) {
      type.style.backgroundColor = "#98d8d8";
    } else if (type.innerHTML.includes("fighting")) {
      type.style.backgroundColor = "#c03028";
    } else if (type.innerHTML.includes("psychic")) {
      type.style.backgroundColor = "#f85888";
    } else if (type.innerHTML.includes("ghost")) {
      type.style.backgroundColor = "#705898";
    } else if (type.innerHTML.includes("dragon")) {
      type.style.backgroundColor = "#7038f8";
    } else type.style.backgroundColor = "#f0b6bc";
    card.appendChild(type);

    const id = document.createElement("p");
    id.classList.add("id");
    id.innerHTML = `ID: ` + pokemon.id;
    card.appendChild(id);
  });

  document.body.appendChild(flexContainer);
}

// Place whole thing in flex
// Place sprites list in card
// Make card and place all data in card

showPokeData();
console.log(box);
