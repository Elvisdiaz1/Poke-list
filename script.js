let api = "https://pokeapi.co/api/v2/pokemon";

let showPokeData = async () => {
  try {
    const res = await fetch(api);
    const data = await res.json();
    showData(data);
  } catch (error) {
    console.log(error);
  }
};

function showData(apiData) {}
