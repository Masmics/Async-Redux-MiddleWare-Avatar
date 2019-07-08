// import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import {
//   getPokemons,
//   getPokemonsLoading,
//   getPokemonsError
// } from '../selectors/pokemonsSelectors';
// import Pokemons from '../components/Pokemons';
// import { fetchPokemons } from '../actions/pokemonActions';

// class ZePokemons extends PureComponent {
//   static propTypes = {
//     fetch: PropTypes.func.isRequired,
//     pokemons: PropTypes.array.isRequired,
//     loading: PropTypes.bool.isRequired,
//     error: PropTypes.object
//   }
// // 
//   componentDidMount() {
//     this.props.fetch();
//   }

//   render() {
//     const { pokemons, loading, error } = this.props;
    
//     if(loading) return <h2>Loading...</h2>;
//     if(error) return <h2>Error! Unable to load.</h2>;
//     return <Pokemons pokemons={pokemons} />;
//   }
// }

// const mapStateToProps = state => ({
//   pokemons: getPokemons(state),
//   loading: getPokemonsLoading(state),
//   error: getPokemonsError(state)
// });

// const mapDispatchToProps = dispatch => ({
//   fetch() {
//     dispatch(fetchPokemons());
//   }
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ZePokemons);


// // {
// //   "allies":
// //   ["Gyatso"],
// //   "enemies":["Ozai"],
// //   "_id":"5cdf0769b6e02a467e3e766d",
// //   "photoUrl":"https://vignette.wikia.nocookie.net/avatar/images/2/21/Into_The_Inferno_Aang.png/revision/latest?cb=20131009060746",
// //   "name":"Aang (games)",
// //   "affiliation":" Air Nomads Team Avatar"
// // }

// // {
// //   "count":801,
// //   "page":1,
// //   "perPage":20,
// //   "sort":
// //     {"by":"_id",
// //     "direction":"asc"},
// //   "search":{},
// //   "results":
// //   [{
// //     "_id":"5cef3501ef6005a77cd4fd16",
// //     "pokemon":"venusaur",
// //     "id":3,
// //     "species_id":3,
// //     "height":20,
// //     "weight":1000,
// //     "base_experience":236,
// //     "type_1":"grass",
// //     "type_2":"poison",
// //     "attack":82,
// //     "defense":83,
// //     "hp":80,
// //     "special_attack":100,
// //     "special_defense":100,
// //     "speed":80,
// //     "ability_1":"overgrow",
// //     "ability_2":"NA",
// //     "ability_hidden":"chlorophyll",
// //     "color_1":"#78C850",
// //     "color_2":"#A040A0",
// //     "color_f":"#81A763",
// //     "egg_group_1":"monster",
// //     "egg_group_2":"plant",
// //     "url_image":"http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
// //     "generation_id":1,
// //     "evolves_from_species_id":"2",
// //     "evolution_chain_id":1,
// //     "shape_id":8,
// //     "shape":"quadruped",
// //     "pokebase":"venusaur",
// //     "pokedex":"http://www.pokemon.com/us/pokedex/venusaur"
// //   }]
