// import homeImage from '../assets/Korra-Header.jpg';
// // import pokeGroup from '../assets/pokeGroup.jpg';

// export const getPokemons = () => {
//   return fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex')
//     .then(res => ([res.ok, res.json()]))
//     .then(([ok, json]) => {
//       if(!ok) throw 'Unable to fetch pokemons';
//       return json;
//     })
//     .then(json => json.map(pokemon => ({
//       id: pokemon._id,
//       name: pokemon.pokemon,
//       url: pokemon.url_image || homeImage
//     })));
// };
