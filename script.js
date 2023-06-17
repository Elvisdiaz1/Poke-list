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
  });

  document.body.appendChild(pokeList);
}

// Place whole thing in flex
// Place sprites list in card
// Make card and place all data in card

showPokeData();
console.log(box);
