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

    // Make A type container
    // make the types into span
    // Make the types their own color

    const typeContainer = document.createElement("div");
    const type1 = document.createElement("span");
    const type2 = document.createElement("span");
    typeContainer.classList.add("typeContainer");
    type1.classList.add("type");
    type2.classList.add("type");
    let types = pokemon.types.map((type) => type.type.name);
    typing = types[0].split(" ");
    type1.innerHTML = typing[0];

    if (types.length > 1) {
      typing2 = types[1].split(" ");
      type2.innerHTML = typing2[0];
    }

    if (type1.innerHTML.includes("grass")) {
      type1.style.backgroundColor = "#78c850";
    } else if (type1.innerHTML.includes("fire")) {
      type1.style.backgroundColor = "#f08030";
    } else if (type1.innerHTML.includes("water")) {
      type1.style.backgroundColor = "#6890f0";
    } else if (type1.innerHTML.includes("bug")) {
      type1.style.backgroundColor = "#a8b820";
    } else if (type1.innerHTML.includes("dark")) {
      type1.style.backgroundColor = "#705848";
    } else if (type1.innerHTML.includes("normal")) {
      type1.style.backgroundColor = "#a8a878";
    } else if (type1.innerHTML.includes("flying")) {
      type1.style.backgroundColor = "#a890f0";
    } else if (type1.innerHTML.includes("steel")) {
      type1.style.backgroundColor = "#b8b8d0";
    } else if (type1.innerHTML.includes("ground")) {
      type1.style.backgroundColor = "#e0c068";
    } else if (type1.innerHTML.includes("poison")) {
      type1.style.backgroundColor = "#a040a0";
    } else if (type1.innerHTML.includes("ice")) {
      type1.style.backgroundColor = "#98d8d8";
    } else if (type1.innerHTML.includes("fighting")) {
      type1.style.backgroundColor = "#c03028";
    } else if (type1.innerHTML.includes("psychic")) {
      type1.style.backgroundColor = "#f85888";
    } else if (type1.innerHTML.includes("ghost")) {
      type1.style.backgroundColor = "#705898";
    } else if (type1.innerHTML.includes("dragon")) {
      type1.style.backgroundColor = "#7038f8";
    } else type1.style.backgroundColor = "#f0b6bc";

    if (type2.innerHTML.includes("grass")) {
      type2.style.backgroundColor = "#78c850";
    } else if (type2.innerHTML.includes("fire")) {
      type2.style.backgroundColor = "#f08030";
    } else if (type2.innerHTML.includes("water")) {
      type2.style.backgroundColor = "#6890f0";
    } else if (type2.innerHTML.includes("bug")) {
      type2.style.backgroundColor = "#a8b820";
    } else if (type2.innerHTML.includes("dark")) {
      type2.style.backgroundColor = "#705848";
    } else if (type2.innerHTML.includes("normal")) {
      type2.style.backgroundColor = "#a8a878";
    } else if (type2.innerHTML.includes("flying")) {
      type2.style.backgroundColor = "#a890f0";
    } else if (type2.innerHTML.includes("steel")) {
      type2.style.backgroundColor = "#b8b8d0";
    } else if (type2.innerHTML.includes("ground")) {
      type2.style.backgroundColor = "#e0c068";
    } else if (type2.innerHTML.includes("poison")) {
      type2.style.backgroundColor = "#a040a0";
    } else if (type2.innerHTML.includes("ice")) {
      type2.style.backgroundColor = "#98d8d8";
    } else if (type2.innerHTML.includes("fighting")) {
      type2.style.backgroundColor = "#c03028";
    } else if (type2.innerHTML.includes("psychic")) {
      type2.style.backgroundColor = "#f85888";
    } else if (type2.innerHTML.includes("ghost")) {
      type2.style.backgroundColor = "#705898";
    } else if (type2.innerHTML.includes("dragon")) {
      type2.style.backgroundColor = "#7038f8";
    } else type2.style.backgroundColor = "#f0b6bc";
    typeContainer.appendChild(type1);
    typeContainer.appendChild(type2);
    card.appendChild(typeContainer);

    const id = document.createElement("p");
    id.classList.add("id");
    id.innerHTML = `ID: ` + pokemon.id;
    card.appendChild(id);
  });

  document.body.appendChild(flexContainer);
}

showPokeData();
console.log(box);
