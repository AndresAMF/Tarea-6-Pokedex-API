const pokemonContainer = document.querySelector(".pokemon-container");

async function fetchPokemon(id) {
  try {
    let asd = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    let response = await asd.json();
    createPokemon(response);
  } catch (e) {
    alert("Ha ocurrido un problema: " + e);
  }
}

async function fetchPokemones(number) {
  for (let i = 1; i <= number; i++) {
    await fetchPokemon(i);
  }
}

function createPokemon(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokemon-card");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;

  imgContainer.appendChild(img);

  const number = document.createElement("p");
  number.classList.add("number");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  card.appendChild(imgContainer);
  card.appendChild(number);
  card.appendChild(name);

  pokemonContainer.appendChild(card);
}

fetchPokemones(20);
