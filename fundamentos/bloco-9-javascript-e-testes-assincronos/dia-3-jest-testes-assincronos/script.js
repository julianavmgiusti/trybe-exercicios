const urlByType = 'https://pokeapi.co/api/v2/type/3';
const listaPokemons = document.getElementById('pokemons');

const criaCard = (pokemonObj) => {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const span = document.createElement('span');

  const { pokemon: { name, url } } = pokemonObj;
  // desestruturação de objetos em duas camadas
  // const { pokemon } = pokemonObj;
  // const { name, url } = pokemon;

  h2.innerText = name;
  h2.className = 'nome';
  span.innerText = url;
  span.className = 'url';
  div.appendChild(h2);
  div.appendChild(span);
  return div;
};

const addClick = () => {
  const urls = Array.from(document.getElementsByClassName('url'));
  // console.log('urls', urls);
  urls.forEach((url) => {
    url.addEventListener('click', () => {
      console.log('deu certo', url.innerText);
      fetch(url.innerText)
        .then((res) => res.json())
        .then((data) => console.log(data));
    });
  });
};
// função fetch para fazer a requisição para um endpoint 
const fetchPokemonByType = (url) => {
  const pokemonByType = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.pokemon.forEach((pokemon) => {
        const card = criaCard(pokemon);
        listaPokemons.appendChild(card);
      });
      addClick();
    });
};

fetchPokemonByType(urlByType);

// usando async - await (mesmo resultado)

// const fetchPokemonByType = async (url) => {
//     const pokemonByType = await fetch(url);
//     const pokemonJson = await pokemonByType.json();
//     console.log(pokemonJson.pokemon);
// };