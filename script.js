const api = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

let showPokeData = async () => {
  try {
    const res = await fetch(api);
    const data = await res.json();
    console.log(data);
    // showData(data);
  } catch (error) {
    console.log(error);
  }
};

function showData(apiData) {
  const pokeList = document.createElement("div");
  let firstSet = apiData.results.filter((pokemon, index) => {
    return index < 20;
  });
  pokeList.appendChild(firstSet);
}

showPokeData();
